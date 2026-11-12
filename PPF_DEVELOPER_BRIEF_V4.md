# Private Property Finance (PPF) — Developer Brief v4 & Approved Design Direction

**Document Date:** 11 November 2026  
**Prepared for:** Website Developer  
**Owner / Approver:** Amy  
**Objective:** Retain the functional improvements, develop a distinctive PPF design, restore PPF's previous green palette, strengthen UK-wide positioning and credibility, improve mobile enquiries, and complete technical and operational sign-off.

> **Precedence Note:** This revised brief takes precedence over earlier instructions where it updates them, including the UK-wide titles and colour direction. Recommendations are based on the live site reviewed on 11 November. Search rankings cannot be guaranteed; these changes improve relevance, crawlability, and conversion foundations.

---

## Executive Summary & Priority Matrix

| Priority | Developer Responsibilities | Client (Amy) Responsibilities |
| :--- | :--- | :--- |
| **P1: Before Final Sign-Off** | • Recover & restore exact previous PPF green palette + supply palette sheet<br>• Prepare 2 bespoke homepage directions + style sheet for design approval gate<br>• Publish the 3 updated UK-wide `<title>` tags & homepage location wording<br>• Correct the commercial mortgages case study mismatch<br>• Move the mobile contact form above the office details/map & add jump link<br>• Document calculator settings & run formula reconciliation tests | • Approve design direction & recovered green palette preview<br>• Approve calculator assumptions, finance range (£100k–£20m), experience claims (20+ years), business/ICO details, and lending scope<br>• Jointly verify enquiry inbox delivery, auto-reply, error handling, and cookie consent behaviour with controlled tests |
| **P2: Next Refinement Release** | • Publish Amy's full professional profile, headshot, LinkedIn, and `Person` schema on `/team`<br>• Publish approved transaction material<br>• Run mobile Lighthouse/PageSpeed & accessibility checks (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1) | • Supply full professional name, headshot, biography, LinkedIn URL, and approved transaction material<br>• Jointly verify Search Console access, sitemap submission, and eligible Google Business Profile details |
| **P3: After Launch** | • Use Search Console evidence after 4–6 weeks to refine service content and prioritise substantive overseas-market pages (do not launch thin country/city pages merely to repeat keywords) | • Review Search Console baseline and enquiry trends |

---

## 1. Keep the Improvements Already Delivered

Do not regress or remove the following existing improvements:
- [ ] **Layout & Navigation:** Retain the restrained layout, architectural imagery, readable headings, visible telephone contact, and four-service navigation. Restore the previous PPF green palette as specified in Section 6.
- [ ] **Technical SEO Foundations:** Preserve the corrected self-referencing canonicals, unique titles, single `<h1>` per page, `www` sitemap, `robots.txt`, and structured data.
- [ ] **Redirects:** Preserve the permanent redirects from the previous site, particularly `/resources/privacy-policy`, which is used in outreach emails.
- [ ] **Conversion & Content Features:** Retain the transaction summaries, FAQs, smart enquiry flow, and published company/contact disclosures, subject to owner approval of their accuracy.

---

## 2. UK-Wide Positioning and On-Page SEO

### 2.1 Replace Three Live Page Titles
The homepage title is already UK-wide, but three service titles still use "Manchester & London". Replace the HTML `<title>` **exactly** as below (do not append the company name a second time through a title template):

| URL Path | Action | Exact HTML `<title>` |
| :--- | :--- | :--- |
| `/` | **Retain** | `Private Property Finance | UK Property Finance Broker` |
| `/commercial-mortgages` | **Replace** | `Commercial Mortgage Broker UK | Private Property Finance` |
| `/bridging-loans` | **Replace** | `Bridging Loan Broker UK | Fast Bridging Finance | PPF` |
| `/development-finance` | **Replace** | `Property Development Finance Broker UK | PPF` |
| `/foreign-national-mortgages` *(or foreign-national page)* | **Retain** | `UK Mortgages for Foreign Nationals & Expats | PPF` |

### 2.2 Update the Visible Location Message
- [ ] On `/`, replace the small hero line `"Property finance broker · Manchester & London"` with:
  > **Specialist property finance across the UK**
- [ ] Use this supporting copy:
  > *"Based in Manchester, with London meetings by appointment. We work with investors, developers and businesses across the UK, and overseas clients investing in UK property."*
  *(Note: Amy must confirm any geographical or lender restrictions before publication.)*
- [ ] **Lead with national coverage, not office locations:** Do not put "Manchester & London" in the primary homepage message or core service-page titles.
- [ ] Keep the real Manchester address on Contact and in the footer. Describe London as **"by appointment"** consistently, rather than presenting it as a separately staffed office.

