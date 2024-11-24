import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Banknote, Building, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MainContent = () => {
  return (
    <main className="flex-grow bg-background">
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-6">
        <div>
          <Image
            src="https://utfs.io/f/K39jtZpI79HT4FUCN6XZLsPJaSdIkOQM2RtgGDw3WUpl5oHV"
            alt="Background Image"
            width={1920}
            height={1280}
            layout="responsive"
            className="object-cover w-full aspect-video"
          />
          <p className="text-lg my-6">
            The UK&apos;s aging population presents a significant opportunity
            for investment in the care home sector. Whether you&apos;re an
            experienced operator or new to the market, navigating the financial
            landscape can be complex. At Private Property Finance, we provide
            expert guidance and tailored solutions to help you succeed in this
            dynamic and rewarding sector. We connect you with the resources and
            expertise you need, from property valuation to legal counsel and
            securing optimal funding.
          </p>
        </div>

        <Card className="w-full max-w-3xl mx-auto bg-accent text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Care Homes</CardTitle>
            <CardDescription className="text-md text-slate-200">
              Lenders require some important information from you to be able to
              process a successful application for a commercial care home
              mortgage.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              To help you prepare, here are some of the key things a lender
              needs from you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Evidence of business performance</li>
              <li>Two years of trading accounts</li>
              <li>A deposit of 30% or more</li>
              <li>Proof of experience</li>
              <li>Income projections</li>
              <li>Good credit history</li>
              <li>Additional security</li>
              <li>Business plan</li>
              <li>CQC Report</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-2xl font-bold mb-6">
          Key Features of Our Care Home Financing Services:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <Image
              src="https://utfs.io/f/K39jtZpI79HTvjoty6uG3Wm7bUug12QlrJMs58VepABFwqIf"
              alt="Background Image"
              width={1920}
              height={1280}
              layout="responsive"
              className="object-cover w-full aspect-video"
            />
            <CardHeader>
              <CardTitle>Bespoke Funding Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              We understand that every care home project is unique. We work with
              a diverse network of lenders to secure financing tailored to your
              specific requirements, experience level, and financial goals.
            </CardContent>
          </Card>

          <Card>
            <Image
              src="https://utfs.io/f/K39jtZpI79HTjJnr2YtwKrBcD6ZvhzxECN9oHM1stI7fXugq"
              alt="Background Image"
              width={1920}
              height={1280}
              layout="responsive"
              className="object-cover w-full aspect-video"
            />
            <CardHeader>
              <CardTitle>Expert Industry Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              Our deep understanding of the care home sector allows us to
              anticipate challenges and provide proactive solutions, ensuring a
              smooth and efficient financing process.
            </CardContent>
          </Card>

          <Card>
            <Image
              src="https://utfs.io/f/K39jtZpI79HTa5DklEBGkOEQrPXfC93oxns05VjupRNiwHdq"
              alt="Background Image"
              width={1920}
              height={1280}
              layout="responsive"
              className="object-cover w-full aspect-video"
            />
            <CardHeader>
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
    </main>
  );
};
export default MainContent;
