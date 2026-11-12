import { CALCULATOR_CONFIG, DealType } from "./calculator-config";

export type Metric = {
  label: string;
  value: string;
  caption?: string;
};

export type Calculation = {
  metrics: Metric[];
  assumptionsNote?: string;
  warning?: string;
};

export type EnquiryValues = {
  dealType: DealType;
  propertyValue?: number;
  loanWanted?: number;
  existingDebt?: number;
  /**
   * For bridging loans:
   * - "repaid": the new bridging facility will repay the existing debt (first charge refinance/purchase),
   *   so total debt is max(loanWanted, existingDebt) — never double-counted.
   * - "remaining": the existing mortgage stays in place and the new loan sits behind it (second charge),
   *   so combined debt is loanWanted + existingDebt.
   */
  existingDebtHandling?: "repaid" | "remaining";
  monthlyRent?: number;
  buyingAs?: "personal" | "limited";
  landCost?: number;
  buildCost?: number;
  otherCosts?: number;
  gdv?: number;
  occupancy?: "owner-occupied" | "investment";
  annualRentOrProfit?: number;
};

const MAX_SAFE_CURRENCY = 10_000_000_000; // £10bn upper sanity bound against pasted garbage

export const toNumber = (value: unknown): number => {
  if (typeof value === "number") {
    if (!Number.isFinite(value) || value <= 0) return 0;
    return Math.min(value, MAX_SAFE_CURRENCY);
  }
  if (typeof value !== "string") return 0;
  const cleaned = value.replace(/[^0-9.]/g, "");
  if (!cleaned) return 0;
  const parsed = Number(cleaned);
  if (!Number.isFinite(parsed) || parsed <= 0) return 0;
  return Math.min(parsed, MAX_SAFE_CURRENCY);
};

export const formatGBP = (value: number, compact = false): string => {
  if (!Number.isFinite(value) || value <= 0) return "—";
  const clamped = Math.min(value, MAX_SAFE_CURRENCY);
  if (compact) {
    if (clamped >= 1_000_000) {
      return `£${(clamped / 1_000_000)
        .toFixed(clamped >= 10_000_000 ? 0 : 2)
        .replace(/\.00$/, "")
        .replace(/(\.\d)0$/, "$1")}m`;
    }
    if (clamped >= 1_000) {
      return `£${Math.round(clamped / 1_000).toLocaleString("en-GB")}k`;
    }
  }
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(Math.round(clamped));
};

export const formatPercent = (value: number): string => {
  if (!Number.isFinite(value) || value < 0) return "—";
  if (value > 999.9) return ">999%";
  return `${value.toFixed(1).replace(/\.0$/, "")}%`;
};

