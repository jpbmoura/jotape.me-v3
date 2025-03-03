"use client";

import WidgetContainer from "@/components/widget-container";
import React from "react";
import TwoColors from "./two-colors";
import ThreeColors from "./three-colors";
import ColorSelector from "./color-selector";
import AnalogueColors from "./analogue-colors";

interface ChromaticCircleProps {
  type: "selector" | "two" | "three" | "analogue";
}

export default function ChromaticCircle({ type }: ChromaticCircleProps) {
  return (
    <WidgetContainer>
      {type === "selector" && <ColorSelector />}
      {type === "two" && <TwoColors />}
      {type === "three" && <ThreeColors />}
      {type === "analogue" && <AnalogueColors />}
    </WidgetContainer>
  );
}
