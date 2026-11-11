import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { CookieSettingsLink } from "@/components/consent/cookie-settings-link";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy | Private Property Finance",
  description:
    "Which cookies this website uses, why we use them, and how to accept, reject or change your consent.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="What we store on your device, why, and how you can change your choice at any time."
      updated="10 November 2026"
      path="/cookie-policy"
    >
      <h2>What cookies are</h2>
      <p>
        Cookies are small text files placed on your device by a website. Similar
        technologies, such as local storage, can remember a preference without
        sending a file to the server on every request. This policy covers both.
      </p>

      <h2>Your choice</h2>
      <p>
        When you first visit, we ask whether you accept analytics cookies. You
        can accept, reject or manage your choice, and reject is as easy as
        accept. We remember your choice in your browser&apos;s local storage
        under the key <strong>ppf-consent-v1</strong>. That storage is essential
        to respect your decision, so it stays.
      </p>
      <p>
        Change your choice at any time:{" "}
        <CookieSettingsLink className="font-semibold text-navy underline decoration-gold/50 underline-offset-4" />
        .
      </p>

      <h2>Essential storage</h2>
      <p>
        This is needed for the site and enquiry form to work, and to remember
        your cookie choice. It does not track you across other websites.
      </p>

      <h2>Analytics cookies</h2>
      <p>
        If you accept analytics, we load Google Tag Manager and Google Analytics
        4. These help us understand which pages are used, how visitors arrive and
        where the site can be improved. Google may set cookies such as{" "}
        <strong>_ga</strong> and <strong>_ga_*</strong>. We do not use analytics
        cookies for advertising, and we do not sell data.
      </p>
      <p>
        We use Google Consent Mode v2. Before you choose, analytics and
        advertising storage are set to denied. If you reject, they stay denied.
        If you accept, analytics storage is granted. Advertising storage remains
        denied.
      </p>
      <p>
        Google&apos;s own privacy information is available at{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2>Managing cookies in your browser</h2>
      <p>
        You can also block or delete cookies through your browser settings.
        Blocking all cookies may affect how parts of this site work. The
        Information Commissioner&apos;s Office explains how to manage cookies at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Changes</h2>
      <p>
        If we add or remove a cookie or analytics service, we will update this
        page and, where necessary, ask for consent again.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies or privacy:{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </LegalPage>
  );
}
