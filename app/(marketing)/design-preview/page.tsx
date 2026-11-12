import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/site/section";
import { pageMetadata } from "@/lib/seo";
import { CALCULATOR_CONFIG } from "@/lib/calculator-config";
import { DesignPreviewClient } from "./preview-client";

export const metadata: Metadata = pageMetadata({
  title: "Design & Palette Approval Gate (v4 Brief) | PPF",
  description:
    "Owner approval preview for Private Property Finance: recovered green palette sheet, typography, button states, two homepage directions and remaining owner decisions.",
  path: "/design-preview",
  noindex: true,
});

const PALETTE_TOKENS = [
  {
    name: "Primary PPF Green",
    token: "--ppf-green / bg-navy",
    hex: "#00332E",
    hsl: "hsl(174, 100%, 10%)",
    source: "Recovered from previous site (commit 93993ff~1:app/globals.css --accent)",
    contrastOnLight: "13.75:1 on #FFFFFF (WCAG AAA) · 12.60:1 on #F7F6F2 (WCAG AAA)",
    usage: "Primary buttons, headings, header/footer brand surfaces, key callouts",
  },
  {
    name: "Supporting PPF Green",
    token: "--ppf-green-mid / bg-gold",
    hex: "#00665C",
    hsl: "hsl(174, 100%, 20%)",
    source: "Recovered from previous site (commit 93993ff~1:app/globals.css --accent-foreground)",
    contrastOnLight: "6.82:1 on #FFFFFF (WCAG AA) · 6.25:1 on #F7F6F2 (WCAG AA)",
    usage: "Button hover state, focus-visible ring, rules and interactive accents",
  },
  {
    name: "Deep Green Ink",
    token: "--ppf-green-ink / text-gold-ink",
    hex: "#005249",
    hsl: "hsl(173, 100%, 16%)",
    source: "High-contrast text derivation of --accent-foreground (174° hue)",
    contrastOnLight: "8.95:1 on #FFFFFF (WCAG AAA) · 8.20:1 on #F7F6F2 (WCAG AAA)",
    usage: "Eyebrow labels, step numbers, icons and small uppercase captions on light backgrounds",
  },
  {
    name: "Soft Sage Highlight",
    token: "--ppf-green-soft / text-gold-soft",
    hex: "#A7D7CE",
    hsl: "hsl(169, 38%, 75%)",
    source: "Supporting light green tint for dark #00332E surfaces",
    contrastOnLight: "8.45:1 on #00332E Primary Green (WCAG AAA)",
    usage: "Eyebrows, icons and borders inside dark #00332E sections and footer",
  },
  {
    name: "Warm Paper Background",
    token: "--ppf-paper / bg-cream",
    hex: "#F7F6F2",
    hsl: "hsl(48, 20%, 96%)",
    source: "Restrained private-bank light background (Hoare's Bank reference)",
    contrastOnLight: "12.60:1 with #00332E · 15.8:1 with #18181B",
    usage: "Generous light page background alternating with crisp #FFFFFF sections",
  },
  {
    name: "Primary Body Ink",
    token: "--ppf-ink / text-ink",
    hex: "#18181B",
    hsl: "hsl(240, 5.9%, 10%)",
    source: "Recovered from previous site (commit 93993ff~1:app/globals.css --primary)",
    contrastOnLight: "17.4:1 on #FFFFFF (WCAG AAA) · 15.8:1 on #F7F6F2 (WCAG AAA)",
    usage: "Body copy, form inputs and table values",
  },
];

