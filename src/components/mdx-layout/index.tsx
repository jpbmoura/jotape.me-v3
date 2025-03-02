interface MDXLayoutPropsProps {
  children: React.ReactNode;
}

export default function MDXLayout({ children }: MDXLayoutPropsProps) {
  return (
    <section className="prose prose-a:text-white prose-headings:text-start prose-strong:text-white text-text-dark prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-text-dark prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
      {children}
    </section>
  );
}
