"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  Paperclip,
  ShieldCheck,
} from "lucide-react";
import { submitEnquiry } from "@/actions/emails/enquiry";
import {
  calculateIndicative,
  formatGBP,
  INDICATIVE_DISCLAIMER,
  type EnquiryValues,
} from "@/lib/calculators";
import { DEAL_TYPE_LABELS, type DealType } from "@/lib/calculator-config";
import { trackCalculatorStart, trackGenerateLead } from "@/lib/gtm";
import { SITE } from "@/lib/content/site";

type Step = 1 | 2 | 3;

type EnquiryFormProps = {
  defaultService?: DealType;
  source?: string;
  heading?: string;
};

const DEAL_OPTIONS: { value: DealType; label: string; description: string }[] = [
  {
    value: "commercial",
    label: "Commercial mortgage",
    description: "Offices, retail, industrial, mixed-use",
  },
  {
    value: "bridging",
    label: "Bridging loan",
    description: "Auction, chain break, refurbishment",
  },
  {
    value: "development",
    label: "Development finance",
    description: "Ground-up, conversion, heavy refurb",
  },
  {
    value: "btl",
    label: "Foreign national buy-to-let",
    description: "Overseas investors and expats",
  },
  {
    value: "other",
    label: "Something else",
    description: "Tell us what you're working on",
  },
];

const TIMESCALES = ["ASAP", "1–3 months", "3+ months", "Not sure yet"];

const COUNTRIES = [
  "United Kingdom",
  "Hong Kong",
  "China",
  "Malaysia",
  "Singapore",
  "Nigeria",
  "Kuwait",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Türkiye",
  "India",
  "Pakistan",
  "United States",
  "Canada",
  "Australia",
  "New Zealand",
  "South Africa",
  "Ireland",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Netherlands",
  "Switzerland",
  "Other",
];

