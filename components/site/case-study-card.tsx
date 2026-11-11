import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyCard({
  study,
  showImage = true,
}: {
  study: CaseStudy;
  showImage?: boolean;
}) {
  return (
    <article id={study.slug} className="group flex h-full flex-col border border-line bg-white">
      {showImage ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-dark">
          <Image
            src={study.image.src}
            alt={study.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
          <span>{study.location}</span>
          <span aria-hidden="true">·</span>
          <span>{study.loanType}</span>
          <span aria-hidden="true">·</span>
          <span>{study.ltv}</span>
        </div>
        <h3 className="mt-4 text-balance font-serif text-[1.65rem] leading-tight text-navy">
          {study.headline}
        </h3>
        {study.term ? (
          <p className="mt-2 font-sans text-xs text-ink/70">{study.term}</p>
        ) : null}
        <div className="mt-5 space-y-4 border-t border-line pt-5 text-sm leading-relaxed">
          <div>
            <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-gold-ink">
              Challenge
            </p>
            <p className="mt-1.5 text-ink/70">{study.challenge}</p>
          </div>
          <div>
            <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-gold-ink">
              Outcome
            </p>
            <p className="mt-1.5 text-ink/70">{study.outcome}</p>
          </div>
        </div>
        <div className="mt-auto pt-6">
          <Link
            href={`/${study.serviceSlug}`}
            className="inline-flex items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy hover:text-gold-ink"
          >
            {study.serviceLabel}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
