import FullWidthBanner from "@/components/quote-banner";
import HeroSection from "./_components/hero-section";
import IntroSection from "./_components/intro-section";
import ServicesSection from "./_components/services-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://privatepropertyfinance.com/international-clients"
  ),
  alternates: {
    canonical: "/international-clients",

  },
  title: "International Clients | Private Property Finance",
  description:
    "Navigating the complexities of property financing with ease and personalized support.",
  keywords: ["property finance", "International Clients"],
  applicationName: "Private Property Finance",
  creator: "Private Property Finance",
  publisher: "Athena Media",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Private Property Finance",
    title: "Private Property Finance",
    url: "https://privatepropertyfinance.com/international-clients",
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
    title: "Private Property Finance | International Clients",
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

const InternationalClients = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <FullWidthBanner />
    </div>
  );
};
export default InternationalClients;
