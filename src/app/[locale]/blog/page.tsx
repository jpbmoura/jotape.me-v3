import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import BlogSummary from "@/components/blog-summary";
import PageContainer from "@/components/page-container";
import type { Locale } from "@/i18n/routing";
import { getBlogPostList } from "@/utils/functions/posts-helpers";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "Metadata" });

  return {
    title: t("blogTitle"),
    description: t("blogDescription"),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { en: "/en/blog", "pt-BR": "/pt/blog", "x-default": "/en/blog" },
    },
  };
}

export default async function BlogPage({ params }: PageProps<"/[locale]/blog">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("Blog");
  const posts = await getBlogPostList(locale);

  return (
    <PageContainer>
      <Link
        href="/"
        className="focus-ring group -ml-1 mb-6 inline-flex items-center gap-1.5 rounded-md px-1 text-sm text-subtle transition-colors hover:text-fg"
      >
        <ArrowLeft
          aria-hidden="true"
          className="size-4 transition-transform group-hover:-translate-x-0.5"
        />
        {t("home")}
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-3 leading-relaxed text-pretty">{t("subtitle")}</p>

      <div className="mt-10 flex flex-col gap-2">
        {posts.length === 0 && <p className="text-subtle">{t("empty")}</p>}
        {posts.map((post) => (
          <BlogSummary key={post.slug} {...post} />
        ))}
      </div>
    </PageContainer>
  );
}
