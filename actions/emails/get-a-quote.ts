"use server"


import { Resend } from "resend";
import z from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  loanPurpose: z.string().optional(),
  propertyValue: z.coerce.number().positive(),
  loanValue: z.coerce.number(),
  name: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
  interestRate: z.coerce.number(),
  loanTerm: z.coerce.number(),
  sector: z.string(),
  turnover: z.coerce.number(),
});

export async function getAQuoteAction(prevState:unknown, formData:FormData) {

  const validatedFields = formSchema.safeParse({
    loanPurpose: formData.get('loanPurpose'),
    propertyValue: formData.get('propertyValue'),
    loanValue: formData.get('loanValue'),
    name: formData.get('name'),
    phoneNumber: formData.get('phoneNumber'),
    email: formData.get('email'),
    interestRate: formData.get('interestRate'),
    loanTerm: formData.get('loanTerm'),
    sector: formData.get('sector'),
    turnover: formData.get('turnover'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.errors,
    }
  }

  // Send email
  const { error, data } = await resend.emails.send({
    from: "info@privatepropertyfinance.com",
    to: ["info@privatepropertyfinance.com", "ncbphi001@gmail.com"],
    subject: "New Get A Quote form submission",
    text: `You have received a new Get A Quote form submission from ${validatedFields.data.name}.
    ${validatedFields.data.name} can be contacted at ${validatedFields.data.email} or ${validatedFields.data.phoneNumber}.
    The details are as follows:
    Property Value: ${validatedFields.data.propertyValue}
    Loan Value: ${validatedFields.data.loanValue}
    Interest Rate: ${validatedFields.data.interestRate}
    Loan Term: ${validatedFields.data.loanTerm}
    Sector: ${validatedFields.data.sector}
    Turnover: ${validatedFields.data.turnover}
    `,
  });

  console.log(error, data);

  if (error) {
    return {
      success: false,
      error: "An error occurred while sending the email",
    }
  }

  return {
    success: true,
    data :{
      loanPurpose: validatedFields.data.loanPurpose,
      propertyValue: validatedFields.data.propertyValue,
      loanValue: validatedFields.data.loanValue,
      name: validatedFields.data.name,
      phoneNumber: validatedFields.data.phoneNumber,
      email: validatedFields.data.email,
      interestRate: validatedFields.data.interestRate,
      loanTerm: validatedFields.data.loanTerm,
      sector: validatedFields.data.sector,
      turnover: validatedFields.data.turnover,

    }
  }

}
