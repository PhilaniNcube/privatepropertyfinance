"use client";

import { startTransition, useActionState, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { toast } from "sonner";
import { propertyLoanCalculatorAction } from "@/actions/emails/buy-to-let";
import { trackFormSubmission } from "@/lib/gtm";

const formSchema = z.object({
  propertyValue: z.coerce
    .number()
    .min(1, { message: "Property value is required" }),
  propertyType: z.enum(["house", "flat", "apartment"]),
  location: z.string().min(1, { message: "Location is required" }),
  rentalPerMonth: z.coerce
    .number()
    .min(1, { message: "Rental per month is required" }),
  depositAvailable: z.coerce
    .number()
    .min(1, { message: "Deposit available is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contact: z.string().min(1, { message: "Contact number is required" }),
});

export default function PropertyLoanCalculator() {
  const [state, formAction, isPending] = useActionState(
    propertyLoanCalculatorAction,
    null
  );

  const [loanDetails, setLoanDetails] = useState<{
    monthlyRepayment: number;
    totalLoanAmount: number;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyValue: 0,
      propertyType: "house",
      location: "",
      rentalPerMonth: 0,
      depositAvailable: 0,
      name: "",
      email: "",
      contact: "",
    },
  });

  function calculateLoan(data: z.infer<typeof formSchema>) {
    const propertyValue = Number(data.propertyValue);
    const depositAvailable = Number(data.depositAvailable);
    const loanToValue = 0.8; // 80% LTV
    const interestRate = 0.05; // Assuming 5% interest rate
    const loanTerm = 25 * 12; // 25 years in months

    const totalLoanAmount = Math.min(
      propertyValue * loanToValue,
      propertyValue - depositAvailable
    );
    const monthlyInterestRate = interestRate / 12;
    const monthlyRepayment =
      (totalLoanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTerm)) /
      (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);

    return {
      monthlyRepayment: Math.round(monthlyRepayment),
      totalLoanAmount: Math.round(totalLoanAmount),
    };
  }
  function onSubmit(data: z.infer<typeof formSchema>) {
    const loanCalculation = calculateLoan(data);

    // Track form submission
    trackFormSubmission.buyToLet({
      name: data.name,
      email: data.email,
      propertyValue: data.propertyValue,
      propertyType: data.propertyType,
      location: data.location,
    });

    toast(
      <div className="flex flex-col items-start">
        <h3 className="text-lg font-semibold mb-2">
          We have lenders that can lend up to 80% lTV:
        </h3>
        <p>
          Approximate Monthly Repayment: £{loanCalculation?.monthlyRepayment}
        </p>
        <p>Total Loan Amount: £{loanCalculation?.totalLoanAmount}</p>
      </div>,
      {
        position: "top-center",
        duration: 12000,
      }
    );

    const formData = new FormData();
    formData.append("propertyValue", data.propertyValue.toString());
    formData.append("propertyType", data.propertyType);
    formData.append("location", data.location);
    formData.append("rentalPerMonth", data.rentalPerMonth.toString());
    formData.append("depositAvailable", data.depositAvailable.toString());
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("contact", data.contact);

    startTransition(() => {
      formAction(formData);
      setLoanDetails(loanCalculation);
    });
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 max-w-7xl mx-auto pb-10">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Property Loan Calculator</CardTitle>
          <CardDescription>
            Enter your property details to calculate the approximate loan
            amount.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="propertyValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Value</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter property value" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="flat">Flat</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rentalPerMonth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rental per Month</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter rental per month" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="depositAvailable"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deposit Available</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter deposit available" {...field} />
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
                      <Input placeholder="Enter your name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
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
                    <FormLabel>Contact</FormLabel>
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
              <Button type="submit" className="w-full">
                Calculate Loan
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src="https://utfs.io/f/K39jtZpI79HTP4Or7ADEh0cZmVTUtWF4XL2gsw5Qxf3k8b1I"
          alt="Property Image"
          className="object-cover w-full h-full"
          width={1920}
          height={1280}
        />
      </div>
    </div>
  );
}
