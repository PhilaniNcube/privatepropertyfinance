import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Lightbulb, Target } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Welcome to Private Property Finance
        </h2>

        <div className="max-w-3xl mx-auto text-gray-300 text-center mb-12">
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
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-primary mr-2" />
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

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary mr-2" />
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

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-primary mr-2" />
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
          <div className="inline-flex items-center justify-center p-4 bg-gray-800 rounded-full">
            <Target className="h-8 w-8 text-primary" />
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
