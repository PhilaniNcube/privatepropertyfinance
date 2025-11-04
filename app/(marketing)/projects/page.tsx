import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const recent_completed_deals = [
  {
    deal_name: "Unsecured Business Loan",
    amount: "£26,000",
    borrower_type: "Partnership",
    sector: "Launderette (Laundry Services)",
    location: "Manchester",
    loan_to_value_ltv: null,
    term: null,
    facility_type: null,
    image: "/images/laundry.jpg",
    purpose: "Expansion (equipment & working capital)",
    use_of_funds: "Expansion (equipment & working capital)",
    lender_type: "Enterprise lender from our panel",
    assessment_basis: "Historic accounts + cash-flow forecast",
    outcome: "£26,000 unsecured facility arranged to support growth",
    summary:
      "Private Property Finance arranged an unsecured business loan of £26,000 for a Manchester launderette partnership. The lender assessed affordability using past trading accounts and a forward-looking cash-flow forecast, enabling swift approval without property security. The funding supports capacity expansion and operational improvements.",
  },
  {
    deal_name: "Secured Loan",
    amount: "£405,000",
    borrower_type: "Sole Trader (Property Developer)",
    sector: "Residential Development",
    location: "Birmingham",
    loan_to_value_ltv: "65%",
    term: "12 months (interest retained)",
    facility_type: null,
    image: "/images/property.jpg",
    purpose: "Refinance existing facility + further advance to complete development",
    use_of_funds: null,
    lender_type: null,
    assessment_basis: null,
    outcome:
      "Funding enabled completion of the build and subsequent sale of the property",
    summary:
      "Private Property Finance arranged a £405,000 secured loan at 65% LTV for a sole-trader developer in Birmingham. The facility refinanced the existing loan and provided a further advance to finish the development, with interest retained over a 12-month term. This allowed the developer to finish the development and time to sell the property.",
  },
  {
    deal_name: "Secured Bridging Loan",
    amount: "£286,000",
    borrower_type: "Limited Company",
    sector: null,
    location: "London",
    loan_to_value_ltv: "70%",
    term: null,
    facility_type: "Bridging (purchase)",
    image: "/images/london.jpg",
    purpose: "Urgent completion after original lender withdrew",
    use_of_funds: null,
    lender_type: null,
    assessment_basis: null,
    outcome: "Client preserved deposit and successfully completed the purchase",
    summary:
      "Private Property Finance arranged a £286,000 secured bridging loan at 70% LTV for a London property investor. The original lender pulled out two weeks before completion. We sourced a new bridging lender able to complete within the required timescales, saving the client's deposit and enabling successful acquisition of the property.",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973"
            width={1920}
            height={600}
            alt="Projects Hero"
            className="object-cover object-center w-full h-full mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Building2 className="h-6 w-6" />
              <span className="text-sm font-semibold tracking-wider uppercase">
                Our Success Stories
              </span>
            </div>

            <h1 className="text-4xl font-extrabold sm:text-5xl text-white mb-6">
              Recent Completed
              <strong className="block font-extrabold text-emerald-400 mt-2">
                Funding Projects
              </strong>
            </h1>

            <p className="text-lg text-gray-200 max-w-2xl">
              Discover how we&apos;ve helped businesses and property investors secure
              the funding they need. From unsecured business loans to bridging
              finance, we deliver tailored solutions that drive success.
            </p>

            <div className="mt-8 flex items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium">Fast Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium">Flexible Terms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Funded Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real deals, real results. See how we&apos;ve helped our clients achieve
              their property and business financing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recent_completed_deals.map((deal, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full bg-gradient-to-br from-slate-200 to-slate-300">
                  <Image
                    src={deal.image}
                    alt={deal.deal_name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">
                      Completed
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mb-2">
                    {deal.deal_name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <MapPin className="h-4 w-4" />
                    {deal.location}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow space-y-4">
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-sm text-gray-600">Loan Amount</span>
                    <span className="text-2xl font-bold text-emerald-600">
                      {deal.amount}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {deal.borrower_type && (
                      <div className="flex items-start justify-between text-sm">
                        <span className="text-gray-600">Borrower Type:</span>
                        <span className="font-medium text-gray-900 text-right">
                          {deal.borrower_type}
                        </span>
                      </div>
                    )}

                    {deal.sector && (
                      <div className="flex items-start justify-between text-sm">
                        <span className="text-gray-600">Sector:</span>
                        <span className="font-medium text-gray-900 text-right">
                          {deal.sector}
                        </span>
                      </div>
                    )}

                    {deal.loan_to_value_ltv && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">LTV:</span>
                        <Badge variant="secondary">{deal.loan_to_value_ltv}</Badge>
                      </div>
                    )}

                    {deal.term && (
                      <div className="flex items-start justify-between text-sm">
                        <span className="text-gray-600">Term:</span>
                        <span className="font-medium text-gray-900 text-right">
                          {deal.term}
                        </span>
                      </div>
                    )}

                    {deal.facility_type && (
                      <div className="flex items-start justify-between text-sm">
                        <span className="text-gray-600">Facility Type:</span>
                        <span className="font-medium text-gray-900 text-right">
                          {deal.facility_type}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      Purpose
                    </h4>
                    <p className="text-sm text-gray-600">{deal.purpose}</p>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      Outcome
                    </h4>
                    <p className="text-sm text-gray-600">{deal.outcome}</p>
                  </div>
                </CardContent>

                <CardFooter className="bg-slate-50 border-t">
                  <p className="text-xs text-gray-500 italic line-clamp-3">
                    {deal.summary}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-slate-50 rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to Secure Your Funding?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let us help you achieve your property and business financing
                goals. Get in touch for a free consultation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/get-a-quote">
                  <Button size="lg" className="gap-2">
                    Get A Quote
                    <TrendingUp className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button size="lg" variant="outline" className="gap-2">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
