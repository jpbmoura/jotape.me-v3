import Reveal from "@/components/reveal";
import { cn } from "@/utils/functions/cn";

interface WidgetContainerProps {
  caption?: string;
  className?: string;
  children: React.ReactNode;
}

export default function WidgetContainer({
  caption,
  className,
  children,
}: WidgetContainerProps) {
  return (
    <Reveal className="not-prose my-8">
      <figure>
        <div
          className={cn(
            "w-full rounded-lg border border-border bg-surface p-4 sm:p-6",
            className
          )}
        >
          {children}
        </div>
        {caption && (
          <figcaption className="mt-2 text-center font-mono text-xs text-subtle">
            {caption}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
