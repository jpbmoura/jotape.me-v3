"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Heading } from "@/utils/functions/posts-helpers";
import { cn } from "@/utils/functions/cn";

interface TableOfContentsProps {
  headings: Heading[];
  label: string;
}

function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState<string | undefined>();

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function Links({ headings, active }: { headings: Heading[]; active?: string }) {
  return (
    <ol className="space-y-1 text-sm">
      {headings.map(({ id, text, level }) => (
        <li key={id} className={cn(level === 3 && "pl-3")}>
          <a
            href={`#${id}`}
            aria-current={active === id ? "location" : undefined}
            className={cn(
              "focus-ring -ml-px block border-l py-1 pl-3 leading-snug transition-colors hover:text-fg",
              active === id
                ? "border-fg text-fg"
                : "border-transparent text-subtle"
            )}
          >
            {text}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function TableOfContents({ headings, label }: TableOfContentsProps) {
  const [ids] = useState(() => headings.map((h) => h.id));
  const active = useActiveHeading(ids);

  if (headings.length < 2) return null;

  return (
    <>
      <details className="group mb-10 rounded-lg border border-border bg-surface xl:hidden">
        <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-lg px-4 py-3 text-sm text-fg [&::-webkit-details-marker]:hidden">
          {label}
          <ChevronDown
            aria-hidden="true"
            className="size-4 text-subtle transition-transform group-open:rotate-180"
          />
        </summary>
        <nav aria-label={label} className="border-t border-border px-4 py-3">
          <Links headings={headings} active={active} />
        </nav>
      </details>

      <div className="absolute top-0 left-full ml-12 hidden h-full w-56 xl:block">
        <nav aria-label={label} className="sticky top-24">
          <p className="mb-3 font-mono text-xs tracking-wide text-subtle uppercase">
            {label}
          </p>
          <div className="border-l border-border">
            <Links headings={headings} active={active} />
          </div>
        </nav>
      </div>
    </>
  );
}
