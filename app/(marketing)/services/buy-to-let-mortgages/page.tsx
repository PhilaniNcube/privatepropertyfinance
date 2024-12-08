import { Metadata } from "next";
import PropertyLoanCalculator from "./_components/buy-to-let-loan-calculator";
import HeroSection from "./_components/hero-section";
import MainContent from "./_components/main-content";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://privatepropertyfinance.com/buy-to-let-mortgages"
  ),
  alternates: {
    canonical: "/buy-to-let-mortgages",
  },
  title: "Buy To Let | Private Property Finance",
  description:
    "Explore our Buy To Let services for property developers and investors.",
  keywords: ["property finance", "property sourcing"],
  applicationName: "Private Property Finance",
  creator: "Private Property Finance",
  publisher: "Athena Media",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Private Property Finance",
    title: "Private Property Finance",
    url: "https://privatepropertyfinance.com/buy-to-let-mortgages",
    description:
      "Explore our Buy To Let services for property developers and investors.",
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
    index: true,
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
      "Explore our Buy To Let services for property developers and investors.",
    images: [
      "https://utfs.io/f/K39jtZpI79HT3zgjTtMRMqKJwoliFUYbNI70yz63B8XZPOej",
    ],
  },
  verification: {
    google: "sTDXQDPKtwNl5tCTtd61llxGnld0iK1awlisRgjP0Qc",
  },
};

const BuyToLet = () => {
  return (
    <div>
      <HeroSection />
      <MainContent />
      <PropertyLoanCalculator />
    </div>
  );
};
export default BuyToLet;
