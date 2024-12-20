"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  companyName: z.string(),
  loanReason: z.string(),
  interestRate: z.coerce.number().min(0),
  loanTerm: z.coerce.number().min(1),
  loanRequired: z.coerce.number(),
});

export async function commercialLoanCalculatorAction(prevState: unknown, formData: FormData) {

  const validatedFields = formSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    companyName: formData.get("companyName"),
    loanReason: formData.get("loanReason"),
    interestRate: formData.get("interestRate"),
    loanTerm: formData.get("loanTerm"),
    loanRequired: formData.get("loanRequired"),
  });




  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      status: 400,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Send email to staff using Resend
  const { error, data } = await resend.emails.send({
    from: "info@privatepropertyfinance.com",
    to: ["info@privatepropertyfinance.com", "ncbphi001@gmail.com"],
    subject: "New Commercial Loan form submission",
    text: `You have received a new Commercial Loan form submission from ${validatedFields.data.fullName}.
    ${validatedFields.data.fullName} can be contacted at ${validatedFields.data.email}.
    The details are as follows:
    Company Name: ${validatedFields.data.companyName}
    Loan Reason: ${validatedFields.data.loanReason}
    Interest Rate: ${validatedFields.data.interestRate}
    Loan Term: ${validatedFields.data.loanTerm}
    Loan Required: £${validatedFields.data.loanRequired}
    `,
  });


  if (error) {
    return {
      status: 500,
      error: "An error occurred while sending the email",
    };
  }

  return {
    status: 200,
    data: "Email sent successfully",
  };
}
