import FullWidthBanner from "@/components/quote-banner";
import BridgingLoanHero from "./_components/hero-section";
import MainContent from "./_components/main-content";
import BridgingFinanceCalculator from "@/components/bridging-finance-calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://privatepropertyfinance.com/bridging-finance"
  ),
  alternates: {
    canonical: "/bridging-finance",
  },
  title: "Bridging Finance | Private Property Finance",
  description:
    "Explore our Bridging Finance services for property developers and investors.",
  keywords: ["property finance", "property sourcing"],
  applicationName: "Private Property Finance",
  creator: "Private Property Finance",
  publisher: "Athena Media",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Private Property Finance",
    title: "Private Property Finance",
    url: "https://privatepropertyfinance.com/bridging-finance",
    description:
      "Explore our Bridging Finance services for property developers and investors.",
    images: [
      {
        url: "https://utfs.io/f/K39jtZpI79HT3zgjTtMRMqKJwoliFUYbNI70yz63B8XZPOej",
        width: 366,
        height: 360,
        alt: "Private Property Finance",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://utfs.io/f/K39jtZpI79HT3zgjTtMRMqKJwoliFUYbNI70yz63B8XZPOej",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Property Finance | Property Sourcing",
    description:
      "Explore our Bridging Finance services for property developers and investors.",
    images: [
      "https://utfs.io/f/K39jtZpI79HT3zgjTtMRMqKJwoliFUYbNI70yz63B8XZPOej",
    ],
  },
  verification: {
    google: "sTDXQDPKtwNl5tCTtd61llxGnld0iK1awlisRgjP0Qc",
  },
};

const BridgingFinance = () => {
  return (
    <div>
      <BridgingLoanHero />
      <MainContent />
      <BridgingFinanceCalculator />
    </div>
  );
};
export default BridgingFinance;
