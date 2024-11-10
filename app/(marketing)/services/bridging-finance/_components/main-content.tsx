import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, DollarSign, Home, PoundSterling, Zap } from "lucide-react";

const MainContent = () => {
  return (
    <main className="flex-grow bg-background py-16 max-w-7xl px-4 mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Fast Process</CardTitle>
            </CardHeader>
            <CardContent>
              Significantly faster application and funding process compared to
              conventional commercial mortgages.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Home className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Flexible Security</CardTitle>
            </CardHeader>
            <CardContent>
              Can be secured against residential, commercial, or land assets,
              even those that might not qualify for traditional mortgages.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <PoundSterling className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Limited Income Options</CardTitle>
            </CardHeader>
            <CardContent>
              Available even with limited or no income in certain circumstances,
              providing options when traditional financing falls short.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-4" />
              <CardTitle>Time-Critical Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              Ideal for time-sensitive situations such as property purchases,
              renovations, or investment opportunities.
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Private Property Finance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We leverage our extensive network of lenders to secure the most
            competitive rates and terms available, ensuring you receive the best
            possible financing solution.
          </p>
          <Button size="lg">
            Contact Us Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  );
};
export default MainContent;
