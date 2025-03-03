import ArticleContainer from "@/components/acticle-container";
import MDXLayout from "@/components/mdx-layout";
import PostHero from "@/components/post-hero";
import { loadBlogPost } from "@/utils/functions/posts-helpers";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`../../../../posts/${slug}.mdx`);
  const postInfo = (await loadBlogPost(slug)).frontmatter;

  function capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <ArticleContainer>
      <div>
        <Link href="/blog">
          <Undo2 className="hover:text-white transition-colors" />
        </Link>
      </div>
      <PostHero
        title={capitalizeWords(postInfo.title)}
        publishedOn={new Date(postInfo.publishedOn).toISOString()}
      />
      <MDXLayout>
        <Post />
      </MDXLayout>
    </ArticleContainer>
  );
}
