export type FAQ = { question: string; answer: string };

export type ContentItem = { title: string; body: string };

export type ContentSection = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  body?: string;
  items?: ContentItem[];
  note?: string;
  numbered?: boolean;
};

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  formValue: "commercial" | "bridging" | "development" | "btl";
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: { src: string; alt: string };
  facts: { label: string; value: string }[];
  sections: ContentSection[];
  example?: {
    caseSlug: string;
    eyebrow?: string;
    heading?: string;
    text: string;
  };
  faqs: FAQ[];
  cta: { title: string; body: string };
  related: string[];
  card: { title: string; body: string };
};

export const SERVICES: Service[] = [
  {
    slug: "commercial-mortgages",
    name: "Commercial Mortgages",
    navLabel: "Commercial Mortgages",
    formValue: "commercial",
    metaTitle: "Commercial Mortgage Broker UK | Private Property Finance",
    metaDescription:
      "UK commercial mortgage broker for offices, retail, industrial and mixed-use property. Owner-occupiers and investors, £100k–£20m. Speak to an experienced broker.",
    eyebrow: "Commercial mortgages · UK-wide",
    h1: "Commercial mortgages",
    intro:
      "Whether you are buying your own business premises, adding to a commercial investment portfolio or refinancing an existing facility, we arrange commercial mortgages across the UK tailored to the property, the business behind it and your timescale.",
    image: {
      src: "/images/commercial-offices.jpg",
      alt: "Glass-fronted commercial office buildings",
    },
    facts: [
      { label: "Typical loan size", value: "£100,000 – £20 million" },
      { label: "Borrowers", value: "Trading businesses, SPVs, partnerships, trusts" },
      { label: "Security", value: "Offices, retail, industrial, mixed-use" },
    ],
    sections: [
      {
        id: "what-we-help-with",
        eyebrow: "Who it suits",
        title: "What we can help with",
        items: [
          {
            title: "Owner-occupier mortgages",
            body: "Buying or refinancing the premises your business trades from, rather than paying rent to a landlord.",
          },
          {
            title: "Commercial investment mortgages",
            body: "Acquiring or refinancing income-producing offices, retail units, industrial estates, warehouses and mixed-use blocks.",
          },
          {
            title: "Semi-commercial property",
            body: "Retail or office premises with residential flats above, and other mixed commercial and residential assets.",
          },
          {
            title: "Refinancing and capital raising",
            body: "Replacing an expiring facility, restructuring debt or releasing equity for your next acquisition.",
          },
          {
            title: "Trading and specialist sectors",
            body: "Care homes, hotels, hospitality, medical premises and owner-managed trading properties.",
          },
          {
            title: "Company, trust and pension structures",
            body: "Facilities arranged for trading limited companies, SPVs, LLPs, trusts and pension schemes (SIPP and SSAS).",
          },
        ],
      },
      {
        id: "lender-view",
        eyebrow: "Lender considerations",
        title: "What lenders will look at",
        items: [
          {
            title: "The property and lease profile",
            body: "Asset type, condition, location, alternative-use value, and—if let—the tenant covenant and unexpired lease term (WAULT).",
          },
          {
            title: "For owner-occupiers: trading performance",
            body: "Historic accounts, EBITDA/operating profit, debtor/creditor profile and whether the business can service the debt comfortably.",
          },
          {
            title: "For investors: rental cover",
            body: "Whether passing or projected market rent covers interest and capital repayments against the lender's stress rate.",
          },
          {
            title: "Deposit and borrower track record",
            body: "Your equity contribution, sector experience and net worth statement.",
          },
        ],
        note: "We review these points with you on the first call and tell you upfront what a credit committee is likely to ask for.",
      },
      {
        id: "documents-required",
        eyebrow: "Preparation",
        title: "Typical documents required",
        items: [
          {
            title: "Property details and leases",
            body: "Heads of terms or address, purchase price or estimated value, occupational leases and tenancy schedule (for investment property).",
          },
          {
            title: "Financial accounts (owner-occupiers)",
            body: "Last two to three years' filed accounts, up-to-date management figures and recent business bank statements.",
          },
          {
            title: "Asset and liability statement",
            body: "Summary of existing properties, mortgages, rental income and personal or company balance sheet.",
          },
          {
            title: "Identity and structure",
            body: "Proof of ID, proof of address, company structure chart and confirmation of deposit source.",
          },
        ],
      },
      {
        id: "how-it-works",
        eyebrow: "Process, fees & next steps",
        title: "How it works and what it costs",
        numbered: true,
        items: [
          {
            title: "Initial review",
            body: "We discuss the property, the business or tenancy profile, and your timescale, then confirm whether the deal is financeable.",
          },
          {
            title: "Indicative terms and fee transparency",
            body: "We approach suitable high street, challenger and specialist lenders and present indicative terms. Typical costs include a lender arrangement fee, RICS valuation fee and legal costs. Any broker fee or lender commission is explained and agreed with you in writing before we proceed.",
          },
          {
            title: "Packaging to completion",
            body: "We write the credit submission, instruct the valuation alongside the lender, and coordinate with solicitors through to drawdown.",
          },
        ],
      },
    ],
    example: {
      caseSlug: "hotel-purchase-commercial-mortgage-680k",
      eyebrow: "Completed transaction",
      heading: "A loss-making hotel bought with a specialist lender",
      text: "The hotel had traded at a loss for two years, so historic figures alone would not have supported a purchase. We built the case around a business plan and financial forecasts showing how the operator would return it to profit, and placed it with a specialist lender at 70% of vacant possession value. The facility ran interest-only for two years before capital repayments began.",
    },
    faqs: [
      {
        question: "How much deposit do I need for a commercial mortgage?",
        answer:
          "It depends on the property, the lender and your circumstances. Most lenders want a meaningful deposit, and more for specialist or higher-risk property. We'll give you a realistic figure for your deal on the first call.",
      },
      {
        question: "Can I get a commercial mortgage for a new business?",
        answer:
          "Some lenders will consider it, particularly if you have relevant industry experience, a solid business plan or a larger deposit. It's harder than for an established business, which is exactly where you need a broker.",
      },
      {
        question: "How long does a commercial mortgage take?",
        answer:
          "Typically several weeks from application to completion, depending on the valuation, legal work and how complex the case is. We keep the process moving and tell you what's holding it up.",
      },
      {
        question: "Can I buy commercial property through my pension?",
        answer:
          "Yes. SIPPs and SSASs can often buy commercial property, and some lenders will lend to the pension scheme. You should take advice from your pension provider as well.",
      },
      {
        question: "Do you only work with high street banks?",
        answer:
          "No. We work with high street banks, specialist and challenger lenders, and private lenders, so we can place cases that don't fit standard criteria.",
      },
      {
        question: "Can you get an 85% commercial mortgage?",
        answer:
          "It's rare. Most commercial lenders cap borrowing well below that, and higher-risk property types lower it further. Where a client needs more, it can sometimes be done with additional security, such as a charge over another property. We'll tell you early what's realistic for your deal.",
      },
      {
        question:
          "Is it difficult to get a commercial mortgage through a limited company?",
        answer:
          "Not usually. Many lenders are comfortable lending to limited companies and SPVs, though they'll normally ask the directors for personal guarantees and look at the company's accounts or the directors' own finances. Newly formed companies set up to buy property are widely accepted.",
      },
      {
        question: "Why use a commercial mortgage broker?",
        answer:
          "Commercial lending criteria vary far more between lenders than residential lending does, and many lenders work through brokers. A broker knows which lenders suit your property, business and deposit, presents the case properly and manages it to completion, which saves time and avoids declined applications.",
      },
      {
        question: "What type of loan is best for commercial property?",
        answer:
          "It depends on your plans. A commercial mortgage suits a long-term hold, a bridging loan suits a quick purchase or a property that needs work first, and development finance suits a build or conversion. We'll talk through your timescale and exit, then recommend the right structure.",
      },
    ],
    cta: {
      title: "Talk to us about your commercial property",
      body: "Tell us about the property, the business and your timescale. We'll tell you honestly what's achievable.",
    },
    related: ["bridging-loans", "development-finance"],
    card: {
      title: "Commercial Mortgages",
      body: "Buying or refinancing offices, retail, industrial, mixed-use and semi-commercial property, for owner-occupiers and investors.",
    },
  },
  {
    slug: "bridging-loans",
    name: "Bridging Loans",
    navLabel: "Bridging Loans",
    formValue: "bridging",
    metaTitle: "Bridging Loan Broker UK | Fast Bridging Finance | PPF",
    metaDescription:
      "UK bridging loan broker for non-regulated investment and commercial property. Auction purchases, refurbishments, investment chain breaks and lender pull-outs, £100k–£20m.",
    eyebrow: "Bridging loans · Non-regulated investment & business finance",
    h1: "Bridging loans",
    intro:
      "When a property transaction cannot wait for a term mortgage, a bridging loan can provide funds in days or weeks. We arrange non-regulated bridging finance across the UK for property investors, developers and businesses, secured on investment residential, commercial, mixed-use property or land.",
    image: {
      src: "/images/london-street.jpg",
      alt: "Period London townhouses with a red bus in the background",
    },
    facts: [
      { label: "Typical loan size", value: "£100,000 – £20 million" },
      { label: "Term", value: "Usually 1 – 24 months" },
      { label: "Scope", value: "Non-regulated investment & business property across the UK" },
    ],
    sections: [
      {
        id: "when-bridging",
        eyebrow: "Who it suits",
        title: "When bridging makes sense",
        items: [
          {
            title: "Auction purchases",
            body: "Meeting a 28-day auction completion deadline on an investment or commercial property.",
          },
          {
            title: "Lender pull-outs",
            body: "Stepping in quickly when an original lender withdraws or down-values close to completion.",
          },
          {
            title: "Investment chain breaks",
            body: "Securing the next investment or commercial acquisition before an existing portfolio sale completes (for business and investment properties, not owner-occupied homes).",
          },
          {
            title: "Light and heavy refurbishment",
            body: "Acquiring an unmortgageable or tired property, completing works, then refinancing onto a buy-to-let or commercial term loan or selling.",
          },
          {
            title: "Time-sensitive acquisitions",
            body: "Completing on below-market-value or off-market opportunities that will not wait for mainstream underwriting.",
          },
          {
            title: "Business capital raising",
            body: "Releasing working capital or deposit funds rapidly against investment or commercial property you already own.",
          },
        ],
        note: "We arrange non-regulated bridging finance for business and investment purposes only. We do not arrange regulated bridging loans secured on a borrower's own home.",
      },
      {
        id: "lender-considerations",
        eyebrow: "Lender considerations",
        title: "How bridging works and what lenders check",
        body: "Bridging loans run from 1 to 24 months. Interest is typically retained or rolled up into the facility so monthly cash-flow payments are not required during works or marketing. Lenders focus on three fundamentals: the security property's current and post-works value, the net cash required after any existing debt and retained interest, and a credible exit strategy (sale or refinance).",
        items: [
          { title: "First and second charge", body: "Secured as the primary charge, or behind an existing mortgage that remains in place." },
          { title: "Refurbishment and conversion", body: "Cosmetic upgrades through to structural reconfiguration and change of use." },
          { title: "Bridge-to-let", body: "Short-term funding paired with a planned buy-to-let or commercial refinance exit." },
          { title: "Commercial and land bridging", body: "Offices, retail, industrial, mixed-use buildings and sites with or without planning." },
        ],
      },
      {
        id: "documents-and-process",
        eyebrow: "Documents, process & fees",
        title: "What you will need and how costs work",
        numbered: true,
        items: [
          {
            title: "Property, debt and exit details",
            body: "Address, purchase price or estimated value, any existing debt (confirming whether it will be repaid or remain), schedule of works (if refurbishing), and your planned exit route.",
          },
          {
            title: "Clear gross vs. net loan breakdown",
            body: "We set out the gross loan, retained interest, lender arrangement fee (typically 1%–2%), valuation and legal costs, and any broker fee in writing upfront so you know the exact net day-one advance.",
          },
          {
            title: "Valuation, legals and drawdown",
            body: "We instruct a lender with the right appetite and panel valuers/solicitors who can work to your completion date.",
          },
        ],
      },
    ],
    example: {
      caseSlug: "land-bridging-liverpool-330k",
      eyebrow: "Completed bridging transaction",
      heading: "A recent land bridging case",
      text: "£330,000 land bridging loan, Liverpool, 50% LTV. A property investor needed short-term finance to buy land with planning permission and refinance onto development finance. Some lenders will not take land as security, so we presented the client's project experience and a clear exit to secure the bridge.",
    },
    faqs: [
      {
        question: "How quickly can a bridging loan complete?",
        answer:
          "Straightforward cases can complete in a couple of weeks. More complex cases take longer. Speed depends mainly on the valuation and the legal work, and we tell you on day one what timescale is realistic.",
      },
      {
        question: "Do I need income to get a bridging loan?",
        answer:
          "Not always. Bridging lenders focus mainly on the property and the exit strategy, though they will still want to understand your circumstances.",
      },
      {
        question: "What is an exit strategy?",
        answer:
          "It's how you will repay the loan at the end of the term, usually by selling the property or refinancing it onto a mortgage. Lenders will test that the exit is realistic.",
      },
      {
        question: "Can I get a bridging loan with adverse credit?",
        answer:
          "Yes. Some lenders will look past historic credit issues if the property and exit are strong. Tell us upfront and we'll approach the right lenders.",
      },
      {
        question: "What costs are involved?",
        answer:
          "Typically an arrangement fee, valuation fee, legal costs for both sides and interest, plus any broker fee, which we agree with you in writing before we start.",
      },
      {
        question: "How much deposit do I need for a bridging loan?",
        answer:
          "Bridging lenders lend against the property's value, so you'll usually need to cover the gap between the loan and the purchase price, plus costs. Some deals can be structured with extra security, such as another property you own, to reduce the cash you need upfront.",
      },
      {
        question: "Who qualifies for a bridging loan?",
        answer:
          "Individuals, limited companies, partnerships and trusts can all apply. Lenders focus most on the property used as security and on a credible plan to repay the loan, usually a sale or refinance. Your experience, credit history and the property's condition will also affect the terms.",
      },
      {
        question: "What is a second charge bridging loan?",
        answer:
          "It's a bridging loan secured behind an existing mortgage on the same property. The first lender is repaid first if the property is sold, so second charge lenders usually need the first lender's consent and lend less. It can be a quick way to raise capital without refinancing.",
      },
      {
        question: "Can I use a bridging loan to buy at auction?",
        answer:
          "Yes, it's one of the most common uses. Auction purchases usually need to complete within 28 days, which is often too fast for a standard mortgage. Lining up a bridging lender before the auction means you can bid knowing the funds will be ready.",
      },
    ],
    cta: {
      title: "Got a deadline?",
      body: "Tell us the property, the amount and the date you need to complete. We'll come back with a realistic route.",
    },
    related: ["commercial-mortgages", "development-finance"],
    card: {
      title: "Bridging Loans",
      body: "Short-term non-regulated finance when timing matters: auction purchases, investment chain breaks, refurbishments and lender pull-outs.",
    },
  },
  {
    slug: "development-finance",
    name: "Development Finance",
    navLabel: "Development Finance",
    formValue: "development",
    metaTitle: "Property Development Finance Broker UK | PPF",
    metaDescription:
      "UK property development finance broker for ground-up builds, conversions and heavy refurbishments. Senior, stretch senior and exit loans from £100k to £20m.",
    eyebrow: "Development finance · UK-wide",
    h1: "Property development finance",
    intro:
      "From a single plot to a multi-unit residential or commercial scheme, we structure development funding across the UK around your build programme, ensuring each drawdown stage aligns with your cash flow.",
    image: {
      src: "/images/development-site.jpg",
      alt: "Aerial view of a residential construction site with cranes and steel frames",
    },
    facts: [
      { label: "Typical loan size", value: "£100,000 – £20 million" },
      { label: "Structures", value: "Senior, stretch senior, mezzanine, exit" },
      { label: "Projects", value: "Ground-up, conversion, heavy refurbishment" },
    ],
    sections: [
      {
        id: "what-we-arrange",
        eyebrow: "Who it suits",
        title: "What we arrange",
        items: [
          {
            title: "Ground-up development",
            body: "New-build residential houses, apartment blocks, commercial units and mixed-use schemes.",
          },
          {
            title: "Conversions and permitted development",
            body: "Office-to-residential, commercial conversions, barn conversions, HMOs and material changes of use.",
          },
          {
            title: "Heavy refurbishment",
            body: "Structural alterations, extensions and schemes requiring building regulations sign-off.",
          },
          {
            title: "Senior and stretched senior debt",
            body: "Funding a higher share of total project cost (LTC) and gross development value (LTGDV) to preserve developer equity.",
          },
          {
            title: "Mezzanine and equity introductions",
            body: "Top-up funding for experienced developers where senior debt alone leaves an equity gap.",
          },
          {
            title: "Development exit finance",
            body: "Replacing the build facility at practical completion to reduce interest costs while units are sold or let.",
          },
        ],
      },
      {
        id: "lender-view",
        eyebrow: "Lender considerations",
        title: "How development finance works and what lenders assess",
        body: "Lenders typically advance a percentage of the site purchase or land value on day one, then release 100% of build costs in arrears across agreed stages verified by an independent monitoring surveyor (IMS). Interest is rolled up within the facility limit and repaid from unit sales or refinance.",
        items: [
          { title: "Planning consent", body: "Full planning permission or prior approval, approved drawings and any Section 106 / CIL obligations." },
          { title: "Build costs and programme", body: "Itemised cost plan, contingency allowance, JCT contract terms and realistic build timetable." },
          {
            title: "Developer and contractor track record",
            body: "Delivered schemes of a comparable scale, or—for first-time developers—the experience of your main contractor and professional team.",
          },
          {
            title: "GDV comparables and exit",
            body: "Local agent comparables supporting the finished unit values and absorption period, or rental cover if retaining.",
          },
        ],
      },
      {
        id: "process-and-fees",
        eyebrow: "Documents, process & fees",
        title: "From appraisal to drawdown",
        numbered: true,
        items: [
          {
            title: "Share your development appraisal",
            body: "Send us the site address, planning reference, land cost, build budget and estimated GDV (you can attach a PDF or Excel appraisal in our enquiry form).",
          },
          {
            title: "Compare structured terms and costs",
            body: "We model day-one land release, staged build drawdowns, rolled-up interest, lender arrangement and exit fees, RICS/IMS fees, and our agreed broker fee so you can see true net leverage and profit-on-cost.",
          },
          {
            title: "Credit approval, legals and stage releases",
            body: "We package the credit paper, coordinate the valuation and monitoring surveyor, and stay involved through completion.",
          },
        ],
        note: "First-time developer? Lenders place extra weight on your contractor, architect and quantity surveyor. We help structure the professional team presentation before approaching credit.",
      },
    ],
    example: {
      caseSlug: "development-manchester-1-3m",
      eyebrow: "Completed development transaction",
      heading: "A recent development finance case",
      text: "£1.3 million ground-up development facility, Manchester, 68% LTGDV. A developer needed funding for their second scheme, with a limited track record and a requirement for a higher initial drawdown. We identified a lender comfortable with their experience and structured the facility around the project's upfront funding needs.",
    },
    faqs: [
      {
        question: "How much of my project can be funded?",
        answer:
          "It depends on the scheme, your experience and the lender. Senior lenders typically fund most of the build costs and part of the land, with total borrowing capped against the GDV. Stretched senior and mezzanine finance can increase the overall leverage.",
      },
      {
        question: "Do I need planning permission?",
        answer:
          "For development finance, yes. If you're buying land before planning is granted, a land bridging loan may be the right first step.",
      },
      {
        question: "What is a monitoring surveyor?",
        answer:
          "An independent surveyor appointed by the lender who checks progress and costs before each release of funds.",
      },
      {
        question: "Can I get development finance with no experience?",
        answer:
          "Some lenders will fund first-time developers on smaller schemes, especially with an experienced contractor and professional team in place.",
      },
      {
        question: "Can you get 100% development finance?",
        answer:
          "Rarely from a single lender. Senior lenders expect the developer to put some equity in. The gap can sometimes be reduced with stretched senior debt, mezzanine finance or a joint venture partner, or by using equity in land or other property you already own.",
      },
      {
        question: "What is development exit finance?",
        answer:
          "A short-term loan that repays your development lender once the build is complete or nearly complete. It gives you time to sell or let the units at full value instead of selling quickly, and it is often cheaper than staying on a development facility past its term.",
      },
      {
        question: "What do LTC and LTGDV mean?",
        answer:
          "Loan to cost (LTC) is the loan as a percentage of the total land and build costs. Loan to gross development value (LTGDV) is the loan as a percentage of what the finished scheme is expected to be worth. Lenders use both to decide how much they will lend.",
      },
    ],
    cta: {
      title: "Send us your appraisal",
      body: "Share the site, the cost plan or the GDV and we'll tell you what a lender will need to see. You can upload an appraisal or cost plan below.",
    },
    related: ["bridging-loans", "commercial-mortgages"],
    card: {
      title: "Development Finance",
      body: "Funding for ground-up schemes, conversions and refurbishments, from first-time developers to experienced builders.",
    },
  },
  {
    slug: "foreign-national-buy-to-let-mortgages",
    name: "Foreign National Buy-to-Let",
    navLabel: "Foreign National Buy-to-Let",
    formValue: "btl",
    metaTitle: "UK Mortgages for Foreign Nationals & Expats | PPF",
    metaDescription:
      "UK buy-to-let mortgages for overseas investors, foreign nationals and expats, including limited company (SPV) purchases. Wide lender panel.",
    eyebrow: "Foreign national buy-to-let",
    h1: "Buy-to-let mortgages for foreign nationals and overseas investors",
    intro:
      "Investing in UK property from abroad is very achievable, but many mainstream lenders turn away applicants who live overseas or don't have UK residency. We know which lenders will consider your application, and we manage the whole process remotely.",
    image: {
      src: "/images/london-aerial.jpg",
      alt: "Aerial view of central London and the River Thames",
    },
    facts: [
      { label: "Typical loan size", value: "£100,000 – £20 million" },
      { label: "Borrowers", value: "Foreign nationals, expats, UK SPVs" },
      { label: "Process", value: "Managed remotely, end to end" },
    ],
    sections: [
      {
        id: "who-we-help",
        eyebrow: "Clients",
        title: "Who we help",
        items: [
          {
            title: "Foreign nationals",
            body: "Living outside the UK and wanting to invest in UK rental property.",
          },
          {
            title: "UK expats",
            body: "Working abroad and wanting to buy, or keep, property back home.",
          },
          {
            title: "Non-UK nationals in the UK",
            body: "With limited residency or a short UK credit history.",
          },
          {
            title: "Overseas investors",
            body: "Buying through a UK limited company (SPV).",
          },
        ],
      },
      {
        id: "how-it-works",
        eyebrow: "Process",
        title: "How it works",
        numbered: true,
        items: [
          {
            title: "Initial call",
            body: "By phone, WhatsApp or video, to understand your plans, deposit and income.",
          },
          {
            title: "Lender selection",
            body: "We identify suitable lenders: UK banks, specialist lenders or international private banks, depending on your nationality, country of residence and income currency.",
          },
          {
            title: "Documents",
            body: "We tell you exactly what's needed and help you get it certified.",
          },
          {
            title: "To completion",
            body: "We manage the application with the lender, valuer and your UK solicitor through to completion.",
          },
        ],
      },
      {
        id: "lender-needs",
        eyebrow: "Documentation",
        title: "What lenders typically need",
        items: [
          {
            title: "Identity and address",
            body: "Passport and proof of address in your country of residence.",
          },
          {
            title: "Income and deposit",
            body: "Proof of income, and of the deposit's source (bank statements, payslips or accounts).",
          },
          {
            title: "Credit history",
            body: "A credit report from your home country, where available.",
          },
          {
            title: "The property",
            body: "Details of the property and the expected rent.",
          },
          {
            title: "Company purchases",
            body: "Company documents and personal guarantees from the directors.",
          },
        ],
        note: "Requirements vary by lender and by country. Some lenders also need a UK bank account, or won't lend to residents of certain countries.",
      },
      {
        id: "plan-for",
        eyebrow: "Considerations & fees",
        title: "Key considerations and costs to plan for",
        items: [
          {
            title: "Deposit and rental cover (ICR)",
            body: "Overseas borrowers typically need at least a 25% deposit (up to 75% LTV), and the expected rent must meet the lender's interest cover ratio (often 125% for UK SPVs or 145% in personal name).",
          },
          {
            title: "Currency and country criteria",
            body: "Lenders apply currency haircuts to overseas income and maintain approved country lists. We match your residency and income currency to the right panel.",
          },
          {
            title: "Ownership structure and tax",
            body: "Personal name vs. UK limited company (SPV) affects both lender ICR tests and tax. Non-UK residents also face an SDLT surcharge—always take independent UK tax advice.",
          },
          {
            title: "Fees and transparent terms",
            body: "Expect a lender arrangement fee, valuation fee, UK legal costs (including identity certification) and any agreed broker fee, which we set out in writing before application.",
          },
        ],
      },
    ],
    example: {
      caseSlug: "buy-to-let-hong-kong-2-1m",
      eyebrow: "Completed overseas investor transaction",
      heading: "£2.1 million for an investor with no UK footprint",
      text: "A Hong Kong-based investor needed a £2.1 million buy-to-let mortgage at 75% LTV, with no UK residency and no UK credit history. We took the case to a specialist lender with an appetite for high-value foreign national lending and evidenced the client's overseas income, assets and overall wealth, so the application could be assessed beyond a UK credit profile.",
    },
    faqs: [
      {
        question: "Can a foreign national get a mortgage in the UK?",
        answer:
          "Yes. A number of UK lenders and international banks lend to non-residents for buy-to-let, subject to deposit, income and country criteria.",
      },
      {
        question: "Do I need to visit the UK?",
        answer:
          "Usually not. Most of the process can be handled remotely, though some lenders require identity documents to be certified in person.",
      },
      {
        question: "Can I buy through a UK limited company?",
        answer:
          "Yes, many overseas investors use a UK special purpose vehicle (SPV), and lenders who accept non-resident directors are available.",
      },
      {
        question: "Which countries can you help with?",
        answer:
          "We've helped clients from Hong Kong, Nigeria, Malaysia, Kuwait, Singapore and China, among others. Contact us about your situation.",
      },
      {
        question: "What is a foreign national mortgage?",
        answer:
          "It's a UK mortgage for people who aren't UK citizens or don't live in the UK. Lenders adjust their checks for overseas income, residency status and credit history, and they often ask for a larger deposit than they would from a UK resident.",
      },
      {
        question:
          "How much deposit do I need for a UK buy-to-let as an overseas investor?",
        answer:
          "Expect to need a larger deposit than a UK resident would. The amount depends on the lender, your country of residence, the currency you earn in and the property itself. After a first call we'll tell you what's realistic for your situation.",
      },
      {
        question: "Does buying UK property give me residency or a visa?",
        answer:
          "No. Owning UK property does not give you the right to live in the UK, and there is no UK visa route based on buying property. You can own UK property as a non-resident, but residency needs a separate visa. Speak to an immigration adviser about your options.",
      },
    ],
    cta: {
      title: "Book a call at a time that suits your time zone",
      body: "Tell us where you're based, what you're buying and how you'd like to hold it. We'll take it from there.",
    },
    related: ["bridging-loans", "commercial-mortgages"],
    card: {
      title: "Foreign National Buy-to-Let",
      body: "UK buy-to-let mortgages for investors living overseas or without UK residency, including limited company purchases.",
    },
  },
];

export const getService = (slug: string) =>
  SERVICES.find((service) => service.slug === slug);
