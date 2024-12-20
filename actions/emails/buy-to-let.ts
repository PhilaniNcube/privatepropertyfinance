"use server";

import z from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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


export async function propertyLoanCalculatorAction(prevState: unknown, formData: FormData) {

  const validatedFields = formSchema.safeParse({
    propertyValue: formData.get("propertyValue"),
    propertyType: formData.get("propertyType"),
    location: formData.get("location"),
    rentalPerMonth: formData.get("rentalPerMonth"),
    depositAvailable: formData.get("depositAvailable"),
    name: formData.get("name"),
    email: formData.get("email"),
    contact: formData.get("contact"),
  });

  if (!validatedFields.success) {
    return {
      status: 400,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Send email to staff using Resend
  const { error, data } = await resend.emails.send({
    from: "info@privatepropertyfinance.com",
    to: ["info@privatepropertyfinance.com", "ncbphi001@gmail.com"],
    subject: "New Buy To Let form submission",
    text: `You have received a new Buy To Let form submission from ${validatedFields.data.name}.
    ${validatedFields.data.name} can be contacted at ${validatedFields.data.email} or ${validatedFields.data.contact}.
    The details are as follows:
    Property Value: £${validatedFields.data.propertyValue}
    Property Type: ${validatedFields.data.propertyType}
    Location: ${validatedFields.data.location}
    Rental Per Month: £${validatedFields.data.rentalPerMonth}
    Deposit Available: £${validatedFields.data.depositAvailable}
    `,
  });

  if (error) {
    return {
      status: 500,
      error: error.message,
    };
  }

  return {
    status: 200,
    data: data,
  };

}
