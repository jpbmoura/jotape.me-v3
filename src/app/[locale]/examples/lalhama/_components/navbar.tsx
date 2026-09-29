import { getTranslations } from "next-intl/server";
import { LlamaMark } from "./illustrations";
import { button } from "./ui";
import { cn } from "@/utils/functions/cn";

const links = ["benefits", "layers", "pricing", "faq"] as const;

export default async function Navbar() {
  const t = await getTranslations("LaLhama.nav");

  return (
    <header className="sticky top-0 z-40 border-b border-lh-sky-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" aria-label={t("home")} className="focus-ring flex items-center gap-2 rounded-full">
          <LlamaMark className="size-9" />
          <span className="font-display text-xl font-black tracking-tight text-lh-sky-900">LaLhama</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-semibold text-lh-sky-800 md:flex">
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="focus-ring rounded-md transition-colors hover:text-lh-orange-700">
                {t(id)}
              </a>
            </li>
          ))}
        </ul>
        <a href="#pricing" className={cn(button.primary, "px-4 py-2 text-sm")}>
          {t("cta")}
        </a>
      </nav>
    </header>
  );
}
