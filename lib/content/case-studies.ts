export type CaseStudy = {
  slug: string;
  headline: string;
  amount: string;
  location: string;
  loanType: string;
  ltv: string;
  term?: string;
  borrower: string;
  challenge: string;
  outcome: string;
  image: { src: string; alt: string };
  serviceSlug: string;
  serviceLabel: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bridging-london-286k",
    headline: "£286,000 bridging loan",
    amount: "£286,000",
    location: "London",
    loanType: "Bridging (purchase)",
    ltv: "70% LTV",
    term: "Short-term bridge",
    borrower: "Limited company borrower",
    challenge:
      "The original lender withdrew two weeks before completion.",
    outcome:
      "We found a lender who could complete in time. The client kept their deposit and the purchase completed.",
    image: {
      src: "/images/london-street.jpg",
      alt: "Period townhouses in central London",
    },
    serviceSlug: "bridging-loans",
    serviceLabel: "Bridging loans",
  },
  {
    slug: "development-birmingham-405k",
    headline: "£405,000 refinance and further advance",
    amount: "£405,000",
    location: "Birmingham",
    loanType: "Secured development loan",
    ltv: "65% LTV",
    term: "12 months, interest retained",
    borrower: "Sole-trader developer",
    challenge:
      "A sole-trader developer needed to refinance an existing facility and raise more money to finish a residential scheme.",
    outcome:
      "We arranged a secured loan with interest retained. The build was completed and the property sold.",
    image: {
      src: "/images/development-site.jpg",
      alt: "Residential construction site with cranes and steel frames",
    },
    serviceSlug: "development-finance",
    serviceLabel: "Development finance",
  },
  {
    slug: "buy-to-let-hong-kong-2-1m",
    headline: "£2,100,000 buy-to-let purchase",
    amount: "£2,100,000",
    location: "Hong Kong-based investor",
    loanType: "Foreign national buy-to-let",
    ltv: "75% LTV",
    term: "Long-term let",
    borrower: "Overseas investor",
    challenge:
      "A foreign national based in Hong Kong needed a UK buy-to-let mortgage without UK residency.",
    outcome:
      "We placed the purchase with a lender that accepts overseas applicants at 75% LTV, and managed the process remotely to completion.",
    image: {
      src: "/images/london-aerial.jpg",
      alt: "Aerial view of London and the River Thames",
    },
    serviceSlug: "foreign-national-buy-to-let-mortgages",
    serviceLabel: "Foreign national buy-to-let",
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((study) => study.slug === slug);
