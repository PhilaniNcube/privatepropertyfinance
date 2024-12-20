"use server";
import z from 'zod'
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  companyName: z.string().min(1, "Company name is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(1, "Location is required"),
  planningApproved: z.enum(["yes", "no"]),
  completedDevelopments: z.enum(["1", "2", "3", "4", "5", "over5"]),
  landValue: z.coerce.number().min(1, "Land value is required"),
  ownsLand: z.enum(["yes", "no"]),
  constructionCosts: z.coerce
    .number()
    .min(1, "Construction costs are required"),
  gdv: z.coerce.number().min(1, "GDV is required"),
  loanRequired: z.coerce.number().min(1, "Loan amount is required"),
  numberOfUnits: z.coerce.number().min(1, "Number of units is required"),
  loanTerm: z.coerce.number().min(1, "Loan term is required"),
  exitStrategy: z.string().min(1, "Exit strategy is required"),
});

export async function developmentFinanceAction(prevState: unknown, formData: FormData) {

  const validatedFields = formSchema.safeParse({
    fullName: formData.get("fullName"),
    companyName: formData.get("companyName"),
    contactNumber: formData.get("contactNumber"),
    email: formData.get("email"),
    location: formData.get("location"),
    planningApproved: formData.get("planningApproved"),
    completedDevelopments: formData.get("completedDevelopments"),
    landValue: formData.get("landValue"),
    ownsLand: formData.get("ownsLand"),
    constructionCosts: formData.get("constructionCosts"),
    gdv: formData.get("gdv"),
    loanRequired: formData.get("loanRequired"),
    numberOfUnits: formData.get("numberOfUnits"),
    loanTerm: formData.get("loanTerm"),
    exitStrategy: formData.get("exitStrategy"),
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
  subject: "New Development Finance form submission",
  text: `
   You have received a form submission from ${validatedFields.data.fullName} - ${validatedFields.data.email}, ${validatedFields.data.contactNumber}
   Company: ${validatedFields.data.companyName}
   Completed: ${validatedFields.data.completedDevelopments}
   Location: ${validatedFields.data.location}
   Number Of Units: ${validatedFields.data.numberOfUnits}
   Construction Costs: ${validatedFields.data.constructionCosts}
   Land Value: ${validatedFields.data.landValue}
   Loan Required: ${validatedFields.data.loanRequired}
   Loan Term: ${validatedFields.data.loanTerm}
   GDV: ${validatedFields.data.gdv}
   Owns Land: ${validatedFields.data.ownsLand}
   Exit Strategy: ${validatedFields.data.exitStrategy}
   `
  });


  if(error) {
    return {
      status: 400,
      error: error.message
    }
  }

  return {
    status: 200,
    message: 'Email sent'
  }

}
