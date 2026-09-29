"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/utils/functions/cn";

export default function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn("flex items-center font-mono text-xs", className)}
    >
      {routing.locales.map((l) => (
        <Link
          key={l}
          // Same page, other language: /en/blog/foo <-> /pt/blog/foo
          href={pathname}
          locale={l}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "focus-ring rounded-md px-2 py-1.5 uppercase transition-colors hover:text-fg",
            l === locale ? "text-fg" : "text-subtle"
          )}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
