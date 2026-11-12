import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
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
  title: "Founder & Leadership | Private Property Finance",
  description:
    "Founder-led UK property finance brokerage with 20+ years' experience at high street banks and specialist property lenders. Based in Manchester with London meetings by appointment.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder-led property finance"
        title="Direct access to an experienced lender-side broker"
        intro="Private Property Finance is a founder-led practice. You deal directly with the principal broker who assesses your transaction, structures the credit paper and manages it through to completion."
        crumbs={[{ name: "Meet the Team" }]}
        facts={[
          { label: "Coverage", value: "UK-wide · Based in Manchester, London by appointment" },
          { label: "Experience", value: "20+ years in UK property finance" },
          { label: "Accountability", value: "Direct founder contact, start to finish" },
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
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Founder-led practice"
                title="The person on the first call is the person on the file"
              />
              <p className="mt-5 body-copy">
                We are a specialist, founder-led firm by design. That means the
                principal broker who discusses your transaction on day one is
                the same person who writes the credit paper, negotiates with the
                lender and coordinates valuers and solicitors through to
                completion.
              </p>
              <p className="mt-4 body-copy">
                There is no call centre, no handover after instruction, and no
                junior case handler learning your deal from a CRM note.
              </p>
              <div className="mt-8 border-t border-line pt-6">
                <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
                  Speak directly with the founder
                </p>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="mt-2 inline-flex items-center gap-2 font-serif text-2xl text-navy hover:text-gold-ink"
                >
                  <Phone className="h-5 w-5 text-gold-ink" aria-hidden="true" />
                  {SITE.phone}
                </a>
                <p className="mt-2 text-sm text-ink/70">
                  {SITE.hours}. Based in Manchester, with London meetings by
                  appointment.
                </p>
              </div>
            </div>

            <div className="space-y-8 lg:col-span-7">
              {TEAM.map((member) => (
                <article
                  key={member.name}
                  className="border border-line bg-white p-6 sm:p-9"
                >
                  <div className="flex flex-wrap items-start justify-between gap-6">
                    <div className="flex items-center gap-5">
                      {member.image ? (
                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[3px] border border-line bg-cream-dark">
                          <Image
                            src={member.image.src}
                            alt={member.image.alt}
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <span
                          className="grid h-20 w-20 shrink-0 place-items-center rounded-[3px] border border-[#00332E]/25 bg-[#EDF3F1] font-serif text-4xl text-navy"
                          aria-hidden="true"
                        >
                          {member.initials}
                        </span>
                      )}
                      <div>
                        <h2 className="font-serif text-3xl text-navy">
                          {member.name}
                        </h2>
                        <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink">
                          {member.role}
                        </p>
                        <p className="mt-1.5 text-xs text-ink/70">
                          {member.experienceSummary}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.focus.map((focus) => (
                        <span
                          key={focus}
                          className="rounded-[2px] border border-line bg-cream/60 px-2.5 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink/75"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {member.bio.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[0.98rem] leading-relaxed text-ink/80"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-6 border-t border-line pt-5 text-sm">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 font-medium text-navy hover:text-gold-ink"
                    >
                      <Mail className="h-4 w-4 text-gold-ink" aria-hidden="true" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${SITE.phoneHref}`}
                      className="inline-flex items-center gap-2 font-medium text-navy hover:text-gold-ink"
                    >
                      <Phone className="h-4 w-4 text-gold-ink" aria-hidden="true" />
                      {SITE.phone}
                    </a>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-navy underline decoration-gold/50 underline-offset-4 hover:text-gold-ink"
                      >
                        LinkedIn profile
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : null}
                    <Link
                      href="/contact-us#enquiry-form"
                      className="link-arrow ml-auto"
                    >
                      Send an enquiry
                    </Link>
                  </div>
                </article>
              ))}

              <div className="border border-line bg-cream p-6 sm:p-8">
                <Eyebrow>Working with us</Eyebrow>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  We work with property investors, developers and business
                  owners across the UK, as well as overseas clients acquiring UK
                  investment property. If you are an experienced property
                  finance broker interested in how we work, you are welcome to
                  get in touch.
                </p>
                <a
                  href={`mailto:${SITE.email}?subject=Broker%20introduction`}
                  className="link-arrow mt-4"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Have a deal you'd like to discuss?"
        body="Tell us what you're working on. We'll tell you honestly whether we can help, and how."
        primaryLabel="Discuss your finance requirements"
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
