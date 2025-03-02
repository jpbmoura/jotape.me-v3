import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMDXFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMDXFrontmatter],
  },
});

export default withMDX(nextConfig);
