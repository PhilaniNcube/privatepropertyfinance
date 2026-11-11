/**
 * Indicative calculator settings.
 *
 * Every cap, stress rate and ICR threshold lives here so it can be changed in
 * one place without touching a page or a form. PPF to confirm the final values
 * with their lenders; these are deliberately conservative working assumptions.
 */
export const CALCULATOR_CONFIG = {
  /** Annual interest rate used to stress rental cover, as a percentage. */
  btlStressRate: 5.5,
  /** Rental cover required for a personal-name buy-to-let application. */
  btlIcrPersonal: 145,
  /** Rental cover required for a limited company / SPV application. */
  btlIcrLimited: 125,
  /** Maximum loan-to-value on a foreign national buy-to-let. */
  btlLtvCap: 75,
  /** Maximum gross loan-to-value on a bridge, including existing debt. */
  bridgingLtvCap: 75,
  /** Maximum loan-to-cost on a development. */
  developmentLtcCap: 85,
  /** Maximum loan-to-GDV on a development. */
  developmentLtgdvCap: 65,
  /** Maximum loan-to-value on a commercial mortgage. */
  commercialLtvCap: 70,
} as const;

export type DealType = "commercial" | "bridging" | "development" | "btl" | "other";

export const DEAL_TYPE_LABELS: Record<DealType, string> = {
  commercial: "Commercial mortgage",
  bridging: "Bridging loan",
  development: "Development finance",
  btl: "Foreign national buy-to-let",
  other: "Something else",
};
