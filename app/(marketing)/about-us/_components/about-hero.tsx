import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="relative min-h-[400px] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/70">
        <Image
          alt="Hero Image"
          className="object-cover object-center w-full h-full"
          priority
          src="https://utfs.io/f/K39jtZpI79HThxDVgpT4eiQDqWM5pAUcz7CwFT0Eg3frZbGa"
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:flex lg:h-[70vh] lg:items-center lg:px-4">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            About
            <strong className="block font-extrabold text-zinc-300">
              Private Property Finance
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-300">
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
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto gap-2"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
