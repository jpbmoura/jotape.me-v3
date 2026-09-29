"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Moon, Pause, Play, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import WidgetContainer from "@/components/widget-container";
import { cn } from "@/utils/functions/cn";

type Slot = "none" | "skeleton" | "light" | "dark";
type Tone = "ok" | "warn" | "error";
type Frame = { slot: Slot; tone: Tone };

const approaches = {
  typeofWindow: {
    label: "typeof window",
    frames: [
      { slot: "light", tone: "ok" },
      { slot: "dark", tone: "error" },
      { slot: "dark", tone: "warn" },
    ],
  },
  mounted: {
    label: "mounted",
    frames: [
      { slot: "none", tone: "ok" },
      { slot: "none", tone: "ok" },
      { slot: "dark", tone: "warn" },
    ],
  },
  ssrFalse: {
    label: "ssr: false",
    frames: [
      { slot: "none", tone: "ok" },
      { slot: "none", tone: "ok" },
      { slot: "dark", tone: "warn" },
    ],
  },
  syncExternalStore: {
    label: "useSyncExternalStore",
    frames: [
      { slot: "light", tone: "ok" },
      { slot: "light", tone: "ok" },
      { slot: "dark", tone: "warn" },
    ],
  },
  useBrowser: {
    label: "use(browser())",
    frames: [
      { slot: "skeleton", tone: "ok" },
      { slot: "skeleton", tone: "ok" },
      { slot: "dark", tone: "ok" },
    ],
  },
  fallbackNull: {
    label: "fallback={null}",
    frames: [
      { slot: "none", tone: "ok" },
      { slot: "none", tone: "ok" },
      { slot: "dark", tone: "warn" },
    ],
  },
  fallbackSkeleton: {
    label: "fallback={<Skeleton />}",
    frames: [
      { slot: "skeleton", tone: "ok" },
      { slot: "skeleton", tone: "ok" },
      { slot: "dark", tone: "ok" },
    ],
  },
} satisfies Record<string, { label: string; frames: [Frame, Frame, Frame] }>;

type ApproachKey = keyof typeof approaches;

const modes: Record<"approaches" | "fallback", ApproachKey[]> = {
  approaches: ["typeofWindow", "mounted", "ssrFalse", "syncExternalStore", "useBrowser"],
  fallback: ["fallbackNull", "fallbackSkeleton"],
};

const stages = ["server", "hydrate", "after"] as const;

const tones: Record<Tone, string> = {
  ok: "border-green-500/50 bg-green-500/[0.06] text-green-300",
  warn: "border-amber-500/50 bg-amber-500/[0.06] text-amber-300",
  error: "border-red-500/50 bg-red-500/[0.06] text-red-300",
};

interface HydrationTimelineProps {
  mode?: keyof typeof modes;
}

