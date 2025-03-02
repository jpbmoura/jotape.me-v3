"use client";

interface ArticleNoteProps {
  type: "info" | "warning" | "danger";
  children: React.ReactNode;
}

export default function ArticleNote({ children, type }: ArticleNoteProps) {
  const styles = "px-6 border-2 border-dashed text-white";

  switch (type) {
    case "info":
      return (
        <div className={`${styles} bg-blue-950/50 border-blue-900`}>
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
