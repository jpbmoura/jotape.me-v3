import { getTranslations } from "next-intl/server";
import { LlamaMark } from "./illustrations";

// The two scales from the color palette post, 100 → 900.
const palette = {
  sky: ["#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e"],
  orange: ["#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12"],
};

export default async function LlamaFooter() {
  const t = await getTranslations("LaLhama.footer");

  return (
    <footer className="bg-lh-sky-900 text-lh-sky-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <LlamaMark className="size-9" />
            <span className="font-display text-xl font-black text-white">LaLhama</span>
          </div>
          <p className="mt-3 font-display text-lg font-bold">{t("tagline")}</p>
          <p className="mt-6 max-w-sm text-sm text-lh-sky-200">{t("disclaimer")}</p>
        </div>
        <div className="md:justify-self-end">
          <p className="font-display text-sm font-extrabold text-lh-sky-200">{t("palette")}</p>
          <div className="mt-3 space-y-1.5">
            {Object.entries(palette).map(([name, shades]) => (
              <ul key={name} aria-label={name} className="flex gap-1.5">
                {shades.map((hex, i) => (
                  <li
                    key={hex}
                    title={`${name}-${(i + 1) * 100} ${hex}`}
                    className="size-6 rounded-md ring-1 ring-white/10 sm:size-7"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