export default function HydrationTimeline({ mode = "approaches" }: HydrationTimelineProps) {
  const t = useTranslations("Widgets.hydration");
  const keys = modes[mode];
  const [approach, setApproach] = useState<ApproachKey>(keys[0]);
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(() => {
      const next = stage + 1;
      setStage(next);
      if (next === stages.length - 1) setPlaying(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, [playing, stage]);

  function pick(key: ApproachKey) {
    setApproach(key);
    setStage(0);
    setPlaying(false);
  }

  function play() {
    if (playing) return setPlaying(false);
    if (stage === stages.length - 1) setStage(0);
    setPlaying(true);
  }

  function onKeyDown<T>(event: React.KeyboardEvent, list: readonly T[], index: number, select: (item: T) => void) {
    const step = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (index + step + list.length) % list.length;
    select(list[next]);
    (event.currentTarget.parentElement?.children[next] as HTMLElement | undefined)?.focus();
  }

  const frames = approaches[approach].frames;
  const frame = frames[stage];
  const prev = stage > 0 ? frames[stage - 1] : null;
  const jumped = prev?.slot === "none" && frame.slot !== "none";
  const flashed = prev?.slot === "light" && frame.slot === "dark";

  return (
    <WidgetContainer caption={t(`caption.${mode}`)}>
      <div
        role="radiogroup"
        aria-label={t("approach")}
        className="mb-5 flex flex-wrap justify-center gap-1.5"
      >
        {keys.map((key, index) => (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={approach === key}
            tabIndex={approach === key ? 0 : -1}
            onClick={() => pick(key)}
            onKeyDown={(event) => onKeyDown(event, keys, index, pick)}
            className={cn(
              "focus-ring cursor-pointer rounded-md border px-2.5 py-1 font-mono text-xs transition-colors",
              approach === key
                ? "border-fg/40 bg-surface-hover text-fg"
                : "border-border text-subtle hover:text-muted"
            )}
          >
            {approaches[key].label}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-md overflow-hidden rounded-lg border border-border bg-background">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="size-2 rounded-full bg-red-400/70" />
          <span className="size-2 rounded-full bg-amber-400/70" />
          <span className="size-2 rounded-full bg-green-400/70" />
          <span className="ml-2 truncate font-mono text-[0.7rem] text-subtle">
            {t(`where.${stages[stage]}`)}
          </span>
        </div>

        <motion.div layout className="relative flex flex-col gap-3 p-4">
          <ThemeSlot slot={frame.slot} label={t("theme")} light={t("light")} dark={t("dark")} />

          <motion.div layout transition={{ type: "spring", stiffness: 260, damping: 24 }} className="flex flex-col gap-2">
            <span className="h-3 w-3/4 rounded bg-fg/15" />
            <span className="h-2 w-full rounded bg-fg/10" />
            <span className="h-2 w-5/6 rounded bg-fg/10" />
            <span className="h-2 w-2/3 rounded bg-fg/10" />
          </motion.div>

          {(jumped || flashed) && (
            <motion.span
              key={`${approach}-${stage}`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-3 right-3 rounded bg-amber-500/90 px-1.5 py-0.5 font-mono text-[0.65rem] font-semibold text-black"
            >
              {jumped ? t("jumped") : t("flashed")}
            </motion.span>
          )}
        </motion.div>
      </div>

      <div className="mx-auto mt-5 flex max-w-md items-center gap-3">
        <button
          type="button"
          onClick={play}
          aria-label={playing ? t("pause") : t("play")}
          className="focus-ring grid size-8 shrink-0 cursor-pointer place-items-center rounded-full border border-border text-muted transition-colors hover:text-fg"
        >
          {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
        </button>

        <div role="radiogroup" aria-label={t("stage")} className="grid flex-1 grid-cols-3 gap-1.5">
          {stages.map((name, index) => (
            <button
              key={name}
              type="button"
              role="radio"
              aria-checked={stage === index}
              tabIndex={stage === index ? 0 : -1}
              onClick={() => {
                setPlaying(false);
                setStage(index);
              }}
              onKeyDown={(event) =>
                onKeyDown(event, [0, 1, 2], index, (i) => {
                  setPlaying(false);
                  setStage(i);
                })
              }
              className="focus-ring group flex cursor-pointer flex-col gap-1.5 text-left"
            >
              <span className="relative h-1 overflow-hidden rounded-full bg-fg/10">
                {stage >= index && (
                  <motion.span
                    layoutId={`stage-fill-${mode}`}
                    className="absolute inset-0 rounded-full bg-fg/60"
                  />
                )}
              </span>
              <span
                className={cn(
                  "font-mono text-[0.65rem] tracking-wide uppercase transition-colors",
                  stage === index ? "text-fg" : "text-subtle group-hover:text-muted"
                )}
              >
                {t(`stages.${name}`)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p
        aria-live="polite"
        className={cn(
          "mx-auto mt-4 max-w-md rounded-md border-l-2 px-3 py-2 text-sm leading-relaxed",
          tones[frame.tone]
        )}
      >
        {t(`notes.${approach}.${stages[stage]}`)}
      </p>
    </WidgetContainer>
  );
}

function ThemeSlot({ slot, label, light, dark }: { slot: Slot; label: string; light: string; dark: string }) {
  if (slot === "none") return null;

  if (slot === "skeleton") {
    return <motion.div layout className="h-10 animate-pulse rounded-md bg-fg/10" />;
  }

  const isLight = slot === "light";
  const Icon = isLight ? Sun : Moon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "flex h-10 items-center justify-between rounded-md px-3 text-sm font-medium transition-colors duration-300",
        isLight ? "bg-zinc-100 text-zinc-900" : "bg-zinc-800 text-zinc-100 ring-1 ring-white/10"
      )}
    >
      <span>{label}</span>
      <span className="flex items-center gap-1.5">
        <Icon className="size-4" aria-hidden="true" />
        {isLight ? light : dark}
      </span>
    </motion.div>
  );
}
