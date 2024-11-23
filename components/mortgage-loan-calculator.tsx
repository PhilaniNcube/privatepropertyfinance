"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalculationResult, MortgageFormData } from "@/types/mortgage";
import { calculateMortgage } from "@/lib/utils";
import { MortgageForm } from "./mortgage-form";

export default function MortgageLoanCalculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [formData, setFormData] = useState<MortgageFormData | null>(null);

  const handleSubmit = (data: MortgageFormData) => {
    const calculationResult = calculateMortgage(data);
    setResult(calculationResult);
    setFormData(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-accent">Mortgage Loan Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Loan Information</CardTitle>
            <CardDescription>Enter your loan details below</CardDescription>
          </CardHeader>
          <CardContent>
            <MortgageForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
        {result && formData ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Calculation Result</CardTitle>
              <CardDescription className="text-xs">
                Based on the information you provided
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Monthly Payment:</strong> £
                  {result.monthlyPayment.toLocaleString()}
                </p>
                <p>
                  <strong>Total Payment:</strong> £
                  {result.totalPayment.toLocaleString()}
                </p>
                <p>
                  <strong>Total Interest:</strong> £
                  {result.totalInterest.toLocaleString()}
                </p>
                <p>
                  <strong>Sector:</strong> {formData.sector}
                </p>
                <p>
                  <strong>Turnover:</strong> £
                  {formData.turnover.toLocaleString()}
                </p>
              </div>
              <div className="w-full bg-accent p-4  mt-4 rounded-md">
                {/* Add a banner saying great news we have lenders that can lend up to 80% LTV */}
                <p className="text-md lg:text-2xl md:font-semibold text-gray-50">
                  Great news! We have lenders that can lend up to 80% LTV
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-accent text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Calculation Result</CardTitle>
              <CardDescription className="text-xs text-slate-200">
                Based on the information you provided
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Please enter your loan details to see the calculation result
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}