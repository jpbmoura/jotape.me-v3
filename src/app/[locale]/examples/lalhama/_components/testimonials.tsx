import { getTranslations } from "next-intl/server";
import { SectionHeading } from "./ui";

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export default async function Testimonials() {
  const t = await getTranslations("LaLhama.testimonials");
  const [featured, ...others] = t.raw("items") as Testimonial[];

  return (
    <section className="bg-lh-orange-100/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading title={t("title")} subtitle={t("rating")} />
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <figure>
            <blockquote className="font-display text-3xl leading-snug font-bold text-balance text-lh-sky-900 sm:text-4xl">
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-6 text-lh-sky-800">
              <span className="font-display font-extrabold text-lh-sky-900">{featured.name}</span> · {featured.detail}
            </figcaption>
          </figure>
          <div className="space-y-8">
            {others.map((item) => (
              <figure key={item.name} className="rounded-3xl bg-white p-6 ring-1 ring-lh-orange-200">
                <blockquote className="text-pretty text-lh-sky-900">“{item.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-lh-sky-800">
                  <span className="font-display font-extrabold text-lh-sky-900">{item.name}</span> · {item.detail}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
