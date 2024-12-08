import { Metadata } from "next";
import ServicesGrid from "./_components/services-grid";
import ServicesHero from "./_components/services-hero";

export const metadata: Metadata = {
  title: "Services | Private Property Finance",
  description:
    "Navigating the complexities of property financing with ease and personalized support.",
  keywords: ["property finance", "mortgage", "property investment", "finance", "care home finance", "property development finance", "bridging finance", "commercial property finance", "property finance broker", "property investments", "property finance UK", "property finance London", "property"],
}

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesGrid />
    </div>
  );
};
export default ServicesPage;
