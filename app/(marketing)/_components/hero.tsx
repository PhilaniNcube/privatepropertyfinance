import { Button } from "@/components/ui/button";
import { Calculator, Home, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomepageHero() {
  return (
    <section className="relative min-h-[600px] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0">
        <Image
          src="https://utfs.io/f/K39jtZpI79HTrX0gyiLqlar1KWC04fZzOQD5p6wjtbicmyM2"
          width={1920}
          height={1280}
          alt="Hero Image"
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>
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
            <strong className="block font-extrabold text-zinc-700">
              Made Simple.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-700">
            Navigating the complexities of property financing with ease and
            personalised support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center sm:justify-start justify-center">
            <Link href="/get-a-quote">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2"
              >
                Get A Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
