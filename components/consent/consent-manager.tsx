"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleTagManager } from "@next/third-parties/google";
import { Cookie, X } from "lucide-react";
import { trackContactClick } from "@/lib/gtm";

type ConsentChoice = {
  analytics: boolean;
  decidedAt: string;
};

const STORAGE_KEY = "ppf-consent-v1";
const GTM_ID = "GTM-N255JSLF";

function updateGoogleConsent(analytics: boolean) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  window.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function ConsentManager() {
  const [choice, setChoice] = useState<ConsentChoice | null | undefined>(undefined);
  const [panelOpen, setPanelOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ConsentChoice;
        setChoice(parsed);
        setAnalytics(Boolean(parsed.analytics));
        updateGoogleConsent(Boolean(parsed.analytics));
      } else {
        setChoice(null);
      }
    } catch {
      setChoice(null);
    }

    const openSettings = () => {
      setIsSettingsOpen(true);
      setPanelOpen(true);
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) trackContactClick("phone");
      else if (href.startsWith("mailto:")) trackContactClick("email");
      else if (href.includes("wa.me") || href.includes("whatsapp"))
        trackContactClick("whatsapp");
    };
    document.addEventListener("click", onClick);
    window.addEventListener("ppf:open-consent", openSettings);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("ppf:open-consent", openSettings);
    };
  }, []);

  const save = (nextAnalytics: boolean) => {
    const next: ConsentChoice = {
      analytics: nextAnalytics,
      decidedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Storage can fail in private mode; the choice still applies this session.
    }
    setChoice(next);
    setAnalytics(nextAnalytics);
    setPanelOpen(false);
    setIsSettingsOpen(false);
    updateGoogleConsent(nextAnalytics);
  };

  const visible = choice === null || isSettingsOpen;

  return (
    <>
      {choice?.analytics ? <GoogleTagManager gtmId={GTM_ID} /> : null}

      {visible ? (
        <div
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-cream/20 bg-navy text-cream shadow-[0_-10px_40px_rgba(0,51,46,0.28)]"
          role="dialog"
          aria-modal="false"
          aria-label="Cookie preferences"
        >
          <div className="container-ppf py-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex max-w-2xl gap-3">
                <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-gold-soft" aria-hidden="true" />
                <div>
                  <p className="font-sans text-sm font-semibold text-cream">
                    Cookies and analytics
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-cream/80">
                    We use essential cookies to make the site work. With your
                    permission, we also use Google Analytics to understand how
                    the site is used. You can accept, reject or manage this now, and
                    change it at any time.{" "}
                    <Link href="/cookie-policy" className="underline decoration-cream/40 underline-offset-2 hover:text-cream">
                      Cookie Policy
                    </Link>
                  </p>
                  {panelOpen ? (
                    <div className="mt-4 space-y-3 border-t border-cream/15 pt-4">
                      <label className="flex items-start gap-3 text-xs text-cream/80">
                        <input type="checkbox" checked disabled className="mt-0.5 h-4 w-4 accent-[#A7D7CE]" />
                        <span>
                          <span className="font-semibold text-cream">Essential</span>
                          <br />
                          Required for the site and enquiry form to work.
                        </span>
                      </label>
                      <label className="flex items-start gap-3 text-xs text-cream/80">
                        <input
                          type="checkbox"
                          checked={analytics}
                          onChange={(event) => setAnalytics(event.target.checked)}
                          className="mt-0.5 h-4 w-4 accent-[#A7D7CE]"
                        />
                        <span>
                          <span className="font-semibold text-cream">Analytics</span>
                          <br />
                          Google Analytics, loaded through Google Tag Manager.
                        </span>
                      </label>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                {panelOpen ? (
                  <button type="button" onClick={() => save(analytics)} className="btn-light min-h-10 px-4 py-2 text-xs">
                    Save choices
                  </button>
                ) : (
                  <>
                    <button type="button" onClick={() => save(false)} className="btn min-h-10 border-cream/45 bg-transparent px-4 py-2 text-xs text-cream hover:bg-cream hover:text-navy">
                      Reject
                    </button>
                    <button type="button" onClick={() => setPanelOpen(true)} className="btn min-h-10 border-cream/45 bg-transparent px-4 py-2 text-xs text-cream hover:bg-cream hover:text-navy">
                      Manage
                    </button>
                    <button type="button" onClick={() => save(true)} className="btn-light min-h-10 px-4 py-2 text-xs">
                      Accept
                    </button>
                  </>
                )}
                {isSettingsOpen ? (
                  <button
                    type="button"
                    aria-label="Close cookie settings"
                    onClick={() => {
                      setIsSettingsOpen(false);
                      setPanelOpen(false);
                    }}
                    className="grid h-10 w-10 place-items-center border border-cream/25 text-cream/70 hover:text-cream"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
