export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  experienceSummary: string;
  bio: string[];
  email?: string;
  phone?: string;
  linkedin?: string;
  location?: string;
  image?: {
    src: string;
    alt: string;
  };
  focus: string[];
  /** Exclude non-client-facing team members (such as the office dog) from Person structured data. */
  includeInPersonSchema?: boolean;
};

export const TEAM: TeamMember[] = [
  {
    name: "Tawanda",
    role: "Director",
    initials: "T",
    experienceSummary:
      "Commercial, development, bridging and buy-to-let finance",
    bio: [
      "Tawanda is a Director at Private Property Finance, specialising in commercial mortgages, development finance, bridging loans and buy-to-let mortgages, with particular experience supporting international investors purchasing property in the UK.",
      "His background spans high street banking and alternative finance, where he has built strong relationships with lenders and property professionals. His experience in secured lending and relationship management gives him a clear understanding of what lenders look for and how to structure finance around each client's circumstances and goals.",
      "A property investor himself, Tawanda understands transactions from the perspectives of the borrower, broker and lender. He supports clients at every stage of their property journey, from purchasing a first investment property and growing a portfolio to funding developments and navigating complex refinances.",
      "In a market increasingly shaped by technology and automation, Tawanda believes personal relationships, trust and clear communication remain essential. His approach is simple: understand the client, find practical solutions and stay involved through to completion.",
    ],
    focus: [
      "Commercial mortgages",
      "Development finance",
      "Bridging loans",
      "Buy-to-let",
      "International investors",
    ],
  },
  {
    name: "Amy",
    role: "Case Manager",
    initials: "A",
    experienceSummary: "Case management from first enquiry to completion",
    bio: [
      "Amy brings experience across financial institutions and a commitment to delivering exceptional service to our clients and professional partners.",
      "She takes pride in managing cases from initial enquiry through to completion, keeping clients informed and working closely with lenders, solicitors, valuers and estate agents to keep each transaction moving.",
      "With an organised and approachable manner, Amy helps make the finance process clear, coordinated and as smooth as possible.",
    ],
    email: "amy@privatepropertyfinance.com",
    image: {
      src: "/images/team/amy.jpg",
      alt: "Amy, Case Manager at Private Property Finance",
    },
    focus: [
      "Case management",
      "Client communication",
      "Lender and legal coordination",
    ],
  },
  {
    name: "Shamiso",
    role: "International Business Development Manager",
    initials: "S",
    experienceSummary:
      "International business development · Based in Dubai",
    location: "Dubai",
    bio: [
      "Based in Dubai, Shamiso supports our growing international client base, helping overseas investors navigate the UK property finance process with confidence.",
      "She understands that arranging finance in another country can feel daunting and works closely with clients to explain the steps involved, understand their goals and coordinate with the wider PPF team.",
      "Shamiso has helped onboard clients from markets including Hong Kong, Nigeria, Malaysia and the UAE, providing a welcoming point of contact as they begin their UK property investment journey.",
    ],
    image: {
      src: "/images/team/shamiso.jpg",
      alt: "Shamiso, International Business Development Manager at Private Property Finance",
    },
    focus: [
      "International clients",
      "Overseas investors",
      "Client onboarding",
    ],
  },
  {
    name: "Charlie",
    role: "Chief Entertainment Officer",
    initials: "C",
    experienceSummary: "Office morale and visitor relations",
    location: "The PPF office",
    bio: [
      "Charlie keeps spirits high at the PPF office and takes his role as chief entertainer very seriously. He's always happy to welcome visitors, particularly those arriving with dog biscuits. Bring a treat, and you'll have a best friend for the day!",
    ],
    image: {
      src: "/images/team/charlie.jpg",
      alt: "Charlie, the Private Property Finance office dog",
    },
    focus: ["Office morale", "Visitor welcome", "Dog biscuits"],
    includeInPersonSchema: false,
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
    title: "Direct accountability",
    body: "You deal directly with the people assessing your case, who manage valuers, solicitors and lender queries through to completion.",
  },
];

export const REVIEWERS = [
  "Property investors and portfolio landlords",
  "Developers and housebuilders across the UK",
  "Owner-occupying trading businesses",
  "Overseas buyers and expats investing in UK property",
];
