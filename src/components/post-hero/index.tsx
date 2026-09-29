import { ArrowLeft } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/utils/functions/format-date";

interface PostHeroProps {
  title: string;
  abstract: string;
  publishedOn: string;
  readingTime: number;
}

export default async function PostHero({
  title,
  abstract,
  publishedOn,
  readingTime,
}: PostHeroProps) {
  const t = await getTranslations("Blog");
  const locale = await getLocale();

  return (
    <header className="mb-12 space-y-6">
      <Link
        href="/blog"
        className="focus-ring group -ml-1 inline-flex items-center gap-1.5 rounded-md px-1 text-sm text-subtle transition-colors hover:text-fg"
      >
        <ArrowLeft
          aria-hidden="true"
          className="size-4 transition-transform group-hover:-translate-x-0.5"
        />
        {t("back")}
      </Link>

      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl">
          {title}
        </h1>
        <p className="text-lg leading-relaxed text-pretty">{abstract}</p>
        <p className="flex items-center gap-2 font-mono text-xs text-subtle">
          <time dateTime={publishedOn}>{formatDate(publishedOn, locale)}</time>
          <span aria-hidden="true">·</span>
          <span>{t("readingTime", { minutes: readingTime })}</span>
        </p>
      </div>
    </header>
  );
}
