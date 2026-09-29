import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import PageContainer from "@/components/page-container";
import SiteShell from "@/components/site-shell";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  // Sits outside the (site) group (inside it, every page turns dynamic), so it brings its own chrome.
  return (
    <SiteShell>
      <PageContainer className="space-y-4 py-24">
        <p className="font-mono text-xs text-subtle">404</p>
        <h1 className="text-3xl font-semibold tracking-tight text-fg">{t("title")}</h1>
        <p>{t("description")}</p>
        <Link
          href="/"
          className="focus-ring group inline-flex items-center gap-1.5 rounded-md text-sm text-fg"
        >
          <ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-0.5" />
          {t("back")}
        </Link>
      </PageContainer>
    </SiteShell>
  );
}
