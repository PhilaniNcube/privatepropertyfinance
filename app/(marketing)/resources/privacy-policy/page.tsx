import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AdditionalInfo() {
  return (
    <section>
      <div className="bg-black min-h-[45vh] flex items-center justify-center">
        <h1 className="text-3xl font-semibold lg:text-5xl text-white text-center py-12">
        Privacy Policy
        </h1>
      </div>
      <div className="w-full max-w-2xl mx-auto space-y-8 py-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">About UK Mortgages</h2>
          <p className="mb-4">
            In the UK, mortgages typically come with either fixed or variable
            interest rates. Fixed-rate mortgages offer stability with consistent
            monthly payments, while variable-rate mortgages may fluctuate based
            on the Bank of England&apos;s base rate.
          </p>
          <p className="mb-4">
            Most UK mortgages are repayment mortgages, where you pay off both
            the interest and part of the capital each month. This ensures that
            by the end of the term, you&apos;ve fully paid off the loan.
          </p>
          <p>
            Remember, this calculator provides an estimate. For accurate figures
            and personalized advice, consult with a qualified mortgage advisor
            or your bank.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Company Information</AccordionTrigger>
              <AccordionContent>
                <p>
                  We are a credit broker not a lender. Private Property Finance,
                  registered at xxxxxxx. Company Register number is xxxxx. ICO
                  registration number is xxxxxx which can be checked via
                  www.ico.org.uk. Registered in England and Wales.
                </p>
                <p className="mt-2">
                  We conduct both regulated and unregulated business and
                  therefore not all products sourced through us are regulated by
                  the Financial Conduct Authority. We source finance from the
                  whole of market.
                </p>
                <p className="mt-2">
                  We may receive commissions that will vary depending on the
                  lender, product, or other permissible factors. The nature of
                  any commission model will be confirmed to you before you
                  proceed.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do we collect Your Personal Data?
              </AccordionTrigger>
              <AccordionContent>
                <p>We collect your Personal Data from various sources:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    Directly from you during initial meetings or conversations
                  </li>
                  <li>
                    From third parties (e.g., credit checks, employer
                    information)
                  </li>
                  <li>Public domain sources (e.g., voters roll)</li>
                  <li>Technology solutions (with your consent)</li>
                  <li>
                    Automatically through website interactions (using cookies
                    and similar technologies)
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What happens to Your Personal Data when it is disclosed to us?
              </AccordionTrigger>
              <AccordionContent>
                <p>When handling Your Personal Data, we will:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Record and store it securely</li>
                  <li>
                    Submit it to Product Providers/Mortgage Lenders/Commercial
                    Lenders and/or Insurance Product providers as necessary
                  </li>
                  <li>
                    Use it to respond to your queries and inform you of relevant
                    developments
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Sharing Your Personal Data</AccordionTrigger>
              <AccordionContent>
                <p>Your Personal Data may be shared with:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    Mortgage lenders, Finance lenders and insurance providers
                  </li>
                  <li>
                    Third parties assisting with your enquiry or application
                  </li>
                  <li>
                    Our Compliance Advisers, Product specialists, and other
                    relevant service providers
                  </li>
                </ul>
                <p className="mt-2">
                  Your Personal Data will only be shared for the purposes set
                  out in this privacy notice and to fulfil our responsibilities
                  to you.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
