import HeroSection from "./_components/hero-section";
import QuoteForm from "./_components/quote-form";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-8">

      <QuoteForm />
      </div>
    </div>
  );
};
export default page;
