const colors = {
  sky: "#0ea5e9",
  orange: "#f97316",
  blue: "#3b82f6",
  green: "#22c55e",
  red: "#ef4444",
  yellow: "#eab308",
} as const;

interface HighlightProps {
  color: keyof typeof colors;
  children: React.ReactNode;
}

export default function Highlight({ color, children }: HighlightProps) {
  return (
    <strong className="font-semibold" style={{ color: colors[color] }}>
      {children}
    </strong>
  );
}
