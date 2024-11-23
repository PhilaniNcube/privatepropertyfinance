import FullWidthBanner from "@/components/quote-banner";
import HomepageHero from "./_components/hero";
import { LoanApplicationTimeline } from "./_components/loan-application-timeline";
import WelcomeSection from "./_components/welcome-section";
import ServicesGrid from "./services/_components/services-grid";


export default function Home() {
  return (
    <div>
     <HomepageHero />
     <WelcomeSection />
     <ServicesGrid />
     <FullWidthBanner />
     <LoanApplicationTimeline />
    </div>
  );
}
