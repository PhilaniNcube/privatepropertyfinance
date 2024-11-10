import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <header className="relative bg-primary text-primary-foreground">
      <Image
        src="https://utfs.io/f/K39jtZpI79HTpRkbNWoD8IO4loy6qFmK2BnYje5iwMRStJaX"
        alt="Background Image"
        quality={100}
        width={1920}
        height={1280}
        property="image"
        priority
        className="z-0 min-h-[70vh] max-h-[72vh] object-cover"
      />
      <div className="absolute inset-0 z-30 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center h-full py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-[35ch]">
            Discover Your Ideal UK Investment Property
          </h1>
          <p className="text-sm sm:text-md mb-8 max-w-[80ch]">
            Are you a foreign national looking for a stable and secure
            investment opportunity? The UK&apos;s robust economy and safe investment
            environment make it an ideal choice. We specialize in helping
            individuals like you discover and acquire the perfect UK property to
            meet your investment goals.
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
