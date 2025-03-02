"use client";

interface WidgetContainerProps {
  children: React.ReactNode;
}

export default function WidgetContainer({ children }: WidgetContainerProps) {
  return <div className="w-full p-4 bg-white/5 rounded">{children}</div>;
}
