import { cn } from "@/utils/functions/cn";

interface PageContainerProps {
  as?: "section" | "article" | "div";
  className?: string;
  children: React.ReactNode;
}

export default function PageContainer({
  as: Tag = "section",
  className,
  children,
}: PageContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-content px-5 pt-16 pb-8 sm:px-6 sm:pt-32",
        "animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out motion-reduce:animate-none",
        className
      )}
    >
      {children}
    </Tag>
  );
}
