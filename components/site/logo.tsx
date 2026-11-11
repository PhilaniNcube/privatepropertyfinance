import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
    >
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center border font-serif text-[1.1rem] leading-none transition-colors ${
          isLight
            ? "border-gold-soft/70 text-gold-soft"
            : "border-gold/70 text-gold-ink"
        }`}
        aria-hidden="true"
      >
        P
      </span>
      <span className="leading-none">
        <span
          className={`block font-serif text-[0.95rem] tracking-[0.01em] sm:text-[1.15rem] ${
            isLight ? "text-cream" : "text-navy"
          }`}
        >
          Private Property Finance
        </span>
        <span
          className={`mt-1.5 block font-sans text-[0.45rem] font-semibold uppercase tracking-[0.26em] sm:text-[0.52rem] sm:tracking-[0.3em] ${
            isLight ? "text-cream/65" : "text-ink/70"
          }`}
        >
          Property finance brokers
        </span>
      </span>
    </Link>
  );
}
