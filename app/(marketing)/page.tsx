import FullWidthBanner from "@/components/quote-banner";
import HomepageHero from "./_components/hero";
import { LoanApplicationTimeline } from "./_components/loan-application-timeline";
import WelcomeSection from "./_components/welcome-section";
import ServicesGrid from "./services/_components/services-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://privatepropertyfinance.com/"),
  alternates: {
    canonical: "/",
  },
  title: "Private Property Finance",
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
    url: "https://privatepropertyfinance.com/",
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
    title: "Private Property Finance",
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

export default function Home() {
  return (
    <div>
     <HomepageHero />
     <WelcomeSection />
     <ServicesGrid />
     <FullWidthBanner />
     <LoanApplicationTimeline />
    </div>
  );
}
