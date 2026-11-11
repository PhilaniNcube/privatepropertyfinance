import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { CtaBand } from "@/components/site/cta-band";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/content/services";

export const metadata: Metadata = pageMetadata({
  title: "Property Finance Services | Private Property Finance",
  description:
    "Commercial mortgages, bridging loans, development finance and foreign national buy-to-let mortgages from £100k to £20m, arranged by an independent broker.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Property finance services"
        intro="We arrange four types of property finance, from £100,000 to £20 million. Not sure which one fits your situation? Call us and we'll talk it through."
        crumbs={[{ name: "Services" }]}
        image={{
          src: "/images/commercial-offices.jpg",
          alt: "Glass commercial buildings seen from below",
        }}
        actions={
          <>
            <Link href="#enquiry" className="btn-gold">
              Discuss a deal
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/case-studies" className="btn-outline">
              Completed transactions
            </Link>
          </>
        }
      />

      <Section tone="cream">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The four lines"
                title="Specialist finance, arranged around the deal"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="body-copy">
                Each service has its own lenders, criteria and pace. A bridging
                loan is judged on the property and the exit; development finance
                is judged on the scheme and the team; commercial lending turns on
                the business and the lease; overseas buy-to-let turns on
                residency, income and deposit. We work across all four, so we
                can tell you which structure actually fits.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] text-navy">
                One broker, from the first call to completion
              </h2>
              <p className="mt-5 body-copy">
                You won&apos;t be passed between departments. The broker who
                takes your first call owns the case through lender selection,
                valuation, legals and drawdown.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
              {[
                {
                  n: "01",
                  title: "Tell us the deal",
                  body: "Property, amount, timescale and exit. A short call is usually enough.",
                },
                {
                  n: "02",
                  title: "See the options",
                  body: "We approach the lenders that fit and present terms in plain English.",
                },
                {
                  n: "03",
                  title: "We manage completion",
                  body: "Valuers, solicitors and lender queries are handled for you.",
                },
              ].map((step) => (
                <div key={step.n} className="border-t border-line pt-5">
                  <span className="font-serif text-2xl text-gold-ink">{step.n}</span>
                  <h3 className="mt-3 font-serif text-xl text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="cream" id="enquiry" className="scroll-mt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Not sure which one?"
                title="Tell us what you're working on"
                intro="Choose the closest option and add a few details. We'll come back with the right questions, and an honest view of what's possible."
              />
            </div>
            <div className="lg:col-span-7">
              <EnquiryForm source="/services" />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
