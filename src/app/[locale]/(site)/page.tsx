import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Link } from "@/i18n/navigation";
import PageContainer from "@/components/page-container";
import type { Locale } from "@/i18n/routing";
import { social } from "@/utils/constants/site";

const LUCIDA_URL = "https://lucidaexam.com";
const EDUZZ_URL = "https://www.eduzz.com/";

const linkClass =
  "focus-ring rounded-sm text-fg underline decoration-fg/30 underline-offset-4 transition-colors hover:decoration-fg";

const link = (href: string) => {
  function InlineLink(chunks: React.ReactNode) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {chunks}
      </a>
    );
  }
  return InlineLink;
};

function blogLink(chunks: React.ReactNode) {
  return (
    <Link href="/blog" className={linkClass}>
      {chunks}
    </Link>
  );
}

export default function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);
  const t = useTranslations("Home");

  return (
    <PageContainer className="space-y-6 leading-[1.8] text-pretty">
      <header className="mb-8">
        <h1 className="font-medium text-fg">{t("name")}</h1>
        <p className="text-subtle">{t("role")}</p>
      </header>

      <p>{t("intro")}</p>
      <p>
        {t.rich("work", {
          eduzz: link(EDUZZ_URL),
          lucida: link(LUCIDA_URL),
        })}
      </p>
      <p>{t("hobby")}</p>
      <p>{t.rich("writing", { blog: blogLink })}</p>

      <section aria-labelledby="contact" className="mt-16 space-y-2">
        <h2 id="contact" className="text-sm font-medium text-subtle">
          {t("contactTitle")}
        </h2>
        <p>
          {t.rich("contact", {
            linkedin: link(social.linkedin),
            github: link(social.github),
          })}
        </p>
      </section>
    </PageContainer>
  );
}
