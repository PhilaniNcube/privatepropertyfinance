import { SITE } from "./content/site";
import { SERVICES, type Service } from "./content/services";
import type { TeamMember } from "./content/team";
import type { CaseStudy } from "./content/case-studies";

const ORGANISATION_ID = `${SITE.url}/#organisation`;
const WEBSITE_ID = `${SITE.url}/#website`;

const INTERNATIONAL_INVESTOR_COUNTRIES = [
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "Hong Kong" },
  { "@type": "Country", name: "Singapore" },
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "Country", name: "Nigeria" },
  { "@type": "Country", name: "Malaysia" },
  { "@type": "Country", name: "Kuwait" },
  { "@type": "Country", name: "China" },
  { "@type": "Country", name: "United States" },
];

export function organisationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "MortgageLender"],
    "@id": ORGANISATION_ID,
    name: SITE.name,
    alternateName: [SITE.shortName, SITE.legalName],
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    image: `${SITE.url}/images/hero-architecture.jpg`,
    description: SITE.description,
    slogan:
      "Property finance, arranged by people who've sat on the lender's side",
    telephone: SITE.phoneHref,
    email: SITE.email,
    priceRange: "£100,000 - £20,000,000",
    currenciesAccepted: "GBP",
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Companies House Registration Number",
        propertyID: "UK_COMPANIES_HOUSE",
        value: SITE.companyNumber,
      },
      {
        "@type": "PropertyValue",
        name: "ICO Registration Number",
        propertyID: "UK_ICO",
        value: SITE.icoNumber,
      },
    ],
    areaServed: INTERNATIONAL_INVESTOR_COUNTRIES,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cubo, 1 Spinningfields",
      addressLocality: "Manchester",
      addressRegion: "Greater Manchester",
      postalCode: "M3 3EB",
      addressCountry: "GB",
    },
    location: [
      {
        "@type": "Place",
        name: "Private Property Finance — Manchester Office (Main Office)",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cubo, 1 Spinningfields",
          addressLocality: "Manchester",
          postalCode: "M3 3EB",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 53.4795,
          longitude: -2.2523,
        },
      },
      {
        "@type": "Place",
        name: "Private Property Finance — London (By Appointment)",
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressCountry: "GB",
        },
      },
      {
        "@type": "Place",
        name: "Private Property Finance — International Client Support (Dubai)",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.4795,
      longitude: -2.2523,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phoneHref,
        email: SITE.email,
        contactType: "customer service",
        areaServed: [
          "GB",
          "HK",
          "SG",
          "AE",
          "NG",
          "MY",
          "KW",
          "CN",
          "US",
          "AU",
          "CA",
          "ZA",
        ],
        availableLanguage: ["en", "en-GB"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.mobileHref,
        url: SITE.whatsappHref,
        contactType: "international investor enquiries",
        areaServed: [
          "HK",
          "SG",
          "AE",
          "NG",
          "MY",
          "KW",
          "CN",
          "US",
          "GB",
        ],
        availableLanguage: ["en", "en-GB"],
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    sameAs: [SITE.linkedin],
    knowsAbout: [
      {
        "@type": "Thing",
        name: "Bridging loans",
        sameAs: "https://www.wikidata.org/wiki/Q913799",
      },
      {
        "@type": "Thing",
        name: "Property development finance",
        sameAs: "https://www.wikidata.org/wiki/Q1138622",
      },
      {
        "@type": "Thing",
        name: "Commercial mortgages",
        sameAs: "https://www.wikidata.org/wiki/Q5152550",
      },
      {
        "@type": "Thing",
        name: "Foreign national buy-to-let mortgages in the United Kingdom",
        sameAs: "https://www.wikidata.org/wiki/Q5003344",
      },
      {
        "@type": "Thing",
        name: "UK Special Purpose Vehicle (SPV) property investment",
        sameAs: "https://www.wikidata.org/wiki/Q1501887",
      },
      {
        "@type": "Thing",
        name: "Expat and non-UK resident UK property finance",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UK Specialist Property Finance Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": ["Service", "FinancialProduct"],
          "@id": `${SITE.url}/${service.slug}#service`,
          name: service.name,
          description: service.metaDescription,
          url: `${SITE.url}/${service.slug}`,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    inLanguage: "en-GB",
    publisher: { "@id": ORGANISATION_ID },
    about: { "@id": ORGANISATION_ID },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#main-content p", "details summary"],
    },
  };
}

export function serviceSchema(service: Service) {
  const isInternationalBtl =
    service.slug === "foreign-national-buy-to-let-mortgages";

  return {
    "@context": "https://schema.org",
    "@type": ["Service", "LoanOrCredit"],
    "@id": `${SITE.url}/${service.slug}#service`,
    name: service.name,
    serviceType: service.name,
    category: "UK Property Finance",
    description: service.metaDescription,
    url: `${SITE.url}/${service.slug}`,
    provider: { "@id": ORGANISATION_ID },
    broker: { "@id": ORGANISATION_ID },
    currency: "GBP",
    amount: {
      "@type": "MonetaryAmount",
      currency: "GBP",
      minValue: 100000,
      maxValue: 20000000,
    },
    areaServed: isInternationalBtl
      ? INTERNATIONAL_INVESTOR_COUNTRIES
      : [
          { "@type": "Country", name: "United Kingdom" },
          ...INTERNATIONAL_INVESTOR_COUNTRIES.slice(1),
        ],
    audience: {
      "@type": "Audience",
      audienceType: isInternationalBtl
        ? "Foreign nationals, overseas property investors, UK expats, and UK Limited Company (SPV) directors investing in UK property"
        : "UK and international property investors, property developers, SPVs, and trading businesses",
      geographicArea: INTERNATIONAL_INVESTOR_COUNTRIES,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE.url}/${service.slug}#enquiry`,
      servicePhone: SITE.phoneHref,
      availableLanguage: ["en", "en-GB"],
    },
    termsOfService: `${SITE.url}/about-us`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#faqs details summary"],
    },
  };
}

