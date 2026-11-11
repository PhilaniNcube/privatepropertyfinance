"use server";

import { Resend } from "resend";
import { checkBotId } from "botid/server";
import { z } from "zod";
import {
  calculationSummary,
  formatGBP,
  toNumber,
  type EnquiryValues,
} from "@/lib/calculators";
import { DEAL_TYPE_LABELS, type DealType } from "@/lib/calculator-config";
import { SITE } from "@/lib/content/site";

const resend = new Resend(process.env.RESEND_API_KEY);

const dealTypes = ["commercial", "bridging", "development", "btl", "other"] as const;

const schema = z.object({
  dealType: z.enum(dealTypes),
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(5).max(60),
  timescale: z.string().min(1).max(80),
  details: z.string().min(1).max(5000),
  consent: z.string().refine((value) => value === "on" || value === "true", {
    message: "Consent is required",
  }),
  source: z.string().max(120).optional(),
});

const numberFields = [
  "propertyValue",
  "loanWanted",
  "existingDebt",
  "monthlyRent",
  "landCost",
  "buildCost",
  "otherCosts",
  "gdv",
  "annualRentOrProfit",
  "termMonths",
] as const;

const textFields = [
  "buyingAs",
  "country",
  "nationality",
  "propertyType",
  "occupancy",
  "exitRoute",
  "planning",
  "experience",
] as const;

const FIELD_LABELS: Record<string, string> = {
  propertyValue: "Property value",
  loanWanted: "Loan wanted",
  existingDebt: "Existing mortgage or debt",
  monthlyRent: "Monthly rent",
  buyingAs: "Buying as",
  country: "Country of residence",
  nationality: "Nationality",
  propertyType: "Property type",
  occupancy: "Owner-occupied or investment",
  exitRoute: "Exit route",
  termMonths: "Term (months)",
  landCost: "Land or purchase cost",
  buildCost: "Build cost",
  otherCosts: "Other costs",
  gdv: "GDV",
  annualRentOrProfit: "Annual rent or business profit",
  planning: "Planning status",
  experience: "Developer experience",
};

export type EnquiryResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitEnquiry(formData: FormData): Promise<EnquiryResult> {
  const verification = await checkBotId();
  if (verification.isBot) {
    return { ok: false, error: "We couldn't send your enquiry. Please call us instead." };
  }

  // Honeypot: return success so bots don't retry.
  if (formData.get("company_website")) {
    return { ok: true };
  }

  const parsed = schema.safeParse({
    dealType: formData.get("dealType"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    timescale: formData.get("timescale"),
    details: formData.get("details"),
    consent: formData.get("consent"),
    source: formData.get("source") || undefined,
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: "Please check the required fields and try again.",
    };
  }

  const dealType = parsed.data.dealType as DealType;
  const values: Record<string, string | number> = {
    dealType,
  };

  numberFields.forEach((field) => {
    const raw = formData.get(field);
    if (raw !== null && raw !== "") {
      values[field] = toNumber(raw);
    }
  });

  textFields.forEach((field) => {
    const raw = formData.get(field);
    if (typeof raw === "string" && raw.trim()) {
      values[field] = raw.trim();
    }
  });

  if (typeof formData.get("buyingAs") === "string") {
    const buyingAs = formData.get("buyingAs");
    if (buyingAs === "personal" || buyingAs === "limited") {
      values.buyingAs = buyingAs;
    }
  }

  const attachment = formData.get("attachment");
  const attachments: { filename: string; content: Buffer }[] = [];

  if (attachment instanceof File && attachment.size > 0) {
    const allowed = [".pdf", ".xlsx", ".xls"];
    const name = attachment.name.toLowerCase();
    if (!allowed.some((ext) => name.endsWith(ext))) {
      return {
        ok: false,
        error: "Please upload a PDF or Excel file for your appraisal.",
      };
    }
    if (attachment.size > 10 * 1024 * 1024) {
      return { ok: false, error: "The upload must be 10 MB or smaller." };
    }
    attachments.push({
      filename: attachment.name,
      content: Buffer.from(await attachment.arrayBuffer()),
    });
  }

  const detailLines = [
    ...numberFields
      .filter((field) => values[field] !== undefined)
      .map(
        (field) =>
          `${FIELD_LABELS[field]}: ${
            field === "termMonths"
              ? String(values[field])
              : formatGBP(Number(values[field]))
          }`
      ),
    ...textFields
      .filter((field) => values[field] !== undefined)
      .map((field) => `${FIELD_LABELS[field]}: ${String(values[field])}`),
  ];

  const gdv = values.gdv;  const subject = `New enquiry: ${DEAL_TYPE_LABELS[dealType]}${
    gdv ? `, GDV ${formatGBP(Number(gdv), true)}` : ""
  }`;

  const calculation = calculationSummary(values as unknown as EnquiryValues);

  const body = [
    `New website enquiry`,
    ``,
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    `Phone: ${parsed.data.phone}`,
    `Timescale: ${parsed.data.timescale}`,
    `Deal type: ${DEAL_TYPE_LABELS[dealType]}`,
    parsed.data.source ? `Page: ${parsed.data.source}` : "",
    ``,
    `Deal details`,
    detailLines.length ? detailLines.join("\n") : "Not provided",
    ``,
    `Indicative figures`,
    calculation || "Not applicable",
    ``,
    `Their notes`,
    parsed.data.details,
    ``,
    `Privacy consent: given`,
    attachments.length ? `Attachment: ${attachments[0].filename}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from: `Private Property Finance <${SITE.email}>`,
    to: [SITE.email],
    replyTo: parsed.data.email,
    subject,
    text: body,
    attachments: attachments.length ? attachments : undefined,
  });

  if (error) {
    console.error("Enquiry email failed", error);
    return {
      ok: false,
      error: "We couldn't send your enquiry. Please call us on 0161 399 0207.",
    };
  }

  // Auto-reply. A failure here shouldn't fail the enquiry.
  try {
    await resend.emails.send({
      from: `Private Property Finance <${SITE.email}>`,
      to: [parsed.data.email],
      subject: "We've received your enquiry | Private Property Finance",
      text: [
        `Dear ${parsed.data.name},`,
        ``,
        `Thank you for your enquiry. One of our brokers will review it and come back to you, usually the same working day.`,
        ``,
        `If it's urgent, call us on ${SITE.phone} or reply to this email.`,
        ``,
        `Private Property Finance`,
        `${SITE.phone} · ${SITE.email}`,
        SITE.manchester.lines.join(", "),
        ``,
        SITE.legalStatement,
        SITE.riskWarning,
      ].join("\n"),
    });
  } catch (autoReplyError) {
    console.error("Auto-reply failed", autoReplyError);
  }

  return { ok: true };
}
