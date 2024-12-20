"use server";

import z from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function contactUsAction(prevState: unknown, formData: FormData) {

  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
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
    subject: "New contact form submission",
    text: `You have received a new contact form submission from ${validatedFields.data.name}.
    ${validatedFields.data.name} can be contacted at ${validatedFields.data.email}.
    The message is as follows:
    ${validatedFields.data.message}
    `,
  });

  if (error) {
    return {
      status: 500,
      error: error,
    };
  }

  return {
    status: 200,
    message: "Email sent successfully",
  };
}
