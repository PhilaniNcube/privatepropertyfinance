import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Landmark,
  Phone,
} from "lucide-react";
import {
  Container,
  Section,
  SectionHeading,
  Eyebrow,
  TextLink,
  Stat,
} from "@/components/site/section";
import { CaseStudyCard } from "@/components/site/case-study-card";
import { HomeHeroFilm } from "@/components/site/home-hero-film";
import { CtaBand } from "@/components/site/cta-band";
import { FaqList } from "@/components/site/faq-list";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/content/services";
import { CASE_STUDIES, getCaseStudy } from "@/lib/content/case-studies";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Private Property Finance | UK Property Finance Broker",
  description:
    "Bridging, development finance, commercial and foreign national buy-to-let mortgages from £100k to £20m across the UK. Speak to an experienced property finance broker.",
  path: "/",
});

const reasons = [
  {
    title: "Lender-side credit experience, broker independence",
    body: "With more than 20 years in property finance—including senior relationship management roles at high street banks and specialist property lenders—we know how credit committees assess risk, and we write the credit paper so your proposal is judged on its strengths.",
  },
  {
    title: "High street, challenger, specialist and private lenders",
    body: "We work across high street banks, challenger banks, specialist property lenders, private credit funds and family offices, matching your property and timescale to lenders with genuine appetite.",
  },
  {
    title: "A named broker, not a portal",
    body: "You deal directly with one experienced broker from first conversation to completion. We pick up the phone, and we will tell you early if a deal will not work.",
  },
];

const steps = [
  {
    title: "Tell us about the deal",
    body: "A 15-minute call or our short enquiry form: property, loan amount, and timescale.",
  },
  {
    title: "We approach the right lenders",
    body: "We shortlist suitable lenders, sense-check the structure and present indicative terms in plain English.",
  },
  {
    title: "We manage it to completion",
    body: "We coordinate valuers, monitoring surveyors, solicitors and the lender through to drawdown.",
  },
];

const homeFaqs = [
  {
    question: "How does a property finance broker get paid?",
    answer:
      "We are paid by a broker fee, a commission from the lender, or a combination of both. The basis is explained and agreed in writing before we start work, so there are no surprises at completion.",
  },
  {
    question: "Do I need a solicitor if I use a broker?",
    answer:
      "Yes. A broker arranges the finance; a solicitor handles the legal work, searches and security. We work alongside your solicitor and can introduce firms experienced in commercial and specialist property finance if needed.",
  },
  {
    question: "How much can I borrow?",
    answer:
      "It depends on the deal type, the property, your experience and the lender. We arrange facilities from £100,000 to £20 million. Use our enquiry form for an indicative position, then we will confirm what is realistic.",
  },
  {
    question: "Where in the UK do you arrange property finance?",
    answer:
      "We arrange property finance across the UK. We are based in Manchester, with London meetings by appointment, and work with investors, developers and businesses nationwide as well as overseas clients investing in UK property.",
  },
];

