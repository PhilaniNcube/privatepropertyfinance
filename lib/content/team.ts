export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string[];
  email: string;
  phone?: string;
  linkedin?: string;
  focus: string[];
};

export const TEAM: TeamMember[] = [
  {
    name: "Amy",
    role: "Founder",
    initials: "A",
    bio: [
      "Amy founded Private Property Finance to give investors, developers and business owners one experienced person who understands the deal, knows the lenders and takes the proposal through to completion.",
      "Before founding the business, Amy spent more than 20 years in property finance, much of it as a relationship manager at high street banks and specialist property lenders. She has sat in credit meetings and written the papers, so she knows what lenders need to see and how to present a case on its strengths.",
    ],
    email: "amy@privatepropertyfinance.com",
    focus: ["Bridging loans", "Development finance", "Commercial mortgages"],
  },
];

export const PRINCIPLES = [
  {
    title: "Straight answers",
    body: "If a deal isn't financeable, we'll say so early and explain what would change that.",
  },
  {
    title: "The right lender, not the nearest one",
    body: "High street banks, specialist and challenger lenders, private credit and family offices.",
  },
  {
    title: "Transparent fees",
    body: "We explain how we are paid before you commit to anything.",
  },
  {
    title: "One point of contact",
    body: "Your broker manages valuers, solicitors and lender queries through to completion.",
  },
];

export const REVIEWERS = [
  "Property investors and landlords",
  "Developers and housebuilders",
  "Owner-occupying businesses",
  "Overseas buyers investing in UK property",
];
