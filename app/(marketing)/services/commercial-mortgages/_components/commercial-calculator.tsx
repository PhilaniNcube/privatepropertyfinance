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
  loanReason: z.string(),
  interestRate: z.coerce.number().min(0),
  loanTerm: z.coerce.number().min(1),
  loanRequired: z.coerce.number(),
});

type FormData = z.infer<typeof formSchema>;

type LoanDetails = {
  totalRequired: string;
  loanReason: string;
  loanAmount: string;
  monthlyPayment: string;
  totalInterest: string;
};

export default function CommercialCalculator() {
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
      loanReason: "",
      interestRate: 7.5,
      loanTerm: 12,
      loanRequired: 0,

    },
  });

  const onSubmit = (data: FormData) => {

    console.log(data);

    const loanAmount = Number(data.loanRequired);

    // write a function to calculate the monthly payment
    const calculateMonthlyPayment = (
      loanAmount: number,
      interestRate: number,
      loanTerm: number
    ): number => {
      const monthlyInterest = (loanAmount * (interestRate / 100)) / 12;
      const monthlyPayment = loanAmount / loanTerm + monthlyInterest;
      return monthlyPayment;
    };

    // Calculate total interest
    const totalInterest = calculateMonthlyPayment(loanAmount, data.interestRate, data.loanTerm) * data.loanTerm - loanAmount;

    // Calculate monthly interest
    const repayment = calculateMonthlyPayment(loanAmount, data.interestRate, data.loanTerm);

    setLoanDetails({
      totalRequired: loanAmount.toLocaleString(),
      loanReason: data.loanReason,
      loanAmount: loanAmount.toLocaleString(),
      monthlyPayment: repayment.toLocaleString(),
      totalInterest: totalInterest.toLocaleString(),
    });

    setShowModal(true);
  };

  return (
    <div className="mt-5 max-w-4xl bg-white rounded-lg pb-6">
      <h1 className="text-3xl font-bold mb-6 text-accent">
        Commercial Loan Calculator
      </h1>
      <p className="mb-8 text-lg text-muted-foreground">
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
            <Label htmlFor="loanReason">Loan Purpose</Label>
            <Controller
              name="loanReason"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {errors.loanReason && (
              <p className="text-red-500">{errors.loanReason.message}</p>
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

        </div>
        <Button type="submit" className="bg-accent" size="lg">
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
