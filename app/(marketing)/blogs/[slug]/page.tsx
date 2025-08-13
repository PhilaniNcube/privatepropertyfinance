import HeroSection from "./_components/hero-section";
import MainContent from "./_components/main-content";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface BlogPostProps {
  params: { slug: string };
}

interface BlogPostData {
  title: string;
  description: string;
  contentHtml: string;
}

const getBlogPostData = async (slug: string): Promise<BlogPostData> => {
  const fullPath = path.join(process.cwd(), `content/blogs/${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    title: matterResult.data.title || "No Title",
    description: matterResult.data.description || "No Description",
    contentHtml,
  };
};

const BlogPostPage = async ({ params }: BlogPostProps) => {
  const blogPost = await getBlogPostData(params.slug);

  return (
    <div>
      <HeroSection title={blogPost.title} description={blogPost.description} />
      <MainContent contentHtml={blogPost.contentHtml} />
    </div>
  );
};

export default BlogPostPage;