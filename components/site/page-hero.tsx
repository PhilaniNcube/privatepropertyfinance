import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";
import { Container, Eyebrow } from "./section";

type Fact = { label: string; value: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs: Crumb[];
  image?: { src: string; alt: string };
  facts?: Fact[];
  actions?: ReactNode;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  image,
  facts,
  actions,
  children,
}: PageHeroProps) {
  return (
    <section className="border-b border-line bg-cream pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
      <Container>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 grid items-end gap-10 lg:mt-10 lg:grid-cols-12 lg:gap-14">
          <div className={image ? "lg:col-span-7" : "lg:col-span-9"}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.35rem,4.6vw,4rem)] leading-[1.04] tracking-[-0.025em] text-navy">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              {intro}
            </p>
            {actions ? (
              <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
            ) : null}
            {children}
          </div>
          {image ? (
            <div className="lg:col-span-5">
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-cream-dark">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>

        {facts?.length ? (
          <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-3 lg:mt-16">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink/70">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-serif text-lg leading-snug text-navy">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </Container>
    </section>
  );
}
