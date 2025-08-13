import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/post";
import { Metadata } from "next";

export const revalidate = 60; // ISR every minute

export const metadata: Metadata = {
  title: "Blog | Private Property Finance",
  description:
    "Insights and articles on property finance, mortgages, development funding and more.",
};

async function getPosts(): Promise<Post[]> {
  const query = groq`*[_type == 'post' && defined(slug.current)]|order(publishedAt desc){
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body[0]{...,children[]{text}} // first block for excerpt attempt
  }`;
  const data = await client.fetch<any[]>(query);
  return data;
}

export default async function BlogsPage() {
  const posts = await getPosts();
  return (
    <main className="max-w-5xl mx-auto px-4 py-28">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      <div className="grid gap-10 md:grid-cols-2">
        {posts.map((post) => {
          const imageUrl = post.mainImage
            ? urlFor(post.mainImage).width(600).height(340).fit("crop").url()
            : undefined;
          // naive excerpt from first block children text
          const firstBlock: any = (post as any).body;
          const excerpt = Array.isArray(firstBlock?.children)
            ? firstBlock.children
                .map((c: any) => c.text)
                .join(" ")
                .slice(0, 140) + "..."
            : "";
          return (
            <article
              key={post._id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col"
            >
              {imageUrl && (
                <Link href={`/blogs/${post.slug?.current}`}>
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    width={600}
                    height={340}
                    className="w-full h-48 object-cover"
                  />
                </Link>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold mb-3">
                  <Link href={`/blogs/${post.slug?.current}`}>
                    {post.title}
                  </Link>
                </h2>
                {post.publishedAt && (
                  <time
                    className="text-sm text-gray-500 mb-3"
                    dateTime={post.publishedAt}
                  >
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </time>
                )}
                <p className="text-gray-700 mb-4 flex-1">{excerpt}</p>
                <div>
                  <Link
                    href={`/blogs/${post.slug?.current}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {posts.length === 0 && (
        <p className="text-gray-600">No articles yet. Check back soon.</p>
      )}
    </main>
  );
}
