"use client";

import { useState } from "react";
import { PoundSterlingIcon as Pound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(3);
  const [loanTerm, setLoanTerm] = useState(25);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMortgage = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(monthlyPayment);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>UK Mortgage Calculator</CardTitle>
          <CardDescription>
            Calculate your estimated monthly mortgage payment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan Amount (£)</Label>
            <div className="flex items-center">
              <Pound className="mr-2 h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                id="loanAmount"
                placeholder="Enter loan amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </div>
            <Slider
              min={10000}
              max={1000000}
              step={1000}
              value={[loanAmount]}
              onValueChange={(value) => setLoanAmount(value[0])}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Interest Rate (%)</Label>
            <Input
              type="number"
              id="interestRate"
              placeholder="Enter interest rate"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              step="0.1"
            />
            <Slider
              min={0.1}
              max={10}
              step={0.1}
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanTerm">Loan Term (years)</Label>
            <Input
              type="number"
              id="loanTerm"
              placeholder="Enter loan term"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
            />
            <Slider
              min={5}
              max={35}
              step={1}
              value={[loanTerm]}
              onValueChange={(value) => setLoanTerm(value[0])}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-4">
          <Button onClick={calculateMortgage}>Calculate</Button>
          {monthlyPayment !== null && (
            <div className="text-lg font-semibold">
              Estimated Monthly Payment: £{monthlyPayment.toFixed(2)}
            </div>
          )}
        </CardFooter>
      </Card>
      <div className="mt-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About UK Mortgages</h2>
        <p className="mb-4">
          In the UK, mortgages typically come with either fixed or variable
          interest rates. Fixed-rate mortgages offer stability with consistent
          monthly payments, while variable-rate mortgages may fluctuate based on
          the Bank of England&apos;s base rate.
        </p>
        <p className="mb-4">
          Most UK mortgages are repayment mortgages, where you pay off both the
          interest and part of the capital each month. This ensures that by the
          end of the term, you&apos;ve fully paid off the loan.
        </p>
        <p>
          Remember, this calculator provides an estimate. For accurate figures
          and personalized advice, consult with a qualified mortgage advisor or
          your bank.
        </p>
      </div>
    </div>
  );
}
