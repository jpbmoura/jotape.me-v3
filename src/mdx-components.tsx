import type { MDXComponents } from "mdx/types";
import ArticleNote from "@/components/article-note";
import CodeBlock from "@/components/code-block";
import Highlight from "@/components/highlight";
import TomatoMono from "@/components/tomato-mono";
import WidgetContainer from "@/components/widget-container";
import ChromaticCircle from "@/widgets/chromatic-circle";
import ColorProperties from "@/widgets/color-properties";
import ColorShaders from "@/widgets/color-shaders";

const components: MDXComponents = {
  pre: CodeBlock,
  a: ({ href = "", ...props }) =>
    href.startsWith("http") ? (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    ) : (
      <a href={href} {...props} />
    ),
  ArticleNote,
  ChromaticCircle,
  ColorProperties,
  ColorShaders,
  Highlight,
  TomatoMono,
  WidgetContainer,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
