import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";

interface BlogSummaryProps {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
}

export default function BlogSummary({
  slug,
  title,
  abstract,
  publishedOn,
}: BlogSummaryProps) {
  const humanizedDate = format(new Date(publishedOn), "MMMM dd, yyyy", {
    locale: ptBR,
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group cursor-pointer *:transition-all  hover:translate-x-1 transition-all space-y-4"
    >
      <div>
        <h2 className="text-2xl font-semibold group-hover:text-white">
          {title}
        </h2>
        <time dateTime={publishedOn} className="text-sm">
          {humanizedDate}
        </time>
      </div>

      <p className="mt-2">{abstract}</p>
      <div className="text-white mt-2 flex flex-row gap-2">
        Continue lendo <span className="hidden group-hover:block">{"->"}</span>
      </div>
    </Link>
  );
}