export function serviceHowToSchema(service: Service) {
  const numberedSection = service.sections.find(
    (s) => s.numbered && s.items && s.items.length > 0
  );
  if (!numberedSection || !numberedSection.items) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE.url}/${service.slug}#howto`,
    name: `${service.name}: ${numberedSection.title}`,
    description: service.intro,
    step: numberedSection.items.map((item, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: item.title,
      text: item.body,
      url: `${SITE.url}/${service.slug}#${numberedSection.id}`,
    })),
  };
}

export function caseStudySchema(study: CaseStudy) {
  const numericAmount = Number(study.amount.replace(/[^0-9]/g, ""));

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/case-studies#${study.slug}`,
    headline: study.headline,
    description: `${study.challenge} ${study.outcome}`,
    url: `${SITE.url}/case-studies#${study.slug}`,
    image: `${SITE.url}${study.image.src}`,
    author: { "@id": ORGANISATION_ID },
    publisher: { "@id": ORGANISATION_ID },
    about: {
      "@type": "LoanOrCredit",
      name: `${study.loanType} — ${study.amount} (${study.ltv})`,
      loanType: study.loanType,
      currency: "GBP",
      ...(numericAmount
        ? {
            amount: {
              "@type": "MonetaryAmount",
              currency: "GBP",
              value: numericAmount,
            },
          }
        : {}),
      provider: { "@id": ORGANISATION_ID },
    },
  };
}

export function caseStudiesListSchema(studies: CaseStudy[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/case-studies#list`,
    name: "Completed UK Property Finance Transactions",
    description:
      "Real-world examples of commercial mortgages, bridging loans, property development finance, and foreign national buy-to-let mortgages arranged by Private Property Finance.",
    numberOfItems: studies.length,
    itemListElement: studies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE.url}/case-studies#${study.slug}`,
      item: caseStudySchema(study),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function personSchema(member: TeamMember) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/team#${member.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: member.name,
    jobTitle: member.role,
    description: member.experienceSummary,
    ...(member.email ? { email: member.email } : {}),
    ...(member.phone ? { telephone: member.phone } : {}),
    ...(member.image ? { image: `${SITE.url}${member.image.src}` } : {}),
    ...(member.location
      ? {
          workLocation: {
            "@type": "Place",
            name: member.location,
          },
        }
      : {}),
    worksFor: { "@id": ORGANISATION_ID },
    knowsAbout: member.focus,
    ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
  };
}
