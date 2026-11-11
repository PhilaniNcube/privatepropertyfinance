type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const gtmPush = (event: DataLayerEvent) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
};

export const trackCalculatorStart = (dealType: string) => {
  gtmPush({
    event: "calculator_start",
    deal_type: dealType,
  });
};

export const trackGenerateLead = (dealType: string, source: string) => {
  gtmPush({
    event: "generate_lead",
    deal_type: dealType,
    lead_source: source,
    currency: "GBP",
    value: 1,
  });
};

export const trackContactClick = (method: "phone" | "email" | "whatsapp") => {
  gtmPush({
    event: "contact_click",
    contact_method: method,
  });
};
