import type { ReactNode } from "react";
import { PageHero } from "./page-hero";
import { Container, Section } from "./section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export function LegalPage({
  title,
  intro,
  updated,
  path,
  children,
}: {
  title: string;
  intro: string;
  updated?: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        intro={intro}
        crumbs={[{ name: title }]}
      />
      <Section tone="white">
        <Container>
          <div className="mx-auto max-w-3xl">
            {updated ? (
              <p className="mb-8 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink/70">
                Last updated: {updated}
              </p>
            ) : null}
            <div className="space-y-7 text-sm leading-relaxed text-ink/70 [&_a]:text-navy [&_a]:underline [&_a]:decoration-gold/50 [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-navy [&_h3]:mt-6 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:text-navy [&_li]:mt-2 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-5">
              {children}
            </div>
          </div>
        </Container>
      </Section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: title, path },
        ])}
      />
    </>
  );
}
