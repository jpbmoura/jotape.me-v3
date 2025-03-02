import BlogSummary from "@/components/blog-summary";
import SectionContainer from "@/components/section-container";
import { getBlogPostList } from "@/utils/functions/posts-helpers";

export default async function BlogPage() {
  const blogPosts = await getBlogPostList();

  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold text-white">Blog</h1>

      <div className="flex flex-col gap-4">
        {blogPosts.map(({ slug, title, abstract, publishedOn }) => (
          <BlogSummary
            key={slug}
            title={title}
            abstract={abstract}
            publishedOn={publishedOn}
            slug={slug}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
