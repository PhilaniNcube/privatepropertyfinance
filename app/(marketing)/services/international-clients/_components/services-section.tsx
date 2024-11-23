import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building, FileText, Globe, MessageCircle, UserCheck } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => (
  <section className="bg-white mb-12">
    <div className="container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Our Dedicated Service for International Clients
      </h2>
      <div className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <Card className="col-span-4 md:col-span-2 row-span-2 bg-accent text-primary-foreground">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Globe className="mr-2 h-6 w-6" />
              Access to a Broad Lender Network
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              We&apos;ve cultivated strong relationships with a diverse range of
              lenders, including high street banks, specialist property finance
              providers, and even family offices. This gives us the leverage to
              secure the most competitive rates and terms tailored to your
              unique situation.
            </p>
            <Button variant="secondary" className="mt-4">
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card className="col-span-2 md:col-span-1 bg-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="mr-2 h-5 w-5 text-primary" />
              Expert Market Knowledge
            </CardTitle>
          </CardHeader>
          <CardContent>
            The UK property market is dynamic. Our team stays on top of the
            latest trends and regulations.
          </CardContent>
        </Card>
        <Card className="col-span-2 md:col-span-1 bg-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-5 w-5 text-primary" />
              Streamlined Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            We handle the complexities of the UK mortgage application process,
            taking the stress off your shoulders.
          </CardContent>
        </Card>
        <Card className="col-span-2 md:col-span-1 bg-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5 text-primary" />
              Clear Communication
            </CardTitle>
          </CardHeader>
          <CardContent>
            We believe in transparent and open communication throughout the
            entire process.
          </CardContent>
        </Card>
        <Card className="col-span-2 md:col-span-1 bg-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserCheck className="mr-2 h-5 w-5 text-primary" />
              Personalized Solutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            We develop bespoke financing strategies that align with your
            individual needs and goals.
          </CardContent>
        </Card>
        <Card className="col-span-4 bg-accent text-white">
          <CardHeader>
            <CardTitle className="text-xl">
              Ready to Start Your UK Property Journey?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Let us help you make your UK property investment dreams a reality.
              Contact us today for a free, no-obligation consultation.
            </p>
            <Button asChild className="text-zinc-700" variant="outline">
              <Link href="/contact-us">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);


export default ServicesSection;
