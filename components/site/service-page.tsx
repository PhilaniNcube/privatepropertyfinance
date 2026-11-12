import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import {
  Container,
  Eyebrow,
  Section,
  SectionHeading,
  TextLink,
} from "./section";
import { PageHero } from "./page-hero";
import { FaqList } from "./faq-list";
import { CaseStudyCard } from "./case-study-card";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { SITE } from "@/lib/content/site";
import { getCaseStudy } from "@/lib/content/case-studies";
import { SERVICES, type Service } from "@/lib/content/services";

export function ServicePage({ service }: { service: Service }) {
  const example = service.example
    ? getCaseStudy(service.example.caseSlug)
    : undefined;
  const related = SERVICES.filter((item) =>
    service.related.includes(item.slug)
  );

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        intro={service.intro}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.navLabel },
        ]}
        image={service.image}
        facts={service.facts}
        actions={
          <>
            <Link href="#enquiry" className="btn-primary">
              Discuss your finance requirements
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={`tel:${SITE.phoneHref}`} className="btn-outline">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {SITE.phone}
            </a>
          </>
        }
      />

      {service.sections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          tone={index % 2 === 1 ? "white" : "cream"}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                {section.eyebrow ? <Eyebrow>{section.eyebrow}</Eyebrow> : null}
                <h2 className="mt-4 font-serif text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.1] text-navy">
                  {section.title}
                </h2>
                {section.intro ? (
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    {section.intro}
                  </p>
                ) : null}
              </div>
              <div className="lg:col-span-8">
                {section.body ? (
                  <p className="body-copy max-w-2xl">{section.body}</p>
                ) : null}

                {section.items ? (
                  <div
                    className={
                      section.numbered
                        ? "space-y-0"
                        : "grid gap-x-10 gap-y-0 sm:grid-cols-2"
                    }
                  >
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={item.title}
                        className="border-t border-line py-5 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
                      >
                        <div className="flex items-start gap-4">
                          {section.numbered ? (
                            <span className="font-serif text-xl leading-none text-gold-ink">
                              {String(itemIndex + 1).padStart(2, "0")}
                            </span>
                          ) : (
                            <Check
                              className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-ink"
                              aria-hidden="true"
                            />
                          )}
                          <div>
                            <h3 className="font-serif text-xl leading-snug text-navy">
                              {item.title}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.note ? (
                  <p className="mt-6 border-l-2 border-gold pl-4 text-sm leading-relaxed text-ink/70">
                    {section.note}
                  </p>
                ) : null}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {example ? (
        <Section tone="sand">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Eyebrow>
                  {service.example?.eyebrow ?? "Completed transaction"}
                </Eyebrow>
                <h2 className="mt-4 font-serif text-[clamp(1.85rem,3vw,2.65rem)] leading-[1.1] text-navy">
                  {service.example?.heading ??
                    `A recent ${service.navLabel.toLowerCase()} case`}
                </h2>
                <p className="mt-5 body-copy">{service.example?.text}</p>
                <TextLink href="/case-studies" className="mt-6">
                  View all completed transactions
                </TextLink>
              </div>
              <div className="lg:col-span-7">
                <CaseStudyCard study={example} showImage={false} />
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <FaqList faqs={service.faqs} />

      <Section tone="cream" id="enquiry" className="scroll-mt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Eyebrow>Your next step</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] text-navy">
                {service.cta.title}
              </h2>
              <p className="mt-5 body-copy">{service.cta.body}</p>

              <div className="mt-8 space-y-5 border-t border-line pt-6">
                <div>
                  <p className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink/70">
                    Call
                  </p>
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="mt-1 block font-serif text-2xl text-navy hover:text-gold-ink"
                  >
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <p className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink/70">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-sm font-semibold text-navy underline decoration-gold/50 underline-offset-4"
                  >
                    {SITE.email}
                  </a>
                </div>
                <p className="text-xs leading-relaxed text-ink/70">
                  {SITE.hours}. We aim to reply the same working day. There is
                  no obligation and no charge for the first conversation.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <EnquiryForm
                defaultService={service.formValue}
                source={`/${service.slug}`}
              />
            </div>
          </div>
        </Container>
      </Section>

      {related.length ? (
        <Section tone="white">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Related"
                title="Other property finance we arrange"
              />
              <TextLink href="/services" className="mb-1">
                All services
              </TextLink>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="group border border-line p-6 transition-colors hover:bg-cream"
                >
                  <h3 className="font-serif text-2xl text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {item.card.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-ink">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.navLabel, path: `/${service.slug}` },
        ])}
      />
    </>
  );
}
