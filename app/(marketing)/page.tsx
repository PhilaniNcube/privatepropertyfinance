import Image from "next/image";
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
import { Container, Section, SectionHeading, Eyebrow, TextLink, Stat } from "@/components/site/section";
import { ServiceCard } from "@/components/site/service-card";
import { CaseStudyCard } from "@/components/site/case-study-card";
import { CtaBand } from "@/components/site/cta-band";
import { FaqList } from "@/components/site/faq-list";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/content/services";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Private Property Finance | UK Property Finance Broker",
  description:
    "Bridging, development finance, commercial and foreign national buy-to-let mortgages from £100k to £20m. Speak to an experienced property finance broker.",
  path: "/",
});

const reasons = [
  {
    title: "Lender experience, broker independence",
    body: "Our team spent 20 years as relationship managers at high street banks and specialist property lenders. We know how credit committees think, and we package your case so it gets the best chance to succeed on terms that work for you.",
  },
  {
    title: "The whole market, not one lender's shelf",
    body: "We work with high street banks, specialist lenders, challenger banks, private credit funds and family offices, giving you the options you need to succeed.",
  },
  {
    title: "A person, not a portal",
    body: "You deal with one named broker from first call to completion. We will pick up the phone, and we will tell you early if a deal won't work.",
  },
];

const steps = [
  {
    title: "Tell us about the deal",
    body: "A 15-minute call or a short form: property, amount, timescale.",
  },
  {
    title: "We find the right lenders",
    body: "We shortlist suitable lenders and present terms in plain English.",
  },
  {
    title: "We manage it to completion",
    body: "We handle valuers, solicitors and the lender so you can get on with the project.",
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
      "Yes. A broker arranges the finance; a solicitor handles the legal work, searches and security. We work alongside your solicitor and can recommend firms who are experienced in property finance if you don't already have one.",
  },
  {
    question: "How much can I borrow?",
    answer:
      "It depends on the deal type, the property, your experience and the lender. We arrange facilities from £100,000 to £20 million. Use the enquiry form for an indicative position, then we'll confirm what's realistic.",
  },
  {
    question: "Do you only work in Manchester and London?",
    answer:
      "No. We are based in Manchester with meetings in London by appointment, but we arrange finance across the UK. Most of the process can be handled remotely.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream pb-0 pt-10 sm:pt-14 lg:pt-16">
        <Container>
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col justify-center pb-6 lg:col-span-6 lg:py-10">
              <Eyebrow>Property finance broker · Manchester &amp; London</Eyebrow>
              <h1 className="mt-6 font-serif text-[clamp(2.6rem,4.4vw,4.1rem)] leading-[1.03] tracking-[-0.03em] text-navy">
                Property finance, arranged by people who&apos;ve sat on the
                lender&apos;s side
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
                Bridging loans, development finance, commercial mortgages and
                buy-to-let for overseas investors, from £100,000 to £20 million.
                One experienced broker, a wide panel of lenders, and a straight
                answer from the first call.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact-us" className="btn-gold">
                  Discuss a deal
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/case-studies" className="btn-outline">
                  See completed transactions
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-ink/70">
                <Phone className="h-4 w-4 text-gold-ink" aria-hidden="true" />
                <span>
                  Or call{" "}
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="font-semibold text-navy underline decoration-gold/50 underline-offset-4"
                  >
                    {SITE.phone}
                  </a>
                </span>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-dark lg:aspect-[4/5]">
                <Image
                  src="/images/hero-architecture.jpg"
                  alt="Curved contemporary architecture against a clear sky"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative -mt-10 ml-4 mr-4 border border-line bg-white p-5 shadow-[0_18px_45px_rgba(11,31,58,0.08)] sm:ml-8 sm:mr-8 lg:absolute lg:bottom-6 lg:left-6 lg:mt-0 lg:ml-0 lg:mr-0 lg:w-64">
                <p className="font-serif text-4xl leading-none text-navy">20+</p>
                <p className="mt-2 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink/70">
                  Years&apos; combined experience at high street banks and
                  specialist lenders
                </p>
              </div>
            </div>
          </div>
        </Container>

        <div className="mt-12 border-y border-line bg-cream-dark/60 lg:mt-16">
          <Container>
            <ul className="grid gap-4 py-5 sm:grid-cols-3">
              {[
                "£100,000 – £20m facilities",
                "High street, specialist and private lenders",
                "Manchester & London",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/75"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-gold-ink" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      <Section tone="cream">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>Independent, specialist, accountable</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3.35rem)] leading-[1.08] tracking-[-0.02em] text-navy">
                One experienced broker, a wide lender panel, and a straight
                answer from the first call.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="body-copy">
                Private Property Finance is an independent property finance
                broker based in Manchester and London. We arrange bridging
                loans, development finance, commercial mortgages and buy-to-let
                mortgages for overseas investors, typically between £100,000 and
                £20 million.
              </p>
              <TextLink href="/about-us" className="mt-6">
                More about us
              </TextLink>
            </div>
          </div>

          <div className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            <Stat value="£100k–£20m" label="Facilities we arrange" />
            <Stat value="Four" label="Core property finance services" />
            <Stat value="One" label="Named broker, start to finish" />
          </div>
        </Container>
      </Section>

      <Section tone="white" id="services">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we arrange"
              title="Four ways we fund property"
              intro="Commercial, bridging, development and overseas buy-to-let. If you're not sure which fits, call us and we'll talk it through."
            />
            <TextLink href="/services" className="mb-1">
              All services
            </TextLink>
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="navy">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow light>Why clients use us</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.08] text-cream">
                Experience on both sides of the credit table
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
                We have arranged finance for investors, developers and business
                owners across the UK, and we know what makes a lender say yes.
              </p>
              <TextLink href="/team" light className="mt-7">
                Meet the team
              </TextLink>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 lg:col-span-8">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="grid gap-4 border-t border-cream/15 pt-6 sm:grid-cols-[auto_1fr] sm:gap-8"
                >
                  <span className="font-serif text-2xl text-gold-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-cream">
                      {reason.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/60">
                      {reason.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Recent completions"
              title="Deals we've completed"
              intro="A selection of recent transactions. Every case is different, so if your situation is similar, let's talk."
            />
            <TextLink href="/case-studies" className="mb-1">
              See all completed transactions
            </TextLink>
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
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="How it works"
                title="Three steps, one point of contact"
                intro="The process is straightforward. You stay with one broker who knows the case."
              />
              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact-us" className="btn-primary w-fit">
                  Start a conversation
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
                    <h3 className="font-serif text-2xl text-navy">{step.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-8 border-t border-line pt-6">
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <Landmark className="h-4 w-4 text-gold-ink" aria-hidden="true" />
                  High street, specialist and private lenders
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <Building2 className="h-4 w-4 text-gold-ink" aria-hidden="true" />
                  Residential, commercial and land
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <BadgeCheck className="h-4 w-4 text-gold-ink" aria-hidden="true" />
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
