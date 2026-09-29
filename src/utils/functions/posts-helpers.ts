import fs from "fs/promises";
import path from "path";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import type { Locale } from "@/i18n/routing";

export type BlogPost = {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
  readingTime: number;
};

export type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

const POSTS_DIR = path.join(process.cwd(), "posts");
const WORDS_PER_MINUTE = 220;

export async function getBlogPostList(locale: Locale): Promise<BlogPost[]> {
  const fileNames = await fs.readdir(path.join(POSTS_DIR, locale));

  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const { meta } = await loadBlogPost(slug, locale);
        return meta;
      })
  );

  return posts.sort(
    (a, b) => +new Date(b.publishedOn) - +new Date(a.publishedOn)
  );
}

export async function getPostSlugs(locale: Locale) {
  const fileNames = await fs.readdir(path.join(POSTS_DIR, locale));
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export async function loadBlogPost(slug: string, locale: Locale) {
  const raw = await fs.readFile(
    path.join(POSTS_DIR, locale, `${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(raw);

  const meta: BlogPost = {
    slug,
    title: data.title,
    abstract: data.abstract,
    publishedOn: new Date(data.publishedOn).toISOString(),
    readingTime: getReadingTime(content),
  };

  return { meta, headings: getHeadings(content) };
}

export async function postExists(slug: string, locale: Locale) {
  if (!/^[a-z0-9-]+$/.test(slug)) return false;
  const slugs = await getPostSlugs(locale);
  return slugs.includes(slug);
}

function stripCode(content: string) {
  return content.replace(/```[\s\S]*?```/g, "");
}

function getReadingTime(content: string) {
  const text = stripCode(content).replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

// Mirrors the ids rehype-slug gives the rendered headings.
function getHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger();

  return stripCode(content)
    .split("\n")
    .map((line) => /^(#{2,3})\s+(.+)$/.exec(line))
    .filter((match): match is RegExpExecArray => match !== null)
    .map(([, hashes, rawText]) => {
      const text = rawText
        .replace(/[*_`]/g, "")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .trim();
      return {
        id: slugger.slug(text),
        text,
        level: hashes.length as 2 | 3,
      };
    });
}
