import type { MDXComponents } from "mdx/types";
import { Code } from "bright";
import ArticleNote from "@/components/article-note";
import WidgetContainer from "@/components/widget-container";
import ChromaticCircle from "@/widgets/chromatic-circle";
import ColorProperties from "@/widgets/color-properties";
import ColorShaders from "@/widgets/color-shaders";
import TomatoMono from "./components/tomato-mono";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: Code,
    TomatoMono,
    WidgetContainer,
    ChromaticCircle,
    ArticleNote,
    ColorProperties,
    ColorShaders,
  };
}
