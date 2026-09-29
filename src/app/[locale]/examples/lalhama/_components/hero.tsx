import { getTranslations } from "next-intl/server";
import { SleepingLlama } from "./illustrations";
import { button } from "./ui";

export default async function Hero() {
  const t = await getTranslations("LaLhama.hero");

  return (
    <section id="top" className="overflow-hidden bg-lh-sky-100">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pt-20 lg:pb-28">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="font-display text-5xl leading-[1.02] font-black tracking-tight text-balance text-lh-sky-900 sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-lh-sky-800">{t("subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className={button.primary}>
              {t("primary")}
            </a>
            <a href="#layers" className={button.secondary}>
              {t("secondary")}
            </a>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in-95 duration-1000">
          <div className="absolute inset-[10%] rounded-full bg-lh-sky-200" aria-hidden="true" />
          <SleepingLlama className="relative w-full motion-safe:animate-[float_6s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
