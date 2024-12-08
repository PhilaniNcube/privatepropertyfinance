import MortgageLoanCalculator from "@/components/mortgage-loan-calculator";
import HeroSection from "./_components/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get A Quote | Private Property Finance",
  description: "Get a quote for your mortgage loan.",
  keywords: ["mortgage loan", "mortgage loan calculator"],
  metadataBase: new URL("https://privatepropertyfinance.com/get-a-quote"),
}

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <MortgageLoanCalculator />
      </div>
    </div>
  );
};
export default page;
