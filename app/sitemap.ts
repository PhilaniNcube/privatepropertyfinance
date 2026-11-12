import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content/site";

const lastModified = new Date("2026-11-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "yearly" | "monthly" | "weekly" }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/commercial-mortgages", priority: 0.9, changeFrequency: "monthly" },
    { path: "/bridging-loans", priority: 0.9, changeFrequency: "monthly" },
    { path: "/development-finance", priority: 0.9, changeFrequency: "monthly" },
    {
      path: "/foreign-national-buy-to-let-mortgages",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about-us", priority: 0.7, changeFrequency: "monthly" },
    { path: "/team", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact-us", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/complaints", priority: 0.3, changeFrequency: "yearly" },
  ];

  return pages.map((page) => ({
    url: `${SITE.url}${page.path === "/" ? "" : page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
