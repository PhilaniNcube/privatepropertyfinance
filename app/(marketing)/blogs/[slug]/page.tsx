import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PortableTextRenderer } from "@/components/portable-text";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Relaxed param typing to align with Next.js internal PageProps checks
type BlogPageParams = { slug: string };

export const revalidate = 60;

const postQuery = groq`*[_type=='post' && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  body,
  'author': author-> { _id, name },
  'categories': categories[]-> { _id, title }
}`;

const allSlugsQuery = groq`*[_type=='post' && defined(slug.current)]{ 'slug': slug.current }`;

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: BlogPageParams;
}): Promise<Metadata> {
  const post = await client.fetch(postQuery, { slug: params?.slug });
  if (!post) return { title: "Post not found | Private Property Finance" };
  return {
    title: `${post.title} | Private Property Finance`,
    description:
      post.body?.[0]?.children
        ?.map((c: any) => c.text)
        .join(" ")
        .slice(0, 155) || "Article",
    openGraph: {
      title: post.title,
      description:
        post.body?.[0]?.children
          ?.map((c: any) => c.text)
          .join(" ")
          .slice(0, 155) || undefined,
      images: post.mainImage
        ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }]
        : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: BlogPageParams;
}) {
  const post = await client.fetch(postQuery, { slug: params?.slug });
  if (!post) return notFound();
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(600).fit("crop").url()
    : undefined;
  return (
    <main className="max-w-3xl mx-auto px-4 py-28">
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.publishedAt && (
          <time
            className="text-sm text-gray-500 mb-6 block"
            dateTime={post.publishedAt}
          >
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
        )}
        {imageUrl && (
          <div className="mb-8">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        <div className="prose max-w-none">
          <PortableTextRenderer value={post.body} />
        </div>
      </article>
    </main>
  );
}
