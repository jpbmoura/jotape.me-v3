import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "@/components/locale-switcher";
import { Link } from "@/i18n/navigation";

export default async function ExampleBanner() {
  const t = await getTranslations("LaLhama.banner");

  return (
    <div className="bg-background text-xs text-muted [color-scheme:dark]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 sm:px-6">
        <Link
          href="/blog/a-humble-guide-to-color-palette"
          className="focus-ring group inline-flex min-w-0 items-center gap-1.5 rounded-md py-1.5 hover:text-fg"
        >
          <ArrowLeft aria-hidden="true" className="size-3.5 shrink-0 transition-transform group-hover:-translate-x-0.5" />
          <span className="truncate">
            <span className="hidden sm:inline">{t("label")}: </span>
            <span className="text-fg">{t("post")}</span>
          </span>
        </Link>
        <LocaleSwitcher className="-mr-2 shrink-0" />
      </div>
    </div>
  );
}
