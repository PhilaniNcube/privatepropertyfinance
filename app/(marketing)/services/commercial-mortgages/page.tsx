import { Metadata } from "next";
import CommercialHero from "./_components/commercial-hero";
import MortgageSolutions from "./_components/mortgage-solutions";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://privatepropertyfinance.com/commercial-mortgages"
  ),
  alternates: {
    canonical: "/commercial-mortgages",
  },
  title: "Commercial Mortgages | Private Property Finance",
  description:
    "We provide Commercial Mortgages for property developers and investors.",
  keywords: ["property finance", "property sourcing"],
  applicationName: "Private Property Finance",
  creator: "Private Property Finance",
  publisher: "Athena Media",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Private Property Finance",
    title: "Private Property Finance",
    url: "https://privatepropertyfinance.com/commercial-mortgages",
    description:
      "We provide Commercial Mortgages for property developers and investors.",
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
      "We provide Commercial Mortgages for property developers and investors.",
    images: [
      "https://utfs.io/f/K39jtZpI79HT3zgjTtMRMqKJwoliFUYbNI70yz63B8XZPOej",
    ],
  },
  verification: {
    google: "sTDXQDPKtwNl5tCTtd61llxGnld0iK1awlisRgjP0Qc",
  },
};


const CommercialMortgages = () => {
  return (
    <div>
      <CommercialHero />
      <MortgageSolutions />
    </div>
  );
};
export default CommercialMortgages;
