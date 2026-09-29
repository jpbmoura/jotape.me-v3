import { cn } from "@/utils/functions/cn";

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "prose prose-invert max-w-none",
        "prose-p:leading-[1.8] prose-p:text-muted prose-li:text-muted prose-li:marker:text-subtle",
        "prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-fg",
        "prose-h2:mt-14 prose-h2:text-2xl sm:prose-h2:text-3xl prose-h3:mt-10 prose-h3:text-xl sm:prose-h3:text-2xl",
        "prose-a:text-fg prose-a:underline-offset-4 prose-a:decoration-fg/30 hover:prose-a:decoration-fg",
        "prose-strong:text-fg prose-hr:border-border prose-blockquote:border-border prose-blockquote:text-muted",
        "prose-code:before:content-none prose-code:after:content-none"
      )}
    >
      {children}
    </div>
  );
}
