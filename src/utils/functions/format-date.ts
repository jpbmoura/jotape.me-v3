import type { Locale } from "@/i18n/routing";

const intlLocale: Record<Locale, string> = { en: "en-US", pt: "pt-BR" };

export function formatDate(date: string | Date, locale: Locale) {
  return new Intl.DateTimeFormat(intlLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
