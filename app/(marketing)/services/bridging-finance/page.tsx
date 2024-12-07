import FullWidthBanner from "@/components/quote-banner";
import BridgingLoanHero from "./_components/hero-section";
import MainContent from "./_components/main-content";
import BridgingFinanceCalculator from "@/components/bridging-finance-calculator";

const BridgingFinance = () => {
  return (
    <div>
      <BridgingLoanHero />
      <MainContent />
      <BridgingFinanceCalculator />
    </div>
  );
};
export default BridgingFinance;
