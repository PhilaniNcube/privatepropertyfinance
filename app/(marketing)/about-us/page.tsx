import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import {
  Container,
  Eyebrow,
  Section,
  SectionHeading,
  Stat,
} from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/content/site";
import { PRINCIPLES, REVIEWERS } from "@/lib/content/team";

export const metadata: Metadata = pageMetadata({
  title: "About Us | Independent Property Finance Broker",
  description:
    "Former bank and specialist-lender relationship managers arranging bridging, development and commercial property finance across the UK.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Private Property Finance"
        intro="Private Property Finance is an independent, founder-led property finance broker based in Manchester, with London meetings by appointment. We arrange commercial mortgages, bridging loans, development finance and buy-to-let mortgages for overseas investors across the UK, typically between £100,000 and £20 million."
        crumbs={[{ name: "About Us" }]}
        image={{
          src: "/images/london-street.jpg",
          alt: "A London street of red-brick townhouses",
        }}
        actions={
          <>
            <Link href="/contact-us#enquiry-form" className="btn-primary">
              Discuss your finance requirements
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/team" className="btn-outline">
              Meet the founder
            </Link>
          </>
        }
      />

      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Why we started</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.85rem,3vw,2.7rem)] leading-[1.1] text-navy">
                A phone that gets answered
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl leading-relaxed text-ink/80 sm:text-2xl sm:leading-[1.55]">
                Property finance has become faster and more automated, and in
                the process a lot of brokers have stopped picking up the phone.
              </p>
              <p className="mt-6 body-copy">
                Private Property Finance was founded to do the opposite: give
                investors, developers and business owners across the UK one
                experienced broker who understands their deal, knows the
                lenders, and takes the proposal through to completion.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            <Stat value="20+" label="Years' lender-side & property finance experience" />
            <Stat value="£100k–£20m" label="Facilities arranged" />
            <Stat value="UK-wide" label="Based in Manchester · London by appointment" />
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Where our experience comes from"
                title="We've written the papers lenders read"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="body-copy">
                With more than 20 years in property finance—much of it spent as
                a relationship manager at high street banks and specialist
                property lenders—we have sat in credit meetings and written the
                credit papers ourselves. That means we know what underwriters
                need to see, which risks they will take, and how to present a
                case so it is judged on its strengths.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="border-t border-line pt-4">
                  <h3 className="font-serif text-xl text-navy">Lender-side insight</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    We know how credit committees think, what they question and
                    where a case usually falls down.
                  </p>
                </div>
                <div className="border-t border-line pt-4">
                  <h3 className="font-serif text-xl text-navy">Broker independence</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    We are not tied to one lender. We place the case where it
                    fits, not where it is easiest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="navy">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow light>How we work</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] text-cream">
                Four commitments, every case
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
                These are not values on a wall. They are how we run a deal from
                the first call to drawdown.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
              {PRINCIPLES.map((principle, index) => (
                <div key={principle.title} className="border-t border-cream/15 pt-5">
                  <span className="font-serif text-xl text-gold-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-xl text-cream">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Who we work with</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] text-navy">
                Clients, not categories
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="border-t border-line">
                {REVIEWERS.map((reviewer) => (
                  <li
                    key={reviewer}
                    className="flex items-center justify-between gap-4 border-b border-line py-4"
                  >
                    <span className="font-serif text-xl text-navy">{reviewer}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-gold-ink/60" aria-hidden="true" />
                  </li>
                ))}
              </ul>
              <p className="mt-6 body-copy">
                Most of our work comes from repeat clients and referrals. If
                your situation doesn&apos;t fit a standard lender&apos;s box,
                that is usually where we are most useful.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Eyebrow>Regulatory information</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.12] text-navy">
              Company and regulatory details
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ink/70">
              {SITE.legalStatement}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              {SITE.riskWarning}
            </p>
            <div className="mt-6 flex flex-wrap gap-5">
              <Link href="/privacy-policy" className="link-arrow">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="link-arrow">
                Cookie Policy
              </Link>
              <Link href="/complaints" className="link-arrow">
                Complaints
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Prefer to talk it through?"
        body="Call us and ask for a named broker. We'll tell you honestly whether we can help."
        primaryLabel="Meet the team"
        primaryHref="/team"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about-us" },
        ])}
      />
    </>
  );
}
