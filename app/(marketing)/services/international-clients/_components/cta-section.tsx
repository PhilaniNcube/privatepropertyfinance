import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => (
  <section className="py-16 bg-gray-100">
    <div className="container max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">
        Ready to Begin Your UK Property Journey?
      </h2>
      <p className="text-lg mb-8">
        We&apos;ve created a simple questionnaire to help us understand your
        requirements and tailor our services to your specific situation. Let us
        help you make your UK property investment dreams a reality.
      </p>
      <Button size="lg" asChild>
        <Link href="/questionnaire">
          Start Questionnaire
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </section>
);

export default CTASection;
