import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="relative min-h-[400px] ">
      <div className="absolute inset-0">
        <Image
          alt="Hero Image"
          className="object-cover object-center w-full h-full"
          priority
          src="https://utfs.io/f/K39jtZpI79HTALYdDEcCinjXpwHJv5Uyr6SBzdsWPGEcumT3"
          width={1920}
          height={1280}
        />
      </div>
      <div className="bg-slate-200/40 md:bg-transparent relative">
        <div className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:flex lg:h-[70vh] lg:items-center lg:px-4">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-black">
              About
              <strong className="block font-extrabold text-zinc-900">
                Private Property Finance
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-950">
              Discover our journey, expertise, and commitment to delivering
              exceptional property finance solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center sm:justify-start justify-center">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Our Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="contact-us">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-accent">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
