"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import WidgetContainer from "@/components/widget-container";
import { cn } from "@/utils/functions/cn";

const hues = [
  { name: "red", hex: "#ef4444" },
  { name: "yellow", hex: "#eab308" },
  { name: "green", hex: "#22c55e" },
  { name: "blue", hex: "#3b82f6" },
  { name: "violet", hex: "#8b5cf6" },
  { name: "pink", hex: "#ec4899" },
] as const;

const steps = [1, 0.8, 0.6, 0.4, 0.2, 0];

const cell = "h-10 w-full rounded-md md:h-8";

export default function ColorProperties() {
  const t = useTranslations("Widgets");
  const [selected, setSelected] = useState<(typeof hues)[number] | null>(null);

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    const step = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (index + step + hues.length) % hues.length;
    setSelected(hues[next]);
    (event.currentTarget.parentElement?.children[next] as HTMLElement | undefined)?.focus();
  }

  const focusable = selected ? hues.indexOf(selected) : 0;

  return (
    <WidgetContainer>
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        <Column label={t("hue")}>
          <div role="radiogroup" aria-label={t("hue")} className="flex flex-col gap-1.5">
            {hues.map((hue, index) => (
              <motion.button
                key={hue.name}
                type="button"
                role="radio"
                aria-checked={selected === hue}
                aria-label={t(`colorNames.${hue.name}`)}
                tabIndex={index === focusable ? 0 : -1}
                onClick={() => setSelected(hue)}
                onKeyDown={(event) => onKeyDown(event, index)}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  cell,
                  "focus-ring relative cursor-pointer transition-opacity",
                  selected && selected !== hue && "opacity-50 hover:opacity-80"
                )}
                style={{ backgroundColor: hue.hex }}
              >
                {selected === hue && (
                  <motion.span
                    layoutId="hue-ring"
                    className="absolute -inset-1 rounded-lg border-2 border-fg"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </Column>

        <Ramp label={t("brightness")} hex={selected?.hex} filter={(v) => `brightness(${v})`} />
        <Ramp label={t("saturation")} hex={selected?.hex} filter={(v) => `saturate(${v})`} />
      </div>

      {!selected && (
        <p className="mt-4 text-center text-xs text-subtle">{t("pickHue")}</p>
      )}
    </WidgetContainer>
  );
}

function Column({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-center font-mono text-xs tracking-wide text-subtle uppercase">
        {label}
      </span>
      {children}
    </div>
  );
}

function Ramp({ label, hex, filter }: { label: string; hex?: string; filter: (v: number) => string }) {
  return (
    <Column label={label}>
      <ol className="flex flex-col gap-1.5" aria-label={label}>
        {steps.map((value, index) => (
          <motion.li
            key={value}
            className={cell}
            aria-label={`${Math.round(value * 100)}%`}
            animate={{
              backgroundColor: hex ?? "#242424",
              filter: hex ? filter(value) : "none",
            }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
          />
        ))}
      </ol>
    </Column>
  );
}
