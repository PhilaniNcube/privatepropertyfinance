import type { Metadata } from "next";
import {
  ArrowDown,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Private Property Finance | UK Property Finance Broker",
  description:
    "Speak to a UK property finance broker. Based in Manchester with London meetings by appointment. Call 0161 399 0207 or email info@privatepropertyfinance.com.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact us"
        intro="Whether you have a live transaction or want to sense-check a proposal, we are happy to talk. We aim to reply the same working day."
        crumbs={[{ name: "Contact Us" }]}
        facts={[
          { label: "Call", value: SITE.phone },
          { label: "Email", value: SITE.email },
          { label: "Hours", value: SITE.hours },
        ]}
        actions={
          <>
            <a href="#enquiry-form" className="btn-primary">
              Start your enquiry
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={`tel:${SITE.phoneHref}`} className="btn-outline">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {SITE.phone}
            </a>
            <a
              href={`https://wa.me/${SITE.mobileHref.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </>
        }
      />

      <Section tone="cream" id="enquiry-form" className="scroll-mt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Enquiry form placed first in DOM & visual order so mobile users reach it immediately after the short intro */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <SectionHeading
                  eyebrow="Start your enquiry"
                  title="Tell us about the deal"
                  intro="The form takes two or three minutes. You will see an indicative position before you are asked for contact details, and nothing is sent until you choose to send it."
                />
              </div>
              <EnquiryForm source="/contact-us" />
            </div>

            {/* Detailed office information and Manchester map placed below the form on mobile and alongside on desktop */}
            <div className="lg:col-span-5">
              <div className="border border-line bg-white p-6 sm:p-8">
                <h2 className="font-serif text-2xl text-navy">
                  Direct contact &amp; office details
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  Based in Manchester, with London meetings by appointment. We
                  arrange property finance for clients across the UK and
                  overseas.
                </p>

                <div className="mt-6 space-y-5 border-t border-line pt-6">
                  <div className="flex gap-4">
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
                        Telephone
                      </p>
                      <a
                        href={`tel:${SITE.phoneHref}`}
                        className="mt-1 block font-serif text-2xl text-navy hover:text-gold-ink"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MessageCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
                        Mobile / WhatsApp
                      </p>
                      <a
                        href={`https://wa.me/${SITE.mobileHref.replace("+", "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block font-serif text-2xl text-navy hover:text-gold-ink"
                      >
                        {SITE.mobile}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="mt-1 block text-sm font-semibold text-navy underline decoration-gold/50 underline-offset-4"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
                        Opening hours
                      </p>
                      <p className="mt-1 text-sm text-ink/80">{SITE.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-line pt-6">
                  <div className="flex gap-4">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink"
                      aria-hidden="true"
                    />
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-navy">
                          {SITE.manchester.label} (Main office)
                        </p>
                        <p className="mt-0.5 text-sm text-ink/80">
                          {SITE.manchester.lines.join(", ")}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-navy">
                          {SITE.london.label}
                        </p>
                        <p className="mt-0.5 text-sm text-ink/80">
                          By appointment. Meetings can be arranged in central
                          London.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[3px] border border-line bg-cream-dark">
                    <iframe
                      title="Private Property Finance, Cubo, 1 Spinningfields, Manchester M3 3EB"
                      src="https://www.google.com/maps?q=Cubo%2C%201%20Spinningfields%2C%20Manchester%20M3%203EB&output=embed"
                      width="100%"
                      height="250"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="block w-full grayscale-[25%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                n: "01",
                title: "We review the figures",
                body: "A broker reads your numbers and the property details before calling, so the first conversation is practical.",
              },
              {
                n: "02",
                title: "We come back with options",
                body: "If we can help, we explain which lenders fit and what they will need. If we can't, we will tell you early.",
              },
              {
                n: "03",
                title: "We manage it through",
                body: "Valuers, solicitors and lender queries are handled by the same broker through to completion.",
              },
            ].map((step) => (
              <div key={step.n} className="border-t border-line pt-5">
                <span className="font-serif text-2xl text-gold-ink">{step.n}</span>
                <h2 className="mt-3 font-serif text-xl text-navy">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{step.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-ink/70">
            {SITE.legalStatement} {SITE.riskWarning}
          </p>
        </Container>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact-us" },
        ])}
      />
    </>
  );
}
