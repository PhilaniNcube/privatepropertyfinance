"use client";

import { startTransition, useActionState, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { developmentFinanceAction } from "@/actions/emails/development-finance";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  companyName: z.string().min(1, "Company name is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(1, "Location is required"),
  planningApproved: z.enum(["yes", "no"]),
  completedDevelopments: z.enum(["1", "2", "3", "4", "5", "over5"]),
  landValue: z.coerce.number().min(1, "Land value is required"),
  ownsLand: z.enum(["yes", "no"]),
  constructionCosts: z.coerce
    .number()
    .min(1, "Construction costs are required"),
  gdv: z.coerce.number().min(1, "GDV is required"),
  loanRequired: z.coerce.number().min(1, "Loan amount is required"),
  numberOfUnits: z.coerce.number().min(1, "Number of units is required"),
  loanTerm: z.coerce.number().min(1, "Loan term is required"),
  exitStrategy: z.string().min(1, "Exit strategy is required"),
});

type FormData = z.infer<typeof formSchema>;

const defaultValues: FormData = {
  fullName: "",
  companyName: "",
  contactNumber: "",
  email: "",
  location: "",
  planningApproved: "no",
  completedDevelopments: "1",
  landValue: 0,
  ownsLand: "no",
  constructionCosts: 0,
  gdv: 0,
  loanRequired: 0,
  numberOfUnits: 0,
  loanTerm: 12,
  exitStrategy: "",
};

const developmentOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "over5", label: "Over 5" },
];

type LoanDetails = {
  loanAmount: number;
  monthlyPayment: number;
  totalInterest: number;
  arrangementFee: number;
  totalCostOfFinance: number;
  ltv: number;
};