const calcLtv = (loan: number, value: number): number =>
  value > 0 && loan > 0 && Number.isFinite(loan) && Number.isFinite(value)
    ? (loan / value) * 100
    : 0;

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

  const propertyValue = toNumber(values.propertyValue);
  const loanWanted = toNumber(values.loanWanted);

  if (values.dealType === "bridging") {
    const existingDebt = toNumber(values.existingDebt);
    const debtHandling = values.existingDebtHandling ?? "repaid";

    // Distinguish existing debt that remains (2nd charge) from debt repaid by the new facility (1st charge)
    // so debt is never double-counted.
    const totalSecuredDebt =
      existingDebt > 0
        ? debtHandling === "remaining"
          ? loanWanted + existingDebt
          : Math.max(loanWanted, existingDebt)
        : loanWanted;

    const netAdditionalFunds =
      existingDebt > 0 && debtHandling === "repaid"
        ? Math.max(0, loanWanted - existingDebt)
        : loanWanted;

    const combinedLtv = calcLtv(totalSecuredDebt, propertyValue);
    const maxGrossLoan = (propertyValue * bridgingLtvCap) / 100;
    const maxNetAdvanceAfterExisting =
      existingDebt > 0
        ? Math.max(0, maxGrossLoan - existingDebt)
        : maxGrossLoan;

    const metrics: Metric[] = [
      {
        label:
          existingDebt > 0 && debtHandling === "remaining"
            ? "Combined loan-to-value"
            : "Loan-to-value (LTV)",
        value:
          propertyValue > 0 && totalSecuredDebt > 0
            ? formatPercent(combinedLtv)
            : "—",
        caption:
          existingDebt > 0
            ? debtHandling === "remaining"
              ? `New facility (${formatGBP(loanWanted, true)}) + remaining debt (${formatGBP(existingDebt, true)})`
              : `Existing debt (${formatGBP(existingDebt, true)}) repaid from facility`
            : `Indicative gross cap ${bridgingLtvCap}%`,
      },
      {
        label: "Indicative gross facility cap",
        value: formatGBP(maxGrossLoan, true),
        caption: `Up to ${bridgingLtvCap}% of property value (before retained interest & fees)`,
      },
    ];

    if (existingDebt > 0) {
      metrics.push({
        label:
          debtHandling === "repaid"
            ? "Net cash after repaying existing debt"
            : "Headroom after remaining debt",
        value:
          debtHandling === "repaid"
            ? loanWanted > existingDebt
              ? formatGBP(netAdditionalFunds, true)
              : "£0 (shortfall vs existing debt)"
            : formatGBP(maxNetAdvanceAfterExisting, true),
        caption:
          debtHandling === "repaid"
            ? "Before retained interest and arrangement fees"
            : `At ${bridgingLtvCap}% combined LTV cap`,
      });
    }

    const shortfallWarning =
      existingDebt > 0 &&
      debtHandling === "repaid" &&
      loanWanted > 0 &&
      loanWanted < existingDebt
        ? "The loan requested is lower than the existing debt to be repaid. We can help structure the full redemption figure."
        : undefined;

    return {
      metrics,
      assumptionsNote:
        "Gross bridging loans include retained interest and lender arrangement fees; net day-one cash is the gross loan less retained interest, fees and any redeemed debt.",
      warning:
        combinedLtv > bridgingLtvCap
          ? "This is above standard LTV caps, though higher leverage can sometimes be structured with additional security. Let's discuss your options."
          : shortfallWarning,
    };
  }

  if (values.dealType === "development") {
    const landCost = toNumber(values.landCost);
    const buildCost = toNumber(values.buildCost);
    const otherCosts = toNumber(values.otherCosts);
    const totalCost = landCost + buildCost + otherCosts;
    const gdv = toNumber(values.gdv);
    const ltc = totalCost > 0 && loanWanted > 0 ? (loanWanted / totalCost) * 100 : 0;
    const ltgdv = gdv > 0 && loanWanted > 0 ? (loanWanted / gdv) * 100 : 0;
    const profitOnCost =
      totalCost > 0 && gdv > 0 ? ((gdv - totalCost) / totalCost) * 100 : null;
    const maxFromCost = (totalCost * developmentLtcCap) / 100;
    const maxFromGdv = (gdv * developmentLtgdvCap) / 100;
    const maxLoan =
      totalCost > 0 && gdv > 0
        ? Math.min(maxFromCost, maxFromGdv)
        : totalCost > 0
          ? maxFromCost
          : maxFromGdv;

    return {
      metrics: [
        {
          label: "Total project cost",
          value: totalCost > 0 ? formatGBP(totalCost, true) : "—",
          caption: "Land + build + other costs",
        },
        {
          label: "Loan-to-cost (LTC)",
          value: totalCost > 0 && loanWanted > 0 ? formatPercent(ltc) : "—",
          caption: `Indicative senior cap ${developmentLtcCap}%`,
        },
        {
          label: "Loan-to-GDV (LTGDV)",
          value: gdv > 0 && loanWanted > 0 ? formatPercent(ltgdv) : "—",
          caption: `Indicative senior cap ${developmentLtgdvCap}%`,
        },
        {
          label: "Profit on cost",
          value:
            profitOnCost !== null && profitOnCost >= 0
              ? formatPercent(profitOnCost)
              : profitOnCost !== null && profitOnCost < 0
                ? `-${formatPercent(Math.abs(profitOnCost))}`
                : "—",
          caption: "Before finance costs",
        },
        {
          label: "Indicative maximum facility",
          value: formatGBP(maxLoan, true),
          caption: `Lower of ${developmentLtcCap}% LTC and ${developmentLtgdvCap}% LTGDV`,
        },
      ],
      assumptionsNote:
        "Senior development caps typically test both total cost (LTC) and finished value (LTGDV). Stretched senior or mezzanine funding may increase leverage.",
      warning:
        ltc > developmentLtcCap || ltgdv > developmentLtgdvCap
          ? "This is above standard senior caps, but stretched senior or mezzanine finance may bridge the gap. Let's talk through the appraisal."
          : profitOnCost !== null && profitOnCost < 15
            ? "Most development lenders look for at least 15%–20% profit on cost before finance. We can review the appraisal with you."
            : undefined,
    };
  }

  if (values.dealType === "btl") {
    const monthlyRent = toNumber(values.monthlyRent);
    const stressRate = btlStressRate / 100;
    const isSpv = values.buyingAs === "limited";
    const icrThreshold = isSpv ? btlIcrLimited : btlIcrPersonal;
    const annualRent = monthlyRent * 12;
    const annualStressedInterest = loanWanted * stressRate;
    const icr =
      loanWanted > 0 && annualRent > 0 && annualStressedInterest > 0
        ? (annualRent / annualStressedInterest) * 100
        : 0;
    const maxLoanFromRent =
      stressRate > 0 && annualRent > 0
        ? annualRent / ((icrThreshold / 100) * stressRate)
        : 0;
    const maxLoanFromValue = (propertyValue * btlLtvCap) / 100;
    const maxLoan =
      propertyValue > 0 && maxLoanFromRent > 0
        ? Math.min(maxLoanFromRent, maxLoanFromValue)
        : propertyValue > 0
          ? maxLoanFromValue
          : maxLoanFromRent;
    const currentLtv = calcLtv(loanWanted, propertyValue);

    return {
      metrics: [
        {
          label: "Loan-to-value (LTV)",
          value:
            propertyValue > 0 && loanWanted > 0
              ? formatPercent(currentLtv)
              : "—",
          caption: `Indicative cap ${btlLtvCap}%`,
        },
        {
          label: "Rental cover (ICR)",
          value: icr > 0 ? formatPercent(icr) : "—",
          caption: `Tested at ${icrThreshold}% (${isSpv ? "UK SPV" : "Personal name"})`,
        },
        {
          label: "Indicative maximum loan",
          value: formatGBP(maxLoan, true),
          caption:
            propertyValue > 0 && monthlyRent > 0
              ? `Lower of ${btlLtvCap}% LTV (${formatGBP(maxLoanFromValue, true)}) and rent cap (${formatGBP(maxLoanFromRent, true)})`
              : `Subject to ${btlLtvCap}% LTV and rental cover`,
        },
      ],
      assumptionsNote: `Assumptions: rental cover is stress-tested at ${icrThreshold}% (${isSpv ? "UK SPV" : "personal name"}) using an indicative ${btlStressRate}% stress rate and a ${btlLtvCap}% LTV cap. The stress rate is an underwriting test, not a quoted product rate.`,
      warning:
        currentLtv > btlLtvCap || (icr > 0 && icr < icrThreshold)
          ? "This is outside standard LTV or rental-cover thresholds, but specialist lenders or top-slicing may offer a route. Let's discuss your case."
          : undefined,
    };
  }

  if (values.dealType === "commercial") {
    const commercialLtv = calcLtv(loanWanted, propertyValue);
    const maxLoan = (propertyValue * commercialLtvCap) / 100;
    const annualIncome = toNumber(values.annualRentOrProfit);
    const isOwnerOccupied = values.occupancy === "owner-occupied";
    const grossYieldOrCover =
      annualIncome > 0 && loanWanted > 0
        ? (annualIncome / loanWanted) * 100
        : 0;

    const metrics: Metric[] = [
      {
        label: "Loan-to-value (LTV)",
        value:
          propertyValue > 0 && loanWanted > 0
            ? formatPercent(commercialLtv)
            : "—",
        caption: `Indicative cap ${commercialLtvCap}%`,
      },
      {
        label: "Indicative maximum loan",
        value: formatGBP(maxLoan, true),
        caption: `At ${commercialLtvCap}% of property value`,
      },
    ];

    if (annualIncome > 0 && loanWanted > 0) {
      metrics.push({
        label: isOwnerOccupied
          ? "Annual profit to loan ratio"
          : "Annual rent to loan ratio",
        value: formatPercent(grossYieldOrCover),
        caption: isOwnerOccupied
          ? `Based on ${formatGBP(annualIncome, true)} operating profit`
          : `Based on ${formatGBP(annualIncome, true)} passing/projected rent`,
      });
    }

    return {
      metrics,
      assumptionsNote: isOwnerOccupied
        ? `Owner-occupied commercial mortgages are typically capped around ${commercialLtvCap}% LTV and assessed against business trading profit (EBITDA).`
        : `Commercial investment mortgages are typically capped around ${commercialLtvCap}% LTV and assessed against lease terms and rental serviceability.`,
      warning:
        commercialLtv > commercialLtvCap
          ? "This is above what most commercial lenders offer on a standalone basis, though additional security can sometimes increase leverage. Talk to us."
          : undefined,
    };
  }

  return { metrics: [] };
}

export const INDICATIVE_DISCLAIMER =
  "Indicative only, based on what you've entered. This is not an offer of finance or a quote.";

/** Plain-text summary used in the enquiry email. */
export function calculationSummary(values: EnquiryValues): string {
  const { metrics, assumptionsNote, warning } = calculateIndicative(values);
  const lines = metrics.map((metric) => `${metric.label}: ${metric.value}`);
  if (assumptionsNote) lines.push(`Assumptions: ${assumptionsNote}`);
  if (warning) lines.push(`Note: ${warning}`);
  return lines.join("\n");
}
