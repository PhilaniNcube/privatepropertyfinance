import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./logo";
import { CookieSettingsLink } from "@/components/consent/cookie-settings-link";
import { SITE } from "@/lib/content/site";
import { SERVICES } from "@/lib/content/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="container-ppf pt-16 sm:pt-20">
        <div className="grid gap-12 border-b border-cream/10 pb-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              Specialist property finance for investors, developers and
              businesses, from £100,000 to £20 million.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`tel:${SITE.phoneHref}`}
                className="flex items-center gap-3 text-cream/80 transition-colors hover:text-cream"
              >
                <Phone className="h-4 w-4 text-gold-soft" aria-hidden="true" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-cream/80 transition-colors hover:text-cream"
              >
                <Mail className="h-4 w-4 text-gold-soft" aria-hidden="true" />
                {SITE.email}
              </a>
              <p className="flex items-start gap-3 text-cream/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" aria-hidden="true" />
                <span>
                  {SITE.manchester.lines[0]}
                  <br />
                  {SITE.manchester.lines[1]}
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-cream/70 transition-colors hover:text-cream"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Company
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Meet the Team", href: "/team" },
                { label: "Services", href: "/services" },
                { label: "Completed Transactions", href: "/case-studies" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "Complaints", href: "/complaints" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsLink className="text-cream/70 transition-colors hover:text-cream" />
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Offices
            </h2>
            <div className="mt-5 space-y-5 text-sm">
              <div>
                <p className="font-semibold text-cream">{SITE.manchester.label}</p>
                <p className="mt-1 text-cream/60">
                  {SITE.manchester.lines.join(", ")}
                </p>
              </div>
              <div>
                <p className="font-semibold text-cream">{SITE.london.label}</p>
                <p className="mt-1 text-cream/60">{SITE.london.lines.join(", ")}</p>
              </div>
              <div>
                <p className="font-semibold text-cream">Opening hours</p>
                <p className="mt-1 text-cream/60">{SITE.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 py-10">
          <p className="text-xs leading-relaxed text-cream/65">
            {SITE.legalStatement}
          </p>
          <p className="text-xs leading-relaxed text-cream/65">
            {SITE.riskWarning}
          </p>
          <p className="text-xs leading-relaxed text-cream/65">
            The information on this website is general information, not advice.
            All finance is subject to status, lender criteria and valuation.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-cream/10 py-6 text-xs text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://athenamedia.co.za"
              className="underline decoration-cream/20 underline-offset-2 hover:text-cream/70"
              target="_blank"
              rel="noreferrer"
            >
              Athena Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
