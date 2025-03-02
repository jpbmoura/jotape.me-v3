import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostHeroProps {
  title: string;
  publishedOn: string;
}

export default function PostHero({ title, publishedOn }: PostHeroProps) {
  const humanizedDate = format(new Date(publishedOn), "dd MMMM yyyy", {
    locale: ptBR,
  });

  return (
    <div className="flex flex-col gap-2 mb-12">
      <h1 className="text-5xl font-semibold text-white">{title}</h1>
      <p className="text-text-dark">
        <time dateTime={publishedOn}>{humanizedDate}</time>
      </p>
    </div>
  );
}
