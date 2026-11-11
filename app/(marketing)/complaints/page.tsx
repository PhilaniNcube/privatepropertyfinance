import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Complaints | Private Property Finance",
  description:
    "How to raise a complaint with Private Property Finance, what happens next, and how long we aim to take.",
  path: "/complaints",
});

export default function ComplaintsPage() {
  return (
    <LegalPage
      title="Complaints"
      intro="If something has gone wrong, we want to know. This page explains how to complain and what to expect from us."
      updated="10 November 2026"
      path="/complaints"
    >
      <h2>Our aim</h2>
      <p>
        We aim to provide a straightforward, professional service. If we fall
        short, we will investigate honestly, tell you what we found and put it
        right where we can.
      </p>

      <h2>How to complain</h2>
      <p>
        Contact us with your name, the deal or property concerned, what happened
        and what you would like us to do. You can:
      </p>
      <ul>
        <li>
          Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with
          &ldquo;Complaint&rdquo; in the subject line.
        </li>
        <li>
          Call {SITE.phone} and ask for the complaints contact.
        </li>
        <li>
          Write to {SITE.legalName}, {SITE.manchester.lines.join(", ")}.
        </li>
      </ul>
      <p>
        If you have documents or correspondence that help explain the issue,
        please include them.
      </p>

      <h2>What happens next</h2>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          We will acknowledge your complaint within five working days, and tell
          you who is dealing with it.
        </li>
        <li>
          We will review the file, including emails, call notes and any
          correspondence with lenders or professional advisers.
        </li>
        <li>
          We aim to give you a full response within eight weeks. If we need more
          time, we will explain why and tell you when to expect an answer.
        </li>
        <li>
          Our response will set out what we found, any apology or remedy, and
          what you can do if you remain unhappy.
        </li>
      </ol>

      <h2>If you remain unhappy</h2>
      <p>
        Tell us within 14 days of our response and we will review the complaint
        at a senior level. Because we arrange non-regulated finance for business
        and investment purposes, some complaints may not be eligible for the
        Financial Ombudsman Service. We will tell you in our response whether an
        independent route is available for your case.
      </p>
      <p>
        You can also complain to the Information Commissioner&apos;s Office about
        a data protection matter at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Records</h2>
      <p>
        We keep a record of complaints, our investigation and the outcome so we
        can improve how we work and meet our legal obligations.
      </p>
    </LegalPage>
  );
}
