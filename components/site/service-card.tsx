import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/content/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group flex h-full flex-col border-t border-navy/25 bg-transparent p-6 transition-colors duration-300 hover:bg-white sm:p-8"
    >
      <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-ink">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-6 font-serif text-[1.65rem] leading-tight text-navy">
        {service.card.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
        {service.card.body}
      </p>
      <span className="mt-7 inline-flex items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy">
        Explore {service.navLabel.toLowerCase()}
        <ArrowUpRight
          className="h-4 w-4 text-gold-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
