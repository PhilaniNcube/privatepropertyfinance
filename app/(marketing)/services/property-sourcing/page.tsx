import { Metadata } from "next";
import Cities from "./_components/cities";
import HeroSection from "./_components/hero-section";
import PropertyInvestment from "./_components/property-investment";

export const metadata: Metadata = {
  metadataBase: new URL("https://privatepropertyfinance.com/property-sourcing"),
  alternates: {
    canonical: "/property-sourcing",
  },
  title: "Property Sourcing | Private Property Finance",
  description:
    "Navigating the complexities of property financing with ease and personalized support.",
  keywords: ["property finance", "property sourcing"],
  applicationName: "Private Property Finance",
  creator: "Private Property Finance",
  publisher: "Athena Media",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Private Property Finance",
    title: "Private Property Finance",
    url: "https://privatepropertyfinance.com/property-sourcing",
    description:
      "Navigating the complexities of property financing with ease and personalized support.",
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
      "Navigating the complexities of property financing with ease and personalized support.",
    images: [
      "https://utfs.io/f/K39jtZpI79HT3zgjTtMRMqKJwoliFUYbNI70yz63B8XZPOej",
    ],
  },
  verification: {
    google: "sTDXQDPKtwNl5tCTtd61llxGnld0iK1awlisRgjP0Qc",
  },
};

const PropertySourcingPage = () => {
  return (
    <div>
      <HeroSection />
      <PropertyInvestment />
    </div>
  );
};
export default PropertySourcingPage;