const num = (value?: string) => {
  const parsed = Number((value ?? "").replace(/[^0-9]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

function MoneyInput({
  id,
  label,
  value,
  onChange,
  required,
  error,
  help,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  help?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
        {label} {required ? <span className="text-gold-ink">*</span> : null}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-sans text-sm text-ink/70">
          £
        </span>
        <input
          id={id}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          value={value ? Number(value).toLocaleString("en-GB") : ""}
          onChange={(event) => onChange(event.target.value.replace(/[^0-9]/g, ""))}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : help ? `${id}-help` : undefined}
          className="input-ppf pl-8"
          placeholder="0"
        />
      </div>
      {help ? (
        <p id={`${id}-help`} className="mt-1.5 text-xs text-ink/70">
          {help}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return <p className="mt-1.5 text-xs text-red-700">{error}</p>;
}

export function EnquiryForm({
  defaultService,
  source = "website",
  heading = "Tell us about the deal",
}: EnquiryFormProps) {
  const [dealType, setDealType] = useState<DealType | null>(defaultService ?? null);
  const [step, setStep] = useState<Step>(defaultService ? 2 : 1);
  const [values, setValues] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    timescale: "",
    details: "",
  });
  const [consent, setConsent] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const goToStep = (next: Step) => {
    setStep(next);
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const update = (field: string, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (!started && dealType) {
      trackCalculatorStart(dealType);
      setStarted(true);
    }
  };

  const updateContact = (field: string, value: string) => {
    setContact((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const calculation = useMemo(() => {
    const calcValues: EnquiryValues = {
      dealType: dealType ?? "other",
      propertyValue: num(values.propertyValue),
      loanWanted: num(values.loanWanted),
      existingDebt: num(values.existingDebt),
      monthlyRent: num(values.monthlyRent),
      buyingAs:
        values.buyingAs === "limited"
          ? "limited"
          : values.buyingAs === "personal"
            ? "personal"
            : undefined,
      landCost: num(values.landCost),
      buildCost: num(values.buildCost),
      otherCosts: num(values.otherCosts),
      gdv: num(values.gdv),
      annualRentOrProfit: num(values.annualRentOrProfit),
    };
    return calculateIndicative(calcValues);
  }, [dealType, values]);

  const chooseDeal = (next: DealType) => {
    setDealType(next);
    setValues({});
    setErrors({});
    goToStep(2);
    if (!started) {
      trackCalculatorStart(next);
      setStarted(true);
    }
  };

  const requiredFields: Record<DealType, { money: string[]; text: string[] }> = {
    commercial: {
      money: ["propertyValue", "loanWanted"],
      text: ["propertyType", "occupancy"],
    },
    bridging: {
      money: ["propertyValue", "loanWanted"],
      text: ["exitRoute"],
    },
    development: {
      money: ["landCost", "buildCost", "gdv"],
      text: ["planning", "experience"],
    },
    btl: {
      money: ["propertyValue", "loanWanted", "monthlyRent"],
      text: ["buyingAs", "country"],
    },
    other: { money: [], text: [] },
  };

  const validateStep2 = () => {
    if (!dealType) return false;
    const next: Record<string, string> = {};
    requiredFields[dealType].money.forEach((field) => {
      if (!values[field]) next[field] = "Please enter an amount.";
    });
    requiredFields[dealType].text.forEach((field) => {
      if (!values[field]) next[field] = "Please choose an option.";
    });
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      document.getElementById(first)?.focus();
      return false;
    }
    goToStep(3);
    return true;
  };

  const validateStep3 = () => {
    const next: Record<string, string> = {};
    if (contact.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (contact.phone.replace(/[^0-9]/g, "").length < 7) {
      next.phone = "Please enter a phone number.";
    }
    if (!contact.timescale) next.timescale = "Please choose a timescale.";
    if (contact.details.trim().length < 10) {
      next.details = "A sentence or two about the deal is enough.";
    }
    if (!consent) next.consent = "Please accept the privacy policy to continue.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      document.getElementById(first)?.focus();
      return false;
    }
    return true;
  };

  const onFile = (nextFile: File | null) => {
    setFileError("");
    if (!nextFile) {
      setFile(null);
      return;
    }
    const allowed = /\.(pdf|xlsx|xls)$/i.test(nextFile.name);
    if (!allowed) {
      setFileError("Please upload a PDF or Excel file.");
      return;
    }
    if (nextFile.size > 10 * 1024 * 1024) {
      setFileError("The file must be 10 MB or smaller.");
      return;
    }
    setFile(nextFile);
  };

  const submit = async () => {
    if (!dealType || !validateStep3()) return;
    setSubmitting(true);
    setServerError("");

    const formData = new FormData();
    formData.append("dealType", dealType);
    formData.append("source", source);
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    formData.append("name", contact.name.trim());
    formData.append("email", contact.email.trim());
    formData.append("phone", contact.phone.trim());
    formData.append("timescale", contact.timescale);
    formData.append("details", contact.details.trim());
    if (consent) formData.append("consent", "on");
    if (file) formData.append("attachment", file);
    const honeypot = document.getElementById("company_website") as HTMLInputElement | null;
    if (honeypot?.value) formData.append("company_website", honeypot.value);

    try {
      const result = await submitEnquiry(formData);
      if (result.ok) {
        trackGenerateLead(dealType, source);
        setDone(true);
      } else {
        setServerError(result.error);
      }
    } catch (error) {
      console.error(error);
      setServerError(
        `Something went wrong. Please call us on ${SITE.phone} or email ${SITE.email}.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setDone(false);
    setDealType(defaultService ?? null);
    setStep(defaultService ? 2 : 1);
    setValues({});
    setContact({ name: "", email: "", phone: "", timescale: "", details: "" });
    setConsent(false);
    setFile(null);
    setErrors({});
    setServerError("");
  };

  if (done) {
    return (
      <div className="border border-line bg-white p-8 sm:p-10">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-cream">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-serif text-3xl text-navy">Enquiry received</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
          Thank you. A broker will review your details and come back to you,
          usually the same working day. If it&apos;s urgent, call{" "}
          <a href={`tel:${SITE.phoneHref}`} className="font-semibold text-navy underline decoration-gold/60 underline-offset-4">
            {SITE.phone}
          </a>
          .
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/case-studies" className="btn-outline">
            See completed transactions
          </Link>
          <button type="button" onClick={reset} className="btn-primary">
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  const steps: { number: Step; label: string }[] = [
    { number: 1, label: "Deal" },
    { number: 2, label: "Details" },
    { number: 3, label: "Contact" },
  ];

  return (
    <form
      ref={formRef}
      className="scroll-mt-24 border border-line bg-white"
      onSubmit={(event) => {
        event.preventDefault();
        if (step === 3) submit();
        else if (step === 2) validateStep2();
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-cream-dark/60 px-5 py-4 sm:px-7">
        <ol className="flex items-center gap-3" aria-label="Enquiry progress">
          {steps.map((item, index) => {
            const active = step === item.number;
            const complete = step > item.number;
            return (
              <li key={item.number} className="flex items-center gap-3">
                <span
                  className={`grid h-6 w-6 place-items-center rounded-full font-sans text-[0.65rem] font-semibold ${
                    active
                      ? "bg-gold text-navy"
                      : complete
                        ? "bg-navy text-cream"
                        : "border border-line text-ink/70"
                  }`}
                  aria-current={active ? "step" : undefined}
                >
                  {complete ? <Check className="h-3 w-3" aria-hidden="true" /> : item.number}
                </span>
                <span
                  className={`font-sans text-[0.64rem] font-semibold uppercase tracking-[0.14em] ${
                    active ? "text-navy" : "text-ink/70"
                  }`}
                >
                  {item.label}
                </span>
                {index < steps.length - 1 ? (
                  <span className="h-px w-4 bg-line" aria-hidden="true" />
                ) : null}
              </li>
            );
          })}
        </ol>
        <p className="flex items-center gap-2 font-sans text-[0.64rem] uppercase tracking-[0.12em] text-ink/70">
          <ShieldCheck className="h-3.5 w-3.5 text-gold-ink" aria-hidden="true" />
          No obligation
        </p>
      </div>

      <div className="p-5 sm:p-8">
        {step === 1 ? (
          <div>
            <h3 className="font-serif text-2xl text-navy sm:text-3xl">{heading}</h3>
            <p className="mt-2 text-sm text-ink/70">
              Start with what you need. We&apos;ll only ask for the details that
              matter for your deal.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {DEAL_OPTIONS.map((option) => {
                const selected = dealType === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => chooseDeal(option.value)}
                    aria-pressed={selected}
                    className={`border p-4 text-left transition-colors ${
                      selected
                        ? "border-gold bg-cream"
                        : "border-line hover:border-navy/40 hover:bg-cream/60"
                    }`}
                  >
                    <span className="block font-serif text-lg text-navy">
                      {option.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-ink/70">
                      {option.description}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-ink/70">
              Prefer to talk? Call{" "}
              <a href={`tel:${SITE.phoneHref}`} className="font-semibold text-navy">
                {SITE.phone}
              </a>
              . We aim to reply the same working day.
            </p>
          </div>
        ) : null}

        {step === 2 && dealType ? (
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{DEAL_TYPE_LABELS[dealType]}</p>
                <h3 className="mt-2 font-serif text-2xl text-navy sm:text-3xl">
                  A few figures, then an indicative position
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  goToStep(1);
                  setErrors({});
                }}
                className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-gold-ink underline decoration-gold/50 underline-offset-4"
              >
                Change deal type
              </button>
            </div>

            <div className="mt-6 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-5">
                {dealType === "commercial" ? (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="propertyType" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                          Property type <span className="text-gold-ink">*</span>
                        </label>
                        <select
                          id="propertyType"
                          value={values.propertyType ?? ""}
                          onChange={(event) => update("propertyType", event.target.value)}
                          className="input-ppf"
                          aria-invalid={Boolean(errors.propertyType)}
                        >
                          <option value="">Select</option>
                          <option value="office">Office</option>
                          <option value="retail">Retail</option>
                          <option value="industrial">Industrial</option>
                          <option value="mixed-use">Mixed-use</option>
                          <option value="other">Other</option>
                        </select>
                        <FieldError error={errors.propertyType} />
                      </div>
                      <div>
                        <label htmlFor="occupancy" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                          Use <span className="text-gold-ink">*</span>
                        </label>
                        <select
                          id="occupancy"
                          value={values.occupancy ?? ""}
                          onChange={(event) => update("occupancy", event.target.value)}
                          className="input-ppf"
                          aria-invalid={Boolean(errors.occupancy)}
                        >
                          <option value="">Select</option>
                          <option value="owner-occupied">Owner-occupied</option>
                          <option value="investment">Investment</option>
                        </select>
                        <FieldError error={errors.occupancy} />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <MoneyInput
                        id="propertyValue"
                        label="Property value"
                        value={values.propertyValue ?? ""}
                        onChange={(value) => update("propertyValue", value)}
                        required
                        error={errors.propertyValue}
                      />
                      <MoneyInput
                        id="loanWanted"
                        label="Loan wanted"
                        value={values.loanWanted ?? ""}
                        onChange={(value) => update("loanWanted", value)}
                        required
                        error={errors.loanWanted}
                      />
                    </div>
                    <MoneyInput
                      id="annualRentOrProfit"
                      label="Annual rent or business profit"
                      value={values.annualRentOrProfit ?? ""}
                      onChange={(value) => update("annualRentOrProfit", value)}
                      help="Optional. Helps us sense-check the likely lender appetite."
                    />
                  </>
                ) : null}

                {dealType === "bridging" ? (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <MoneyInput
                        id="propertyValue"
                        label="Property value"
                        value={values.propertyValue ?? ""}
                        onChange={(value) => update("propertyValue", value)}
                        required
                        error={errors.propertyValue}
                      />
                      <MoneyInput
                        id="loanWanted"
                        label="Loan wanted"
                        value={values.loanWanted ?? ""}
                        onChange={(value) => update("loanWanted", value)}
                        required
                        error={errors.loanWanted}
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <MoneyInput
                        id="existingDebt"
                        label="Existing mortgage or debt"
                        value={values.existingDebt ?? ""}
                        onChange={(value) => update("existingDebt", value)}
                      />
                      <div>
                        <label htmlFor="termMonths" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                          Term (months)
                        </label>
                        <input
                          id="termMonths"
                          type="text"
                          inputMode="numeric"
                          value={values.termMonths ?? ""}
                          onChange={(event) =>
                            update("termMonths", event.target.value.replace(/[^0-9]/g, ""))
                          }
                          className="input-ppf"
                          placeholder="e.g. 9"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="exitRoute" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                        Exit route <span className="text-gold-ink">*</span>
                      </label>
                      <select
                        id="exitRoute"
                        value={values.exitRoute ?? ""}
                        onChange={(event) => update("exitRoute", event.target.value)}
                        className="input-ppf"
                        aria-invalid={Boolean(errors.exitRoute)}
                      >
                        <option value="">Select</option>
                        <option value="sale">Sale</option>
                        <option value="refinance">Refinance</option>
                        <option value="other">Other</option>
                      </select>
                      <FieldError error={errors.exitRoute} />
                    </div>
                  </>
                ) : null}

                {dealType === "development" ? (
                  <>
                    <div className="grid gap-5 sm:grid-cols-3">
                      <MoneyInput
                        id="landCost"
                        label="Land or purchase cost"
                        value={values.landCost ?? ""}
                        onChange={(value) => update("landCost", value)}
                        required
                        error={errors.landCost}
                      />
                      <MoneyInput
                        id="buildCost"
                        label="Build cost"
                        value={values.buildCost ?? ""}
                        onChange={(value) => update("buildCost", value)}
                        required
                        error={errors.buildCost}
                      />
                      <MoneyInput
                        id="otherCosts"
                        label="Other costs"
                        value={values.otherCosts ?? ""}
                        onChange={(value) => update("otherCosts", value)}
                        help="Fees, contingency"
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <MoneyInput
                        id="gdv"
                        label="GDV"
                        value={values.gdv ?? ""}
                        onChange={(value) => update("gdv", value)}
                        required
                        error={errors.gdv}
                      />
                      <MoneyInput
                        id="loanWanted"
                        label="Loan wanted"
                        value={values.loanWanted ?? ""}
                        onChange={(value) => update("loanWanted", value)}
                        help="Optional. Leave blank to see the rough maximum."
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="planning" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                          Planning <span className="text-gold-ink">*</span>
                        </label>
                        <select
                          id="planning"
                          value={values.planning ?? ""}
                          onChange={(event) => update("planning", event.target.value)}
                          className="input-ppf"
                          aria-invalid={Boolean(errors.planning)}
                        >
                          <option value="">Select</option>
                          <option value="granted">Granted</option>
                          <option value="applied">Applied</option>
                          <option value="none">None</option>
                        </select>
                        <FieldError error={errors.planning} />
                      </div>
                      <div>
                        <label htmlFor="experience" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                          Experience <span className="text-gold-ink">*</span>
                        </label>
                        <select
                          id="experience"
                          value={values.experience ?? ""}
                          onChange={(event) => update("experience", event.target.value)}
                          className="input-ppf"
                          aria-invalid={Boolean(errors.experience)}
                        >
                          <option value="">Select</option>
                          <option value="first">First scheme</option>
                          <option value="1-3">1–3 schemes</option>
                          <option value="4+">4+ schemes</option>
                        </select>
                        <FieldError error={errors.experience} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="attachment" className="mb-2 flex items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                        <Paperclip className="h-3.5 w-3.5 text-gold-ink" aria-hidden="true" />
                        Appraisal or cost plan
                      </label>
                      <input
                        id="attachment"
                        type="file"
                        accept=".pdf,.xlsx,.xls"
                        onChange={(event) => onFile(event.target.files?.[0] ?? null)}
                        className="block w-full border border-line bg-white px-4 py-3 text-sm text-ink/70 file:mr-4 file:border-0 file:bg-cream file:px-3 file:py-1.5 file:font-sans file:text-xs file:font-semibold file:uppercase file:tracking-wider file:text-navy"
                      />
                      <p className="mt-1.5 text-xs text-ink/70">
                        PDF or Excel, up to 10 MB. Prefer email? Send it to{" "}
                        <a href={`mailto:${SITE.email}`} className="text-navy underline decoration-gold/50 underline-offset-2">
                          {SITE.email}
                        </a>
                        .
                      </p>
                      {file ? (
                        <p className="mt-1.5 text-xs text-navy">Attached: {file.name}</p>
                      ) : null}
                      {fileError ? (
                        <p className="mt-1.5 text-xs text-red-700">{fileError}</p>
                      ) : null}
                    </div>
                  </>
                ) : null}

                {dealType === "btl" ? (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <MoneyInput
                        id="propertyValue"
                        label="Property value"
                        value={values.propertyValue ?? ""}
                        onChange={(value) => update("propertyValue", value)}
                        required
                        error={errors.propertyValue}
                      />
                      <MoneyInput
                        id="loanWanted"
                        label="Loan wanted"
                        value={values.loanWanted ?? ""}
                        onChange={(value) => update("loanWanted", value)}
                        required
                        error={errors.loanWanted}
                      />
                    </div>
                    <MoneyInput
                      id="monthlyRent"
                      label="Monthly rent"
                      value={values.monthlyRent ?? ""}
                      onChange={(value) => update("monthlyRent", value)}
                      required
                      error={errors.monthlyRent}
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="buyingAs" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                          Buying as <span className="text-gold-ink">*</span>
                        </label>
                        <select
                          id="buyingAs"
                          value={values.buyingAs ?? ""}
                          onChange={(event) => update("buyingAs", event.target.value)}
                          className="input-ppf"
                          aria-invalid={Boolean(errors.buyingAs)}
                        >
                          <option value="">Select</option>
                          <option value="personal">Personal name</option>
                          <option value="limited">UK limited company (SPV)</option>
                        </select>
                        <FieldError error={errors.buyingAs} />
                      </div>
                      <div>
                        <label htmlFor="country" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                          Country of residence <span className="text-gold-ink">*</span>
                        </label>
                        <select
                          id="country"
                          value={values.country ?? ""}
                          onChange={(event) => update("country", event.target.value)}
                          className="input-ppf"
                          aria-invalid={Boolean(errors.country)}
                        >
                          <option value="">Select</option>
                          {COUNTRIES.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                        <FieldError error={errors.country} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="nationality" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                        Nationality
                      </label>
                      <input
                        id="nationality"
                        type="text"
                        value={values.nationality ?? ""}
                        onChange={(event) => update("nationality", event.target.value)}
                        className="input-ppf"
                        placeholder="Optional"
                      />
                    </div>
                  </>
                ) : null}

                {dealType === "other" ? (
                  <div className="border border-line bg-cream p-5">
                    <p className="text-sm leading-relaxed text-ink/70">
                      No problem. Add a short description in the next step and
                      we&apos;ll come back to you with the right questions.
                    </p>
                  </div>
                ) : null}

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => validateStep2()}
                    className="btn-primary"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToStep(1)}
                    className="inline-flex items-center gap-2 font-sans text-sm text-ink/70 hover:text-navy"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                </div>
              </div>

              <aside className="h-fit bg-navy p-5 text-cream sm:p-6" aria-live="polite">
                <p className="eyebrow-light">Indicative position</p>
                {calculation.metrics.length ? (
                  <div className="mt-5 space-y-5">
                    {calculation.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-cream/65">
                          {metric.label}
                        </p>
                        <p className="mt-1 font-serif text-2xl text-cream">
                          {metric.value}
                        </p>
                        {metric.caption ? (
                          <p className="mt-0.5 text-[0.68rem] text-cream/65">
                            {metric.caption}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 text-sm leading-relaxed text-cream/65">
                    Add the property value and loan amount to see an indicative
                    position. Nothing is sent until you choose to send it.
                  </p>
                )}
                {calculation.warning ? (
                  <p className="mt-5 border-t border-cream/15 pt-4 text-xs leading-relaxed text-gold-soft">
                    {calculation.warning}
                  </p>
                ) : null}
                <p className="mt-6 border-t border-cream/15 pt-4 text-[0.66rem] leading-relaxed text-cream/65">
                  {INDICATIVE_DISCLAIMER}
                </p>
              </aside>
            </div>
          </div>
        ) : null}

        {step === 3 && dealType ? (
          <div>
            <p className="eyebrow">Last step</p>
            <h3 className="mt-2 font-serif text-2xl text-navy sm:text-3xl">
              Where should we send the answer?
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              One of our brokers will review this and come back to you, usually
              the same working day.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                  Name <span className="text-gold-ink">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={contact.name}
                  onChange={(event) => updateContact("name", event.target.value)}
                  className="input-ppf"
                  aria-invalid={Boolean(errors.name)}
                />
                <FieldError error={errors.name} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                  Email <span className="text-gold-ink">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={contact.email}
                  onChange={(event) => updateContact("email", event.target.value)}
                  className="input-ppf"
                  aria-invalid={Boolean(errors.email)}
                />
                <FieldError error={errors.email} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                  Phone <span className="text-gold-ink">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={contact.phone}
                  onChange={(event) => updateContact("phone", event.target.value)}
                  className="input-ppf"
                  aria-invalid={Boolean(errors.phone)}
                />
                <FieldError error={errors.phone} />
              </div>
              <div>
                <label htmlFor="timescale" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                  Timescale <span className="text-gold-ink">*</span>
                </label>
                <select
                  id="timescale"
                  value={contact.timescale}
                  onChange={(event) => updateContact("timescale", event.target.value)}
                  className="input-ppf"
                  aria-invalid={Boolean(errors.timescale)}
                >
                  <option value="">Select</option>
                  {TIMESCALES.map((timescale) => (
                    <option key={timescale} value={timescale}>
                      {timescale}
                    </option>
                  ))}
                </select>
                <FieldError error={errors.timescale} />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="details" className="mb-2 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy">
                Brief details <span className="text-gold-ink">*</span>
              </label>
              <textarea
                id="details"
                rows={4}
                value={contact.details}
                onChange={(event) => updateContact("details", event.target.value)}
                className="input-ppf h-auto py-3"
                placeholder="Location, property type, what you're trying to do, and anything that makes the deal unusual."
                aria-invalid={Boolean(errors.details)}
              />
              <FieldError error={errors.details} />
            </div>

            <div className="mt-5 space-y-2">
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => {
                    setConsent(event.target.checked);
                    setErrors((current) => {
                      if (!current.consent) return current;
                      const next = { ...current };
                      delete next.consent;
                      return next;
                    });
                  }}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#0B1F3A]"
                  aria-invalid={Boolean(errors.consent)}
                />
                <label htmlFor="consent" className="text-xs leading-relaxed text-ink/70">
                  I agree to the{" "}
                  <Link href="/privacy-policy" className="text-navy underline decoration-gold/50 underline-offset-2">
                    Privacy Policy
                  </Link>
                  . We&apos;ll only use your details to respond to this enquiry.
                </label>
              </div>
              <FieldError error={errors.consent} />
            </div>

            <div
              aria-hidden="true"
              className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            >
              <label htmlFor="company_website">Company website</label>
              <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {serverError ? (
              <p className="mt-5 border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
                {serverError}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="btn-gold min-w-40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending
                  </>
                ) : (
                  <>
                    Send enquiry
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => goToStep(2)}
                className="inline-flex items-center gap-2 font-sans text-sm text-ink/70 hover:text-navy"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </button>
            </div>
            <p className="mt-4 text-[0.68rem] leading-relaxed text-ink/70">
              We&apos;ll only use your details to respond to your enquiry. See our{" "}
              <Link href="/privacy-policy" className="underline underline-offset-2">
                Privacy Policy
              </Link>
              . This is not an offer of finance or a quote.
            </p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
