import { Button } from "@/components/ui/button";
import { Calculator, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomepageHero() {
  return (
    <section
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asset-finance-TSBPfduQETSKH2pprLHKKwQg43TE7G.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:flex lg:h-[80vh] lg:items-center lg:px-4">
        <div className="max-w-xl text-center sm:text-left">
          <div className="flex items-center space-x-2 text-white mb-4 sm:justify-start justify-center">
            <Home className="h-6 w-6" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Smart Mortgage Solutions
            </span>
          </div>

          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Property Finance
            <strong className="block font-extrabold text-zinc-400">
              Made Simple.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-300">
            Navigating the complexities of property financing with ease and
            personalized support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center sm:justify-start justify-center">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Calculate Now
              <Calculator className="h-4 w-4" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Professional mortgage advice tailored to your needs.
            <Link href="/terms" className="ml-1 underline hover:text-primary">
              Terms & Conditions apply
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
