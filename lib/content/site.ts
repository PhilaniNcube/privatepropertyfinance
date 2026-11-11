export const SITE = {
  name: "Private Property Finance",
  shortName: "PPF",
  legalName: "Private Property Finance Group Ltd",
  url: "https://www.privatepropertyfinance.com",
  companyNumber: "16489969",
  icoNumber: "ZB916556",
  phone: "0161 399 0207",
  phoneHref: "+441613990207",
  mobile: "07351 088358",
  mobileHref: "+447351088358",
  email: "info@privatepropertyfinance.com",
  hours: "Monday to Friday, 9:00–18:30",
  description:
    "Bridging, development finance, commercial and foreign national buy-to-let mortgages from £100,000 to £20 million. Speak to an experienced property finance broker.",
  linkedin:
    "https://www.linkedin.com/company/private-property-finance",
  manchester: {
    label: "Manchester",
    lines: ["Cubo, 1 Spinningfields", "Manchester M3 3EB"],
    note: "Main office",
  },
  london: {
    label: "London",
    lines: ["By appointment"],
    note: "Meetings by arrangement",
  },
  legalStatement:
    "Private Property Finance is a trading name of Private Property Finance Group Ltd, registered in England and Wales, company number 16489969. Registered office: Cubo, 1 Spinningfields, Manchester M3 3EB. ICO registration number ZB916556. We are a credit broker, not a lender, and we may receive a fee or commission from lenders. Private Property Finance is not authorised or regulated by the Financial Conduct Authority. We arrange non-regulated finance for business and investment purposes only.",
  riskWarning:
    "Your property may be repossessed if you do not keep up repayments on a loan secured on it.",
} as const;

export const NAV_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Meet the Team", href: "/team" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Commercial Mortgages", href: "/commercial-mortgages" },
      { label: "Bridging Loans", href: "/bridging-loans" },
      { label: "Development Finance", href: "/development-finance" },
      {
        label: "Foreign National Buy-to-Let",
        href: "/foreign-national-buy-to-let-mortgages",
      },
    ],
  },
  { label: "Completed Transactions", href: "/case-studies" },
  { label: "Contact Us", href: "/contact-us" },
];
