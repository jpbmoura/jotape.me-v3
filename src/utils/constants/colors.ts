export type ColorType = "primary" | "secondary" | "tertiary";

export const colors: { name: string; hex: string; type: ColorType }[] = [
  { name: "Amber", hex: "#FFC201", type: "tertiary" },
  { name: "School Bus Yellow", hex: "#FFDC00", type: "primary" },
  { name: "Bright Green", hex: "#6FDF01", type: "tertiary" },
  { name: "Persian Green", hex: "#00AC8E", type: "secondary" },
  { name: "Cerulean", hex: "#0093D3", type: "tertiary" },
  { name: "Endeavour", hex: "#0053AB", type: "primary" },
  { name: "Royal Purple", hex: "#733DA0", type: "tertiary" },
  { name: "Medium Red Violet", hex: "#B2399E", type: "secondary" },
  { name: "Persian Rose", hex: "#F4209A", type: "tertiary" },
  { name: "Red", hex: "#FA0123", type: "primary" },
  { name: "Blaze Orange", hex: "#FF6701", type: "tertiary" },
  { name: "Pizazz", hex: "#FF8A00", type: "secondary" },
];

/** Picks black or white text for readable contrast on a given background. */
export function readableOn(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? "#050505" : "#ffffff";
}
