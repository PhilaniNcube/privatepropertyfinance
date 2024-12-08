import DevelopmentLoanCalculator from "@/components/development-loan-calculator";
import FundingGrid from "./_components/funding-grid";
import HeroSection from "./_components/hero-section";
import MainContent from "./_components/main-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://privatepropertyfinance.com/development-funding"
  ),
  alternates: {
    canonical: "/development-funding",
  },
  title: "Development Funding | Private Property Finance",
  description:
    "We provide development funding for property developers and investors. Our team of experts will help you navigate the complexities of property financing with ease and personalized support.",
  keywords: ["property finance", "property sourcing"],
  applicationName: "Private Property Finance",
  creator: "Private Property Finance",
  publisher: "Athena Media",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Private Property Finance",
    title: "Private Property Finance",
    url: "https://privatepropertyfinance.com/development-funding",
    description:
      "We provide development funding for property developers and investors. Our team of experts will help you navigate the complexities of property financing with ease and personalized support.",
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
      "We provide development funding for property developers and investors. Our team of experts will help you navigate the complexities of property financing with ease and personalized support.",
    images: [
      "https://utfs.io/f/K39jtZpI79HT3zgjTtMRMqKJwoliFUYbNI70yz63B8XZPOej",
    ],
  },
  verification: {
    google: "sTDXQDPKtwNl5tCTtd61llxGnld0iK1awlisRgjP0Qc",
  },
};


const DevelopmentFunding = () => {
  return (
    <div>
      <HeroSection />
      <FundingGrid />
      <MainContent />
      <DevelopmentLoanCalculator />
    </div>
  );
};
export default DevelopmentFunding;
