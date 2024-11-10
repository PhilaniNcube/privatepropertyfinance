import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Coins, Users2 } from "lucide-react";
import Image from "next/image";

const MainContent = () => {
  return (
    <main className="pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Funding Solutions for Every Development Stage
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg mb-6">
              At Private Property Finance, we understand the diverse needs of
              property developers. That&apos;s why we&apos;ve cultivated a
              strong network of lenders specializing in development finance.
              From single-property renovations to large-scale commercial
              projects, we have the expertise and resources to secure the
              optimal funding solution for your vision. We work with private
              individuals, emerging developers, and seasoned operators,
              providing tailored guidance and support throughout the financing
              process.
            </p>
            <p className="text-lg mb-6">
              We believe in fostering long-term relationships with our clients.
              Our goal is to not only secure funding for your current project
              but also to support your future development endeavors. Contact us
              today to discuss your project and explore how our development
              finance solutions can help you achieve your goals.
            </p>
          </div>
          <div>
            <Image
              src="https://utfs.io/f/K39jtZpI79HTPHYL06YDEh0cZmVTUtWF4XL2gsw5Qxf3k8b1"
              alt="Development Funding"
              width={800}
              height={1200}
              quality={100}
              className="rounded-lg max-h-[400px] object-top w-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Coins className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Flexible Financing Options</CardTitle>
            </CardHeader>
            <CardContent>
              We offer a range of financing options, including ground-up
              construction loans, renovation financing, and development exit
              loans, catering to projects of all sizes and complexities. Whether
              you&apos;re building a single home, a multi-unit residential
              development, or a commercial property, we can structure a loan
              that aligns with your specific requirements.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Experienced Development Lenders</CardTitle>
            </CardHeader>
            <CardContent>
              Our network comprises experienced development lenders who
              understand the intricacies of the property development lifecycle.
              They offer competitive rates, flexible terms, and a streamlined
              application process.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users2 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Tailored Guidance & Support</CardTitle>
            </CardHeader>
            <CardContent>
              Our team provides expert guidance and support from initial
              consultation to project completion. We&apos;ll work closely with
              you to understand your project goals, assess your financing needs,
              and negotiate the best possible terms with our lenders. We handle
              the complexities of the financing process, allowing you to focus
              on bringing your development vision to life.
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};
export default MainContent;
