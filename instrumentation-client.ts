import { initBotId } from "botid/client/core";

// Server actions post back to the page they were submitted from, so every
// page with an enquiry form needs bot protection.
initBotId({
  protect: [
    { path: "/contact-us", method: "POST" },
    { path: "/services", method: "POST" },
    { path: "/commercial-mortgages", method: "POST" },
    { path: "/bridging-loans", method: "POST" },
    { path: "/development-finance", method: "POST" },
    { path: "/foreign-national-buy-to-let-mortgages", method: "POST" },
    { path: "/luxury-asset-finance", method: "POST" },
  ],
});