export default function DesignPreviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Developer Brief v4 · Sections 6, 7 & 8"
        title="Design approval gate & recovered green palette"
        intro="Prepared for Amy's review before final sign-off. This page presents the exact recovered PPF green palette with WCAG AA/AAA contrast checks, the shared style sheet (Source Serif 4 + Source Sans 3, restrained button states), two homepage directions (Static vs. Property Film), and the checklist of remaining owner decisions."
        crumbs={[{ name: "Design & Palette Preview" }]}
      />

      {/* 1. Two Homepage Directions (Interactive Desktop/Mobile + Static/Film Switcher) */}
      <Section tone="cream" id="directions">
        <Container>
          <SectionHeading
            eyebrow="Section 7 & Section 8 Gate"
            title="Two homepage directions for Amy's review"
            intro="Toggle between Direction A (Static Editorial) and Direction B (Homepage Property Film Loop), and switch between Desktop and Mobile (390px) views."
          />
          <div className="mt-8">
            <DesignPreviewClient />
          </div>
        </Container>
      </Section>

      {/* 2. Recovered Green Palette Sheet & Contrast Verification */}
      <Section tone="white" id="palette-sheet">
        <Container>
          <SectionHeading
            eyebrow="Section 6 Deliverable"
            title="Recovered PPF green palette & WCAG AA contrast sheet"
            intro="Exact colour values recovered from the previous PPF stylesheet in git history (commit 93993ff~1:app/globals.css), eliminating the unapproved navy-and-gold palette."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PALETTE_TOKENS.map((item) => (
              <div
                key={item.hex}
                className="flex flex-col overflow-hidden rounded-[3px] border border-line bg-white"
              >
                <div
                  className="flex h-24 items-end justify-between p-4"
                  style={{
                    backgroundColor: item.hex,
                    color:
                      item.hex === "#F7F6F2" || item.hex === "#A7D7CE"
                        ? "#00332E"
                        : "#FFFFFF",
                  }}
                >
                  <span className="font-serif text-lg font-medium">
                    {item.name}
                  </span>
                  <span className="font-mono text-xs uppercase">{item.hex}</span>
                </div>
                <div className="flex flex-1 flex-col justify-between space-y-3 p-5 text-xs">
                  <div className="space-y-1.5">
                    <p className="font-mono text-[0.7rem] text-ink/70">
                      {item.hsl} · {item.token}
                    </p>
                    <p className="font-semibold text-navy">{item.contrastOnLight}</p>
                    <p className="leading-relaxed text-ink/75">{item.usage}</p>
                  </div>
                  <p className="border-t border-line pt-2.5 text-[0.68rem] text-ink/65">
                    <strong>Source:</strong> {item.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Shared Style Sheet: Typography, Button States & Form Controls */}
      <Section tone="cream" id="style-sheet">
        <Container>
          <SectionHeading
            eyebrow="Section 8 Deliverable"
            title="Shared style sheet: typography, buttons & interactive states"
            intro="Refined serif headings (Source Serif 4) paired with a clean sans-serif body font (Source Sans 3), rectangular buttons with subtly softened 3px corners, and accessible keyboard focus states."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            {/* Typography Specimen */}
            <div className="rounded-[3px] border border-line bg-white p-6 sm:p-8 lg:col-span-6">
              <Eyebrow>1. Typography with character</Eyebrow>
              <div className="mt-6 space-y-5">
                <div className="border-b border-line pb-4">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink/60">
                    Heading Font · Source Serif 4 (Fallback: Georgia, serif · SIL Open Font License)
                  </p>
                  <p className="mt-2 font-serif text-3xl leading-tight text-navy">
                    Specialist property finance across the UK
                  </p>
                </div>
                <div className="border-b border-line pb-4">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink/60">
                    Section Heading (H2) · Balanced clamp scale
                  </p>
                  <p className="mt-2 font-serif text-2xl leading-snug text-navy">
                    One experienced broker, a wide lender panel, and a straight answer.
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-ink/60">
                    Body &amp; UI Font · Source Sans 3 (Fallback: Arial, sans-serif · SIL Open Font License)
                  </p>
                  <p className="mt-2 body-copy">
                    Buying through a UK company while living overseas? We can
                    help you explore the available finance. Clear paragraphs,
                    generous line-height (1.75) and high-contrast labels on
                    desktop and mobile.
                  </p>
                </div>
              </div>
            </div>

            {/* Button & Control States */}
            <div className="rounded-[3px] border border-line bg-white p-6 sm:p-8 lg:col-span-6">
              <Eyebrow>2. Restrained, consistent buttons &amp; states</Eyebrow>
              <p className="mt-3 text-sm text-ink/75">
                Original PPF green (`#00332E`), rectangular shape with subtly
                softened 3px corners, hover (`#00665C`), active press state
                (`#002420`), 2px keyboard `:focus-visible` outline, and disabled
                state.
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex flex-wrap items-center gap-4">
                  <button type="button" className="btn-primary">
                    Discuss your finance requirements
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button type="button" className="btn-outline">
                    Secondary outline action
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-1">
                  <button type="button" disabled className="btn-primary">
                    Disabled primary state
                  </button>
                  <Link href="/case-studies" className="link-arrow">
                    Simple secondary text link
                  </Link>
                </div>

                <div className="rounded-[3px] bg-[#00332E] p-5 text-cream">
                  <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-gold-soft">
                    On Dark Green Surface (#00332E)
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <button type="button" className="btn-light">
                      Discuss your finance requirements
                    </button>
                    <button type="button" className="btn-outline-light">
                      Outline on green
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Active Calculator Settings & Owner Sign-Off Checklist */}
      <Section tone="white" id="owner-decisions">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>Section 4.2 Deliverable</Eyebrow>
              <h2 className="mt-3 font-serif text-2xl text-navy sm:text-3xl">
                Active calculator assumptions (`lib/calculator-config.ts`)
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                All calculator thresholds live in a single configuration file (
                <code className="rounded bg-cream px-1.5 py-0.5 font-mono text-xs text-navy">
                  lib/calculator-config.ts
                </code>
                ) so authorised staff can update them in one place. Current
                settings awaiting Amy&apos;s final confirmation:
              </p>
              <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
                {[
                  {
                    label: "BTL rental stress rate (underwriting test, not quoted rate)",
                    value: `${CALCULATOR_CONFIG.btlStressRate}%`,
                  },
                  {
                    label: "BTL Interest Cover Ratio (Personal name)",
                    value: `${CALCULATOR_CONFIG.btlIcrPersonal}%`,
                  },
                  {
                    label: "BTL Interest Cover Ratio (UK Limited Company / SPV)",
                    value: `${CALCULATOR_CONFIG.btlIcrLimited}%`,
                  },
                  {
                    label: "Foreign National Buy-to-Let LTV Cap",
                    value: `${CALCULATOR_CONFIG.btlLtvCap}%`,
                  },
                  {
                    label: "Bridging Loan Gross LTV Cap",
                    value: `${CALCULATOR_CONFIG.bridgingLtvCap}%`,
                  },
                  {
                    label: "Development Finance LTC Cap / LTGDV Cap",
                    value: `${CALCULATOR_CONFIG.developmentLtcCap}% LTC / ${CALCULATOR_CONFIG.developmentLtgdvCap}% LTGDV`,
                  },
                  {
                    label: "Commercial Mortgage LTV Cap (Owner-occupied & Investment)",
                    value: `${CALCULATOR_CONFIG.commercialLtvCap}%`,
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 py-3"
                  >
                    <dt className="text-ink/80">{row.label}</dt>
                    <dd className=" shrink-0 font-mono text-xs font-semibold text-navy">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-6">
              <Eyebrow>Definition of Done · Remaining Owner Inputs</Eyebrow>
              <h2 className="mt-3 font-serif text-2xl text-navy sm:text-3xl">
                Items required from Amy before final P1/P2 sign-off
              </h2>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  {
                    status: "pending",
                    title: "Design Gate & Homepage Film Choice (Sections 6–8)",
                    detail:
                      "Confirm choice between Direction A (Static Editorial) and Direction B (Property Film Loop), and approve Source Serif 4 + Source Sans 3 pairing.",
                  },
                  {
                    status: "pending",
                    title: "Founder Profile Assets for /team (Section 3.1 — P2)",
                    detail:
                      "Supply Amy's preferred full professional name (surname), approved headshot photograph, confirmed personal LinkedIn URL, and any named former bank/lender employers permitted for publication.",
                  },
                  {
                    status: "pending",
                    title: "Verified Commercial Mortgage Case Study (Section 3.2)",
                    detail:
                      "Currently relabelled honestly on /commercial-mortgages as a 'Related bridging example' so no transaction is invented. Supply a verified commercial mortgage completion when ready.",
                  },
                  {
                    status: "pending",
                    title: "Written Owner / Compliance Sign-Off (Sections 3.3 & 4.2)",
                    detail:
                      "Confirm £100,000–£20m facility range, 20+ years experience figure, calculator caps above, company/ICO disclosures, and non-regulated lending scope.",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-3.5 rounded-[3px] border border-line bg-cream/60 p-4"
                  >
                    {item.status === "done" ? (
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#00665C]"
                        aria-hidden="true"
                      />
                    ) : (
                      <AlertCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-ink"
                        aria-hidden="true"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-navy">{item.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-ink/75">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
