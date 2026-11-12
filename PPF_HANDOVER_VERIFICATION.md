# Private Property Finance (PPF) — Developer Handover & Verification Package (v4 Brief)

**Branch:** `feat/ppf-brief-v4-refinement`  
**Brief Version:** Developer Brief v4 — Approved Design Direction (11 November 2026)  
**Interactive Design Approval Gate URL:** `/design-preview` (`noindex`, excluded from `sitemap.xml` & disallowed in `robots.txt`)

---

## 1. Recovered PPF Green Palette Sheet & Contrast Verification (Section 6)

Recovered directly from the previous PPF website stylesheet in Git history (`commit 93993ff~1:app/globals.css`), replacing the navy-and-gold palette across all pages, buttons, forms, icons, Open Graph image, and favicon.

| Token Name | CSS / Tailwind Token | Hex | HSL | Source in Previous Site | WCAG 2.1 Contrast Ratio | Primary Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary PPF Green** | `--ppf-green` / `bg-navy` / `text-navy` | `#00332E` | `hsl(174, 100%, 10%)` | `93993ff~1:app/globals.css` (`--accent: 174 100% 10%`) | **13.75:1** on `#FFFFFF` (AAA)<br>**12.60:1** on `#F7F6F2` (AAA) | Primary buttons (`.btn-primary`), headings, footer, dark feature callouts |
| **Supporting PPF Green** | `--ppf-green-mid` / `bg-gold` | `#00665C` | `hsl(174, 100%, 20%)` | `93993ff~1:app/globals.css` (`--accent-foreground: 174 100% 20%`) | **6.82:1** on `#FFFFFF` (AA)<br>**6.25:1** on `#F7F6F2` (AA) | Primary button `:hover`, `:focus-visible` 2px outline, accent rules |
| **Deep Green Ink** | `--ppf-green-ink` / `text-gold-ink` | `#005249` | `hsl(173, 100%, 16%)` | High-contrast text derivation of `174°` brand hue | **8.95:1** on `#FFFFFF` (AAA)<br>**8.20:1** on `#F7F6F2` (AAA) | Eyebrow labels, numbered markers, small uppercase captions & icons on light surfaces |
| **Soft Sage Highlight** | `--ppf-green-soft` / `text-gold-soft` | `#A7D7CE` | `hsl(169, 38%, 75%)` | Supporting light green tint for dark `#00332E` surfaces | **8.45:1** on `#00332E` (AAA) | Eyebrows, icons, and dividers inside `#00332E` sections and footer |
| **Warm Paper** | `--ppf-paper` / `bg-cream` | `#F7F6F2` | `hsl(48, 20%, 96%)` | Hoare's Bank-inspired generous light background | **12.60:1** with `#00332E`<br>**15.80:1** with `#18181B` | Primary page background alternating with `#FFFFFF` sections |
| **Primary Body Ink** | `--ppf-ink` / `text-ink` | `#18181B` | `hsl(240, 5.9%, 10%)` | `93993ff~1:app/globals.css` (`--primary: 240 5.9% 10%`) | **17.40:1** on `#FFFFFF` (AAA)<br>**15.80:1** on `#F7F6F2` (AAA) | Body copy, form inputs, and data tables |

---

## 2. UK-Wide Positioning & On-Page SEO Verification (Section 2)

### 2.1 Five Priority HTML `<title>`, Canonical & `<h1>` Verification
All titles render **exact** strings without double-appending the brand name:

| Route | Exact HTML `<title>` | Canonical URL (`200` status) | Single `<h1>` | Robots |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `Private Property Finance \| UK Property Finance Broker` | `https://www.privatepropertyfinance.com/` | `Property finance, arranged by people who've sat on the lender's side` | `index, follow` |
| `/commercial-mortgages` | `Commercial Mortgage Broker UK \| Private Property Finance` | `https://www.privatepropertyfinance.com/commercial-mortgages` | `Commercial mortgages` | `index, follow` |
| `/bridging-loans` | `Bridging Loan Broker UK \| Fast Bridging Finance \| PPF` | `https://www.privatepropertyfinance.com/bridging-loans` | `Bridging loans` | `index, follow` |
| `/development-finance` | `Property Development Finance Broker UK \| PPF` | `https://www.privatepropertyfinance.com/development-finance` | `Property development finance` | `index, follow` |
| `/foreign-national-buy-to-let-mortgages` | `UK Mortgages for Foreign Nationals & Expats \| PPF` | `https://www.privatepropertyfinance.com/foreign-national-buy-to-let-mortgages` | `Buy-to-let mortgages for foreign nationals and overseas investors` | `index, follow` |

