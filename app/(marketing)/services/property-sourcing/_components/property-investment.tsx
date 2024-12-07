import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Building, PiggyBank, TrendingUp, PhoneCall } from "lucide-react";
import Cities from "./cities";
import Link from "next/link";

export default function PropertyInvestment() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl text-accent font-bold mb-4">
          UK Property Investment Made Easy
        </h1>
        <p className="text-xl text-muted-foreground">
          We take the hassle out of property sourcing, providing you with
          lucrative investment opportunities in the UK.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-accent text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2" />
                Identifying Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              We leverage our extensive network and market expertise to pinpoint
              properties with high potential returns, tailored to your specific
              requirements.
            </CardContent>
          </Card>
          <Card className="bg-accent text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PiggyBank className="mr-2" />
                Securing Financing
              </CardTitle>
            </CardHeader>
            <CardContent>
              Navigating the UK financing landscape can be complex. We have
              access to a wide range of lenders and will work diligently to
              secure the best possible funding terms for your purchase.
            </CardContent>
          </Card>
          <Card className="bg-accent text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2" />
                Seamless Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              From initial consultation to final closing, we&apos;ll guide you
              through every step of the process, ensuring a smooth and
              stress-free investment journey.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-accent">
          Why Invest in UK Property?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 ">
          <Card className="text-accent border-accent">
            <CardHeader>
              <CardTitle>Stable Economy</CardTitle>
            </CardHeader>
            <CardContent>
              A well-established and resilient economy provides a secure
              foundation for your investment.
            </CardContent>
          </Card>
          <Card className="text-accent border-accent">
            <CardHeader>
              <CardTitle>Safe Investment Environment</CardTitle>
            </CardHeader>
            <CardContent>
              Transparent regulations and legal frameworks protect your
              investment.
            </CardContent>
          </Card>
          <Card className="text-accent border-accent">
            <CardHeader>
              <CardTitle>Strong Rental Market</CardTitle>
            </CardHeader>
            <CardContent>
              Consistent demand for rental properties offers the potential for
              steady income streams.
            </CardContent>
          </Card>
          <Card className="text-accent border-accent">
            <CardHeader>
              <CardTitle>Long-Term Growth Potential</CardTitle>
            </CardHeader>
            <CardContent>
              UK property has historically demonstrated strong capital
              appreciation, making it a compelling long-term investment.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4 text-accent">
          Discover a place you&apos;ll love to invest in
        </h2>
        <p className="mb-6 text-xl">
          Contact us today to discuss your investment objectives and begin your
          journey towards owning a UK property.
        </p>
        <Cities />
        <Link href="/contact-us">
        <Button size="lg" className="text-lg bg-accent">
          Contact Us
          <PhoneCall className="ml-2" />
        </Button></Link>
      </section>
    </div>
  );
}
