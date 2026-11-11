"use client";

export function CookieSettingsLink({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("ppf:open-consent"))}
      className={className}
    >
      Cookie settings
    </button>
  );
}
