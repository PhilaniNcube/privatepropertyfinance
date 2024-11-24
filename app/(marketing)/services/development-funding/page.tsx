import DevelopmentLoanCalculator from "@/components/development-loan-calculator";
import FundingGrid from "./_components/funding-grid";
import HeroSection from "./_components/hero-section";
import MainContent from "./_components/main-content";


const DevelopmentFunding = () => {
  return (
    <div>
      <HeroSection />
      <FundingGrid />
      <MainContent />
      <DevelopmentLoanCalculator />
    </div>
  );
};
export default DevelopmentFunding;
