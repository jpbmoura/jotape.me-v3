import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { button, SectionHeading } from "./ui";
import { cn } from "@/utils/functions/cn";

interface Plan {
  name: string;
  size: string;
  price: string;
  installments: string;
  features: string[];
}

// The middle plan is the one we want people to pick.
const POPULAR = 1;

export default async function Pricing() {
  const t = await getTranslations("LaLhama.pricing");
  const plans = t.raw("items") as Plan[];

  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} className="mx-auto text-center" />
      <ul className="mt-14 grid items-center gap-5 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const popular = i === POPULAR;
          return (
            <li
              key={plan.name}
              className={cn(
                "relative rounded-[2rem] p-8",
                popular ? "bg-lh-sky-900 text-lh-sky-100 lg:py-12" : "bg-white text-lh-sky-800 ring-1 ring-lh-sky-200"
              )}
            >
              {popular && (
                <p className="absolute -top-3.5 left-8 rounded-full bg-lh-orange-400 px-3 py-1 font-display text-xs font-black text-lh-orange-900">
                  {t("popular")}
                </p>
              )}
              <h3 className={cn("font-display text-2xl font-black", popular ? "text-white" : "text-lh-sky-900")}>
                {plan.name}
              </h3>
              <p className="mt-1 text-sm">{plan.size}</p>
              <p
                className={cn(
                  "mt-6 font-display text-5xl font-black tracking-tight",
                  popular ? "text-white" : "text-lh-sky-900"
                )}
              >
                {plan.price}
              </p>
              <p className="mt-1 text-sm">{plan.installments}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5">
                    <Check
                      aria-hidden="true"
                      className={cn("mt-0.5 size-5 shrink-0", popular ? "text-lh-sky-300" : "text-lh-sky-500")}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              {/* Fictional store: there's no checkout behind this */}
              <button type="button" className={cn(popular ? button.primary : button.secondary, "mt-8 w-full")}>
                {t("cta")}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 text-center text-sm text-lh-sky-800">{t("note")}</p>
    </section>
  );
}
