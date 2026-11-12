import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyCard({
  study,
  showImage = true,
  featured = false,
}: {
  study: CaseStudy;
  showImage?: boolean;
  featured?: boolean;
}) {
  return (
    <article
      id={study.slug}
      className={`group flex h-full flex-col border border-line bg-white ${
        featured ? "lg:grid lg:grid-cols-12" : ""
      }`}
    >
      {showImage ? (
        <div
          className={`relative w-full overflow-hidden bg-cream-dark ${
            featured
              ? "aspect-[16/10] lg:col-span-5 lg:aspect-auto lg:min-h-full"
              : "aspect-[4/3]"
          }`}
        >
          <Image
            src={study.image.src}
            alt={study.image.alt}
            fill
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 45vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            className="object-cover"
          />
          {study.image.illustrative ? (
            <span className="absolute bottom-2.5 right-2.5 bg-[#00332E]/85 px-2.5 py-1 font-sans text-[0.62rem] font-medium tracking-[0.06em] text-cream/90 backdrop-blur-[2px]">
              Illustrative photography
            </span>
          ) : null}
        </div>
      ) : null}
      <div
        className={`flex flex-1 flex-col p-6 sm:p-7 ${
          featured ? "lg:col-span-7 lg:p-9" : ""
        }`}
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold-ink">
          <span>{study.loanType}</span>
          <span aria-hidden="true">·</span>
          <span>{study.location}</span>
        </div>

        <h3 className="mt-3 text-balance font-serif text-[1.6rem] leading-tight text-navy sm:text-[1.75rem]">
          {study.headline}
        </h3>

        <dl className="mt-4 grid grid-cols-2 gap-3 border-y border-line py-3 text-xs sm:grid-cols-3">
          <div>
            <dt className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink/65">
              Loan amount
            </dt>
            <dd className="mt-0.5 font-serif text-base font-medium text-navy">
              {study.amount}
            </dd>
          </div>
          <div>
            <dt className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink/65">
              Leverage
            </dt>
            <dd className="mt-0.5 font-serif text-base font-medium text-navy">
              {study.ltv}
            </dd>
          </div>
          {study.term ? (
            <div className="col-span-2 sm:col-span-1">
              <dt className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink/65">
                Term / structure
              </dt>
              <dd className="mt-0.5 font-sans text-xs font-medium text-ink/85">
                {study.term}
              </dd>
            </div>
          ) : null}
        </dl>

        <div className="mt-5 space-y-4 text-sm leading-relaxed">
          <div>
            <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-gold-ink">
              Challenge
            </p>
            <p className="mt-1 text-ink/80">{study.challenge}</p>
          </div>
          <div>
            <p className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-gold-ink">
              How PPF helped &amp; outcome
            </p>
            <p className="mt-1 text-ink/80">{study.outcome}</p>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <Link
            href={`/${study.serviceSlug}`}
            className="inline-flex items-center gap-1.5 font-sans text-[0.84rem] font-semibold text-navy underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-ink"
          >
            {study.serviceLabel}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
