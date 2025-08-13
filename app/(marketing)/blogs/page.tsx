import BlogsHero from "./_components/blogs-hero";
import BlogCard from "./_components/blog-card";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
}

const getBlogPosts = (): BlogPost[] => {
  const postsDirectory = path.join(process.cwd(), "content/blogs");
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || "No Title",
      description: matterResult.data.description || "No Description",
    };
  });

  return allPostsData;
};

const BlogsPage = () => {
  const blogPosts = getBlogPosts();

  return (
    <div>
      <BlogsHero />
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} slug={post.slug} title={post.title} description={post.description} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;