import { CircleAlert, Info, TriangleAlert } from "lucide-react";
import { cn } from "@/utils/functions/cn";

interface ArticleNoteProps {
  type?: "info" | "warning" | "danger";
  children: React.ReactNode;
}

const variants = {
  info: { icon: Info, className: "border-sky-500/60 bg-sky-500/[0.06]", iconClass: "text-sky-400" },
  warning: { icon: TriangleAlert, className: "border-amber-500/60 bg-amber-500/[0.06]", iconClass: "text-amber-400" },
  danger: { icon: CircleAlert, className: "border-red-500/60 bg-red-500/[0.06]", iconClass: "text-red-400" },
};

export default function ArticleNote({ type = "info", children }: ArticleNoteProps) {
  const { icon: Icon, className, iconClass } = variants[type];

  return (
    <aside
      role="note"
      className={cn(
        "not-prose my-8 flex gap-3 rounded-r-md border-l-2 px-4 py-3 text-[0.95rem] leading-relaxed text-muted",
        "[&_a]:text-fg [&_a]:underline [&_a]:underline-offset-4 [&_p+p]:mt-3 [&_strong]:text-fg",
        className
      )}
    >
      <Icon aria-hidden="true" className={cn("mt-1 size-4 shrink-0", iconClass)} />
      <div className="min-w-0">{children}</div>
    </aside>
  );
}
