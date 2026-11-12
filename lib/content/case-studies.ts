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
  image: {
    src: string;
    alt: string;
    /** True when the image is illustrative photography rather than a photo of the actual financed property. */
    illustrative?: boolean;
  };
  serviceSlug: string;
  serviceLabel: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bridging-london-286k",
    headline: "£286,000 bridging loan",
    amount: "£286,000",
    location: "London",
    loanType: "Bridging loan (investment purchase)",
    ltv: "70% LTV",
    term: "Short-term bridge",
    borrower: "Limited company investor",
    challenge:
      "The original lender withdrew two weeks before completion on a London investment purchase.",
    outcome:
      "We placed the deal with a bridging lender able to complete within the deadline. The client protected their deposit and completed the acquisition.",
    image: {
      src: "/images/london-street.jpg",
      alt: "Illustrative view of period townhouses in central London",
      illustrative: true,
    },
    serviceSlug: "bridging-loans",
    serviceLabel: "Explore bridging loans",
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
      "A sole-trader developer needed to refinance an existing facility and raise additional funds to finish a residential scheme.",
    outcome:
      "We arranged a secured development facility with interest retained. The build was completed and the property sold.",
    image: {
      src: "/images/development-site.jpg",
      alt: "Illustrative aerial view of a residential construction site",
      illustrative: true,
    },
    serviceSlug: "development-finance",
    serviceLabel: "Explore development finance",
  },
  {
    slug: "buy-to-let-hong-kong-2-1m",
    headline: "£2,100,000 buy-to-let purchase",
    amount: "£2,100,000",
    location: "UK investment · Hong Kong-based buyer",
    loanType: "Foreign national buy-to-let",
    ltv: "75% LTV",
    term: "Long-term investment mortgage",
    borrower: "Overseas investor",
    challenge:
      "A foreign national based in Hong Kong needed a UK buy-to-let mortgage without UK residency.",
    outcome:
      "We placed the purchase with a lender that accepts overseas applicants at 75% LTV and managed the process remotely through to completion.",
    image: {
      src: "/images/london-aerial.jpg",
      alt: "Illustrative aerial view of central London and the River Thames",
      illustrative: true,
    },
    serviceSlug: "foreign-national-buy-to-let-mortgages",
    serviceLabel: "Explore foreign national buy-to-let",
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((study) => study.slug === slug);
