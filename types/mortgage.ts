import { z } from "zod";

export const mortgageFormSchema = z.object({
  loanPurpose: z.enum(["purchase", "refinance", "homeEquity"], {
    required_error: "Please select a loan purpose",
  }),
  propertyValue: z
    .number({
      required_error: "Property value is required",
      invalid_type_error: "Property value must be a number",
    })
    .min(1, "Property value must be greater than 0"),
  loanValue: z
    .number({
      required_error: "Loan value is required",
      invalid_type_error: "Loan value must be a number",
    })
    .min(1, "Loan value must be greater than 0"),
  name: z.string().min(1, "Name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  interestRate: z
    .number({
      required_error: "Interest rate is required",
      invalid_type_error: "Interest rate must be a number",
    })
    .min(0, "Interest rate must be 0 or greater")
    .max(100, "Interest rate must be 100 or less"),
  loanTerm: z
    .number({
      required_error: "Loan term is required",
      invalid_type_error: "Loan term must be a number",
    })
    .int()
    .min(1, "Loan term must be at least 1 year")
    .max(50, "Loan term must be 50 years or less"),
  sector: z.string().min(1, "Sector is required"),
  turnover: z
    .number({
      required_error: "Turnover is required",
      invalid_type_error: "Turnover must be a number",
    })
    .min(0, "Turnover must be 0 or greater"),
});

export type MortgageFormData = z.infer<typeof mortgageFormSchema>;

export interface CalculationResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}
