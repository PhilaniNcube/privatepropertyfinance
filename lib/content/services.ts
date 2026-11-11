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
  example?: { caseSlug: string; text: string };
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
    metaTitle: "Commercial Mortgage Broker Manchester & London | PPF",
    metaDescription:
      "Commercial mortgages for offices, retail, industrial and mixed-use property. Owner-occupiers and investors, £100k–£20m. Talk to an independent broker.",
    eyebrow: "Commercial mortgages",
    h1: "Commercial mortgages",
    intro:
      "Whether you're buying your own business premises, adding to a commercial portfolio or refinancing an existing loan, we find lenders across the UK that suit the property, the business behind it and the timescale.",
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
        eyebrow: "Scope",
        title: "What we can help with",
        items: [
          {
            title: "Owner-occupier mortgages",
            body: "Buying the premises your business trades from, instead of paying rent.",
          },
          {
            title: "Commercial investment mortgages",
            body: "Buying or refinancing let property such as offices, shops, industrial units and mixed-use blocks.",
          },
          {
            title: "Semi-commercial property",
            body: "Shops with flats above, and other mixed residential and commercial buildings.",
          },
          {
            title: "Refinancing and capital raising",
            body: "Moving off an expiring facility or releasing equity for the next purchase.",
          },
          {
            title: "Specialist property",
            body: "Care homes, hotels, pubs and other trading businesses.",
          },
        ],
      },
      {
        id: "who-we-work-with",
        eyebrow: "Borrowers",
        title: "Who we work with",
        body: "Trading businesses, limited companies and SPVs, partnerships, sole traders, trusts and pension schemes (SIPP/SSAS).",
      },
      {
        id: "lender-view",
        eyebrow: "Underwriting",
        title: "What lenders will look at",
        items: [
          {
            title: "The property",
            body: "Type, condition, location, and the lease and tenant if it's let.",
          },
          {
            title: "For owner-occupiers",
            body: "The trading history and profitability of the business.",
          },
          {
            title: "For investors",
            body: "Whether the rental income covers the loan comfortably.",
          },
          {
            title: "You",
            body: "Your deposit and your experience as a borrower.",
          },
        ],
        note: "We'll tell you upfront what a lender is likely to ask for, so there are no surprises at underwriting.",
      },
      {
        id: "how-it-works",
        eyebrow: "Process",
        title: "How it works",
        numbered: true,
        items: [
          {
            title: "Initial call",
            body: "Understand the property, the business and your goals.",
          },
          {
            title: "Indicative terms",
            body: "We approach suitable lenders and come back with indicative terms.",
          },
          {
            title: "Application to completion",
            body: "We package the application, then manage the valuation, legal work and completion.",
          },
        ],
      },
    ],
    example: {
      caseSlug: "bridging-london-286k",
      text: "A London investor's original lender withdrew two weeks before completion. We arranged a £286,000 bridging loan in time to save the deposit and complete the purchase.",
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
    metaTitle: "Bridging Loan Broker Manchester & London | PPF",
    metaDescription:
      "Fast, flexible bridging loans for auction purchases, chain breaks, refurbishments and lender pull-outs. Residential, commercial and land, £100k–£20m.",
    eyebrow: "Bridging loans",
    h1: "Bridging loans",
    intro:
      "When a deal can't wait for a mortgage, a bridging loan can provide funds in days or weeks. We arrange bridging finance across the UK for property investors, developers and businesses, secured on residential, commercial, mixed-use or land with or without planning.",
    image: {
      src: "/images/london-street.jpg",
      alt: "Period London townhouses with a red bus in the background",
    },
    facts: [
      { label: "Typical loan size", value: "£100,000 – £20 million" },
      { label: "Term", value: "Usually 1 – 24 months" },
      { label: "Security", value: "Residential, commercial, mixed-use or land" },
    ],
    sections: [
      {
        id: "when-bridging",
        eyebrow: "Use cases",
        title: "When bridging makes sense",
        items: [
          {
            title: "Auction purchases",
            body: "Completing within the auction's 28-day deadline.",
          },
          {
            title: "Lender pull-outs",
            body: "Stepping in when the original funding falls through close to completion.",
          },
          {
            title: "Chain breaks",
            body: "Buying the next property before the current one sells.",
          },
          {
            title: "Refurbishment",
            body: "Buying a property that isn't mortgageable yet, improving it, then refinancing or selling.",
          },
          {
            title: "Time-sensitive purchases",
            body: "Below-market-value and other opportunities that won't wait for a mortgage.",
          },
          {
            title: "Business needs",
            body: "Raising capital quickly against property you already own.",
          },
        ],
      },
      {
        id: "how-it-works",
        eyebrow: "The structure",
        title: "How a bridging loan works",
        body: "Bridging loans are short-term, usually from a few months up to 12–24 months. Interest is commonly rolled up or retained, so you may not need to make monthly payments. Every lender will want a clear exit: how the loan will be repaid, usually by selling the property or refinancing onto a longer-term mortgage. A credible exit matters as much as the property itself.",
      },
      {
        id: "types",
        eyebrow: "Facilities",
        title: "Types of bridging we arrange",
        items: [
          { title: "First and second charge", body: "Bridging secured ahead of, or behind, existing debt." },
          { title: "Light and heavy refurbishment", body: "From cosmetic work to structural renovation." },
          { title: "Auction finance", body: "Funds ready for a 28-day completion." },
          { title: "Bridge-to-let", body: "Bridging with a pre-agreed buy-to-let exit." },
          { title: "Commercial bridging", body: "Commercial and semi-commercial property." },
          { title: "Land bridging", body: "Land with or without planning consent." },
        ],
      },
    ],
    example: {
      caseSlug: "bridging-london-286k",
      text: "£286,000 bridging loan, London, 70% LTV. A property investor's original lender withdrew two weeks before completion. We found a bridging lender able to complete in time, so the client kept their deposit and completed the purchase.",
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
      body: "Short-term finance when timing matters: auction purchases, broken chains, refurbishments and lender pull-outs.",
    },
  },
  {
    slug: "development-finance",
    name: "Development Finance",
    navLabel: "Development Finance",
    formValue: "development",
    metaTitle: "Property Development Finance Broker | Manchester & London",
    metaDescription:
      "Development finance for ground-up builds, conversions and refurbishments. Senior, stretch senior and exit loans for new and experienced developers.",
    eyebrow: "Development finance",
    h1: "Property development finance",
    intro:
      "From a single plot to a multi-unit scheme, we structure development funding across the UK around your build programme, so the money is there when each stage needs it.",
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
        eyebrow: "Funding",
        title: "What we arrange",
        items: [
          {
            title: "Ground-up development",
            body: "New-build residential, commercial and mixed-use schemes.",
          },
          {
            title: "Conversions",
            body: "Office to residential, barn conversions, HMOs and changes of use.",
          },
          {
            title: "Heavy refurbishment",
            body: "Structural works that standard bridging won't cover.",
          },
          {
            title: "Senior and stretched senior debt",
            body: "Higher leverage to reduce the equity you need.",
          },
          {
            title: "Mezzanine and equity introductions",
            body: "For larger schemes where senior debt alone isn't enough.",
          },
          {
            title: "Development exit loans",
            body: "Refinancing a completed scheme so you have time to sell or let the units at full value.",
          },
        ],
      },
      {
        id: "how-it-works",
        eyebrow: "The structure",
        title: "How development finance works",
        body: "Lenders usually fund part of the land or purchase cost upfront, then release build costs in stages after a monitoring surveyor confirms each stage of work. The size of the loan is usually measured against the total cost of the project and against the gross development value (GDV), the finished scheme's expected value. Interest is normally rolled up and repaid on sale or refinance.",
      },
      {
        id: "lender-view",
        eyebrow: "Underwriting",
        title: "What lenders will want to see",
        items: [
          { title: "Planning consent", body: "The consent and the drawings." },
          { title: "Costs and programme", body: "A detailed cost plan and build programme." },
          {
            title: "Track record",
            body: "Your track record, or your professional team's (contractor, architect, project manager).",
          },
          {
            title: "Evidence of GDV",
            body: "Agents' comparables supporting the finished value.",
          },
          {
            title: "Equity and exit",
            body: "Your equity contribution and a clear exit plan.",
          },
        ],
      },
      {
        id: "first-time-developers",
        eyebrow: "First scheme",
        title: "First-time developer? It can be done.",
        body: "Lenders look harder at the team around you and at the contractor's track record. We'll help you put together a proposal that answers their questions before they ask them.",
      },
    ],
    example: {
      caseSlug: "development-birmingham-405k",
      text: "£405,000 refinance and further advance, Birmingham, 65% LTV, 12-month term. A sole-trader developer needed to refinance an existing facility and raise more funds to finish a residential scheme. We arranged a secured loan with interest retained, which let them finish the build and sell.",
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
        eyebrow: "Considerations",
        title: "Things to plan for",
        items: [
          {
            title: "Deposit",
            body: "Expect to need a larger deposit than a UK resident would.",
          },
          {
            title: "Currency",
            body: "If you earn in a foreign currency, lenders may apply extra checks or limit the loan.",
          },
          {
            title: "Stamp duty",
            body: "Non-UK residents pay an extra stamp duty surcharge on top of the higher rates for additional properties. Take tax advice before you buy.",
          },
          {
            title: "Ownership structure",
            body: "Limited company or personal name: each has tax and lending implications. We'll explain the lending side, and your accountant should advise on tax.",
          },
        ],
      },
    ],
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
