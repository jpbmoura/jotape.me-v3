"use client";

import { Suspense, use, useState } from "react";
import { browser } from "react-dom";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import WidgetContainer from "@/components/widget-container";

const STORAGE_KEY = "jotape:use-browser-demo";

export default function BrowserOnlyDemo() {
  const t = useTranslations("Widgets.browserDemo");

  return (
    <WidgetContainer caption={t("caption")}>
      <Suspense fallback={<Skeleton label={t("loading")} />}>
        <Counter />
      </Suspense>
    </WidgetContainer>
  );
}

function Counter() {
  use(browser("reads localStorage"));

  const t = useTranslations("Widgets.browserDemo");
  const [count, setCount] = useState(() => Number(localStorage.getItem(STORAGE_KEY) ?? 0));

  function save(value: number) {
    localStorage.setItem(STORAGE_KEY, String(value));
    setCount(value);
  }

  return (
    <div className="flex h-28 flex-col items-center justify-center gap-3 text-center">
      <p className="text-sm text-muted">{t("label")}</p>
      <motion.span
        key={count}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="font-mono text-3xl font-semibold text-fg tabular-nums"
      >
        {count}
      </motion.span>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => save(count + 1)}
          className="focus-ring cursor-pointer rounded-md border border-border bg-surface-hover px-3 py-1 text-xs text-fg transition-colors hover:border-fg/40"
        >
          {t("increment")}
        </button>
        <button
          type="button"
          onClick={() => save(0)}
          className="focus-ring cursor-pointer rounded-md border border-border px-3 py-1 text-xs text-subtle transition-colors hover:text-muted"
        >
          {t("reset")}
        </button>
      </div>
    </div>
  );
}

function Skeleton({ label }: { label: string }) {
  return (
    <div role="status" aria-label={label} className="flex h-28 flex-col items-center justify-center gap-3">
      <span className="h-3 w-48 animate-pulse rounded bg-fg/10" />
      <span className="h-8 w-10 animate-pulse rounded bg-fg/15" />
      <span className="h-6 w-32 animate-pulse rounded bg-fg/10" />
    </div>
  );
}
