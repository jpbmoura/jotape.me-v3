"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/functions/cn";

export default function CopyButton({ text, className }: { text: string; className?: string }) {
  const t = useTranslations("Code");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure context, permissions); nothing to do.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? t("copied") : t("copy")}
      className={cn(
        "focus-ring grid size-7 place-items-center rounded-md text-subtle transition-colors hover:bg-surface-hover hover:text-fg",
        className
      )}
    >
      {copied ? <Check className="size-3.5 text-fg" /> : <Copy className="size-3.5" />}
      <span aria-live="polite" className="sr-only">
        {copied ? t("copied") : ""}
      </span>
    </button>
  );
}
