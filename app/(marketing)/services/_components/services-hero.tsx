import { Button } from "@/components/ui/button";
import { ArrowRight, LucideHome } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesHero = () => {
  return (
    <section className="relative min-h-[400px] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/60">
        <Image
          alt="Services"
          src="https://utfs.io/f/K39jtZpI79HTkA0GlowGbJSmq85WjZYLfspR93DrwzQBMhuN"
          width={1200}
          height={900}
          className="w-full object-cover max-h-[65vh]"
        />
      </div>
      <div className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:flex lg:h-[65vh] lg:items-center lg:px-4 bg-black/35">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white flex flex-row">
            Our{" "}
            <strong className="block ml-3 font-extrabold text-zinc-300">
              Services
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center sm:justify-start justify-center">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                <LucideHome className="h-4 w-4" />
                Home
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
export default ServicesHero;
