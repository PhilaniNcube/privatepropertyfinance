"use client";

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
import { MortgageFormData, mortgageFormSchema } from "../types/mortgage";

interface MortgageFormProps {
  onSubmit: (data: MortgageFormData) => void;
  isPending: boolean;
}

export function MortgageForm({ onSubmit, isPending }: MortgageFormProps) {
  const {
    control,
    handleSubmit,
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
      loanTerm: 30,
      sector: "",
      turnover: 0,
    },
  });



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
        <div>
          <Label htmlFor="loanPurpose">Loan Purpose</Label>
          <Controller
            name="loanPurpose"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
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
                  <SelectItem value="homeEquity" className="bg-slate-50">
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
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
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
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
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
            render={({ field }) => <Input type="text" id="name" {...field} />}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
            render={({ field }) => <Input type="email" id="email" {...field} />}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
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
                onChange={(e) => field.onChange(parseInt(e.target.value))}
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
            render={({ field }) => <Input type="text" id="sector" {...field} />}
          />
          {errors.sector && (
            <p className="text-red-500 text-sm mt-1">{errors.sector.message}</p>
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
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
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

      <Button className="bg-accent w-1/2" type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
