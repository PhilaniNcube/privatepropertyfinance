import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => (
  <section className="relative bg-gray-900 text-white">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        opacity: 0.6,
      }}
    >
      <Image
        src="https://utfs.io/f/K39jtZpI79HTkHq1D0wGbJSmq85WjZYLfspR93DrwzQBMhuN"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
    </div>
    <div className="relative mx-auto px-4 py-36 sm:px-6 lg:flex lg:items-center lg:px-4 max-w-7xl">
      <div className="max-w-xl text-center sm:text-left">
        <h1 className="text-3xl font-extrabold sm:text-5xl mix-blend-screen">
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
          <Link href="/get-a-quote">
            <Button size="lg" className="w-full bg-accent sm:w-auto">
              Get A Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact-us">
            <Button
              size="lg"
              className="w-full hover:bg-accent text-white sm:w-auto"
            >
              Contact Us
              <PhoneCall className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
