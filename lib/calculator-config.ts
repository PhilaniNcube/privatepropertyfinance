/**
 * Indicative calculator settings (Single Source of Truth).
 *
 * Authorised staff can edit every cap, stress rate and ICR threshold in this
 * file (`lib/calculator-config.ts`) without touching any page or form component.
 *
 * Active settings documented for owner (Amy) sign-off:
 * - btlStressRate: 5.5% annual stress rate used only to test rental cover (not a quoted product rate)
 * - btlIcrPersonal: 145% minimum interest cover ratio for personal-name BTL applications
 * - btlIcrLimited: 125% minimum interest cover ratio for UK limited company (SPV) BTL applications
 * - btlLtvCap: 75% maximum LTV for foreign national / expat BTL
 * - bridgingLtvCap: 75% maximum gross LTV for bridging loans (before retained interest/fees)
 * - developmentLtcCap: 85% maximum loan-to-cost (LTC) for development finance
 * - developmentLtgdvCap: 65% maximum loan-to-GDV (LTGDV) for development finance
 * - commercialLtvCap: 70% maximum LTV for commercial mortgages (owner-occupied & investment)
 */
export const CALCULATOR_CONFIG = {
  /** Annual interest rate used to stress-test BTL rental cover, as a percentage (not a quoted rate). */
  btlStressRate: 5.5,
  /** Rental cover (ICR %) required for a personal-name buy-to-let application. */
  btlIcrPersonal: 145,
  /** Rental cover (ICR %) required for a limited company / SPV application. */
  btlIcrLimited: 125,
  /** Maximum loan-to-value (%) on a foreign national buy-to-let. */
  btlLtvCap: 75,
  /** Maximum gross loan-to-value (%) on a bridging loan. */
  bridgingLtvCap: 75,
  /** Maximum loan-to-cost (%) on a development scheme. */
  developmentLtcCap: 85,
  /** Maximum loan-to-GDV (%) on a development scheme. */
  developmentLtgdvCap: 65,
  /** Maximum loan-to-value (%) on a commercial mortgage. */
  commercialLtvCap: 70,
} as const;

export type DealType = "commercial" | "bridging" | "development" | "btl" | "other";

export const DEAL_TYPE_LABELS: Record<DealType, string> = {
  commercial: "Commercial mortgage",
  bridging: "Bridging loan",
  development: "Development finance",
  btl: "Foreign national buy-to-let",
  other: "General enquiry",
};
