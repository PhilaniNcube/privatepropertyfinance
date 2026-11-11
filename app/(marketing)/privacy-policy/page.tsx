import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Private Property Finance",
  description:
    "How Private Property Finance collects, uses and protects personal data, and your rights under UK data protection law.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How we collect, use and protect personal data when you contact us, use this website or ask us to arrange finance."
      updated="10 November 2026"
      path="/privacy-policy"
    >
      <h2>Who we are</h2>
      <p>
        {SITE.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is the data
        controller for the personal data described in this policy. We trade as{" "}
        {SITE.name} from {SITE.manchester.lines.join(", ")}. Our ICO registration
        number is {SITE.icoNumber}.
      </p>
      <p>
        You can contact us about privacy at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phone}.
      </p>

      <h2>What this policy covers</h2>
      <p>
        This policy explains what personal data we collect through this website,
        when you call or email us, and when we act as a broker on a finance
        application. It does not cover the privacy practices of lenders,
        valuers, solicitors or other third parties, who will provide their own
        notices.
      </p>

      <h2>Information we collect</h2>
      <p>We may collect:</p>
      <ul>
        <li>
          <strong>Contact details:</strong> your name, email address, phone
          number, preferred timescale and any details you send through our
          enquiry form.
        </li>
        <li>
          <strong>Deal information:</strong> property address or area, property
          value, loan amount, rent, development costs, GDV, planning status,
          exit route, ownership structure and similar information needed to
          assess a finance enquiry.
        </li>
        <li>
          <strong>Identity and financial information:</strong> when a case
          progresses, documents such as proof of identity, proof of address,
          bank statements, accounts, tax returns, credit reports and evidence of
          deposit.
        </li>
        <li>
          <strong>Technical information:</strong> IP address, browser type,
          device information, pages visited and referral source, where you have
          consented to analytics cookies.
        </li>
        <li>
          <strong>Communications:</strong> emails, call notes, WhatsApp messages
          and other correspondence with us.
        </li>
      </ul>

      <h2>How and why we use your data</h2>
      <p>
        We use personal data to respond to your enquiry, assess whether finance
        may be available, introduce your case to lenders and other funders,
        manage an application to completion, meet our legal and regulatory
        obligations, and keep records of our dealings with you.
      </p>
      <p>Our lawful bases under UK GDPR are:</p>
      <ul>
        <li>
          <strong>Contract or steps before contract:</strong> to provide broker
          services you have asked for.
        </li>
        <li>
          <strong>Legitimate interests:</strong> to run and improve our
          business, prevent fraud, and keep appropriate records.
        </li>
        <li>
          <strong>Legal obligation:</strong> to comply with company, tax,
          anti-money-laundering and regulatory requirements.
        </li>
        <li>
          <strong>Consent:</strong> for analytics cookies and any marketing
          communications where consent is required.
        </li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        To arrange finance, we may share relevant information with lenders,
        specialist funders, private credit funds, valuers, solicitors, packagers,
        compliance advisers and IT or email service providers. We only share what
        is necessary for the purpose. We do not sell your personal data.
      </p>
      <p>
        Some lenders or service providers may process data outside the UK. Where
        that happens, we rely on appropriate safeguards such as UK adequacy
        regulations or the International Data Transfer Addendum.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry records for as long as needed to deal with your enquiry
        and, where a case proceeds, for the period required by our insurers,
        lenders and legal obligations. Typically this is up to six years after
        the end of our relationship. We delete or anonymise data that is no
        longer needed.
      </p>

      <h2>Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>ask for a copy of the personal data we hold about you;</li>
        <li>ask us to correct inaccurate data;</li>
        <li>ask us to delete data in certain circumstances;</li>
        <li>ask us to restrict or object to processing;</li>
        <li>ask for data portability where applicable;</li>
        <li>withdraw consent where processing is based on consent.</li>
      </ul>
      <p>
        To exercise a right, email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We may need to verify
        your identity before responding. You also have the right to complain to
        the Information Commissioner&apos;s Office at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Marketing</h2>
      <p>
        We do not add you to a marketing list without your consent, and we do not
        pre-tick marketing consent on our forms. If you agree to receive updates,
        you can unsubscribe at any time.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        We use essential storage to remember your cookie choice. With your
        permission, we use Google Analytics through Google Tag Manager to
        understand how the site is used. Analytics cookies are not set until you
        accept them. See our <a href="/cookie-policy">Cookie Policy</a> for
        details and how to change your choice.
      </p>

      <h2>Security</h2>
      <p>
        We use appropriate technical and organisational measures to protect
        personal data, including access controls, secure email and reputable
        service providers. No internet transmission is completely secure, so
        please avoid sending sensitive documents by unencrypted email unless we
        have agreed a secure route.
      </p>

      <h2>Complaints</h2>
      <p>
        If you are unhappy with how we have handled your data, please contact us
        first so we can try to put it right. You can also use our{" "}
        <a href="/complaints">complaints procedure</a> or complain to the ICO.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top shows
        the latest version.
      </p>

      <h2>Contact</h2>
      <p>
        {SITE.legalName}, {SITE.manchester.lines.join(", ")}. Email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Telephone {SITE.phone}.
      </p>
    </LegalPage>
  );
}
