"use client";

import { useState } from "react";
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

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  companyName: z.string(),
  purchasePrice: z.coerce.number().min(1, "Purchase Price is required"),
  developmentCosts: z.coerce.number().min(1, "Development Costs are required"),
  interestRate: z.coerce.number().min(0),
  loanTerm: z.coerce.number().min(1),
  loanRequired: z.coerce.number(),
  deposit: z.coerce.number(),
});

type FormData = z.infer<typeof formSchema>;

type LoanDetails = {
  totalRequired: string;
  deposit: string;
  loanAmount: string;
  monthlyPayment: string;
  totalInterest: string;
};

export default function DevelopmentLoanCalculator() {
  const [loanDetails, setLoanDetails] = useState<LoanDetails | null>(null);
  const [showModal, setShowModal] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      purchasePrice: 0,
      developmentCosts: 0,
      interestRate: 7.5,
      loanTerm: 12,
      loanRequired: 0,
      deposit: 0,
    },
  });

  const onSubmit = (data: FormData) => {
    // const totalRequired = Number(data.loanRequired);
    const deposit = Number(data.deposit);
    const loanAmount = Number(data.loanRequired);

    // Calculate monthly interest
    const monthlyRate = data.interestRate / 100 / 12;
    const numberOfPayments = data.loanTerm;

    // Monthly payment calculation (Interest only)
    const monthlyInterest = loanAmount * monthlyRate;
    const totalInterest = monthlyInterest * numberOfPayments;

    setLoanDetails({
      totalRequired: loanAmount.toLocaleString(),
      deposit: deposit.toLocaleString(),
      loanAmount: loanAmount.toLocaleString(),
      monthlyPayment: monthlyInterest.toLocaleString(),
      totalInterest: totalInterest.toLocaleString(),
    });


    setShowModal(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Development Loan Calculator
      </h1>
      <p className="text-center mb-8 text-lg text-muted-foreground">
        See how much you can borrow in 60 Seconds
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            <Label htmlFor="companyName">Email</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input type="email" {...field} />}
            />
            {errors.companyName && (
              <p className="text-red-500">{errors.companyName.message}</p>
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
            <Label htmlFor="purchasePrice">Purchase Price</Label>
            <Controller
              name="purchasePrice"
              control={control}
              render={({ field }) => <Input type="number" {...field} />}
            />
            {errors.purchasePrice && (
              <p className="text-red-500">{errors.purchasePrice.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="developmentCosts">Development Costs</Label>
            <Controller
              name="developmentCosts"
              control={control}
              render={({ field }) => <Input type="number" {...field} />}
            />
            {errors.developmentCosts && (
              <p className="text-red-500">{errors.developmentCosts.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Interest Rate (%)</Label>
            <Controller
              name="interestRate"
              control={control}
              render={({ field }) => (
                <Input type="number" step="0.1" {...field} />
              )}
            />
            {errors.interestRate && (
              <p className="text-red-500">{errors.interestRate.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanTerm">Loan Term (months)</Label>
            <Controller
              name="loanTerm"
              control={control}
              render={({ field }) => <Input type="number" {...field} />}
            />
            {errors.loanTerm && (
              <p className="text-red-500">{errors.loanTerm.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanRequired">Loan Required</Label>
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
            <Label htmlFor="deposit">Deposit</Label>
            <Controller
              name="deposit"
              control={control}
              render={({ field }) => <Input type="number" {...field} />}
            />
            {errors.deposit && (
              <p className="text-red-500">{errors.deposit.message}</p>
            )}
          </div>
        </div>
        <Button type="submit" className="w-full">
          Calculate
        </Button>
      </form>

      {showModal && loanDetails && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Loan Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-2 p-4 bg-muted rounded-lg">
              <div className="flex justify-between">
                <span>Total Required:</span>
                <span>£{loanDetails.totalRequired}</span>
              </div>
              <div className="flex justify-between">
                <span>Deposit Required (30%):</span>
                <span>£{loanDetails.deposit}</span>
              </div>
              <div className="flex justify-between">
                <span>Loan Amount:</span>
                <span>£{loanDetails.loanAmount}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Monthly Payment:</span>
                <span>£{loanDetails.monthlyPayment}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total Interest:</span>
                <span>£{loanDetails.totalInterest}</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
