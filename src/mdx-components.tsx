import type { MDXComponents } from "mdx/types";
import ArticleNote from "@/components/article-note";
import WidgetContainer from "@/components/widget-container";
import ChromaticCircle from "@/widgets/chromatic-circle";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    WidgetContainer,
    ChromaticCircle,
    ArticleNote,
  };
}
