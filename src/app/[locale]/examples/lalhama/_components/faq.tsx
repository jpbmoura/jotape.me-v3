import { Plus } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "./ui";

interface Question {
  q: string;
  a: string;
}

export default async function Faq() {
  const t = await getTranslations("LaLhama.faq");
  const items = t.raw("items") as Question[];

  return (
    <section id="faq" className="scroll-mt-20 bg-lh-sky-100">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <SectionHeading title={t("title")} className="mx-auto text-center" />
        <div className="mt-12 space-y-3">
          {items.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-white ring-1 ring-lh-sky-200 open:ring-lh-sky-300">
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 font-display text-lg font-extrabold text-lh-sky-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-lh-sky-100 text-lh-sky-700 transition-transform group-open:rotate-45 group-open:bg-lh-orange-100 group-open:text-lh-orange-700">
                  <Plus aria-hidden="true" className="size-4" />
                </span>
              </summary>
              <p className="-mt-1 px-5 pb-5 text-pretty text-lh-sky-800">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
