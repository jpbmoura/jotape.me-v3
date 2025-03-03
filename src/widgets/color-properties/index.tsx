"use client";

import WidgetContainer from "@/components/widget-container";
import { motion } from "motion/react";
import React from "react";

type HueColor = {
  name: string;
  tailwind_class: string;
};

const hueColors = [
  { name: "red", tailwind_class: "bg-red-500" },
  { name: "yellow", tailwind_class: "bg-yellow-500" },
  { name: "green", tailwind_class: "bg-green-500" },
  { name: "blue", tailwind_class: "bg-blue-500" },
  { name: "violet", tailwind_class: "bg-violet-500" },
  { name: "pink", tailwind_class: "bg-pink-500" },
];

const saturation = [
  { name: "100", tailwind_class: "saturate-[1]" },
  { name: "80", tailwind_class: "saturate-[0.8]" },
  { name: "60", tailwind_class: "saturate-[0.6]" },
  { name: "40", tailwind_class: "saturate-[0.4]" },
  { name: "20", tailwind_class: "saturate-[0.2]" },
  { name: "0", tailwind_class: "saturate-[0]" },
];

const brightness = [
  { name: "100", tailwind_class: "brightness-[1]" },
  { name: "80", tailwind_class: "brightness-[0.8]" },
  { name: "60", tailwind_class: "brightness-[0.6]" },
  { name: "40", tailwind_class: "brightness-[0.4]" },
  { name: "20", tailwind_class: "brightness-[0.2]" },
  { name: "0", tailwind_class: "brightness-[0]" },
];

export default function ColorProperties() {
  const [selectedColor, setSelectedColor] = React.useState<HueColor | null>(
    null
  );

  return (
    <WidgetContainer>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8 justify-evenly">
        <div className="flex flex-col gap-4 items-center">
          <span className="font-bold">Matiz</span>
          <div className="flex flex-row md:flex-col">
            {hueColors.map((color) => (
              <motion.div
                key={color.name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 150 }}
                className={`cursor-cell md:w-20 md:h-8 w-8 h-12 ${
                  color.tailwind_class
                } ${selectedColor === color && "border-2 border-white"}`}
                onClick={() => setSelectedColor(color)}
              ></motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <span className="font-bold">Brilho</span>
          <div className="flex flex-row md:flex-col">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                className={`cursor-cell md:w-20 md:h-8 w-8 h-12 ${selectedColor?.tailwind_class} ${brightness[index].tailwind_class} ${selectedColor}`}
              ></motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <span className="font-bold">Saturação</span>
          <div className="flex flex-row md:flex-col">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                className={`cursor-cell md:w-20 md:h-8 w-8 h-12 ${selectedColor?.tailwind_class} ${saturation[index].tailwind_class} ${selectedColor}`}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </WidgetContainer>
  );
}
