import { Nunito } from "next/font/google";
import { cn } from "@/utils/functions/cn";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

export default function LaLhamaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        nunito.variable,
        "lalhama min-h-dvh overflow-x-clip bg-white text-lh-sky-900 [color-scheme:light]",
        "selection:bg-lh-orange-200 selection:text-lh-orange-900"
      )}
    >
      {children}
    </div>
  );
}
