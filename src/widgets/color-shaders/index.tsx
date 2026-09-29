"use client";

import { motion } from "motion/react";
import WidgetContainer from "@/components/widget-container";
import { readableOn } from "@/utils/constants/colors";

// Tailwind's sky and orange scales, 100 → 900.
const scales = {
  sky: ["#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e"],
  orange: ["#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12"],
};

const EMPTY = "#2a2a2a";

/** Which shades are revealed at each stage of building the scale. */
const visibleAt: Record<number, (step: number) => boolean> = {
  1: (step) => step === 4,
  2: (step) => step === 0 || step === 4 || step === 8,
  3: () => true,
};

interface ColorShadersProps {
  color: keyof typeof scales;
  stage: 1 | 2 | 3;
}

export default function ColorShaders({ color, stage }: ColorShadersProps) {
  const isVisible = visibleAt[stage] ?? visibleAt[3];

  return (
    <WidgetContainer className="p-3 sm:p-4">
      <ol className="grid grid-cols-9 gap-1 sm:gap-1.5">
        {scales[color].map((hex, step) => {
          const shown = isVisible(step);
          const bg = shown ? hex : EMPTY;

          return (
            <motion.li
              key={hex}
              className="flex h-12 items-end justify-center rounded-md pb-1.5 font-mono text-[10px] font-medium sm:h-20 sm:text-xs"
              style={{ backgroundColor: bg, color: shown ? readableOn(hex) : "#71717a" }}
              initial={shown ? { opacity: 0, y: 8 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: step * 0.04, duration: 0.3 }}
              aria-label={`${color} ${(step + 1) * 100}${shown ? ` ${hex}` : ""}`}
            >
              {(step + 1) * 100}
            </motion.li>
          );
        })}
      </ol>
    </WidgetContainer>
  );
}
