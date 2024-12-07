import DevelopmentLoanCalculator from "@/components/development-loan-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CommercialCalculator from "./commercial-calculator";
import Image from "next/image";

const MortgageSolutions = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-accent text-white">
            <CardHeader>
              <CardTitle className="text-2xl">
                Unlock the Most Competitive Rates and Favorable Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              Our team of experts will help you secure the best possible rates
              and terms for your commercial mortgage, ensuring that you get the
              financing you need at a price you can afford.
            </CardContent>
          </Card>
          <Card className="bg-accent text-white">
            <CardHeader>
              <CardTitle className="text-2xl">
                Save Time and Focus on Your Business
              </CardTitle>
            </CardHeader>
            <CardContent>
              Searching for the right mortgage can be time-consuming. We handle
              the entire process, from sourcing lenders to negotiating terms,
              freeing up your valuable time to focus on running your business.
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <CommercialCalculator />
          <Image
            src="https://utfs.io/f/K39jtZpI79HTkA0GlowGbJSmq85WjZYLfspR93DrwzQBMhuN"
            width={600}
            height={900}
            alt="Commercial Mortgages"
            className="object-cover w-full rounded-lg h-full"
          />
        </div>
      </div>
    </section>
  );
};
export default MortgageSolutions;
