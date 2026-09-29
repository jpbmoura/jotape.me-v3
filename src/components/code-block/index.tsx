import { isValidElement } from "react";
import { Code } from "bright";
import CopyButton from "./copy-button";

Code.theme = "github-dark";

interface PreProps {
  children?: React.ReactNode;
  title?: string;
}

/** MDX `pre` override. `title` comes from the fence meta (```tsx title="…"). */
export default function CodeBlock({ children, title }: PreProps) {
  if (!isValidElement<{ className?: string; children?: string }>(children)) {
    return <pre>{children}</pre>;
  }

  const lang = children.props.className?.replace("language-", "") ?? "text";
  const code = String(children.props.children ?? "").replace(/\n$/, "");

  return (
    <div className="code-block not-prose group relative my-6 overflow-hidden rounded-lg border border-border bg-black/25">
      <div className="flex h-10 items-center justify-between gap-4 border-b border-border pr-1.5 pl-4">
        <span className="truncate font-mono text-xs text-subtle">
          {title ?? lang}
        </span>
        <CopyButton text={code} />
      </div>
      <Code lang={lang} code={code} />
    </div>
  );
}
