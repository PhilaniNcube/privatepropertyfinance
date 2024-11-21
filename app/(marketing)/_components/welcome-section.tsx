import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Lightbulb, Target } from "lucide-react";
import Image from "next/image";

const loanTypes = [
  {
    title: "Flexible Funding",
    description: "From £50,000 to £20 million",
    image: "https://utfs.io/f/K39jtZpI79HTJasOZDNraX7oTDzughHO1Rcj8FvUxQtpJPk3",
    width: 640,
    height: 853,
  },
  {
    title: "High LTV Options",
    description: "Up to 75% LTV",
    image: "https://utfs.io/f/K39jtZpI79HTj7vgb2twKrBcD6ZvhzxECN9oHM1stI7fXugq",
    width: 640,
    height: 960,
  },
  {
    title: "Commercial Mortgages",
    description: "For any business purpose",
    image: "https://utfs.io/f/K39jtZpI79HTBdgPR5VwRF2EhrCIq1ZY0v7lNOGiHb4Uc5V8",
    width: 640,
    height: 960,
  },
];

export default function WelcomeSection() {
  return (
    <section className="py-16 bg-accent">
      <div className="container max-w-7xl mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Loan Options
        </h2>
        <p className="text-xl text-center mb-8">
          We offer market-leading rates across all our loan types.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan, index) => (
            <Card key={index} className="overflow-hidden border-none">
              <div className="relative w-full aspect-[11/12]">
                <Image
                  src={loan.image}
                  alt={`${loan.title} background`}
                  width={loan.width}
                  height={loan.height}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  <CardContent>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {loan.title}
                    </h3>
                    <p className="text-lg text-white">{loan.description}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mt-6 mx-auto text-gray-300 text-center mb-12">
          <p className="mb-4">
            At our core, we are dedicated to simplifying property finance while
            delivering unparalleled service. In an era marked by significant
            technological advancements, many finance intermediaries have
            overlooked the importance of personal interaction.
          </p>
          <p>
            We, however, place a strong emphasis on the human element—believing
            that true excellence begins and ends with our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-accent border-accent-foreground">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">
                  Personal Approach
                </h3>
              </div>
              <p className="text-gray-300">
                Recognising that each individual and business is unique, with
                their own distinct stories, we commit to understanding our
                clients on a personal level.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-accent border-accent-foreground">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">
                  Tailored Solutions
                </h3>
              </div>
              <p className="text-gray-300">
                This commitment enables us to provide tailored solutions that
                are as individual as the clients we serve.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-accent border-accent-foreground">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">
                  Human Element
                </h3>
              </div>
              <p className="text-gray-300">
                We take pride in our ability to combine professional expertise
                with a personal touch to meet and exceed our clients&apos;
                expectations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-accent rounded-full">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mt-4 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            To simplify property finance and deliver exceptional, personalized
            service that puts our clients at the heart of everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}
