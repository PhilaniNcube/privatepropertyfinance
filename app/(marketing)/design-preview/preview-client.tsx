"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Eye, Monitor, Phone, Smartphone } from "lucide-react";
import { PropertyFilmHeroMedia } from "@/components/site/property-film-hero";
import { CaseStudyCard } from "@/components/site/case-study-card";
import { CASE_STUDIES } from "@/lib/content/case-studies";
import { SITE } from "@/lib/content/site";

export function DesignPreviewClient() {
  const [direction, setDirection] = useState<"A" | "B">("A");
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop");
  const featuredStudy = CASE_STUDIES[0];

  return (
    <div className="space-y-10">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[3px] border border-line bg-white p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
            Homepage direction:
          </span>
          <button
            type="button"
            onClick={() => setDirection("A")}
            aria-pressed={direction === "A"}
            className={
              direction === "A"
                ? "btn-primary min-h-10 px-4 py-2 text-xs"
                : "btn-outline min-h-10 px-4 py-2 text-xs"
            }
          >
            Direction A: Static Editorial (Hoare&apos;s Restraint)
          </button>
          <button
            type="button"
            onClick={() => setDirection("B")}
            aria-pressed={direction === "B"}
            className={
              direction === "B"
                ? "btn-primary min-h-10 px-4 py-2 text-xs"
                : "btn-outline min-h-10 px-4 py-2 text-xs"
            }
          >
            Direction B: Property Film Loop (Phinom Motion)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="mr-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink/70">
            Preview width:
          </span>
          <button
            type="button"
            onClick={() => setViewportMode("desktop")}
            aria-pressed={viewportMode === "desktop"}
            className={`inline-flex min-h-9 items-center gap-1.5 rounded-[3px] border px-3 py-1.5 text-xs font-semibold ${
              viewportMode === "desktop"
                ? "border-[#00332E] bg-[#00332E] text-white"
                : "border-line bg-cream text-navy"
            }`}
          >
            <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
            Desktop
          </button>
          <button
            type="button"
            onClick={() => setViewportMode("mobile")}
            aria-pressed={viewportMode === "mobile"}
            className={`inline-flex min-h-9 items-center gap-1.5 rounded-[3px] border px-3 py-1.5 text-xs font-semibold ${
              viewportMode === "mobile"
                ? "border-[#00332E] bg-[#00332E] text-white"
                : "border-line bg-cream text-navy"
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
            Mobile (390px)
          </button>
        </div>
      </div>

      {/* Live Interactive Direction Preview Frame */}
      <div
        className={`mx-auto overflow-hidden rounded-[3px] border border-line bg-cream shadow-sm transition-all ${
          viewportMode === "mobile" ? "max-w-[390px]" : "w-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line bg-white px-5 py-3 text-xs">
          <span className="font-semibold text-navy">
            {direction === "A"
              ? "Direction A — Established Static Editorial (Hoare's Bank reference)"
              : "Direction B — Property Film Loop with Immediate HTML CTAs (Phinom reference)"}
          </span>
          <span className="text-ink/65">
            {viewportMode === "mobile"
              ? "390px Mobile View (Film defaults to static poster)"
              : "Desktop View"}
          </span>
        </div>

        {direction === "A" ? (
          /* Direction A: Split Light Editorial Layout */
          <div className="p-6 sm:p-10">
            <div
              className={
                viewportMode === "mobile"
                  ? "space-y-8"
                  : "grid items-center gap-10 lg:grid-cols-12"
              }
            >
              <div className={viewportMode === "mobile" ? "" : "lg:col-span-6"}>
                <p className="eyebrow">Specialist property finance across the UK</p>
                <h2 className="mt-4 font-serif text-3xl leading-[1.08] text-navy sm:text-4xl">
                  Property finance, arranged by people who&apos;ve sat on the
                  lender&apos;s side
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:text-base">
                  Commercial mortgages, bridging loans, development finance and
                  buy-to-let for overseas investors, from £100,000 to £20
                  million.
                </p>
                <p className="mt-3 border-l-2 border-gold pl-3.5 text-xs leading-relaxed text-ink/75 sm:text-sm">
                  Based in Manchester, with London meetings by appointment. We
                  work with investors, developers and businesses across the UK,
                  and overseas clients investing in UK property.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/contact-us#enquiry-form" className="btn-primary">
                    Discuss your finance requirements
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/case-studies" className="link-arrow">
                    See completed transactions
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <p className="mt-5 flex items-center gap-2 text-xs text-ink/75">
                  <Phone className="h-3.5 w-3.5 text-gold-ink" aria-hidden="true" />
                  Direct telephone:{" "}
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="font-semibold text-navy underline"
                  >
                    {SITE.phone}
                  </a>
                </p>
              </div>
              <div className={viewportMode === "mobile" ? "" : "lg:col-span-6"}>
                <PropertyFilmHeroMedia mode="static" />
              </div>
            </div>
          </div>
        ) : (
          /* Direction B: Editorial Property Film Loop with Dedicated Text Overlay/Column */
          <div className="bg-[#00332E] p-6 text-cream sm:p-10">
            <div
              className={
                viewportMode === "mobile"
                  ? "space-y-8"
                  : "grid items-center gap-10 lg:grid-cols-12"
              }
            >
              <div className={viewportMode === "mobile" ? "" : "lg:col-span-6"}>
                <p className="eyebrow-light">
                  Specialist property finance across the UK
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-[1.08] text-cream sm:text-4xl">
                  Property finance, arranged by people who&apos;ve sat on the
                  lender&apos;s side
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-cream/85 sm:text-base">
                  Commercial mortgages, bridging loans, development finance and
                  buy-to-let for overseas investors, from £100,000 to £20
                  million.
                </p>
                <p className="mt-3 border-l-2 border-gold-soft pl-3.5 text-xs leading-relaxed text-cream/80 sm:text-sm">
                  Based in Manchester, with London meetings by appointment. We
                  work with investors, developers and businesses across the UK,
                  and overseas clients investing in UK property.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/contact-us#enquiry-form" className="btn-light">
                    Discuss your finance requirements
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/case-studies" className="link-arrow-light">
                    See completed transactions
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <p className="mt-5 flex items-center gap-2 text-xs text-cream/85">
                  <Phone className="h-3.5 w-3.5 text-gold-soft" aria-hidden="true" />
                  Direct telephone:{" "}
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="font-semibold text-cream underline"
                  >
                    {SITE.phone}
                  </a>
                </p>
              </div>
              <div className={viewportMode === "mobile" ? "" : "lg:col-span-6"}>
                <PropertyFilmHeroMedia
                  mode={viewportMode === "mobile" ? "static" : "film"}
                />
              </div>
            </div>
          </div>
        )}

        {/* Featured Verified Transaction Preview inside the Frame */}
        <div className="border-t border-line bg-white p-6 sm:p-10">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="eyebrow">Featured transaction example</p>
              <h3 className="mt-1 font-serif text-2xl text-navy">
                Real transactions and people as the signature
              </h3>
            </div>
            <span className="text-xs text-ink/65">
              Illustrative photography clearly distinguished from actual property photos
            </span>
          </div>
          <CaseStudyCard
            study={featuredStudy}
            featured={viewportMode === "desktop"}
          />
        </div>
      </div>

      {/* Quick Links to Live Representative Templates */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Live Homepage (/)",
            description:
              "Green identity, UK-wide hero message, editorial service list & featured transaction",
            href: "/",
          },
          {
            title: "Representative Service Page (/commercial-mortgages)",
            description:
              "Updated UK-wide HTML title, underwriting/documents/fees sections & relabelled bridging case",
            href: "/commercial-mortgages",
          },
          {
            title: "Mobile-First Contact & Calculator (/contact-us)",
            description:
              "Jump button, form immediately after intro above office details & map, reconciled calculators",
            href: "/contact-us",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col justify-between rounded-[3px] border border-line bg-white p-5 transition-colors hover:border-[#00665C] hover:bg-cream/40"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-gold-ink">
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                Live preview
              </span>
              <h3 className="mt-2 font-serif text-xl text-navy">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/75">
                {item.description}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-navy group-hover:text-gold-ink">
              Open live page
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
