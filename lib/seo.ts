import type { Metadata } from "next";
import { SITE } from "./content/site";

export const INTERNATIONAL_ENGLISH_LOCALES = [
  "en-GB",
  "en-HK",
  "en-SG",
  "en-AE",
  "en-NG",
  "en-MY",
  "en-KW",
  "en-US",
  "en-AU",
  "en-CA",
  "en-ZA",
] as const;

export function buildLanguageAlternates(path: string): Record<string, string> {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  const languages: Record<string, string> = {
    "x-default": url,
  };
  for (const locale of INTERNATIONAL_ENGLISH_LOCALES) {
    languages[locale] = url;
  }
  return languages;
}

const DEFAULT_KEYWORDS = [
  "UK property finance broker",
  "commercial mortgage broker UK",
  "bridging loan broker UK",
  "property development finance UK",
  "foreign national buy-to-let mortgage UK",
  "overseas investor UK mortgage",
  "UK expat buy-to-let mortgage",
  "UK SPV mortgage for non-residents",
  "non-resident UK property investment finance",
];

const PATH_KEYWORDS: Record<string, string[]> = {
  "/": [
    ...DEFAULT_KEYWORDS,
    "specialist property finance UK",
    "international buyer UK mortgage broker",
  ],
  "/foreign-national-buy-to-let-mortgages": [
    "foreign national buy-to-let mortgage UK",
    "UK mortgage for overseas investors",
    "non-UK resident buy-to-let mortgage",
    "UK expat mortgage broker",
    "UK SPV mortgage foreign national",
    "Hong Kong investor UK mortgage",
    "Singapore investor UK mortgage",
    "UAE Dubai expat UK mortgage",
    "Nigeria investor UK mortgage",
    "Malaysia investor UK property finance",
    "Kuwait investor UK mortgage",
  ],
  "/commercial-mortgages": [
    "commercial mortgage broker UK",
    "commercial investment mortgage UK",
    "semi-commercial mortgage UK",
    "owner-occupier commercial mortgage",
    "hotel finance UK",
    "SPV commercial mortgage UK",
    "SIPP SSAS commercial mortgage",
  ],
  "/bridging-loans": [
    "bridging loan broker UK",
    "non-regulated bridging finance UK",
    "auction bridging loan UK",
    "land bridging loan UK",
    "refurbishment bridging finance",
    "re-bridging loan UK",
    "commercial bridging loan",
  ],
  "/development-finance": [
    "property development finance broker UK",
    "ground-up development finance UK",
    "stretched senior development debt",
    "development exit finance UK",
    "mezzanine property finance UK",
    "heavy refurbishment finance UK",
  ],
  "/case-studies": [
    "UK property finance case studies",
    "completed property finance transactions UK",
    "Hong Kong investor UK buy-to-let case study",
    "Nigerian investor UK mortgage case study",
  ],
};

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
  keywords,
}: MetadataInput): Metadata {
  const isNoIndex =
    noindex ||
    process.env.VERCEL_ENV === "preview" ||
    process.env.NEXT_PUBLIC_NOINDEX === "true";

  const resolvedKeywords = keywords ?? PATH_KEYWORDS[path] ?? DEFAULT_KEYWORDS;

  return {
    title,
    description,
    keywords: resolvedKeywords,
    alternates: {
      canonical: path,
      languages: buildLanguageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      alternateLocale: ["en_US", "en_HK", "en_SG", "en_AE", "en_AU"],
      siteName: SITE.name,
      title,
      description,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Private Property Finance — UK property finance brokers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: isNoIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
