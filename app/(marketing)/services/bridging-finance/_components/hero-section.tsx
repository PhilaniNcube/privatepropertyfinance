import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BridgingLoanHero() {
  return (
    <section className="relative bg-cover bg-center py-32 text-white">
      <div className="absolute inset-0">
        <Image
          src="https://utfs.io/f/K39jtZpI79HTt58Lg0qXzCiRBEdIquGgKwc53OnAm1lHx2pZ"
          alt="Background Image"
          quality={100}
          width={1920}
          height={1280}
          property="image"
          priority
          className="z-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bridge the Gap with Fast & Flexible Financing
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Secure short-term funds quickly against your property.
        </p>
        <Button size="lg" className="text-lg px-8 py-3">
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
