# Private Property Finance

Marketing site for Private Property Finance, built with Next.js 16 (App Router), Tailwind CSS and Resend. The site follows the PPF developer brief and copy documents: premium private-bank styling, four core service pages, case studies, team page, legal pages, and a multi-step enquiry form with indicative figures.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

```bash
pnpm build   # production build
pnpm start   # run the production build
pnpm lint    # eslint
```

## Where content lives

| Content | File |
| --- | --- |
| Company details, phone, email, offices, legal statement | `lib/content/site.ts` |
| Navigation links | `lib/content/site.ts` |
| Services, page copy, FAQs, facts | `lib/content/services.ts` |
| Completed transactions | `lib/content/case-studies.ts` |
| Team profiles and principles | `lib/content/team.ts` |
| Calculator caps, stress rate and ICR thresholds | `lib/calculator-config.ts` |
| Page titles, descriptions and canonicals | per page `metadata`, via `lib/seo.ts` |

No CMS is required to update the current content. Editing the files above and redeploying is enough. If PPF wants to edit case studies and team members without a developer, the same data shape can be moved into Sanity (the project already has a Studio at `/studio`).

## Enquiry form

- One reusable form: `components/forms/enquiry-form.tsx`.
- Service pages pass `defaultService`, so step 1 is skipped and the deal type is preselected.
- Live figures are calculated in `lib/calculators.ts`; caps and thresholds are in `lib/calculator-config.ts`.
- Submission goes to the server action in `actions/emails/enquiry.ts`.
- Development finance accepts a PDF or Excel appraisal up to 10 MB. The Next server-action body limit is set to 12 MB in `next.config.ts`.
- Spam protection uses Vercel BotID plus a honeypot field.
- The form sends to `info@privatepropertyfinance.com` and sends the enquirer an auto-reply.

### Required environment variables

```bash
RESEND_API_KEY=...
NEXT_PUBLIC_SANITY_PROJECT_ID=...   # only needed for /studio
NEXT_PUBLIC_SANITY_DATASET=...      # only needed for /studio
```

Optional:

```bash
NEXT_PUBLIC_NOINDEX=true   # force noindex (staging previews)
```

Vercel preview deployments are noindexed automatically when `VERCEL_ENV=preview`.

## Analytics and cookies

- GTM container `GTM-N255JSLF` is loaded only after analytics consent.
- Consent Mode v2 defaults are set to denied in the root layout.
- The cookie banner offers Accept, Reject and Manage, and the choice can be changed from the footer.
- Events: `generate_lead` and `calculator_start` (with `deal_type`), plus `contact_click` for phone, email and WhatsApp links. See `lib/gtm.ts`.

## SEO

- `www` is the canonical host. Every page has a self-referencing canonical via `pageMetadata`.
- Old URLs redirect permanently in `next.config.ts`.
- `app/robots.ts` and `app/sitemap.ts` list only indexable www URLs.
- JSON-LD: `FinancialService`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList` and `Person` in `lib/schema.ts`.
- Open Graph/Twitter image: `app/opengraph-image.tsx` (1200×630).
- `/luxury-asset-finance` is unlinked and noindexed until PPF confirms the service.

## Launch checks for PPF

- Confirm the calculator caps, stress rate and ICR thresholds with lenders.
- Confirm the recipient inbox for enquiries and that the Resend domain is verified.
- Supply full team names, bios and headshots (currently a monogram placeholder).
- Supply 8–12 completed transactions with permission to publish.
- Have the privacy policy, cookie policy and complaints page reviewed.
- Verify Search Console and submit `/sitemap.xml` on launch day.
- Add the Google Business Profile and LinkedIn URLs to `sameAs` in `lib/schema.ts`.
