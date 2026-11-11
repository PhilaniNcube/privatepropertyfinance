"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown, ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import { NAV_LINKS, SITE } from "@/lib/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-cream/95 backdrop-blur-sm transition-shadow ${
        scrolled ? "border-b border-line shadow-[0_1px_18px_rgba(11,31,58,0.06)]" : "border-b border-transparent"
      }`}
    >
      <div className="container-ppf flex h-20 items-center justify-between gap-6">
        <Logo className="shrink-0" />

        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 whitespace-nowrap py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-navy transition-colors hover:text-gold-ink"
                >
                  {link.label}
                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="border border-line bg-white p-2 shadow-[0_20px_50px_rgba(11,31,58,0.14)]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 font-sans text-sm text-ink/80 transition-colors hover:bg-cream hover:text-navy"
                      >
                        {child.label}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 flex items-center justify-between border-t border-line px-4 py-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold-ink hover:bg-cream"
                    >
                      All services
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-gold-ink ${
                  pathname === link.href ? "text-gold-ink" : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={`tel:${SITE.phoneHref}`}
            className="group flex items-center gap-2 whitespace-nowrap font-sans text-[0.8rem] font-semibold text-navy"
          >
            <Phone className="h-4 w-4 text-gold-ink" aria-hidden="true" />
            {SITE.phone}
          </a>
          <Link
            href="/contact-us"
            className="btn-primary min-h-11 whitespace-nowrap px-4 py-2.5 text-[0.68rem]"
          >
            Discuss a deal
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={`tel:${SITE.phoneHref}`}
            aria-label={`Call ${SITE.phone}`}
            className="grid h-11 w-11 place-items-center border border-line text-navy"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="grid h-11 w-11 place-items-center border border-navy bg-navy text-cream"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-l border-line bg-cream p-0"
            >
              <SheetHeader className="border-b border-line px-6 py-5 text-left">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Logo />
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="flex h-[calc(100vh-6rem)] flex-col justify-between overflow-y-auto px-6 py-8">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href} className="border-b border-line/70 py-1">
                      <Link
                        href={link.href}
                        className="block py-2 font-serif text-2xl text-navy"
                      >
                        {link.label}
                      </Link>
                      {link.children ? (
                        <ul className="mb-3 space-y-1 pl-1">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block py-1.5 font-sans text-sm text-ink/70"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 space-y-4">
                  <a href={`tel:${SITE.phoneHref}`} className="btn-primary w-full">
                    Call {SITE.phone}
                  </a>
                  <Link href="/contact-us" className="btn-gold w-full">
                    Discuss a deal
                  </Link>
                  <p className="text-center font-sans text-xs leading-relaxed text-ink/70">
                    {SITE.hours}
                    <br />
                    {SITE.email}
                  </p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
