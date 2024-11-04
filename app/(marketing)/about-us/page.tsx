
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building,
  Users,
  Network,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

import AboutHero from "./_components/about-hero";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
     <AboutHero />

      <main className="container max-w-7xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Expertise</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <Briefcase className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  With over 30 years of combined experience in property finance,
                  our team offers extensive expertise acquired through years as
                  Relationship Managers at leading high street banks and
                  specialist property lenders. Our background allows us to
                  understand the unique nuances of the property finance market,
                  ensuring we deliver tailored finance solutions that meet the
                  diverse needs of property investors, developers, and
                  homeowners alike.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <ShieldCheck className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  At Private Property Finance we believe in a transparent and
                  open approach in every partnership. Working closely with high
                  street banks, specialist lenders, and trusted alternative
                  finance providers, we are dedicated to securing the ideal
                  funding solution tailored to your goal. With our extensive
                  network and commitment to clarity, we ensure you stay informed
                  and confident at every step of the journey, making the process
                  as seamless as possible.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  Experienced Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our team brings over 30 years of combined experience in
                  property finance, ensuring expert guidance for your needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 text-primary mr-2" />
                  Diverse Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We cater to property investors, developers, and homeowners,
                  understanding the unique needs of each client segment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Network className="h-5 w-5 text-primary mr-2" />
                  Extensive Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our partnerships with high street banks, specialist lenders,
                  and alternative finance providers ensure we find the best
                  solution for you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                  Transparency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We believe in open communication, keeping you informed and
                  confident throughout the entire process.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}