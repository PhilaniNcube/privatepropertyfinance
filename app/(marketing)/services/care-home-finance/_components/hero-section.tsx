import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <header className="relative bg-primary text-primary-foreground">
      <Image
        src="https://utfs.io/f/K39jtZpI79HT0XENHFRMWjZquCledaymVRfSigT4O2tnArz7"
        alt="Background Image"
        quality={100}
        width={1920}
        height={1280}
        property="image"
        priority
        className="z-0 min-h-[70vh] max-h-[72vh] object-cover"
      />
      <div className="absolute inset-0 z-30 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center h-full py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-[35ch]">
            Investing in Care Homes: Expert Financial Guidance for a Growing
            Sector
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Navigate the complexities of care home financing with confidence.
          </p>
          <Link href="/get-a-quote">
            <Button size="lg" variant="secondary" className="w-fit">
              Get A Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default HeroSection;
