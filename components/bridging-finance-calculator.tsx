"use client";

import { startTransition, useActionState, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import Image from "next/image";
import { Card } from "./ui/card";

const formSchema = z.object({
  estimatedValue: z.coerce.number().min(1, "Estimated value is required"),
  location: z.string().min(1, "Location is required"),
  loanAmount: z.coerce.number().min(1, "Loan amount is required"),
  term: z.coerce.number().min(1, "Term is required"),
  interestRate: z.coerce.number().min(1, "Interest rate is required"),
  canServiceInterest: z.enum(["yes", "no"], {
    required_error: "Please select whether you can service the interest",
  }),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  contact: z.string().min(1, "Contact number is required"),
});

const BridgingFinanceCalculator = () => {

  const [state, formAction, isPending] = useActionState(
    async (previousState:unknown, formData:FormData) => {

      console.log("Form data", formData, previousState);
      startTransition(() => {
        console.log("Submitting form data", formData);
      });
      const monthlyRepayment = calculateMonthlyRepayment();

      const gtv = calculateGrossLTV();

      // format the monthly repayment to 2 decimal places
      const formated = Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(monthlyRepayment);

      const formatedGTV = Intl.NumberFormat("en-GB", {
        style: "percent",
        minimumFractionDigits: 2,
      }).format(gtv); ;

       toast(
         <div>
           <div className="p-4">
             <h3 className="text-xl font-bold">Estimated Monthly Repayment</h3>
             <p className="text-lg font-semibold">{formated}</p>
             <h3 className="text-xl font-bold">Gross Loan to Value (LTV)</h3>
              <p className="text-lg font-semibold">{formatedGTV}</p>
           </div>
         </div>,
         {
           position: "top-center",

           duration: 12000,
           action: {
             label: "Close",
             onClick: () => console.log("Undo"),
           },
         }
       );
      return {
        monthlyRepayment,
        success: true,
      }
    },
    null
  );

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        // estimatedValue: 0,
        location: "",
        // loanAmount: 30000,
        // term: "",
        interestRate: 5.5,
        canServiceInterest: undefined,
        name: "",
        email: "",
        contact: "",
      },
    });

    const interestRate = form.watch("interestRate");
    const loanAmount = form.watch("loanAmount");
    const term = form.watch("term");
    const estimatedValue = form.watch("estimatedValue");

    // calculate the Gross LTV
    function calculateGrossLTV () {
      const grossLTV = (loanAmount / estimatedValue);
      return grossLTV;
    };

    // write a function to calculate the monthly repayment
    function calculateMonthlyRepayment () {
      const monthlyInterestRate = interestRate / 100 / 12;
      const monthlyRepayment =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -term));
      return monthlyRepayment;
    };

  return (
    <div className="py-10">
      <div className="max-w-7xl px-4 mx-auto grid md:grid-cols-2">
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-6">Property Loan Inquiry</h1>
          <Form {...form}>
            <form action={formAction} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {" "}
                <FormField
                  control={form.control}
                  name="estimatedValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Property Value</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter estimated value"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location/City of the Property</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="loanAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Net Loan Required</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter loan amount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="term"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Term Required</FormLabel>

                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter loan term"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the loan term in months (e.g., 12)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />{" "}
                <FormField
                  control={form.control}
                  name="interestRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interest Rate</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter interest rate"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the interest rate as a percentage (e.g., 5.5)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="canServiceInterest"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Can you service the interest?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">Yes</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">No</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input  placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your contact number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="bg-accent" size="lg" disabled={isPending}>
                {isPending ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </Form>
        </div>
        <div className="w-full">
          <Image src="/images/bridging-finance.jpg" alt="Bridging Finance" width={500} height={500} className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};
export default BridgingFinanceCalculator;


