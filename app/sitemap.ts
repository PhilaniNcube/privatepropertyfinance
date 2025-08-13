import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: { slug: { current: string }; _updatedAt?: string }[] =
    await client.fetch(
      groq`*[_type=='post' && defined(slug.current)]{ slug, _updatedAt }`
    );
  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `https://privatepropertyfinance.com/blogs/${p.slug.current}`,
    lastModified: p._updatedAt ? new Date(p._updatedAt) : new Date(),
    changeFrequency: "weekly",
    priority: 0.4,
  }));
  return [
    {
      url: "https://privatepropertyfinance.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://privatepropertyfinance.com/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://privatepropertyfinance.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://privatepropertyfinance.com/get-a-quote",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://privatepropertyfinance.com/services",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://privatepropertyfinance.com/services/bridging-finance",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://privatepropertyfinance.com/services/buy-to-let-mortgages",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://privatepropertyfinance.com/services/care-home-finance",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://privatepropertyfinance.com/services/commercial-mortgages",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://privatepropertyfinance.com/services/development-funding",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://privatepropertyfinance.com/services/international-clients",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://privatepropertyfinance.com/services/property-sourcing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://privatepropertyfinance.com/resources/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...blogEntries,
  ];
}
