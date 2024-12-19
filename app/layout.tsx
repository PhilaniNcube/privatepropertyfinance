import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation/navigation.client";
import Footer from "@/components/navigation/footer";
import { Toaster } from "@/components/ui/sonner";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const aptosMono = localFont({
  src: "./fonts/Aptos.ttf",
  variable: "--font-aptos-mono",
  weight: "100 200 300 400 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://privatepropertyfinance.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
    },
  },
  title: {
    template: "%s | Private Property Finance",
    default: "Private Property Finance",
  },
  description:
    "Navigating the complexities of property financing with ease and personalized support.",
  keywords: [
    "property finance",
    "mortgage",
    "property investment",
    "finance",
    "international property finance",
    "care home finance",
    "property development finance",
    "bridging finance",
    "commercial property finance",
    "property finance broker",
    "property investments",
    "property finance UK",
    "property finance London",
    "property",
  ],
  applicationName: "Private Property Finance",
  creator: "Private Property Finance",
  publisher: "Athena Media",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Private Property Finance",
    title: "Private Property Finance",
    url: "https://privatepropertyfinance.com",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aptosMono.className} antialiased`}
      >
        <Navigation />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
