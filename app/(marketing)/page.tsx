import HomepageHero from "./_components/hero";
import WelcomeSection from "./_components/welcome-section";
import ServicesGrid from "./services/_components/services-grid";


export default function Home() {
  return (
    <div>
     <HomepageHero />
     <WelcomeSection />
     <ServicesGrid />
    </div>
  );
}
