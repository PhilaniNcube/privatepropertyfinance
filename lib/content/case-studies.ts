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
    slug: "hotel-purchase-commercial-mortgage-680k",
    headline: "£680,000 commercial mortgage for a hotel purchase",
    amount: "£680,000",
    location: "UK hotel",
    loanType: "Commercial mortgage",
    ltv: "70% of vacant possession value",
    term: "Two years interest-only, then three years of capital repayments",
    borrower: "Hotel operator",
    challenge:
      "An experienced hotel operator required finance to purchase a hotel that had been loss-making for the previous two years. Its recent trading performance limited the lenders willing to support the acquisition.",
    outcome:
      "We worked with the client to strengthen their funding proposal through a robust business plan, outlining how they intended to return the hotel to profitability, supported by financial forecasts. We identified a specialist lender willing to assess the application based on the business plan, projected trading performance and the operator's experience. The resulting commercial mortgage provided two years of interest-only payments followed by three years of capital repayments, giving the client breathing space to implement their plans before beginning to repay the capital.",
    image: {
      src: "/images/transactions/commercial-development.webp",
      alt: "Illustrative view of a hotel dining room overlooking a lake",
      illustrative: true,
    },
    serviceSlug: "commercial-mortgages",
    serviceLabel: "Explore commercial mortgages",
  },
  {
    slug: "buy-to-let-hong-kong-2-1m",
    headline: "£2.1 million buy-to-let mortgage for a Hong Kong-based investor",
    amount: "£2,100,000",
    location: "UK investment · Hong Kong-based investor",
    loanType: "Foreign national buy-to-let mortgage",
    ltv: "75% LTV",
    term: "High-value investment mortgage",
    borrower: "High-net-worth overseas investor",
    challenge:
      "A high-net-worth investor based in Hong Kong required a substantial mortgage to purchase a UK investment property. With no UK residency or established UK credit history, securing a £2.1 million loan at 75% LTV required a lender comfortable with both the borrowing amount and the client's overseas circumstances.",
    outcome:
      "Drawing on our lender relationships, we identified a specialist lender with an appetite for high-value foreign national buy-to-let lending. We presented a comprehensive picture of the client's financial position, evidencing their overseas income, assets and overall wealth, which enabled the lender to assess the application beyond a UK credit profile. We secured a £2.1 million buy-to-let mortgage at 75% LTV, enabling the client to proceed with their UK investment property purchase.",
    image: {
      src: "/images/transactions/london-terrace.webp",
      alt: "Illustrative view of stone terraced townhouses",
      illustrative: true,
    },
    serviceSlug: "foreign-national-buy-to-let-mortgages",
    serviceLabel: "Explore foreign national buy-to-let",
  },
  {
    slug: "buy-to-let-nigeria-450k",
    headline: "£450,000 buy-to-let mortgage for a Nigerian-based investor",
    amount: "£450,000",
    location: "UK investment · Nigeria-based investor",
    loanType: "Foreign national buy-to-let mortgage",
    ltv: "70% LTV",
    term: "Long-term investment mortgage",
    borrower: "Overseas investor",
    challenge:
      "An investor based in Nigeria required a mortgage to purchase a UK buy-to-let property without UK residency. Their employment in the oil and gas sector, combined with their country of residence, restricted the lenders available.",
    outcome:
      "We identified a lender whose criteria accommodated both the client's occupation and Nigerian residency. We coordinated the mortgage process remotely through to completion, helping the client secure their UK investment property.",
    image: {
      src: "/images/transactions/buy-to-let-uk.webp",
      alt: "Illustrative view of white stucco townhouses",
      illustrative: true,
    },
    serviceSlug: "foreign-national-buy-to-let-mortgages",
    serviceLabel: "Explore foreign national buy-to-let",
  },
  {
    slug: "land-bridging-liverpool-330k",
    headline: "£330,000 land bridging loan in Liverpool",
    amount: "£330,000",
    location: "Liverpool",
    loanType: "Land bridging loan",
    ltv: "50% LTV",
    term: "Short-term bridge, exit to development finance",
    borrower: "Property investor",
    challenge:
      "A property investor required short-term finance to purchase land with planning permission in Liverpool, with the intention of refinancing onto development finance. Some bridging lenders do not accept land as security, which limited the funding options.",
    outcome:
      "We presented the client's previous project experience and a clear proposed exit through development finance, securing a £330,000 bridging loan to complete the land purchase.",
    image: {
      src: "/images/transactions/land-with-planning.webp",
      alt: "Illustrative view of new-build houses bordering open land",
      illustrative: true,
    },
    serviceSlug: "bridging-loans",
    serviceLabel: "Explore bridging loans",
  },
  {
    slug: "bridging-refinance-london-500k",
    headline: "£500,000 bridging refinance following receivership in London",
    amount: "£500,000",
    location: "London",
    loanType: "Re-bridging loan",
    ltv: "65% LTV",
    term: "Completed in three weeks",
    borrower: "Property investor",
    challenge:
      "A London property investor approached us after their existing bridging loan exceeded its agreed term and receivers were appointed. Delays to refurbishment works being carried out by their contractor had prevented the client from completing their plans within the original loan period.",
    outcome:
      "We secured an alternative bridging lender willing to consider the circumstances and completed the £500,000 refinance within three weeks. This enabled the existing bridging facility to be repaid and helped the client retain the property.",
    image: {
      src: "/images/Receivers.webp",
      alt: "Illustrative view of a for-sale board outside a terraced house",
      illustrative: true,
    },
    serviceSlug: "bridging-loans",
    serviceLabel: "Explore bridging loans",
  },
  {
    slug: "development-manchester-1-3m",
    headline: "£1.3 million property development finance in Manchester",
    amount: "£1,300,000",
    location: "Manchester",
    loanType: "Ground-up development finance",
    ltv: "68% LTGDV",
    term: "Ground-up development facility",
    borrower: "Developer",
    challenge:
      "A developer required funding for their second ground-up development in Manchester. With a limited track record, they needed a lender comfortable with their experience who could also provide sufficient funds at the initial drawdown.",
    outcome:
      "We identified a lender prepared to support the developer's second scheme and secured a £1.3 million development facility at 68% of gross development value. The funding package also provided a higher initial drawdown to support the project's upfront funding requirements.",
    image: {
      src: "/images/dev-loan.webp",
      alt: "Illustrative view of new-build houses under construction",
      illustrative: true,
    },
    serviceSlug: "development-finance",
    serviceLabel: "Explore development finance",
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((study) => study.slug === slug);
