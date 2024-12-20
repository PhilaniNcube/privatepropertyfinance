import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <header className="relative text-primary-foreground">
      <Image
        src="https://utfs.io/f/K39jtZpI79HTfCC6lNhHnMqAgEu4wxZi0K1aTjyQm5VpJbh8"
        alt="Background Image"
        quality={100}
        width={1920}
        height={1280}
        property="image"
        priority
        className="z-0 min-h-[70vh] max-h-[72vh] object-cover"
      />
      <div className="absolute inset-0 z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center h-full py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl text-accent font-bold mb-4 max-w-[27ch] text-balance mix-blend-darken">
            Transform Your Vision into Reality with Development Funding
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-[45ch] text-slate-600 text-balance">
            Secure tailored financing for your next residential or commercial
            project.
          </p>
          <Link href="/contact-us">
            <Button size="lg" variant="secondary" className="w-fit">
              Contact Us
              <PhoneCall className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default HeroSection;
