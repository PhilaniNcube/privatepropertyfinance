"use client";

import { useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Function to calculate monthly repayment
function calculateMonthlyRepayment(
  loanAmount: number,
  annualInterestRate: number,
  loanTermMonths: number
): number {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const numerator =
    monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths);
  const denominator = Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1;
  return loanAmount * (numerator / denominator);
}

export default function DevelopmentLoanCalculator() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    contactNumber: "",
    email: "",
    proposedDevelopment: "",
    planningApproved: false,
    completedDevelopments: "",
    landValue: "",
    ownLand: false,
    constructionCosts: "",
    gdv: "",
    units: "",
    loanTerm: "",
    exitStrategy: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [loanDetails, setLoanDetails] = useState<{
    loanAmount: number;
    monthlyRepayment: number;
    totalRepayment: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: !prev[name as keyof typeof prev],
    }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const gdv = parseFloat(formData.gdv);
    const loanTerm = parseInt(formData.loanTerm);

    if (isNaN(gdv) || isNaN(loanTerm)) {
      alert("Please enter valid GDV and Loan Term values");
      return;
    }

    const loanAmount = gdv * 0.65; // 65% of GDV
    const annualInterestRate = 5; // 5% annual interest rate
    const monthlyRepayment = calculateMonthlyRepayment(
      loanAmount,
      annualInterestRate,
      loanTerm
    );
    const totalRepayment = monthlyRepayment * loanTerm;

    setLoanDetails({
      loanAmount,
      monthlyRepayment,
      totalRepayment,
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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number</Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="proposedDevelopment">
            Proposed Development (Nearest town)
          </Label>
          <Input
            id="proposedDevelopment"
            name="proposedDevelopment"
            value={formData.proposedDevelopment}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="planningApproved"
            checked={formData.planningApproved}
            onCheckedChange={() => handleSwitchChange("planningApproved")}
          />
          <Label htmlFor="planningApproved">Has Planning been approved?</Label>
        </div>

        <div className="space-y-2">
          <Label htmlFor="completedDevelopments">
            How many developments have you completed in the last 5 years?
          </Label>
          <Select
            onValueChange={(value) =>
              handleSelectChange(value, "completedDevelopments")
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select number of developments" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
              <SelectItem value="over5">Over 5</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="landValue">Land Value or Purchase Price (£)</Label>
          <Input
            id="landValue"
            name="landValue"
            type="number"
            value={formData.landValue}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="ownLand"
            checked={formData.ownLand}
            onCheckedChange={() => handleSwitchChange("ownLand")}
          />
          <Label htmlFor="ownLand">Do you own the land?</Label>
        </div>

        <div className="space-y-2">
          <Label htmlFor="constructionCosts">
            Total Construction Costs including professional fees (£)
          </Label>
          <Input
            id="constructionCosts"
            name="constructionCosts"
            type="number"
            value={formData.constructionCosts}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gdv">GDV (£)</Label>
          <Input
            id="gdv"
            name="gdv"
            type="number"
            value={formData.gdv}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="units">How many units being built?</Label>
          <Input
            id="units"
            name="units"
            type="number"
            value={formData.units}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="loanTerm">Required Loan Term (in months)</Label>
          <Input
            id="loanTerm"
            name="loanTerm"
            type="number"
            placeholder="e.g., 24 for 2 years"
            value={formData.loanTerm}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="exitStrategy">What&apos;s your exit Strategy?</Label>
          <Input
            id="exitStrategy"
            name="exitStrategy"
            value={formData.exitStrategy}
            onChange={handleInputChange}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Great news!</DialogTitle>
            <DialogDescription>
              We have lenders that can lend up to 65% of GDV subject to due
              diligence.
            </DialogDescription>
          </DialogHeader>
          {loanDetails && (
            <div className="mt-4 space-y-2">
              <p>
                <strong>Loan Amount:</strong> £
                {loanDetails.loanAmount.toLocaleString("en-GB", {
                  maximumFractionDigits: 2,
                })}
              </p>
              <p>
                <strong>Monthly Repayment:</strong> £
                {loanDetails.monthlyRepayment.toLocaleString("en-GB", {
                  maximumFractionDigits: 2,
                })}
              </p>
              <p>
                <strong>Total Repayment:</strong> £
                {loanDetails.totalRepayment.toLocaleString("en-GB", {
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="text-sm text-muted-foreground">
                Note: This is an estimate based on a 5% annual interest rate.
                Actual terms may vary.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
