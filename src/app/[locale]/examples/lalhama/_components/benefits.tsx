import { Package, ShieldCheck, Snowflake, Waves } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "./ui";

const icons = [Snowflake, Waves, ShieldCheck, Package];

interface Benefit {
  title: string;
  text: string;
}

export default async function Benefits() {
  const t = await getTranslations("LaLhama.benefits");
  const items = t.raw("items") as Benefit[];

  return (
    <section id="benefits" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />
      <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {items.map((item, i) => {
          const Icon = icons[i];
          return (
            <li key={item.title} className="border-t border-lh-sky-200 pt-6">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-extrabold text-lh-sky-900">
                <Icon aria-hidden="true" className="size-5 text-lh-sky-500" />
                {item.title}
              </h3>
              <p className="mt-2 max-w-md text-pretty text-lh-sky-800">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