### 2.2 Homepage Visible Location Wording
- **Hero eyebrow updated to:** `Specialist property finance across the UK`
- **Supporting hero copy updated to:** *"Based in Manchester, with London meetings by appointment. We work with investors, developers and businesses across the UK, and overseas clients investing in UK property."*
- **Office representation:** Manchester address (`Cubo, 1 Spinningfields, Manchester M3 3EB`) retained on `/contact-us` and in the footer; London consistently described as *"By appointment"*.

### 2.3 Legacy Permanent Redirects Preserved (`next.config.ts`)
All 12 required legacy URLs permanently redirect (`308`/`301`) to their closest relevant live destination:
- `/resources/privacy-policy` → `/privacy-policy`
- `/services/international-clients` → `/foreign-national-buy-to-let-mortgages`
- `/services/bridging-finance` → `/bridging-loans`
- `/services/commercial-mortgages` → `/commercial-mortgages`
- `/services/development-funding` → `/development-finance`
- `/services/buy-to-let-mortgages` → `/foreign-national-buy-to-let-mortgages`
- `/services/care-home-finance` → `/commercial-mortgages`
- `/services/property-sourcing` → `/`
- `/projects` → `/case-studies`
- `/blogs` & `/blogs/:slug*` → `/` (`hmo-investment-strategy` covered)
- `/get-a-quote` → `/contact-us`

---

## 3. Credibility, Transactions & Lending Scope (Section 3)

1. **Founder-Led Profile (`/team`, `lib/content/team.ts`, `lib/schema.ts`):**
   - Updated `/team` and `/about-us` to use consistent **founder-led wording** rather than implying a multi-broker call centre.
   - `TeamMember` and `personSchema()` support Amy's full name, headshot image (`alt` text + Schema `image`), and verified personal LinkedIn (`sameAs`) as soon as supplied.
2. **Commercial Case-Study Mismatch Fixed (`/commercial-mortgages`):**
   - Removed the misleading *"A recent commercial mortgages case"* heading over the £286,000 bridging loan.
   - Relabelled honestly as **`Related bridging example — Related short-term completion when a lender withdrew`** until Amy supplies a verified commercial mortgage completion.
   - Added explicit **`Illustrative photography`** badge to stock photography on `CaseStudyCard` and structured every transaction card with **Finance type**, **Loan amount**, **Location**, **Leverage (LTV)**, **Term**, **Challenge**, and **How PPF helped & outcome**.
3. **Non-Regulated Lending Scope Clarified (`/bridging-loans` & Enquiry Form):**
   - Replaced ambiguous *"Chain breaks"* wording with **`Investment chain breaks`** (*"Securing the next investment or commercial acquisition before an existing portfolio sale completes — for business and investment properties, not owner-occupied homes"*).

---

## 4. Mobile Enquiries & Calculator Reconciliation (Section 4)

### 4.1 Mobile-First Contact Layout (`/contact-us`)
- Added a prominent **"Start your enquiry"** jump button (`href="#enquiry-form"`) in the hero alongside tap-to-call (`0161 399 0207`) and WhatsApp (`07351 088358`).
- Placed the `#enquiry-form` (`scroll-mt-24` so the sticky header never covers its heading) **immediately after the short introduction** in DOM and visual order, with detailed office information and the Manchester map placed **below** the form on mobile.
- Added a separate, optional, **unticked** marketing permission checkbox (`marketingConsent`) distinct from the privacy policy acknowledgement.
- Preserved user inputs when navigating Back/Continue between steps.

### 4.2 Editable Calculator Configuration (`lib/calculator-config.ts`)
Authorised staff can edit all calculator parameters in `lib/calculator-config.ts`:
- `btlStressRate`: `5.5%` (explained in UI as an underwriting stress test, not a quoted product rate)
- `btlIcrPersonal`: `145%` | `btlIcrLimited`: `125%`
- `btlLtvCap`: `75%`
- `bridgingLtvCap`: `75%` (distinguishes **repaid** existing debt vs **remaining** second-charge debt so debt is never double-counted)
- `developmentLtcCap`: `85%` | `developmentLtgdvCap`: `65%`
- `commercialLtvCap`: `70%` (supports both Owner-Occupied EBITDA and Investment rent paths)

### 4.3 Reconciled Calculator Acceptance Test Matrix (Section 4.3)

