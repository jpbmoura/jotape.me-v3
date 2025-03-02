import ArticleContainer from "@/components/acticle-container";
import MDXLayout from "@/components/mdx-layout";
import PostHero from "@/components/post-hero";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`../../../../posts/${slug}.mdx`);

  console.log("teste", Post);

  return (
    <ArticleContainer>
      <div>
        <Link href="/blog">
          <Undo2 className="hover:text-white transition-colors" />
        </Link>
      </div>
      <PostHero
        title="Um Humilde Guia Sobre Paleta de Cores"
        publishedOn={new Date().toISOString()}
      />
      <MDXLayout>
        <Post />
      </MDXLayout>
    </ArticleContainer>
  );
}
