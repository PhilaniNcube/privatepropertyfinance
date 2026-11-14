import { Plus } from "lucide-react";
import type { FAQ } from "@/lib/content/services";
import { Container, Section, SectionHeading } from "./section";

function faqSlug(question: string): string {
  return (
    "faq-" +
    question
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
}

export function FaqList({
  faqs,
  title = "Frequently asked questions",
  intro,
  id = "faqs",
}: {
  faqs: FAQ[];
  title?: string;
  intro?: string;
  id?: string;
}) {
  return (
    <Section id={id} tone="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Good to know" title={title} intro={intro} />
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    id={faqSlug(faq.question)}
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                    className="group border-b border-line py-5"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-lg leading-snug text-navy marker:hidden sm:text-xl">
                      <span itemProp="name">{faq.question}</span>
                      <Plus
                        className="mt-1 h-4 w-4 shrink-0 text-gold-ink transition-transform duration-300 group-open:rotate-45"
                        aria-hidden="true"
                      />
                    </summary>
                    <div
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p
                        itemProp="text"
                        className="mt-4 max-w-2xl pr-8 text-sm leading-relaxed text-ink/70"
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </details>
              ))}
                </div>
          </div>
          </div>
      </Container>
    </Section>
  );
}
