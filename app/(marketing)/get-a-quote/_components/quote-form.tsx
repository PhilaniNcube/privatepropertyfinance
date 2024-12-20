"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  propertyValue: z.string().min(1, "Property value is required"),
  depositAvailable: z.string().min(1, "Deposit amount is required"),
  loanTerm: z.string().min(1, "Loan term is required"),
  repaymentType: z.enum(["repayment", "interestOnly"]),
  ownsProperty: z.enum(["yes", "no"]),
  businessType: z.string().min(1, "Business type is required"),
  isProfitable: z.enum(["yes", "no"]),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  willOccupy: z.enum(["yes", "no"]),
  loanRequired: z.string().min(1, "Loan amount is required"),
  gdv: z.string().min(1, "GDV is required"),
  totalCost: z.string().min(1, "Total cost is required"),
  planningApproved: z.enum(["yes", "no"]),
  projectSummary: z.string().min(1, "Project summary is required"),
  adverseCredit: z.enum(["yes", "no"]),
});

export default function QuoteForm() {



  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      repaymentType: "repayment",
      ownsProperty: "no",
      isProfitable: "no",
      willOccupy: "no",
      planningApproved: "no",
      adverseCredit: "no",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {


  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="propertyValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Value</FormLabel>
                <FormControl>
                  <Input placeholder="£" {...field} />
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
                  <Input placeholder="£" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="loanTerm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loan Term (months)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="repaymentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repayment Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="repayment" id="repayment" />
                      <FormLabel htmlFor="repayment">Repayment</FormLabel>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="interestOnly" id="interestOnly" />
                      <FormLabel htmlFor="interestOnly">
                        Interest Only
                      </FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Business</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="limited">Limited Company</SelectItem>
                    <SelectItem value="soleTrader">Sole Trader</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="llp">LLP</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isProfitable"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Is the business profitable?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="profitable-yes" />
                      <FormLabel htmlFor="profitable-yes">Yes</FormLabel>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="profitable-no" />
                      <FormLabel htmlFor="profitable-no">No</FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Personal Information */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project Details */}
          <FormField
            control={form.control}
            name="loanRequired"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loan Required</FormLabel>
                <FormControl>
                  <Input placeholder="£" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gdv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gross Development Value (GDV)</FormLabel>
                <FormControl>
                  <Input placeholder="£" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="totalCost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Cost (excluding finance)</FormLabel>
                <FormControl>
                  <Input placeholder="£" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="planningApproved"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Has planning been approved?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="planning-yes" />
                      <FormLabel htmlFor="planning-yes">Yes</FormLabel>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="planning-no" />
                      <FormLabel htmlFor="planning-no">No</FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="projectSummary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please provide a brief summary of your project"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="adverseCredit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have any adverse credit history?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="credit-yes" />
                    <FormLabel htmlFor="credit-yes">Yes</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="credit-no" />
                    <FormLabel htmlFor="credit-no">No</FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit Application
        </Button>
      </form>
    </Form>
  );
}
