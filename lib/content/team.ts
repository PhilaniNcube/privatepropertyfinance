export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  experienceSummary: string;
  bio: string[];
  email: string;
  phone?: string;
  /** Set once Amy confirms her personal LinkedIn URL (added to Person schema sameAs). */
  linkedin?: string;
  /** Set once Amy supplies her approved headshot. */
  image?: {
    src: string;
    alt: string;
  };
  /** Owner items still required before final P2 profile sign-off. */
  pendingOwnerAssets?: string[];
  focus: string[];
};

export const TEAM: TeamMember[] = [
  {
    name: "Amy",
    role: "Founder & Principal Broker",
    initials: "A",
    experienceSummary:
      "20+ years in UK property finance across high street banking and specialist property lending",
    bio: [
      "Amy founded Private Property Finance to give property investors, developers and business owners a single, experienced point of contact who understands how deals are structured, knows the lenders personally, and manages each proposal from first conversation to completion.",
      "Before establishing Private Property Finance, Amy spent more than 20 years in property finance, including senior relationship management roles at high street banks and specialist property lenders. Having sat in credit meetings and written the credit papers herself, she knows what underwriters look for, where proposals typically stall, and how to present a case on its merits.",
    ],
    email: "amy@privatepropertyfinance.com",
    phone: "0161 399 0207",
    pendingOwnerAssets: [
      "Preferred full professional name (surname)",
      "Approved professional headshot photograph",
      "Confirmed personal LinkedIn profile URL & any named former lender roles approved for publication",
    ],
    focus: [
      "Commercial mortgages",
      "Bridging loans",
      "Development finance",
      "Foreign national buy-to-let",
    ],
  },
];

export const PRINCIPLES = [
  {
    title: "Straight answers",
    body: "If a deal isn't financeable, we will say so early and explain what would need to change.",
  },
  {
    title: "The right lender, not the nearest one",
    body: "High street banks, specialist and challenger lenders, private credit funds and family offices across the UK.",
  },
  {
    title: "Transparent fees",
    body: "We explain how we are paid in writing before you commit to anything.",
  },
  {
    title: "Founder-led accountability",
    body: "You deal directly with an experienced broker who manages valuers, solicitors and lender queries through to completion.",
  },
];

export const REVIEWERS = [
  "Property investors and portfolio landlords",
  "Developers and housebuilders across the UK",
  "Owner-occupying trading businesses",
  "Overseas buyers and expats investing in UK property",
];
