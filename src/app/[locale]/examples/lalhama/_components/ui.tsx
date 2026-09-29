import { cn } from "@/utils/functions/cn";

export const button = {
  primary:
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-lh-orange-700 px-6 py-3 font-display font-extrabold text-white transition-colors hover:bg-lh-orange-800",
  secondary:
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-display font-extrabold text-lh-sky-900 ring-1 ring-lh-sky-200 transition-colors hover:ring-lh-sky-500",
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className="font-display text-4xl font-black tracking-tight text-balance text-lh-sky-900 sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-pretty text-lh-sky-800">{subtitle}</p>}
    </div>
  );
}
