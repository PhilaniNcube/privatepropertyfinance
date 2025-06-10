// Google Tag Manager utility functions for tracking form submissions

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if it doesn't exist
export const initializeDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
};

// Generic function to push events to dataLayer
export const gtmPush = (event: Record<string, any>) => {
  if (typeof window !== "undefined") {
    initializeDataLayer();
    window.dataLayer.push(event);
  }
};

// Form submission tracking events
export const trackFormSubmission = {
  // Contact Us Form
  contactUs: (formData: { name: string; email: string }) => {
    gtmPush({
      event: "form_submission",
      form_type: "contact_us",
      form_name: "Contact Us Form",
      user_name: formData.name,
      user_email: formData.email,
      timestamp: new Date().toISOString(),
    });
  },

  // Get A Quote Form
  getAQuote: (formData: {
    name: string;
    email: string;
    propertyValue: string;
    loanRequired: string;
  }) => {
    gtmPush({
      event: "form_submission",
      form_type: "get_a_quote",
      form_name: "Get A Quote Form",
      user_name: formData.name,
      user_email: formData.email,
      property_value: formData.propertyValue,
      loan_required: formData.loanRequired,
      timestamp: new Date().toISOString(),
    });
  },

  // Buy-to-Let Calculator
  buyToLet: (formData: {
    name: string;
    email: string;
    propertyValue: number;
    propertyType: string;
    location: string;
  }) => {
    gtmPush({
      event: "form_submission",
      form_type: "buy_to_let_calculator",
      form_name: "Buy-to-Let Property Calculator",
      user_name: formData.name,
      user_email: formData.email,
      property_value: formData.propertyValue,
      property_type: formData.propertyType,
      location: formData.location,
      timestamp: new Date().toISOString(),
    });
  },

  // Bridging Finance Calculator
  bridgingFinance: (formData: {
    name: string;
    email: string;
    estimatedValue: number;
    loanAmount: number;
    location: string;
  }) => {
    gtmPush({
      event: "form_submission",
      form_type: "bridging_finance_calculator",
      form_name: "Bridging Finance Calculator",
      user_name: formData.name,
      user_email: formData.email,
      estimated_value: formData.estimatedValue,
      loan_amount: formData.loanAmount,
      location: formData.location,
      timestamp: new Date().toISOString(),
    });
  },

  // Development Finance Calculator
  developmentFinance: (formData: {
    fullName: string;
    email: string;
    loanRequired: number;
    gdv: number;
    location: string;
  }) => {
    gtmPush({
      event: "form_submission",
      form_type: "development_finance_calculator",
      form_name: "Development Finance Calculator",
      user_name: formData.fullName,
      user_email: formData.email,
      loan_required: formData.loanRequired,
      gdv: formData.gdv,
      location: formData.location,
      timestamp: new Date().toISOString(),
    });
  },

  // Commercial Loan Calculator
  commercialLoan: (formData: {
    fullName: string;
    email: string;
    loanRequired: number;
    companyName: string;
    loanReason: string;
  }) => {
    gtmPush({
      event: "form_submission",
      form_type: "commercial_loan_calculator",
      form_name: "Commercial Loan Calculator",
      user_name: formData.fullName,
      user_email: formData.email,
      loan_required: formData.loanRequired,
      company_name: formData.companyName,
      loan_reason: formData.loanReason,
      timestamp: new Date().toISOString(),
    });
  },

  // Mortgage Loan Calculator
  mortgageLoan: (formData: {
    name: string;
    email: string;
    propertyValue: number;
    loanValue: number;
    loanPurpose: string;
  }) => {
    gtmPush({
      event: "form_submission",
      form_type: "mortgage_loan_calculator",
      form_name: "Mortgage Loan Calculator",
      user_name: formData.name,
      user_email: formData.email,
      property_value: formData.propertyValue,
      loan_value: formData.loanValue,
      loan_purpose: formData.loanPurpose,
      timestamp: new Date().toISOString(),
    });
  },
};

// Additional tracking for calculator interactions (before form submission)
export const trackCalculatorUsage = {
  // Track when user starts using a calculator
  calculatorStart: (calculatorType: string) => {
    gtmPush({
      event: "calculator_interaction",
      action: "calculator_start",
      calculator_type: calculatorType,
      timestamp: new Date().toISOString(),
    });
  },

  // Track when user completes calculation (before submitting form)
  calculationComplete: (
    calculatorType: string,
    calculationData: Record<string, any>
  ) => {
    gtmPush({
      event: "calculator_interaction",
      action: "calculation_complete",
      calculator_type: calculatorType,
      calculation_data: calculationData,
      timestamp: new Date().toISOString(),
    });
  },
};
