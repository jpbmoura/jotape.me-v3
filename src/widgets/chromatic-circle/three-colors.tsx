import { colors } from "@/utils/constants/colors";
import { motion } from "motion/react";
import React from "react";

export default function ThreeColors() {
  const [selectedColor, setSelectedColor] = React.useState<number | undefined>(
    0
  );

  const [firstComplementaryColor, setFirstComplementaryColor] = React.useState<
    number | undefined
  >(4);

  const [secondComplementaryColor, setSecondComplementaryColor] =
    React.useState<number | undefined>(8);

  function getTriadicColors(color: number | undefined) {
    if (color == undefined) return undefined;

    const colorsCount = 12;
    const color2 = (color + 4) % colorsCount;
    const color3 = (color + 8) % colorsCount;

    return [color, color2, color3];
  }

  function handleColors(value: number) {
    const triadicColors = getTriadicColors(value);
    if (!triadicColors) return;
    const [color, color1, color3] = triadicColors;
    setSelectedColor(color);
    setFirstComplementaryColor(color1);
    setSecondComplementaryColor(color3);
  }

  return (
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
                onClick={() => handleColors(index)}
                className={`absolute w-10 h-10 rounded-full shadow-lg cursor-cell ${
                  (selectedColor == index ||
                    firstComplementaryColor == index ||
                    secondComplementaryColor == index) &&
                  "border-2 border-white"
                } `}
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

      <div className="flex flex-col items-center justify-center md:h-30 h-20 m-auto w-1/2 md:w-1/3 md:pr-4">
        <motion.div
          key={selectedColor}
          className="w-full h-1/2 rounded-t-xl"
          initial={{ x: 10 }}
          animate={{ x: 0 }}
          exit={{ x: -10 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{
            backgroundColor:
              selectedColor !== undefined
                ? colors[selectedColor].hex
                : "transparent",
          }}
        ></motion.div>

        <motion.div
          key={firstComplementaryColor}
          className="w-full h-1/2"
          transition={{ type: "spring", stiffness: 100 }}
          style={{
            backgroundColor:
              firstComplementaryColor !== undefined
                ? colors[firstComplementaryColor].hex
                : "transparent",
          }}
        ></motion.div>

        <motion.div
          key={secondComplementaryColor}
          className="w-full h-1/2 rounded-b-xl"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          exit={{ x: 10 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{
            backgroundColor:
              secondComplementaryColor !== undefined
                ? colors[secondComplementaryColor].hex
                : "transparent",
          }}
        ></motion.div>
      </div>
    </div>
  );
}
