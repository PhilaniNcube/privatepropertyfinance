import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function LogoMark({
  variant = "dark",
  className = "h-10 w-10",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const isLight = variant === "light";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <rect
        width="64"
        height="64"
        rx="6"
        fill={isLight ? "#002420" : "#00332E"}
      />
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="5"
        stroke="#A7D7CE"
        strokeOpacity={isLight ? "0.35" : "0.22"}
        strokeWidth="1.2"
      />
      <path
        d="M12 52V22.5L32 9.5L52 22.5V52"
        stroke="#A7D7CE"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M24.5 19.5L32 14.6L39.5 19.5"
        stroke="#A7D7CE"
        strokeOpacity="0.65"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 52H55"
        stroke="#A7D7CE"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 21H35C40.8 21 44.5 24.4 44.5 29.5C44.5 34.6 40.8 38 35 38H28.5V44.8C28.5 45.6 29.1 46 30.3 46H32.5V48.5H19.5V46H21.3C22.3 46 22.8 45.6 22.8 44.8V24.2C22.8 23.4 22.3 23 21.3 23H19.5V21ZM28.5 24.8V34.2H34.2C37.2 34.2 38.8 32.4 38.8 29.5C38.8 26.6 37.2 24.8 34.2 24.8H28.5Z"
        fill="#F7F6F2"
      />
    </svg>
  );
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
    >
      <LogoMark
        variant={variant}
        className="h-10 w-10 transition-transform duration-150 group-hover:scale-[1.02]"
      />
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
