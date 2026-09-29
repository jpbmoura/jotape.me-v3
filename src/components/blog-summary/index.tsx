import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { BlogPost } from "@/utils/functions/posts-helpers";
import { formatDate } from "@/utils/functions/format-date";

export default function BlogSummary({
  slug,
  title,
  abstract,
  publishedOn,
  readingTime,
}: BlogPost) {
  const t = useTranslations("Blog");
  const locale = useLocale();

  return (
    <article className="group relative -mx-4 rounded-lg px-4 py-5 transition-colors hover:bg-surface">
      <p className="mb-2 flex items-center gap-2 font-mono text-xs text-subtle">
        <time dateTime={publishedOn}>{formatDate(publishedOn, locale)}</time>
        <span aria-hidden="true">·</span>
        <span>{t("readingTime", { minutes: readingTime })}</span>
      </p>

      <h2 className="text-xl font-semibold tracking-tight text-balance text-fg">
        <Link
          href={`/blog/${slug}`}
          className="focus-ring rounded-sm after:absolute after:inset-0 after:rounded-lg"
        >
          {title}
        </Link>
      </h2>

      <p className="mt-2 line-clamp-3 leading-relaxed text-pretty">{abstract}</p>

      <span
        aria-hidden="true"
        className="mt-3 inline-flex items-center gap-1.5 text-sm text-fg/80 transition-colors group-hover:text-fg"
      >
        {t("readMore")}
        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </article>
  );
}
