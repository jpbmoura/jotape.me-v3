import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import MDXLayout from "@/components/mdx-layout";
import PageContainer from "@/components/page-container";
import PostHero from "@/components/post-hero";
import ReadingProgress from "@/components/reading-progress";
import TableOfContents from "@/components/table-of-contents";
import { routing, type Locale } from "@/i18n/routing";
import {
  getPostSlugs,
  loadBlogPost,
  postExists,
} from "@/utils/functions/posts-helpers";

type Props = PageProps<"/[locale]/blog/[slug]">;

export const dynamicParams = false;

export async function generateStaticParams() {
  const params = await Promise.all(
    routing.locales.map(async (locale) =>
      (await getPostSlugs(locale)).map((slug) => ({ locale, slug }))
    )
  );
  return params.flat();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!(await postExists(slug, locale as Locale))) return {};
  const { meta } = await loadBlogPost(slug, locale as Locale);

  return {
    title: meta.title,
    description: meta.abstract,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        "pt-BR": `/pt/blog/${slug}`,
        "x-default": `/en/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.abstract,
      publishedTime: meta.publishedOn,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug, ...rest } = await params;
  const locale = rest.locale as Locale;
  setRequestLocale(locale);

  if (!(await postExists(slug, locale))) notFound();

  const [{ meta, headings }, { default: Post }, t] = await Promise.all([
    loadBlogPost(slug, locale),
    import(`../../../../../posts/${locale}/${slug}.mdx`),
    getTranslations("Blog"),
  ]);

  return (
    <>
      <ReadingProgress />
      <PageContainer as="article" className="relative">
        <PostHero {...meta} />
        <TableOfContents headings={headings} label={t("toc")} />
        <MDXLayout>
          <Post />
        </MDXLayout>
      </PageContainer>
    </>
  );
}
