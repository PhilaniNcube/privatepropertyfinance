import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, BarChart } from "lucide-react";
import Link from "next/link";

export default function MainContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-background">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-6">
              Your Partner in Buy-to-Let Investment
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you&apos;re a seasoned investor or just starting your
              portfolio, Private Property Finance offers access to a wide range
              of lenders and competitive rates for Buy-to-Let mortgages.
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg mb-6">
                The Buy-to-Let landscape is constantly evolving, with new
                regulations and financial considerations impacting investment
                strategies. At Private Property Finance, we stay ahead of these
                changes, providing expert guidance and tailored financing
                solutions to help you succeed in this dynamic market. We work
                with a diverse network of lenders, offering a wide range of
                Loan-to-Value ratios and income criteria to suit your unique
                investment profile. Whether you&apos;re focused on single
                properties, building a portfolio, or venturing into
                Purpose-Built Student Accommodation (PBSA), we have the
                expertise to help you achieve your investment goals.
              </p>
            </div>
            <div>
              <p className="text-lg mb-6">
                From navigating complex regulations to securing the best
                possible financing terms, Private Property Finance is your
                trusted partner in Buy-to-Let investment. Contact us today for a
                personalized consultation and discover how we can help you
                maximize your returns in the ever-changing BTL market.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Building className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Access to Diverse Lenders</CardTitle>
              </CardHeader>
              <CardContent>
                We partner with a broad spectrum of lenders, including
                high-street banks, specialist Buy-to-Let lenders, and private
                finance providers. This allows us to access the most competitive
                rates and flexible terms tailored to your specific
                circumstances, whether you&apos;re a first-time investor or an
                experienced portfolio landlord.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Tailored Solutions for Every Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                We understand the unique requirements of different Buy-to-Let
                investment strategies. Whether you&apos;re focused on single-let
                properties, HMOs (Houses in Multiple Occupation), multi-unit
                freehold blocks, or PBSA, we can find the right financing
                solution to match your investment objectives.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Expert Market Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                Our team possesses in-depth knowledge of the Buy-to-Let market,
                including the latest regulations, tax implications, and
                investment trends. We provide expert guidance and support
                throughout the entire financing process, helping you make
                informed decisions and navigate the complexities of the market
                with confidence.
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact-us">
              <Button size="lg" className="text-lg px-8 py-3">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