export default function Home() {
  // The featured deal is chosen editorially rather than by list order.
  const featuredStudy =
    getCaseStudy("buy-to-let-hong-kong-2-1m") ?? CASE_STUDIES[0];
  const otherStudies = CASE_STUDIES.filter(
    (study) => study.slug !== featuredStudy.slug,
  );
  // Home is a teaser: three secondary cards fill one row on large screens.
  const secondaryStudies = otherStudies.slice(0, 3);

  return (
    <>
      <section className="relative isolate flex min-h-[clamp(36rem,calc(100svh-5rem),56rem)] flex-col justify-end overflow-clip bg-ppf-deep">
        <HomeHeroFilm
          desktopSrc="/images/London-Trainline-hero-1080p.mp4"
          mobileSrc="/images/London-Trainline-hero-720p.mp4"
          posterSrc="/images/London-Trainline-hero-poster.jpg"
        />

        {/* Legibility scrims over the footage. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,36,32,0.97)_0%,rgba(0,36,32,0.9)_22%,rgba(0,36,32,0.78)_45%,rgba(0,36,32,0.55)_68%,rgba(0,36,32,0.35)_88%,rgba(0,36,32,0.28)_100%)] lg:hidden"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(to_top,rgba(0,36,32,0.94)_0%,rgba(0,36,32,0.68)_18%,rgba(0,36,32,0.26)_42%,rgba(0,36,32,0.04)_68%,rgba(0,36,32,0.1)_100%)] lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(0,36,32,0.94)_0%,rgba(0,36,32,0.7)_26%,rgba(0,36,32,0.34)_50%,rgba(0,36,32,0.08)_72%,rgba(0,36,32,0)_86%)] lg:block"
        />

        <Container className="relative z-10 pb-10 pt-20 sm:pb-12 sm:pt-24 lg:pb-14 lg:pt-28">
          <div className="max-w-[56rem]">
            <Eyebrow
              light
              className="text-cream [text-shadow:0_1px_12px_rgba(0,36,32,0.7)]"
            >
              Specialist property finance across the UK
            </Eyebrow>
            <h1 className="mt-5 max-w-[54rem] font-serif text-[clamp(2.15rem,5.2vw,4.4rem)] leading-[1.02] tracking-[-0.03em] text-cream [text-shadow:0_1px_3px_rgba(0,36,32,0.6),0_10px_44px_rgba(0,36,32,0.55)]">
              Property finance, arranged by people who&rsquo;ve sat on the
              lender&rsquo;s side
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/90 [text-shadow:0_1px_12px_rgba(0,36,32,0.6)] sm:text-lg">
              Commercial mortgages, bridging loans, development finance and
              buy-to-let for overseas investors, from £100,000 to £20 million.
              One experienced broker, a wide panel of lenders, and a straight
              answer from the first call.
            </p>
            <p className="mt-4 max-w-xl border-l-2 border-gold-soft/70 pl-4 text-sm leading-relaxed text-cream/80 [text-shadow:0_1px_12px_rgba(0,36,32,0.6)]">
              Based in Manchester, with London meetings by appointment. We work
              with investors, developers and businesses across the UK, and
              overseas clients investing in UK property.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/contact-us#enquiry-form" className="btn-light">
                Discuss your finance requirements
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/case-studies" className="link-arrow-light py-2">
                See completed transactions
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2.5 text-sm text-cream/80">
              <Phone className="h-4 w-4 text-gold-soft" aria-hidden="true" />
              <span>
                Or call{" "}
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="font-semibold text-cream underline decoration-gold-soft/50 underline-offset-4 hover:text-gold-soft"
                >
                  {SITE.phone}
                </a>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Credential strip bridging the film hero and the editorial introduction. */}
      <div className="border-b border-line bg-cream-dark/50">
        <Container>
          <ul className="grid gap-x-8 gap-y-3 py-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
            {[
              "£100,000 – £20 million facilities",
              "High street, specialist and private lenders",
              "UK-wide coverage · Overseas investors welcome",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 font-sans text-xs font-semibold tracking-[0.04em] text-navy"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-gold-ink"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
            <li className="flex items-baseline gap-2.5 lg:justify-self-end">
              <span className="font-serif text-2xl leading-none text-navy">
                20+ years
              </span>
              <span className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-ink/60">
                Lender-side experience
              </span>
            </li>
          </ul>
        </Container>
      </div>

      {/* Editorial Introduction */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Independent, specialist, accountable</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.85rem,3.1vw,2.75rem)] leading-[1.12] tracking-[-0.015em] text-navy">
                A credit paper written properly opens doors that a standard
                application form will not.
              </h2>
              <p className="mt-5 body-copy max-w-2xl">
                Private Property Finance is a founder-led property finance
                brokerage arranging commercial mortgages, non-regulated bridging
                loans, development finance and buy-to-let mortgages for
                foreign nationals and expats across the UK.
              </p>
            </div>
            <div className="flex flex-col justify-between border-t border-line pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink">
                  International &amp; complex structures
                </p>
                <p className="mt-3 font-serif text-xl leading-snug text-navy">
                  &ldquo;Buying through a UK company while living overseas? We
                  can help you explore the available finance.&rdquo;
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  Whether you are a UK developer acquiring a site with planning,
                  a trading business buying its own premises, or an overseas
                  investor purchasing via a UK SPV, we match the case to
                  lenders who understand the structure.
                </p>
              </div>
              <div className="mt-6">
                <TextLink href="/about-us">More about how we work</TextLink>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            <Stat value="£100k–£20m" label="Typical facility range" />
            <Stat value="Four" label="Core UK property finance services" />
            <Stat value="Direct" label="Founder-led contact from call to completion" />
          </div>
        </Container>
      </Section>

      {/* Editorial Service List (replaces repeated 4-card grid) */}
      <Section tone="white" id="services">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we arrange"
              title="Four specialist property finance lines"
              intro="Each facility type is judged on different fundamentals. Select a service to see how lenders assess it, or talk to us if your deal spans more than one."
            />
            <TextLink href="/services" className="mb-1">
              Compare all services
            </TextLink>
          </div>

          <div className="mt-10 divide-y divide-line border-y border-line">
            {SERVICES.map((service, index) => (
              <article
                key={service.slug}
                className="group grid items-start gap-6 py-8 transition-colors hover:bg-cream/50 sm:px-4 lg:grid-cols-12 lg:items-center lg:gap-10"
              >
                <div className="flex items-baseline gap-4 lg:col-span-4">
                  <span className="font-serif text-xl text-gold-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-navy sm:text-[1.65rem]">
                      <Link
                        href={`/${service.slug}`}
                        className="hover:text-gold-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00665C]"
                      >
                        {service.card.title}
                      </Link>
                    </h3>
                    <p className="mt-1 font-sans text-xs font-medium text-ink/65">
                      {service.facts[0]?.value} · {service.facts[2]?.value}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-ink/80 lg:col-span-5">
                  {service.card.body}
                </p>

                <div className="flex items-center justify-start lg:col-span-3 lg:justify-end">
                  <Link
                    href={`/${service.slug}`}
                    className="link-arrow"
                  >
                    Explore {service.navLabel.toLowerCase()}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Transactions — Larger Editorial Presentation */}
      <Section tone="cream">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Completed transactions"
              title="Recent deals we have arranged"
              intro="Real examples showing the property, loan amount, leverage, challenge and how PPF helped. Photographs are illustrative to protect client confidentiality."
            />
            <TextLink href="/case-studies" className="mb-1">
              View all completed transactions
            </TextLink>
          </div>

          {featuredStudy ? (
            <div className="mt-10">
              <CaseStudyCard study={featuredStudy} featured />
            </div>
          ) : null}

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {secondaryStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Restrained Deep Green Section — Why Clients Use Us */}
      <Section tone="navy">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow light>Why clients use us</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.85rem,3.1vw,2.75rem)] leading-[1.1] text-cream">
                Experience on both sides of the credit table
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/80">
                We arrange finance for investors, developers and business owners
                across the UK, and we know what makes a credit committee say
                yes.
              </p>
              <TextLink href="/team" light className="mt-7">
                Meet the team
              </TextLink>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 lg:col-span-8">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="grid gap-4 border-t border-cream/20 pt-6 sm:grid-cols-[auto_1fr] sm:gap-8"
                >
                  <span className="font-serif text-2xl text-gold-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-cream">
                      {reason.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/80">
                      {reason.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="How it works"
                title="Three steps, one point of contact"
                intro="The process is straightforward. You stay with one experienced broker who owns the file from first call to completion."
              />
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/contact-us#enquiry-form"
                  className="btn-primary w-fit"
                >
                  Discuss your finance requirements
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="grid gap-8 lg:col-span-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-4 border-t border-line pt-6 sm:grid-cols-[auto_1fr] sm:gap-8"
                >
                  <span className="font-serif text-3xl leading-none text-gold-ink">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/75">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-8 border-t border-line pt-6">
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <Landmark
                    className="h-4 w-4 text-gold-ink"
                    aria-hidden="true"
                  />
                  High street, specialist and private lenders
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <Building2
                    className="h-4 w-4 text-gold-ink"
                    aria-hidden="true"
                  />
                  Commercial, investment residential and land
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/80">
                  <BadgeCheck
                    className="h-4 w-4 text-gold-ink"
                    aria-hidden="true"
                  />
                  Straight answers, early
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FaqList faqs={homeFaqs} id="home-faqs" />

      <CtaBand />
      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  );
}
