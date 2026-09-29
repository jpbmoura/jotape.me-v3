import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { type Locale, routing } from "@/i18n/routing";
import Benefits from "./_components/benefits";
import ExampleBanner from "./_components/example-banner";
import Faq from "./_components/faq";
import FinalCta from "./_components/final-cta";
import Guarantee from "./_components/guarantee";
import Hero from "./_components/hero";
import Layers from "./_components/layers";
import LlamaFooter from "./_components/llama-footer";
import Navbar from "./_components/navbar";
import Pricing from "./_components/pricing";
import Testimonials from "./_components/testimonials";

const path = "/examples/lalhama";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/examples/lalhama">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "LaLhama.meta" });

  return {
    title: { absolute: t("title") },
    description: t("description"),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: `/en${path}`, "pt-BR": `/pt${path}`, "x-default": `/en${path}` },
    },
    openGraph: { title: t("title"), description: t("description") },
  };
}

export default async function LaLhamaPage({ params }: PageProps<"/[locale]/examples/lalhama">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);

  return (
    <>
      <ExampleBanner />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Layers />
        <Pricing />
        <Testimonials />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <LlamaFooter />
    </>
  );
}
