import { getTranslations } from "next-intl/server";
import { button } from "./ui";

export default async function FinalCta() {
  const t = await getTranslations("LaLhama.finalCta");

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-lh-sky-700 px-6 py-16 text-center sm:px-12 sm:py-20">
        <div aria-hidden="true">
          <div className="absolute -top-24 -left-16 size-72 rounded-full bg-lh-sky-600" />
          <div className="absolute -right-10 -bottom-28 size-80 rounded-full bg-lh-sky-800" />
        </div>
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-black tracking-tight text-balance text-white sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-lh-sky-100">{t("text")}</p>
          <a href="#pricing" className={`${button.primary} mt-8`}>
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
