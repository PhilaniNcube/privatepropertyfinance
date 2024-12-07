import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CommercialHero = () => {
  return (
    <section className="relative text-primary-foreground">
      <Image
        src="https://utfs.io/f/K39jtZpI79HTVzRhTOS9n9Rhr0AlX2kTpMVjzcLJuY7mae4G"
        alt="Commercial Real Estate"
        quality={100}
        width={1920}
        height={1280}
        property="image"
        priority
        className="z-0 min-h-[70vh] max-h-[72vh] object-cover object-left-top lg:object-center"
      />
      <div className="absolute inset-0 z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center h-full py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl text-accent font-bold mb-4 max-w-[27ch] text-balance mix-blend-darken">
            Unlock Your Business Potential with a Tailored Commercial Mortgage
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-[45ch] mix-blend-difference text-white text-balance">
            We offer a range of commercial mortgage solutions to help you secure
            the financing you need for your business.
          </p>
          <Link href="/contact-us">
            <Button size="lg" variant="secondary" className="w-fit">
              Speak to an Expert
              <PhoneCall className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CommercialHero;
