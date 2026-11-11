import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Container, Eyebrow } from "./section";
import { SITE } from "@/lib/content/site";

type CtaBandProps = {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showContactDetails?: boolean;
};

export function CtaBand({
  title = "Have a deal on the table?",
  body = "Tell us what you're working on. We'll tell you honestly whether we can help, and how.",
  primaryLabel = "Discuss a deal",
  primaryHref = "/contact-us",
  showContactDetails = true,
}: CtaBandProps) {
  return (
    <section className="bg-navy py-16 text-cream sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow light>Start a conversation</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2rem,4vw,3.3rem)] leading-[1.06] text-cream">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/65">
              {body}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end">
            <Link href={primaryHref} className="btn-gold w-full justify-center sm:w-auto">
              {primaryLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {showContactDetails ? (
              <div className="flex flex-col gap-2 text-sm text-cream/70 sm:items-end">
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="inline-flex items-center gap-2 hover:text-cream"
                >
                  <Phone className="h-4 w-4 text-gold-soft" aria-hidden="true" />
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 hover:text-cream"
                >
                  <Mail className="h-4 w-4 text-gold-soft" aria-hidden="true" />
                  {SITE.email}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
