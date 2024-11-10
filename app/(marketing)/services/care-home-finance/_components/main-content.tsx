import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Banknote, Building, Users } from "lucide-react";
import Link from "next/link";

const MainContent = () => {
  return (
    <main className="flex-grow bg-background">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-lg mb-6">
          The UK&apos;s aging population presents a significant opportunity for
          investment in the care home sector. Whether you&apos;re an experienced
          operator or new to the market, navigating the financial landscape can
          be complex. At Private Property Finance, we provide expert guidance
          and tailored solutions to help you succeed in this dynamic and
          rewarding sector. We connect you with the resources and expertise you
          need, from property valuation to legal counsel and securing optimal
          funding.
        </p>

        <h2 className="text-2xl font-bold mb-6">
          Key Features of Our Care Home Financing Services:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Banknote className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Bespoke Funding Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              We understand that every care home project is unique. We work with
              a diverse network of lenders to secure financing tailored to your
              specific requirements, experience level, and financial goals.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Expert Industry Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              Our deep understanding of the care home sector allows us to
              anticipate challenges and provide proactive solutions, ensuring a
              smooth and efficient financing process.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Comprehensive Support Network</CardTitle>
            </CardHeader>
            <CardContent>
              We collaborate with leading property valuers, experienced
              solicitors specializing in care home transactions, and other key
              professionals to provide holistic support throughout your
              investment journey.
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 text-lg">
          <p>
            The demand for high-quality care homes continues to rise, making it
            an attractive investment opportunity. However, securing the right
            financing is crucial for success. At Private Property Finance, we
            pride ourselves on our extensive experience and comprehensive
            approach to care home financing. We work closely with both seasoned
            professionals and new entrants, offering tailored solutions that
            address the unique challenges and opportunities of this evolving
            market. Our dedicated team understands the complexities of care home
            regulations, property valuations, and financial structuring.
          </p>
          <p>
            Whether you&apos;re looking to acquire an existing care home, build
            a new facility, or refinance your current property, we can help. Our
            partnerships with top-tier property valuers ensure accurate
            assessments, while our network of experienced solicitors provides
            expert legal guidance throughout the process. We connect you with
            funders who understand the nuances of the care home sector and offer
            competitive terms.
          </p>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to explore your care home investment options?
          </h2>
          <Link href="/contact-us">
            <Button size="lg">
              Contact us for a consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
export default MainContent;
