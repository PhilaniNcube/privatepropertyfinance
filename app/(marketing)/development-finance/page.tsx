import type { Metadata } from "next";
import { ServicePage } from "@/components/site/service-page";
import { getService } from "@/lib/content/services";
import { pageMetadata } from "@/lib/seo";

const service = getService("development-finance")!;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function DevelopmentFinancePage() {
  return <ServicePage service={service} />;
}
