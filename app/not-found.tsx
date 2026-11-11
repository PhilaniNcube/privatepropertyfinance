import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/section";

export const metadata: Metadata = {
  title: "Page not found | Private Property Finance",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>404</Eyebrow>
          <h1 className="mt-4 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.04] tracking-[-0.025em] text-navy">
            This page has moved on
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
            The page you were looking for isn&apos;t here. It may have been
            replaced as part of the new site. Try one of the links below, or
            call us on{" "}
            <a
              href="tel:+441613990207"
              className="font-semibold text-navy underline decoration-gold/50 underline-offset-4"
            >
              0161 399 0207
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn-gold">
              Back to the homepage
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-outline">
              Our services
            </Link>
            <Link href="/contact-us" className="btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
