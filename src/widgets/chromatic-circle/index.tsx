"use client";

import WidgetContainer from "@/components/widget-container";
import { motion } from "motion/react";
import React from "react";

const colors = [
  { name: "Amber", hex: "#FFC201", type: "Primária" },
  { name: "School Bus Yellow", hex: "#FFDC00", type: "Terciária" },
  { name: "Bright Green", hex: "#6FDF01", type: "Secundária" },
  { name: "Persian Green", hex: "#00AC8E", type: "Terciária" },
  { name: "Cerulean", hex: "#0093D3", type: "Primária" },
  { name: "Endeavour", hex: "#0053AB", type: "Terciária" },
  { name: "Royal Purple", hex: "#733DA0", type: "Secundária" },
  { name: "Medium Red Violet", hex: "#B2399E", type: "Terciária" },
  { name: "Persian Rose", hex: "#F4209A", type: "Primária" },
  { name: "Red", hex: "#FA0123", type: "Terciária" },
  { name: "Blaze Orange", hex: "#FF6701", type: "Secundária" },
  { name: "Pizazz", hex: "#FF8A00", type: "Terciária" },
];

export default function ChromaticCircle() {
  const [selectedColor, setSelectedColor] = React.useState<
    number | undefined
  >();

  return (
    <WidgetContainer>
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center h-full w-full">
          <motion.div className="relative w-60 h-60 flex items-center justify-center">
            {colors.map((color, index) => {
              const angle = (index / colors.length) * 2 * Math.PI;
              const radius = 80;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`absolute w-10 h-10 rounded-full shadow-lg cursor-cell ${
                    selectedColor == index && "border-2 border-white"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  animate={{ x, y }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
              );
            })}
          </motion.div>
        </div>
        <div className="md:w-2/5 w-full flex items-center justify-center py-2">
          <motion.div
            key={selectedColor}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            className={`flex flex-col text-center justify-center text-[${
              selectedColor != undefined ? colors[selectedColor].hex : "000"
            }]`}
          >
            {selectedColor !== undefined ? (
              <>
                <span className="font-semibold">
                  {colors[selectedColor].type}
                </span>
                <span
                  className="font-bold text-2xl"
                  style={{ color: colors[selectedColor].hex }}
                >
                  {colors[selectedColor].name}
                </span>
                <span
                  className="rounded-sm py-1 w-20 self-center mt-1 text-xs text-white font-bold"
                  style={{ backgroundColor: colors[selectedColor].hex }}
                >
                  {colors[selectedColor].hex}
                </span>
              </>
            ) : (
              <span className="font-semibold">Selecione uma cor</span>
            )}
          </motion.div>
        </div>
      </div>
    </WidgetContainer>
  );
}
