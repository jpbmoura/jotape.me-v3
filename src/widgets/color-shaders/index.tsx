"use client";

import WidgetContainer from "@/components/widget-container";
import SkyColorShaders from "./sky-color-shaders";
import OrangeColorShaders from "./orange-color-shaders";

interface ColorShadersProps {
  color: string;
  stage: number;
}

export default function ColorShaders({ color, stage }: ColorShadersProps) {
  return (
    <WidgetContainer>
      <div className="flex flex-row w-full md:h-20 h-6 gap-0.5 md:gap-1 md:p-4 text-xs md:text-base">
        {color === "sky" && <SkyColorShaders stage={stage} />}
        {color === "orange" && <OrangeColorShaders stage={stage} />}
      </div>
    </WidgetContainer>
  );
}
