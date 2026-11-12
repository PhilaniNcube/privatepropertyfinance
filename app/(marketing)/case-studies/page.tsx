import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/site/section";
import { CaseStudyCard } from "@/components/site/case-study-card";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { CASE_STUDIES } from "@/lib/content/case-studies";

export const metadata: Metadata = pageMetadata({
  title: "Completed Transactions | Private Property Finance",
  description:
    "Recent bridging, development and commercial property finance deals arranged by Private Property Finance, with loan amounts, LTVs and timescales.",
  path: "/case-studies",
});

const commonThreads = [
  {
    title: "A deadline that mattered",
    body: "Two of these cases were driven by time: a lender withdrawing before completion, and a developer needing to finish a scheme. The finance had to work around the date, not the other way round.",
  },
  {
    title: "A lender that actually fits",
    body: "None of these were vanilla cases. The value was in knowing which lender would look at the property, the borrower and the exit the right way.",
  },
  {
    title: "Managed to completion",
    body: "Valuers, solicitors and lender queries were handled by one broker, so the client could keep working on the project.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Completed transactions"
        title="Completed transactions"
        intro="A selection of recent deals we've arranged. Every case is different, so if your situation is similar, let's talk."
        crumbs={[{ name: "Completed Transactions" }]}
        image={{
          src: "/images/london-aerial.jpg",
          alt: "Aerial view of London and the River Thames",
        }}
        actions={
          <>
            <Link href="/contact-us#enquiry-form" className="btn-primary">
              Discuss your finance requirements
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-outline">
              Our services
            </Link>
          </>
        }
      />

      <Section tone="cream">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Recent deals"
              title="Bridging, development and overseas buy-to-let"
              intro="Loan amounts, LTVs and the short version of what made each case interesting."
            />
            <p className="max-w-xs text-xs leading-relaxed text-ink/70">
              Details have been anonymised. Figures are as completed and are not
              a promise of terms on any other case.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>What they have in common</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] text-navy">
                The deal was never just the property
              </h2>
              <p className="mt-5 body-copy">
                A lender reads the whole case: the borrower, the exit, the
                timing and the team. These three show why the packaging matters
                as much as the asset.
              </p>
            </div>
            <div className="space-y-6 lg:col-span-7">
              {commonThreads.map((thread) => (
                <div key={thread.title} className="flex gap-4 border-t border-line pt-5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold-ink" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-xl text-navy">{thread.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                      {thread.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Does your deal look like one of these?"
        body="Tell us the property, the amount and the date you need to work to. We'll tell you what's realistic."
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Completed Transactions", path: "/case-studies" },
        ])}
      />
    </>
  );
}
