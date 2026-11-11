import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-ppf ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "white" | "navy" | "sand";
}) {
  const tones = {
    cream: "bg-cream text-ink",
    white: "bg-white text-ink",
    sand: "bg-cream-dark text-ink",
    navy: "bg-navy text-cream",
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`flex items-center gap-3 ${light ? "eyebrow-light" : "eyebrow"}`}>
      <span className={`h-px w-8 ${light ? "bg-gold-soft" : "bg-gold"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2
        className={`mt-4 font-serif text-[clamp(1.9rem,3.2vw,2.9rem)] leading-[1.12] tracking-[-0.02em] ${
          light ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <div className={`mt-5 max-w-2xl ${light ? "body-copy-light" : "body-copy"} ${align === "center" ? "mx-auto" : ""}`}>
          {intro}
        </div>
      ) : null}
    </div>
  );
}

export function TextLink({
  href,
  children,
  light = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={`${light ? "link-arrow-light" : "link-arrow"} ${className}`}>
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function Stat({
  value,
  label,
  light = false,
}: {
  value: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div>
      <p className={`font-serif text-[2.1rem] leading-none ${light ? "text-cream" : "text-navy"}`}>
        {value}
      </p>
      <p
        className={`mt-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${
          light ? "text-cream/65" : "text-ink/70"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
