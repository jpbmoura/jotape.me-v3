import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/utils/constants/site";
import { getBlogPostList } from "@/utils/functions/posts-helpers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const languages = (path: string) => ({
    languages: { en: `${siteUrl}/en${path}`, "pt-BR": `${siteUrl}/pt${path}` },
  });

  const posts = await getBlogPostList(routing.defaultLocale);

  return [
    { url: `${siteUrl}/en`, alternates: languages("") },
    { url: `${siteUrl}/en/blog`, alternates: languages("/blog") },
    ...posts.map((post) => ({
      url: `${siteUrl}/en/blog/${post.slug}`,
      lastModified: post.publishedOn,
      alternates: languages(`/blog/${post.slug}`),
    })),
  ];
}
