import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative bg-gray-900 text-white">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506501139174-099022df5260?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        opacity: 0.3,
      }}
    />
    <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-4 max-w-7xl">
      <div className="max-w-xl text-center sm:text-left">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Invest in UK Property
          <strong className="block font-extrabold text-zinc-300">
            From Anywhere in the World
          </strong>
        </h1>

        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
          Expert guidance and tailored finance solutions for international
          investors looking to enter the UK property market.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <Button size="lg" className="w-full sm:w-auto">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button variant="outline" size="lg" className="w-full text-zinc-700 sm:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
