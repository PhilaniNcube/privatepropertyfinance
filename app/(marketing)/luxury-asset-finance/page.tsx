import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow, Section } from "@/components/site/section";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Yacht & Private Jet Finance | Private Property Finance",
  description:
    "Finance for yachts, superyachts and private aircraft, arranged through our specialist lending partners. Discreet, tailored enquiries.",
  path: "/luxury-asset-finance",
  noindex: true,
});

export default function LuxuryAssetFinancePage() {
  return (
    <>
      <PageHero
        eyebrow="By introduction"
        title="Yacht and private jet finance"
        intro="Many of our property clients also own, or are buying, high-value assets such as yachts and private aircraft. Through our specialist lending partners, we can introduce finance for new and pre-owned yachts, superyachts and business jets, as well as refinancing and equity release against assets you already own."
        crumbs={[{ name: "Luxury Asset Finance" }]}
        actions={
          <>
            <Link href="#enquiry" className="btn-gold">
              Make an enquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact-us" className="btn-outline">
              Contact us
            </Link>
          </>
        }
      />

      <Section tone="cream">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Discreet, individually handled</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] text-navy">
                A specialist introduction, not a comparison site
              </h2>
              <p className="mt-5 body-copy">
                Every case is handled discreetly and individually. Tell us about
                the asset, its value and your timescale, and we&apos;ll come back
                to you within one working day.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  "New and pre-owned yachts and superyachts",
                  "Business jets and private aircraft",
                  "Refinancing an existing asset facility",
                  "Equity release against an asset you own",
                ].map((item) => (
                  <div key={item} className="border-t border-line pt-4">
                    <p className="font-serif text-xl text-navy">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-ink/70">
                Introductions are made to specialist lenders and are subject to
                their criteria, status and assessment. This page is not linked
                from the main navigation while the service is being confirmed.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" id="enquiry" className="scroll-mt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Eyebrow>Enquiry</Eyebrow>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.1] text-navy">
                Tell us about the asset
              </h2>
              <p className="mt-5 body-copy">
                Include the asset type, make or model, year, approximate value
                and the finance required in the brief details.
              </p>
            </div>
            <div className="lg:col-span-7">
              <EnquiryForm defaultService="other" source="/luxury-asset-finance" />
            </div>
          </div>
        </Container>
      </Section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Luxury Asset Finance", path: "/luxury-asset-finance" },
        ])}
      />
    </>
  );
}
