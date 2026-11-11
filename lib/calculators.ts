import { CALCULATOR_CONFIG, DealType } from "./calculator-config";

export type Metric = {
  label: string;
  value: string;
  caption?: string;
};

export type Calculation = {
  metrics: Metric[];
  warning?: string;
};

export type EnquiryValues = {
  dealType: DealType;
  propertyValue?: number;
  loanWanted?: number;
  existingDebt?: number;
  monthlyRent?: number;
  buyingAs?: "personal" | "limited";
  landCost?: number;
  buildCost?: number;
  otherCosts?: number;
  gdv?: number;
  annualRentOrProfit?: number;
};

export const toNumber = (value: unknown): number => {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  if (typeof value !== "string") return 0;
  const parsed = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

export const formatGBP = (value: number, compact = false): string => {
  if (!Number.isFinite(value) || value <= 0) return "—";
  if (compact) {
    if (value >= 1_000_000) {
      return `£${(value / 1_000_000).toFixed(value >= 10_000_000 ? 0 : 1).replace(/\.0$/, "")}m`;
    }
    if (value >= 1_000) {
      return `£${(value / 1_000).toFixed(0)}k`;
    }
  }
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercent = (value: number): string => {
  if (!Number.isFinite(value)) return "—";
  return `${value.toFixed(1).replace(/\.0$/, "")}%`;
};

const ltv = (loan: number, value: number) =>
  value > 0 && loan > 0 ? (loan / value) * 100 : 0;

export function calculateIndicative(values: EnquiryValues): Calculation {
  const {
    btlStressRate,
    btlIcrPersonal,
    btlIcrLimited,
    btlLtvCap,
    bridgingLtvCap,
    developmentLtcCap,
    developmentLtgdvCap,
    commercialLtvCap,
  } = CALCULATOR_CONFIG;

  const propertyValue = values.propertyValue ?? 0;
  const loanWanted = values.loanWanted ?? 0;

  if (values.dealType === "bridging") {
    const existingDebt = values.existingDebt ?? 0;
    const grossLtv = ltv(loanWanted + existingDebt, propertyValue);
    const maxLoan = (propertyValue * bridgingLtvCap) / 100;
    return {
      metrics: [
        {
          label: "Gross loan-to-value",
          value:
            propertyValue > 0 && loanWanted + existingDebt > 0
              ? formatPercent(grossLtv)
              : "—",
          caption: "Includes existing debt",
        },
        { label: "Rough maximum loan", value: formatGBP(maxLoan, true), caption: `At ${bridgingLtvCap}% of value` },
      ],
      warning:
        grossLtv > bridgingLtvCap
          ? "This is above what most lenders offer, but there may still be options. Talk to us."
          : undefined,
    };
  }

  if (values.dealType === "development") {
    const totalCost =
      (values.landCost ?? 0) + (values.buildCost ?? 0) + (values.otherCosts ?? 0);
    const gdv = values.gdv ?? 0;
    const ltc = totalCost > 0 && loanWanted > 0 ? (loanWanted / totalCost) * 100 : 0;
    const ltgdv = gdv > 0 && loanWanted > 0 ? (loanWanted / gdv) * 100 : 0;
    const profit = totalCost > 0 && gdv > 0 ? ((gdv - totalCost) / totalCost) * 100 : 0;
    const maxLoan = Math.min(
      (totalCost * developmentLtcCap) / 100,
      (gdv * developmentLtgdvCap) / 100
    );
    return {
      metrics: [
        {
          label: "Loan-to-cost",
          value: totalCost > 0 && loanWanted > 0 ? formatPercent(ltc) : "—",
          caption: `Cap ${developmentLtcCap}%`,
        },
        {
          label: "Loan-to-GDV",
          value: gdv > 0 && loanWanted > 0 ? formatPercent(ltgdv) : "—",
          caption: `Cap ${developmentLtgdvCap}%`,
        },
        {
          label: "Profit on cost",
          value: totalCost > 0 && gdv > 0 ? formatPercent(profit) : "—",
          caption: "Before finance costs",
        },
        { label: "Rough maximum loan", value: formatGBP(maxLoan, true), caption: "Lower of LTC and LTGDV" },
      ],
      warning:
        ltc > developmentLtcCap || ltgdv > developmentLtgdvCap
          ? "This is above what most lenders offer, but there may still be options. Talk to us."
          : undefined,
    };
  }

  if (values.dealType === "btl") {
    const monthlyRent = values.monthlyRent ?? 0;
    const stressRate = btlStressRate / 100;
    const icrThreshold =
      values.buyingAs === "limited" ? btlIcrLimited : btlIcrPersonal;
    const annualRent = monthlyRent * 12;
    const icr = loanWanted > 0 ? (annualRent / (loanWanted * stressRate)) * 100 : 0;
    const maxLoanFromRent =
      stressRate > 0 ? annualRent / ((icrThreshold / 100) * stressRate) : 0;
    const maxLoanFromValue = (propertyValue * btlLtvCap) / 100;
    const maxLoan = Math.min(
      maxLoanFromRent > 0 ? maxLoanFromRent : maxLoanFromValue,
      maxLoanFromValue
    );
    return {
      metrics: [
        {
          label: "Loan-to-value",
          value:
            propertyValue > 0 && loanWanted > 0
              ? formatPercent(ltv(loanWanted, propertyValue))
              : "—",
          caption: `Cap ${btlLtvCap}%`,
        },
        { label: "Rental cover (ICR)", value: icr > 0 ? `${icr.toFixed(0)}%` : "—", caption: `Tested at ${icrThreshold}%` },
        { label: "Rough maximum loan", value: formatGBP(maxLoan, true), caption: "Based on rent and value" },
      ],
      warning:
        ltv(loanWanted, propertyValue) > btlLtvCap ||
        (icr > 0 && icr < icrThreshold)
          ? "This is above what most lenders offer, but there may still be options. Talk to us."
          : undefined,
    };
  }

  if (values.dealType === "commercial") {
    const commercialLtv = ltv(loanWanted, propertyValue);
    const maxLoan = (propertyValue * commercialLtvCap) / 100;
    return {
      metrics: [
        {
          label: "Loan-to-value",
          value:
            propertyValue > 0 && loanWanted > 0
              ? formatPercent(commercialLtv)
              : "—",
          caption: `Cap ${commercialLtvCap}%`,
        },
        { label: "Rough maximum loan", value: formatGBP(maxLoan, true), caption: "Based on value" },
      ],
      warning:
        commercialLtv > commercialLtvCap
          ? "This is above what most lenders offer, but there may still be options. Talk to us."
          : undefined,
    };
  }

  return { metrics: [] };
}

export const INDICATIVE_DISCLAIMER =
  "Indicative only, based on what you've entered. This is not an offer of finance or a quote.";

/** Plain-text summary used in the enquiry email. */
export function calculationSummary(values: EnquiryValues): string {
  const { metrics, warning } = calculateIndicative(values);
  const lines = metrics.map((metric) => `${metric.label}: ${metric.value}`);
  if (warning) lines.push(`Note: ${warning}`);
  return lines.join("\n");
}
