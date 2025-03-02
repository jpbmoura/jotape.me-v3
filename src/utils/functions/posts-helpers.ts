import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

type BlogPost = {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string; // ou Date, dependendo do formato
};

export async function getBlogPostList(): Promise<BlogPost[]> {
  const fileNames = await readDirectory("/posts");

  const blogPosts = [];

  for (const fileName of fileNames) {
    const rawContent = await readFile(`/posts/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      ...(frontmatter as Omit<BlogPost, "slug">),
      slug: fileName.replace(".mdx", ""),
    });
  }

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export async function loadBlogPost(slug: unknown) {
  const rawContent = await readFile(`/posts/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
