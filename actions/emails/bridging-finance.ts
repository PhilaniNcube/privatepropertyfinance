"use server"
import z from 'zod'
import { Resend } from "resend";
import { checkBotId } from 'botid/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  estimatedValue: z.coerce.number().min(1, "Estimated value is required"),
  location: z.string().min(1, "Location is required"),
  loanAmount: z.coerce.number().min(1, "Loan amount is required"),
  term: z.coerce.number().min(1, "Term is required"),
  interestRate: z.coerce.number().min(1, "Interest rate is required"),
  canServiceInterest: z.enum(["yes", "no"], {
    required_error: "Please select whether you can service the interest",
  }),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  contact: z.string().min(1, "Contact number is required"),
});

export async function bridgingFinanceAction(prevState:unknown, formData:FormData) {

    // Bot detection
  const verification = await checkBotId();
  if (verification.isBot) {
    throw new Error("Access denied");
  }

  const item = formData.get("canServiceInterest");

  console.log(item);

  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    contact: formData.get("contact"),
    estimatedValue: formData.get("estimatedValue"),
    location: formData.get("location"),
    loanAmount: formData.get("loanAmount"),
    term: formData.get("term"),
    interestRate: formData.get("interestRate"),
    canServiceInterest: formData.get("canServiceInterest"),
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
    subject: "New Bridging Finance form submission",
    text: `You have received a new Bridging Finance form submission from ${validatedFields.data.name}.
    ${validatedFields.data.name} can be contacted at ${validatedFields.data.email} or ${validatedFields.data.contact}.
    The details are as follows:
    Estimated Value: £${validatedFields.data.estimatedValue}
    Location: ${validatedFields.data.location}
    Loan Amount: £${validatedFields.data.loanAmount}
    Term: ${validatedFields.data.term} months
    Interest Rate: ${validatedFields.data.interestRate}%
    Can service interest: ${validatedFields.data.canServiceInterest}
    `,
  });

  console.log(error, data);

  if(error){
    return {
      status: 500,
      error: "Failed to send email"
    }
  }

  return {
    status: 200,
    message: "Email sent successfully"
  }



}
