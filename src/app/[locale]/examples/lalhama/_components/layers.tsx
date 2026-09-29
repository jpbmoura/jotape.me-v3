import { getTranslations } from "next-intl/server";
import { MattressLayers } from "./illustrations";
import { SectionHeading } from "./ui";

interface Layer {
  name: string;
  text: string;
}

export default async function Layers() {
  const t = await getTranslations("LaLhama.layers");
  const items = t.raw("items") as Layer[];

  return (
    <section id="layers" className="scroll-mt-20 bg-lh-sky-100">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <MattressLayers className="order-last mx-auto w-full max-w-md lg:order-first" />
        <div>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
          <ol className="mt-10 space-y-6">
            {items.map((item, i) => (
              <li key={item.name} className="flex gap-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-lh-orange-700 font-display text-sm font-black text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-lh-sky-900">{item.name}</h3>
                  <p className="mt-1 text-pretty text-lh-sky-800">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
