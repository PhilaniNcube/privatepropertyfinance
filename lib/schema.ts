import { SITE } from "./content/site";
import type { Service } from "./content/services";
import type { TeamMember } from "./content/team";

const ORGANISATION_ID = `${SITE.url}/#organisation`;

export function organisationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": ORGANISATION_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    image: `${SITE.url}/images/hero-architecture.jpg`,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "£££",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
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
      "Bridging loans",
      "Development finance",
      "Commercial mortgages",
      "Foreign national buy-to-let mortgages",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": ORGANISATION_ID },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: `${SITE.url}/${service.slug}`,
    provider: { "@id": ORGANISATION_ID },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
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
    name: member.name,
    jobTitle: member.role,
    description: member.experienceSummary,
    email: member.email,
    ...(member.phone ? { telephone: member.phone } : {}),
    ...(member.image ? { image: `${SITE.url}${member.image.src}` } : {}),
    worksFor: { "@id": ORGANISATION_ID },
    knowsAbout: member.focus,
    ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
  };
}