export default function DevelopmentLoanCalculator() {
  const [loanDetails, setLoanDetails] = useState<LoanDetails | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [state, formAction, isPending] = useActionState(
    developmentFinanceAction,
    null
  );

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const calculateLoanCosts = (data: FormData) => {
    // Total project cost
    const totalCost = data.landValue + data.constructionCosts;

    // Maximum loan (75% LTV)
    const maxLoanAmount = totalCost * 0.75;
    const loanAmount = Math.min(data.loanRequired, maxLoanAmount);

    // Interest calculations
    const annualRate = 0.1; // 10%
    const monthlyRate = annualRate / 12;
    const monthlyInterest = loanAmount * monthlyRate;
    const totalInterest = monthlyInterest * data.loanTerm;

    // Arrangement fee (2%)
    const arrangementFee = loanAmount * 0.02;

    // Total cost of finance
    const totalCostOfFinance = totalInterest + arrangementFee;



    // scroll to the loan details section
    const loanDetailsSection = document.getElementById("loan-details");
    loanDetailsSection?.scrollIntoView({ behavior: "smooth" });

    return {
      loanAmount: loanAmount.toFixed(2),
      monthlyPayment: monthlyInterest.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      arrangementFee: arrangementFee.toFixed(2),
      totalCostOfFinance: totalCostOfFinance.toFixed(2),
      ltv: ((loanAmount / totalCost) * 100).toFixed(1),
    };
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    const costs = calculateLoanCosts(data);
     setLoanDetails({
      loanAmount: parseFloat(costs.loanAmount),
      monthlyPayment: parseFloat(costs.monthlyPayment),
      totalInterest: parseFloat(costs.totalInterest),
      arrangementFee: parseFloat(costs.arrangementFee),
      totalCostOfFinance: parseFloat(costs.totalCostOfFinance),
      ltv: parseFloat(costs.ltv),
     });

     const formData = new FormData()

     formData.append("fullName", data.fullName)
     formData.append("companyName", data.companyName)
     formData.append("completedDevelopments", data.completedDevelopments);
     formData.append("constructionCosts", data.constructionCosts.toString());
     formData.append("contactNumber", data.contactNumber);
     formData.append("email", data.email);
     formData.append("exitStrategy", data.exitStrategy);
     formData.append("gdv", data.gdv.toString());
     formData.append("landValue", data.landValue.toString());
     formData.append("location", data.location);
     formData.append("planningApproved", data.planningApproved);
     formData.append("ownsLand", data.ownsLand);
     formData.append("loanRequired", data.loanRequired.toString());
     formData.append("numberOfUnits", data.numberOfUnits.toString());
     formData.append("loanTerm", data.numberOfUnits.toString());



     startTransition(() => {
       formAction(formData);
     })

    setShowModal(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Development Loan Calculator
      </h1>
      <p className="text-center mb-8 text-lg text-muted-foreground">
        See how much you can borrow in 60 Seconds
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Controller
                  name="companyName"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.companyName && (
                  <p className="text-red-500">{errors.companyName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Controller
                  name="contactNumber"
                  control={control}
                  render={({ field }) => <Input type="tel" {...field} />}
                />
                {errors.contactNumber && (
                  <p className="text-red-500">{errors.contactNumber.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <Input type="email" {...field} />}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Development Details Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Development Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location">
                  Development Location (Nearest Town)
                </Label>
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
                {errors.location && (
                  <p className="text-red-500">{errors.location.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Planning Approved?</Label>
                <Controller
                  name="planningApproved"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="planning-yes" />
                        <Label htmlFor="planning-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="planning-no" />
                        <Label htmlFor="planning-no">No</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>

              <div className="space-y-2">
                <Label>Completed Developments (Last 5 Years)</Label>
                <Controller
                  name="completedDevelopments"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select number" />
                      </SelectTrigger>
                      <SelectContent>
                        {developmentOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="space-y-2">
                <Label>Do you own the land?</Label>
                <Controller
                  name="ownsLand"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="owns-land-yes" />
                        <Label htmlFor="owns-land-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="owns-land-no" />
                        <Label htmlFor="owns-land-no">No</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Financial Details Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Financial Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="landValue">Land Value/Purchase Price (£)</Label>
                <Controller
                  name="landValue"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.landValue && (
                  <p className="text-red-500">{errors.landValue.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="constructionCosts">
                  Total Construction Costs (£)
                </Label>
                <Controller
                  name="constructionCosts"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.constructionCosts && (
                  <p className="text-red-500">
                    {errors.constructionCosts.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="gdv">Gross Development Value (£)</Label>
                <Controller
                  name="gdv"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.gdv && (
                  <p className="text-red-500">{errors.gdv.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanRequired">Loan Amount Required (£)</Label>
                <Controller
                  name="loanRequired"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.loanRequired && (
                  <p className="text-red-500">{errors.loanRequired.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="numberOfUnits">Number of Units</Label>
                <Controller
                  name="numberOfUnits"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.numberOfUnits && (
                  <p className="text-red-500">{errors.numberOfUnits.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanTerm">Required Loan Term (months)</Label>
                <Controller
                  name="loanTerm"
                  control={control}
                  render={({ field }) => <Input type="number" {...field} />}
                />
                {errors.loanTerm && (
                  <p className="text-red-500">{errors.loanTerm.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Details Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Additional Details</h2>
            <div className="space-y-2">
              <Label htmlFor="exitStrategy">Exit Strategy</Label>
              <Controller
                name="exitStrategy"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="Please describe your exit strategy"
                    className="min-h-[100px]"
                  />
                )}
              />
              {errors.exitStrategy && (
                <p className="text-red-500">{errors.exitStrategy.message}</p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Calculating..." : "Calculate Loan"}
          </Button>
        </form>
        <div
          id="loan-details"
          className="w-full rounded bg-accent h-full text-white"
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold">Loan Details</h2>
            <p className="text-lg white">
              Your loan details will be displayed here
            </p>
          </div>
          {/* after the calculation has been completed show the results below */}
          {loanDetails && (
            <div className="p-6">
              <h2 className="text-xl font-semibold">Loan Details</h2>
              <p>
                Total Loan Required: £{loanDetails.loanAmount} (LTV:{" "}
                {loanDetails.ltv}%)
              </p>
              <p>Monthly Payment: £{loanDetails.monthlyPayment}</p>
              <p>Total Interest: £{loanDetails.totalInterest}</p>

              <h2 className="text-xl font-semibold mt-6">Fees</h2>
              <p>Arrangement Fee: £{loanDetails.arrangementFee}</p>
              <p>Total Cost of Finance: £{loanDetails.totalCostOfFinance}</p>

              <h2 className="text-xl font-semibold mt-6">
                Great news we have lenders that can lend up to 65% of GDV
                subject to due diligence.
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
