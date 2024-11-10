import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <header className="relative bg-primary text-primary-foreground">
      <Image
        src="https://utfs.io/f/K39jtZpI79HTySP91Y2PKF3prBbih4zLT658q2DGeJuUwAtl"
        alt="Background Image"
        quality={100}
        width={1920}
        height={1280}
        property="image"
        priority
        className="z-0 min-h-[70vh] max-h-[72vh] object-cover"
      />
      <div className="absolute inset-0 z-30 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center h-full py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-[30ch]">
            Transform Your Vision into Reality with Development Funding
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Secure tailored financing for your next residential or commercial
            project.
          </p>
          <Link href="/contact-us">
            <Button size="lg" variant="secondary" className="w-fit">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default HeroSection;
