"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { readableOn } from "@/utils/constants/colors";

/** A hex pill that copies itself to the clipboard. */
export default function CopyHex({ hex }: { hex: string }) {
  const t = useTranslations("Widgets");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1400);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <button
      type="button"
      aria-label={t("copyHex", { hex })}
      onClick={() =>
        navigator.clipboard.writeText(hex).then(() => setCopied(true), () => {})
      }
      className="focus-ring relative inline-grid h-6 ring-1 ring-black/15 min-w-20 place-items-center overflow-hidden rounded-md px-2 font-mono text-xs font-medium transition-transform active:scale-95"
      style={{ backgroundColor: hex, color: readableOn(hex) }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={copied ? "copied" : "hex"}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {copied ? t("copied") : hex}
        </motion.span>
      </AnimatePresence>
      <span aria-live="polite" className="sr-only">
        {copied ? t("copied") : ""}
      </span>
    </button>
  );
}
