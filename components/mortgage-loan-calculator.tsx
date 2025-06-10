"use client";

import { startTransition, useActionState, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalculationResult,
  MortgageFormData,
  mortgageFormSchema,
} from "@/types/mortgage";
import { calculateMortgage, formatCurrency } from "@/lib/utils";
import { MortgageForm } from "./mortgage-form";
import { getAQuoteAction } from "@/actions/emails/get-a-quote";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { start } from "repl";
import { trackFormSubmission } from "@/lib/gtm";

interface MortgageFormProps {
  onSubmit: (data: MortgageFormData) => void;
  isPending: boolean;
}

export default function MortgageLoanCalculator() {
  const {
    control,
    formState: { errors },
  } = useForm<MortgageFormData>({
    resolver: zodResolver(mortgageFormSchema),
    defaultValues: {
      loanPurpose: undefined,
      propertyValue: 0,
      loanValue: 0,
      name: "",
      phoneNumber: "",
      email: "",
      interestRate: 3.5,
      loanTerm: 10,
      sector: "",
      turnover: 0,
    },
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const [state, formAction, isPending] = useActionState(getAQuoteAction, null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-accent">
        Mortgage Loan Calculator
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Loan Information</CardTitle>
            <CardDescription>Enter your loan details below</CardDescription>
          </CardHeader>
          <CardContent>
            {" "}
            <form
              action={(formData: FormData) => {
                // Track form submission
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const propertyValue = Number(formData.get("propertyValue"));
                const loanValue = Number(formData.get("loanValue"));
                const loanPurpose = formData.get("loanPurpose") as string;

                trackFormSubmission.mortgageLoan({
                  name,
                  email,
                  propertyValue,
                  loanValue,
                  loanPurpose,
                });

                startTransition(() => {
                  formAction(formData);
                });
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
                <div>
                  <Label htmlFor="loanPurpose">Loan Purpose</Label>
                  <Controller
                    name="loanPurpose"
                    control={control}
                    render={({ field }) => (
                      <Select
                        name="loanPurpose"
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select loan purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="purchase" className="bg-slate-50">
                            Purchase
                          </SelectItem>
                          <SelectItem value="refinance" className="bg-slate-50">
                            Refinance
                          </SelectItem>
                          <SelectItem
                            value="homeEquity"
                            className="bg-slate-50"
                          >
                            Home Equity
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.loanPurpose && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.loanPurpose.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="propertyValue">Property Value (£)</Label>
                  <Controller
                    name="propertyValue"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="number"
                        id="propertyValue"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value))
                        }
                      />
                    )}
                  />
                  {errors.propertyValue && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.propertyValue.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
                <div>
                  <Label htmlFor="loanValue">Loan Value (£)</Label>
                  <Controller
                    name="loanValue"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="number"
                        id="loanValue"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value))
                        }
                      />
                    )}
                  />
                  {errors.loanValue && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.loanValue.message}
                    </p>
                  )}
                </div>{" "}
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input type="text" id="name" {...field} />
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <Input type="tel" id="phoneNumber" {...field} />
                    )}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input type="email" id="email" {...field} />
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
                <div>
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Controller
                    name="interestRate"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="number"
                        id="interestRate"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value))
                        }
                        step="0.1"
                      />
                    )}
                  />
                  {errors.interestRate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.interestRate.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="loanTerm">Loan Term (years)</Label>
                  <Controller
                    name="loanTerm"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="number"
                        id="loanTerm"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                      />
                    )}
                  />
                  {errors.loanTerm && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.loanTerm.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
                <div>
                  <Label htmlFor="sector">Sector</Label>
                  <Controller
                    name="sector"
                    control={control}
                    render={({ field }) => (
                      <Input type="text" id="sector" {...field} />
                    )}
                  />
                  {errors.sector && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.sector.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="turnover">Turnover (£)</Label>
                  <Controller
                    name="turnover"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="number"
                        id="turnover"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value))
                        }
                      />
                    )}
                  />
                  {errors.turnover && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.turnover.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                className="bg-accent w-1/2"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
        {state?.data ? (
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
                  <strong>Monthly Payment:</strong>{" "}
                  {formatCurrency(state.data.monthlyPayment)}
                </p>
                <p>
                  <strong>Total Payment:</strong>{" "}
                  {formatCurrency(state.data.totalPayment)}
                </p>
                <p>
                  <strong>Total Interest:</strong>{" "}
                  {formatCurrency(state.data.totalInterest)}
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
