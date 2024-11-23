import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { MortgageFormData, CalculationResult } from "../types/mortgage";


export function calculateMortgage(data: MortgageFormData): CalculationResult {
  const principal = data.loanValue;
  const monthlyRate = data.interestRate / 100 / 12;
  const numberOfPayments = data.loanTerm * 12;

  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
    totalPayment: parseFloat(totalPayment.toFixed(2)),
    totalInterest: parseFloat(totalInterest.toFixed(2)),
  };
}



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