| Finance Path & Test Case | Inputs | Reconciled Output | Status |
| :--- | :--- | :--- | :--- |
| **Baseline LTV Check** | Property `£1,000,000`, Loan `£600,000` | **LTV: `60%`** · Max loan: `£700k` (Commercial) / `£750k` (BTL & Bridging) | PASS |
| **BTL — Normal (Personal 145% ICR)** | Value `£500,000`, Loan `£300,000`, Rent `£2,200/mo` (`£26,400/yr`), Personal | **LTV: `60%`** · **ICR: `160%`** (`£26,400 / (£300k × 5.5%)`) · **Max loan: `£331k`** (lower of 75% LTV `£375k` and rent cap `£331,034`) · No warning | PASS |
| **BTL — Normal (UK SPV 125% ICR)** | Value `£500,000`, Loan `£350,000`, Rent `£2,200/mo` (`£26,400/yr`), SPV | **LTV: `70%`** · **ICR: `137.1%`** (tested vs `125%`) · **Max loan: `£375k`** (lower of 75% LTV `£375k` and SPV rent cap `£384k`) · No warning | PASS |
| **BTL — Above-Cap** | Value `£500,000`, Loan `£400,000` (`80%` LTV), Rent `£1,500/mo`, Personal | **LTV: `80%`** · **ICR: `81.8%`** · Invites conversation (*"This is outside standard LTV or rental-cover thresholds, but specialist lenders or top-slicing may offer a route. Let's discuss your case."*) | PASS |
| **BTL — Invalid / Zero / Huge** | Value `0`, Loan `NaN` / blank, Rent `Infinity` | Displays `—` cleanly with zero `NaN`, `Infinity`, or crashes | PASS |
| **Bridging — Normal (Existing Debt Repaid)** | Value `£1,000,000`, Loan `£650,000`, Existing Debt `£300,000` (`repaid`) | **LTV: `65%`** (not double-counted as 95%!) · **Gross cap: `£750k`** · **Net cash after repaying debt: `£350k`** | PASS |
| **Bridging — Normal (Existing Debt Remaining)** | Value `£1,000,000`, Loan `£250,000`, Existing Debt `£400,000` (`remaining`) | **Combined LTV: `65%`** (`£250k + £400k`) · **Gross cap: `£750k`** · **Headroom after remaining debt: `£350k`** | PASS |
| **Bridging — Above-Cap** | Value `£1,000,000`, Loan `£550,000`, Existing Debt `£300,000` (`remaining`) | **Combined LTV: `85%`** · Invites conversation (*"This is above standard LTV caps, though higher leverage can sometimes be structured with additional security. Let's discuss your options."*) | PASS |
| **Bridging — Invalid / Negative** | Value `-500`, Loan `0`, Debt `NaN` | Displays `—` cleanly with zero `NaN` or crashes | PASS |
| **Development — Normal** | Land `£400k`, Build `£500k`, Other `£100k`, GDV `£1.5m`, Loan `£800k` | **Total cost: `£1m`** · **LTC: `80%`** (cap 85%) · **LTGDV: `53.3%`** (cap 65%) · **Profit on cost: `50%`** · **Max facility: `£850k`** (lower of `£850k` LTC and `£975k` LTGDV) | PASS |
| **Development — Above-Cap** | Land `£400k`, Build `£500k`, Other `£100k`, GDV `£1.25m`, Loan `£900k` | **Total cost: `£1m`** · **LTC: `90%`** · **LTGDV: `72%`** · Invites conversation for stretched senior / mezzanine | PASS |
| **Development — Invalid / Zero** | Land `0`, Build `0`, GDV `0`, Loan `£500k` | Displays `—` cleanly with zero divide-by-zero / `NaN` / `Infinity` | PASS |
| **Commercial — Normal (Owner-Occupied & Investment)** | Value `£1,000,000`, Loan `£650,000`, Profit `£130,000` (`owner-occupied`) | **LTV: `65%`** (cap 70%) · **Max loan: `£700k`** · **Annual profit to loan ratio: `20%`** | PASS |
| **Commercial — Above-Cap** | Value `£1,000,000`, Loan `£800,000` (`80%` LTV), Rent `£60,000` (`investment`) | **LTV: `80%`** · Invites conversation (*"This is above what most commercial lenders offer on a standalone basis..."*) | PASS |
| **Commercial — Invalid / Huge** | Value `1e30`, Loan `-100` | Clamped safely to upper bound (`£10bn`), Loan `—`, zero `NaN` or overflow | PASS |

---

## 5. Remaining Owner Decisions & Assets Required from Amy

1. **Design Gate Choice (`/design-preview`):** Confirm whether to launch with **Direction A (Static Editorial)** or **Direction B (Homepage Property Film Loop)**, and confirm *Source Serif 4* + *Source Sans 3* typography.
2. **Founder Profile Assets (`/team` — P2):** Supply Amy's preferred full professional name (surname), approved headshot photograph, confirmed personal LinkedIn URL, and any named former bank/lender roles approved for publication.
3. **Commercial Mortgage Case Study (`/commercial-mortgages`):** Supply a verified commercial mortgage completion if replacing the relabelled bridging example.
4. **Written Compliance & Calculator Sign-Off:** Confirm the `£100,000–£20m` facility range, `20+ years` experience figure, active calculator caps in `lib/calculator-config.ts`, legal/ICO disclosures, and live inbox test receipt.
