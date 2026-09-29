import { Moon, ShieldCheck, Truck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "./ui";

const icons = [Moon, Truck, ShieldCheck];

interface Perk {
  title: string;
  text: string;
}

export default async function Guarantee() {
  const t = await getTranslations("LaLhama.guarantee");
  const items = t.raw("items") as Perk[];

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[auto_1fr]">
      <div className="relative mx-auto grid size-64 place-items-center sm:size-72">
        <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute inset-0">
          <defs>
            <path id="lalhama-seal" d="M100 100m-82 0a82 82 0 1 1 164 0a82 82 0 1 1-164 0" />
          </defs>
          <circle cx="100" cy="100" r="98" fill="#0ea5e9" />
          {/* textLength stretches the ring text to exactly one lap (2π × 82) */}
          <text fontSize="10" fontWeight="800" fill="#fff" fontFamily="var(--font-nunito)">
            <textPath href="#lalhama-seal" textLength="515" lengthAdjust="spacing">
              {t("sealRing").toUpperCase()}
            </textPath>
          </text>
        </svg>
        <div className="relative grid size-40 place-items-center rounded-full bg-white text-center sm:size-44">
          <div>
            <p className="font-display text-6xl leading-none font-black text-lh-sky-900">100</p>
            <p className="mt-1 font-display text-sm font-extrabold text-lh-orange-700">{t("seal")}</p>
          </div>
        </div>
      </div>
      <div>
        <SectionHeading title={t("title")} subtitle={t("text")} />
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title}>
                <Icon aria-hidden="true" className="size-6 text-lh-sky-500" />
                <h3 className="mt-3 font-display text-lg font-extrabold text-lh-sky-900">{item.title}</h3>
                <p className="mt-1 text-sm text-pretty text-lh-sky-800">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