### 2.3 Retain and Strengthen the Service Pages
- [ ] Keep one indexable URL for each core service. Do not collapse the four service pages into a single generic Services page.
- [ ] Keep `"Property development finance"` as the development `<h1>`. Use descriptive service headings naturally, not repetitive keyword lists.
- [ ] Explain who each service suits, key lender considerations, required documents, the process, fees, and next steps using owner-approved information.
- [ ] Keep relevant FAQs visible to users and consistent with any FAQ schema. *(FAQ markup does not guarantee a Google rich result; commercial finance sites should not expect FAQ rich-result eligibility.)*
- [ ] Link each service to a genuinely relevant completed transaction, other useful services, and the enquiry form using descriptive link text.
- [ ] Check that each meta description is unique and describes that page accurately. Align Open Graph (`og:title`, `og:description`) with the updated UK-wide positioning.

### 2.4 Acceptance Test (Section 2)
- [ ] Check raw HTML and rendered output for all five titles above.
- [ ] Confirm that each canonical resolves to its own final `200`-status `www` URL, with one clear `<h1>` and no accidental `noindex` directive.
- [ ] Inspect representative URLs in Search Console after release.

---

## 3. Credibility, Transactions, and Lending Scope

### 3.1 Publish a Complete Founder Profile (`/team`)
*Current state: Lists "Amy", an initial tile, and a biography, without a surname or professional headshot.*
- [ ] Obtain from Amy: preferred full professional name, approved photograph, biography, and LinkedIn URL.
- [ ] Include relevant previous lender roles where accurate and permitted. **Do not invent** employers, qualifications, memberships, or endorsements.
- [ ] Use founder-led wording consistently if only one broker is being presented. A small firm can be credible without implying a larger team.
- [ ] Update `Person` schema to match the visible profile. Add a LinkedIn `sameAs` link only after confirming the correct profile.
- [ ] **Acceptance:** Published profile contains the approved full name, headshot with meaningful `alt` text, accurate experience, and a working contact route.

### 3.2 Correct the Commercial Case-Study Mismatch (`/commercial-mortgages`)
*Current state: The section headed "A recent commercial mortgages case" currently features a £286,000 bridging loan.*
- [ ] **Preferred fix:** Replace with a verified commercial mortgage completion supplied by Amy.
- [ ] **Fallback fix (if none available):** Remove the category claim or relabel it as a related bridging example. **Do not invent a transaction to fill the space.**
- [ ] **Standard Transaction Format:** Finance type, loan amount, property/location at an appropriate anonymised level, challenge, and outcome. Include LTV, term, or completion date only where verified and approved. Distinguish illustrative photography from photographs of the actual financed property.

