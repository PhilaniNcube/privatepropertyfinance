import type { Metadata } from "next";
import { SITE } from "./content/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
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
    robots:
      noindex ||
      process.env.VERCEL_ENV === "preview" ||
      process.env.NEXT_PUBLIC_NOINDEX === "true"
        ? { index: false, follow: false }
        : { index: true, follow: true },
  };
}
