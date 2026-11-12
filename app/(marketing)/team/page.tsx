import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import {
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/site/section";
import { TeamCard, TeamFeatureCard } from "@/components/site/team-card";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/content/site";
import { TEAM } from "@/lib/content/team";

export const metadata: Metadata = pageMetadata({
  title: "Meet the Team | Private Property Finance",
  description:
    "Meet the Private Property Finance team — specialists in commercial mortgages, development finance, bridging and buy-to-let, with international support from Dubai. Based in Manchester with London meetings by appointment.",
  path: "/team",
});

export default function TeamPage() {
  const [director, ...team] = TEAM;

  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title="The people behind your property finance"
        intro="A small, specialist team covering commercial mortgages, development finance, bridging loans and buy-to-let — with international support for investors buying property in the UK."
        crumbs={[{ name: "Meet the Team" }]}
        facts={[
          { label: "Coverage", value: "UK-wide · Manchester office, London by appointment" },
          { label: "International", value: "Dubai-based support for overseas investors" },
          { label: "Contact", value: "Direct access from first call to completion" },
        ]}
        actions={
          <>
            <Link href="/contact-us#enquiry-form" className="btn-primary">
              Discuss your finance requirements
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={`tel:${SITE.phoneHref}`} className="btn-outline">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phone}
            </a>
          </>
        }
      />

      <Section tone="cream">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our team"
                title="Specialists across lending, case management and international clients"
              />
            </div>
            <div className="space-y-4 lg:col-span-5">
              <p className="body-copy">
                Between us we cover commercial mortgages, development finance,
                bridging loans and buy-to-let, including finance for
                international investors purchasing property in the UK.
              </p>
              <p className="body-copy">
                Because the team is small, the people who assess your
                transaction stay involved as it moves to the lender, through
                valuation and legals, and on to completion. There is no call
                centre and no handover to a case handler learning your deal
                from a note.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <TeamFeatureCard member={director} />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          <div className="mt-6 grid gap-8 border border-line bg-white p-6 sm:p-9 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <Eyebrow>Working with us</Eyebrow>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                We work with property investors, developers and business owners
                across the UK, as well as overseas clients acquiring UK
                investment property. If you are an experienced property finance
                broker interested in how we work, you are welcome to get in
                touch.
              </p>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-8">
              <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
                Speak to the team
              </p>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="mt-2 flex w-fit items-center gap-2 font-serif text-2xl text-navy hover:text-gold-ink"
              >
                <Phone className="h-5 w-5 text-gold-ink" aria-hidden="true" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2 flex w-fit items-center gap-2 text-sm font-medium text-navy hover:text-gold-ink"
              >
                <Mail className="h-4 w-4 text-gold-ink" aria-hidden="true" />
                {SITE.email}
              </a>
              <p className="mt-2 text-sm text-ink/70">
                {SITE.hours}. Based in Manchester, with London meetings by
                appointment.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Have a deal you'd like to discuss?"
        body="Tell us what you're working on. We'll tell you honestly whether we can help, and how."
        primaryLabel="Discuss your finance requirements"
      />
      {TEAM.filter((member) => member.includeInPersonSchema !== false).map(
        (member) => (
          <JsonLd key={member.name} data={personSchema(member)} />
        ),
      )}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Meet the Team", path: "/team" },
        ])}
      />
    </>
  );
}