### 3.3 Obtain Written Owner / Compliance Approval
- [ ] Confirm the `£100,000–£20m` finance range and `20+ years` of experience with Amy, and keep approved figures consistent in body copy, metadata, schema, and the footer.
- [ ] Confirm legal company name, company number, registered office, ICO details, contact details, and fee/commission disclosure.
- [ ] Obtain appropriate compliance review of the non-regulated lending statement and product wording. *(Specifically: the bridging "chain breaks" example could be understood as funding a purchaser's own home. Clarify the business/investment scope; a footer alone should not have to correct an ambiguous product description.)*
- [ ] Check any broad claims such as whole-market access, speed, or previous client countries against what PPF can substantiate.
- [ ] **Acceptance:** Retain the approved wording and reviewer/date in the handover. The developer implements the approved lending scope (not asked to determine PPF's regulatory position).

---

## 4. Mobile Enquiries and Calculator Approval

### 4.1 Bring the Form Forward (`/contact-us`)
*Current state: On mobile layout, deal-selection buttons sit below the contact details and map, roughly three screens into the page.*
- [ ] Move the enquiry form **immediately after the short introduction**. Place detailed office information and the map **below** it.
- [ ] Add a visible **"Start your enquiry"** link or button that jumps to the form. Ensure the sticky header does not obscure the form's heading (`scroll-margin-top`).
- [ ] Retain tap-to-call and WhatsApp alternatives. Keep service-page forms preselected to the relevant product.
- [ ] Test at `360px` and `390px` mobile widths, tablet, and desktop. Require no horizontal scrolling, readable labels, appropriate numeric keyboards (`inputmode="numeric"` / `decimal`), usable focus states, and accessible validation messages.

### 4.2 Approve Calculator Assumptions Before Final Sign-Off
*Current state: BTL calculator displays a 75% LTV cap and a 145% rental-cover threshold (open owner decisions).*
- [ ] Obtain Amy's approval for:
  - Stress rate
  - Personal / SPV ICR thresholds
  - Each product's LTV cap
  - Development LTC / LTGDV caps
  - Meaning of each output
- [ ] Document where authorised staff can edit these values in the codebase/config and document the active settings.
- [ ] Ensure the tool shows ratios and indicative figures, without implying approval or a lender offer. Retain the exact disclaimer:
  > *"Indicative only, based on what you've entered. This is not an offer of finance or a quote."*

### 4.3 Calculator Acceptance Tests
Provide **one normal**, **one above-cap**, and **one invalid-input** test for each finance path, reconciled to the approved formulas:
- [ ] **General / Edge Cases:** For a £1m property and £600,000 loan, show `60% LTV`. Test zero, blank, invalid, and very large inputs without `NaN`, `Infinity`, or crashes.
- [ ] **BTL:** Independently reconcile rental cover and the maximum loan against the approved stress rate and ICR. Test personal and SPV settings separately. Explain the assumptions without presenting them as a quoted product rate.
- [ ] **Bridging:** Distinguish existing debt that will remain from debt repaid by the new facility. Define gross/net loan amounts so debt and retained interest are not double-counted.
- [ ] **Development:** Reconcile total cost, loan-to-cost (LTC), loan-to-GDV (LTGDV), and profit-on-cost. Test planning/experience fields and appraisal upload if offered.
- [ ] **Commercial:** Test owner-occupied and investment paths and the appropriate rent/profit inputs.
- [ ] **Above-Cap Behaviour:** Above-cap results must invite a conversation, **not** say "approved", "declined", or prevent an enquiry.
- [ ] **Flow & State Preservation:** Contact details come after the indicative result. Preserve inputs when going back, show validation clearly, and retain a general-enquiry route.

---

## 5. Technical, Operational, and Search Sign-Off

### 5.1 Preserve the SEO Repairs
- [ ] Crawl all main pages and sitemap URLs after deployment. Require no broken internal links, accidental `noindex` directives, duplicate titles, or canonicals pointing elsewhere.
- [ ] Keep one consistent `HTTPS www` destination. Old URLs should use permanent redirects (`301`/`308`) to the closest relevant live page, not blanket redirects for every missing address.
- [ ] Specifically recheck these legacy/redirect paths:
  - `/resources/privacy-policy`
  - `/services/international-clients`
  - `/services/bridging-finance`
  - `/services/commercial-mortgages`
  - `/services/development-funding`
  - `/services/buy-to-let-mortgages`
  - `/services/care-home-finance`
  - `/services/property-sourcing`
  - `/projects`
  - `/blogs`
  - `/blogs/hmo-investment-strategy`
  - `/get-a-quote`
- [ ] Validate `FinancialService`, `WebSite`, `BreadcrumbList`, `Service`, and `Person` schema. Schema must reflect visible, approved content. Keep staging and unapproved experimental pages out of the index and sitemap.

### 5.2 Prove the Enquiry and Consent Flow
- [ ] Agree the receiving inbox with Amy. Send controlled, clearly labelled tests for all four product paths and a general enquiry.
- [ ] Demonstrate inbox delivery, complete input/calculation details, the correct deal type, and the expected auto-reply.
- [ ] Test failure handling without a false success message, duplicate submissions, spam protection, and upload restrictions (if uploads are enabled).
- [ ] Check privacy information at submission; keep optional marketing permission separate and unticked.
- [ ] Verify analytics does not load or place non-essential cookies before consent under the agreed implementation. Test **Accept**, **Reject**, **Manage**, and **withdrawal**. Keep rejection as easy as acceptance.
- [ ] Verify `calculator-start` and `successful-lead` events with deal type, plus phone/email/WhatsApp clicks. *(A click on Submit is not proof of a successful lead. Do not send names, email addresses, or sensitive deal details to analytics.)*

### 5.3 Measure Performance and Accessibility
- [ ] Run mobile PageSpeed / Lighthouse checks on **Home**, **Contact**, and **all four service templates**.
- [ ] Supply the reports, fix material regressions, and test keyboard navigation, labels, error feedback, and text/button contrast.
- [ ] Target Core Web Vitals: **LCP ≤ 2.5s**, **INP ≤ 200ms**, and **CLS ≤ 0.1** in field data when available.

### 5.4 Complete the Search Handover
- [ ] Verify the `www` / HTTPS site is covered in Google Search Console, submit the sitemap, and inspect priority pages. Record access, submission status, and any indexing errors.
- [ ] Confirm Google Business Profile eligibility for the actual operating location, including shared-office requirements. Use accurate business details matching the website; **do not** create an appointment-only London office listing unless eligible.
- [ ] Establish a dated baseline for branded discovery and the four service themes. Review queries, impressions, clicks, indexing, and enquiries after 4–6 weeks.

---

## 6. Colour Direction: Retain PPF's Green Identity

**Owner Instruction (Amy | 11 Nov 2026):** Maintain the colours from the previous PPF website, with green as the principal brand colour. Do **not** retain the new navy-and-gold palette as the default or introduce a different palette without Amy's approval.

**Visual Reference:** [https://www.hoaresbank.co.uk/](https://www.hoaresbank.co.uk/)  
*(Use Hoare's Bank as a reference for the green-led, established private-bank feel. PPF's own previous colours remain the source of truth; do not copy another firm's logo, content, or exact design.)*

### Developer Implementation
- [ ] **Recover exact hex values:** Recover the exact previous PPF colour values from the earlier stylesheet, design files, source-control history, or a deployment backup. Do not guess the old hex values or substitute Hoare's Bank's colours.
- [ ] **Design tokens:** Record the recovered primary green, supporting colours, backgrounds, and text colours as shared design tokens. Use them consistently for navigation, buttons, links, section backgrounds, forms, cookie controls, and the footer.
- [ ] **Interactive states:** Check hover, focus, active, disabled, and validation states on desktop and mobile. Retain clear visual hierarchy and readable content.
- [ ] **Accessibility contrast:** Meet WCAG AA contrast: at least **4.5:1** for normal text and **3:1** for large text, plus applicable **3:1** requirements for essential interface boundaries and states. Do not use colour alone to communicate errors.
- [ ] **Preview gate:** Show Amy desktop and mobile previews of **Home**, **a service page**, and **Contact** before publishing the colour change.
- [ ] **Acceptance Deliverable:** Supply a small palette sheet listing each colour value and its previous-site source, contrast checks, and approved previews. If the old palette cannot be recovered, flag this to Amy before choosing replacement shades.

---

## 7. Homepage Property Film: Recommended Option

**Status:** Recommendation for design approval, not an instruction to purchase footage or commission filming.  
**Reference:** [https://www.phinom.com/](https://www.phinom.com/)  
*(Adopt the sense of movement from Phinom's muted, autoplaying, looping background film, while keeping the finance message, telephone contact, and enquiry buttons immediately visible rather than using a logo-only introduction.)*

### Creative Direction
- [ ] Propose a short (~10–15 second) seamless property loop with slow, steady movement and restrained transitions. No sound, rapid cuts, flashing, or compulsory intro screen.
- [ ] Show a credible mix of UK property: commercial or mixed-use buildings, development/construction, and investment residential property. Do not make it look like an estate agent selling only luxury houses.
- [ ] Prefer approved footage of genuine financed properties where available. Otherwise use commercially licensed illustrative footage with appropriate permissions; do not imply that stock properties are PPF transactions.
- [ ] Keep the approved green identity in the surrounding interface. Use a consistent overlay or separate text area so the headline, UK-wide message, and enquiry buttons remain readable throughout every shot.

### Technical & Accessibility Requirements
- [ ] Supply a lightweight poster image and fixed dimensions/aspect ratio. Render the headline, supporting copy, and calls to action as real HTML, not words embedded in the film.
- [ ] Use a compressed, efficiently delivered asset. Load the poster and essential page content first; video must not block interaction or cause layout shifts.
- [ ] Default to the static poster on mobile, for `prefers-reduced-motion`, data-saving settings (`Save-Data`), and failed/unsupported playback. Avoid fetching the full film in these fallback modes where detection is available.
- [ ] For desktop autoplay, use `muted`, `loop`, and `playsinline`, handle autoplay refusal gracefully, and provide a keyboard-accessible pause/play control.
- [ ] Keep decorative footage out of the accessibility reading order (`aria-hidden="true"`).

### Approval & Acceptance
- [ ] Show Amy a **video version** and a **static-image version** before launch.
- [ ] Compare loading performance and enquiry behaviour with the static baseline; retain the static version if the film creates a material regression.

---

## 8. Distinctive PPF Design: Approved Direction

**Creative Direction:** An established, discreet finance firm with a property-led editorial feel, not a generic technology-company template. Originality should come from PPF's identity, people, and evidence, not unfamiliar navigation or decorative effects.

### Seven Approved Design Principles
1. **Typography with character**
   - Preview a refined serif for headings paired with a clean sans-serif for body text (*Source Serif 4* with *Source Sans 3* is one suggested pairing to show Amy, not a final font selection).
   - Show real headlines, paragraphs, and form labels on desktop and mobile. Avoid thin text over film, excessive capitals, and oversized headings that overwhelm the message.
   - Check font licences, use efficient webfont delivery, and maintain readable fallbacks. Keep headings as real text and preserve semantic hierarchy.
2. **Restrained, consistent buttons**
   - Use the original PPF green for primary buttons, rectangular shapes with subtly softened corners, and clear wording such as *"Discuss your finance requirements"*. Secondary actions can be simple text links.
   - Avoid pill-shaped buttons everywhere, glowing effects, and unnecessary animation. Document consistent hover, focus, active, and disabled states.
   - Keep visible keyboard focus, sufficient contrast, and comfortable mobile tap targets.
3. **Editorial layouts, not repeated card grids**
   - Combine a strong opening image or film, an editorial introduction, a straightforward service list, and larger featured transactions.
   - Do not present every section as the same row of rounded cards with generic icons. Use hierarchy, spacing, and photography to distinguish sections.
   - Keep familiar navigation, the four core service routes, and clear enquiry access.
4. **Real transactions and people as the signature**
   - Prioritise actual property photographs (with permission) alongside finance type, publishable loan amount, the challenge, and how PPF helped.
   - Use genuine, consistent team photography. If illustrative stock imagery is necessary, do not present it as a financed property, client, or team member.
   - Do not invent case studies, testimonials, figures, or credentials to complete a design.
5. **Specific copy in PPF's own voice**
   - Replace generic phrases such as *"bespoke solutions"* and *"unlocking opportunities"* with clear explanations of who PPF helps and what it arranges.
   - Example for owner review: *"Buying through a UK company while living overseas? We can help you explore the available finance."*
   - Check every claim against PPF's approved lending scope. Retain the UK-wide positioning and meaningful service headings; do not remove useful content merely to shorten the design.
6. **Green identity, used with restraint**
   - Apply the previous PPF palette (Section 6) with generous light space, strong photography, and consistent interface details. Avoid covering every section in green.
   - Take restraint from Hoare's and the sense of movement from Phinom, not their exact designs, branding, or assets.
7. **Purposeful motion only**
   - One calm property film can be sufficient (subject to Section 7 checks).
   - Avoid decorative animated counters, scrolling text, floating shapes, and entrance animations on every section. Essential content must be available immediately without waiting for animation.
   - Honour `prefers-reduced-motion` settings.

### Design Approval Gate (Required Before Site-Wide Rollout)
- [ ] Show Amy **two bespoke homepage directions** using the existing PPF green palette and the same approved copy.
- [ ] Each direction must include:
  - Desktop and mobile views
  - Typography, buttons, and a verified transaction example
  - A representative service-page preview and Contact preview
- [ ] Supply a small **shared style sheet** covering colours, fonts and fallbacks, spacing, button states, and image treatment.
- [ ] Label any placeholders clearly and list what real assets are needed from Amy before publication.
- [ ] Obtain Amy's choice and approval before full implementation.

---

## 9. Definition of Done & Final Handover Checklist

A visual review alone is not completion. The final handover package must include:
1. [ ] **Recovered Palette & Style Sheet:** Exact previous-site green hex values with source proof, WCAG AA contrast checks, and approved design previews.
2. [ ] **Changed-URL List & Crawl/Redirect Report:** Verification of all 5 priority page `<title>` tags, `200` status self-referencing `www` canonicals, single `<h1>`s, schema validation, and all 12 legacy redirect routes.
3. [ ] **Calculator Documentation & Test Suite:** Location of editable parameters, active settings table, and reconciled test evidence (1 normal, 1 above-cap, 1 invalid-input test across BTL, Bridging, Development, and Commercial).
4. [ ] **Enquiry & Consent Evidence:** Controlled test deliveries to Amy's inbox (all 4 products + general enquiry), auto-reply verification, error handling test, cookie banner Reject/Accept/Manage/Withdraw verification, and analytics event verification without PII leakage.
5. [ ] **Performance & Accessibility Reports:** Mobile Lighthouse/PageSpeed reports for Home, Contact, and all 4 service pages (targeting LCP ≤2.5s, INP ≤200ms, CLS ≤0.1) + keyboard/contrast audit.
6. [ ] **Search Console & GBP Status:** Search Console `www` property verification, sitemap submission status, priority URL inspection results, and Google Business Profile eligibility confirmation.
7. [ ] **Owner Decisions & Compliance Sign-Off Log:** Written record of Amy's approvals for finance range, experience claims, calculator assumptions, company/ICO disclosures, and non-regulated lending wording.
