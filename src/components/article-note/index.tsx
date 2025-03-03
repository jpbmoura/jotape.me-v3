"use client";

interface ArticleNoteProps {
  type: "info" | "warning" | "danger";
  children: React.ReactNode;
}

export default function ArticleNote({ children, type }: ArticleNoteProps) {
  const styles =
    "px-6 border-l-6 text-white font-semibold items-center py-2 rounded-r-sm my-4";

  switch (type) {
    case "info":
      return (
        <div className={`${styles} bg-[#172436] border-sky-600`}>
          {children}
        </div>
      );
    case "warning":
      return (
        <div className={`${styles} bg-blue-950 border-blue-900`}>
          {children}
        </div>
      );
    case "danger":
      return (
        <div className={`${styles} bg-blue-950 border-blue-900`}>
          {children}
        </div>
      );
  }
}
