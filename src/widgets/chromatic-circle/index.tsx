"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import CopyHex from "@/components/copy-hex";
import WidgetContainer from "@/components/widget-container";
import { colors } from "@/utils/constants/colors";
import { cn } from "@/utils/functions/cn";

type Mode = "selector" | "two" | "three" | "analogue";

const COUNT = colors.length;
const RADIUS = 88;

const at = (index: number) => ((index % COUNT) + COUNT) % COUNT;

/** Which wheel positions each harmony highlights, starting from the picked color. */
const harmonies: Record<Mode, (index: number) => number[]> = {
  selector: (i) => [i],
  two: (i) => [i, at(i + 6)],
  three: (i) => [i, at(i + 4), at(i + 8)],
  analogue: (i) => [at(i - 1), i, at(i + 1)],
};

const spring = { type: "spring", stiffness: 260, damping: 26 } as const;

export default function ChromaticCircle({ type }: { type: Mode }) {
  const t = useTranslations("Widgets");
  const id = useId();
  const [selected, setSelected] = useState<number | undefined>(
    type === "selector" ? undefined : 0
  );
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const highlighted = selected === undefined ? [] : harmonies[type](selected);

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    const step =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? -1
          : 0;
    if (!step) return;
    event.preventDefault();
    const next = at(index + step);
    setSelected(next);
    buttons.current[next]?.focus();
  }

  const focusable = selected ?? 0;

  return (
    <WidgetContainer caption={t(`modes.${type}`)}>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-around">
        <div
          role="radiogroup"
          aria-label={t(`modes.${type}`)}
          className="relative size-60 shrink-0"
        >
          {colors.map((color, index) => {
            const angle = (index / COUNT) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * RADIUS;
            const y = Math.sin(angle) * RADIUS;
            const slot = highlighted.indexOf(index);
            const isChecked = selected === index;

            return (
              <motion.button
                key={color.hex}
                ref={(el) => {
                  buttons.current[index] = el;
                }}
                type="button"
                role="radio"
                aria-checked={isChecked}
                aria-label={`${color.name}, ${t(`colorTypes.${color.type}`)}`}
                tabIndex={index === focusable ? 0 : -1}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className="focus-ring absolute top-1/2 left-1/2 -mt-[18px] -ml-[18px] size-9 cursor-pointer rounded-full"
                initial={{ x: 0, y: 0, opacity: 0 }}
                whileInView={{ x, y, opacity: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ...spring, delay: index * 0.02 }}
              >
                <span
                  className="absolute inset-0 rounded-full shadow-lg shadow-black/40"
                  style={{ backgroundColor: color.hex }}
                />
                {slot !== -1 && (
                  <motion.span
                    layoutId={`${id}-ring-${slot}`}
                    transition={spring}
                    className={cn(
                      "absolute -inset-1 rounded-full border-2",
                      isChecked ? "border-fg" : "border-fg/50"
                    )}
                  />
                )}
              </motion.button>
            );
          })}

          {selected === undefined && (
            <p className="pointer-events-none absolute inset-0 grid place-items-center px-14 text-center text-xs leading-snug text-subtle">
              {t("pickColorHint")}
            </p>
          )}
        </div>

        <div className="w-full max-w-60" aria-live="polite">
          {type === "selector" ? (
            <SelectedColor index={selected} />
          ) : (
            <Palette indices={highlighted} />
          )}
        </div>
      </div>
    </WidgetContainer>
  );
}

function SelectedColor({ index }: { index?: number }) {
  const t = useTranslations("Widgets");

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={index ?? "empty"}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="flex min-h-28 flex-col items-center justify-center gap-1.5 text-center"
      >
        {index === undefined ? (
          <span className="text-sm text-muted">{t("pickColor")}</span>
        ) : (
          <>
            <span className="font-mono text-xs tracking-wide text-subtle uppercase">
              {t(`colorTypes.${colors[index].type}`)}
            </span>
            <span
              className="text-2xl font-semibold tracking-tight"
              style={{ color: colors[index].hex }}
            >
              {colors[index].name}
            </span>
            <CopyHex hex={colors[index].hex} />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

function Palette({ indices }: { indices: number[] }) {
  return (
    <ul className="flex flex-col overflow-hidden rounded-lg border border-border">
      {indices.map((index, slot) => (
        <motion.li
          key={slot}
          layout
          className="flex h-14 items-center justify-between gap-3 px-3"
          animate={{ backgroundColor: colors[index].hex }}
          transition={{ duration: 0.35 }}
        >
          <span className="rounded bg-black/35 px-1.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
            {colors[index].name}
          </span>
          <CopyHex hex={colors[index].hex} />
        </motion.li>
      ))}
    </ul>
  );
}
