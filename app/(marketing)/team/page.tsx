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
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/content/site";
import { TEAM } from "@/lib/content/team";

export const metadata: Metadata = pageMetadata({
  title: "Meet the Team | Private Property Finance",
  description:
    "Meet the property finance brokers at Private Property Finance: former bank and specialist lender relationship managers based in Manchester and London.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title="Meet the team"
        intro="You'll deal with one of us directly, not a call centre. Here's who we are."
        crumbs={[{ name: "Meet the Team" }]}
        facts={[
          { label: "Based in", value: "Manchester, with London meetings by appointment" },
          { label: "Experience", value: "20+ years in property finance" },
          { label: "Contact", value: "One named broker, start to finish" },
        ]}
        actions={
          <>
            <Link href="/contact-us" className="btn-gold">
              Discuss a deal
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
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="A small, senior team"
                title="The person on the first call is the person on the file"
              />
              <p className="mt-5 body-copy">
                We are deliberately small. That means the broker who
                understands your deal is the one who packages it, speaks to the
                lender and manages it through to completion.
              </p>
              <p className="mt-4 body-copy">
                No call centre, no handover, no junior account manager learning
                your case from a CRM note.
              </p>
              <div className="mt-8 border-t border-line pt-6">
                <p className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink/70">
                  Prefer to talk it through?
                </p>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="mt-2 inline-flex items-center gap-2 font-serif text-2xl text-navy hover:text-gold-ink"
                >
                  <Phone className="h-5 w-5 text-gold-ink" aria-hidden="true" />
                  {SITE.phone}
                </a>
                <p className="mt-2 text-sm text-ink/70">
                  Ask for any of us by name. {SITE.hours}.
                </p>
              </div>
            </div>

            <div className="space-y-8 lg:col-span-7">
              {TEAM.map((member) => (
                <article
                  key={member.name}
                  className="border border-line bg-white p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <span
                        className="grid h-20 w-20 shrink-0 place-items-center border border-gold/60 bg-cream font-serif text-4xl text-gold-ink"
                        aria-hidden="true"
                      >
                        {member.initials}
                      </span>
                      <div>
                        <h2 className="font-serif text-3xl text-navy">
                          {member.name}
                        </h2>
                        <p className="mt-1 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-ink">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.focus.map((focus) => (
                        <span
                          key={focus}
                          className="border border-line px-2.5 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-ink/70"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-relaxed text-ink/70">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-5 border-t border-line pt-5 text-sm">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-navy hover:text-gold-ink"
                    >
                      <Mail className="h-4 w-4 text-gold-ink" aria-hidden="true" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${SITE.phoneHref}`}
                      className="inline-flex items-center gap-2 text-navy hover:text-gold-ink"
                    >
                      <Phone className="h-4 w-4 text-gold-ink" aria-hidden="true" />
                      {SITE.phone}
                    </a>
                  </div>
                </article>
              ))}

              <div className="border border-line bg-cream p-6 sm:p-8">
                <Eyebrow>Growing the team</Eyebrow>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  We add brokers as the business grows, not before. If you are
                  an experienced property finance broker who works the way we
                  do, we would like to hear from you.
                </p>
                <a
                  href={`mailto:${SITE.email}?subject=Broker%20introduction`}
                  className="link-arrow mt-4"
                >
                  Introduce yourself
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Have a deal you'd like to discuss?"
        body="Tell us what you're working on. We'll tell you honestly whether we can help, and how."
      />
      {TEAM.map((member) => (
        <JsonLd key={member.name} data={personSchema(member)} />
      ))}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Meet the Team", path: "/team" },
        ])}
      />
    </>
  );
}
