import { withBotId } from "botid/next/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "12mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Old service URLs
      {
        source: "/services/international-clients",
        destination: "/foreign-national-buy-to-let-mortgages",
        permanent: true,
      },
      {
        source: "/services/bridging-finance",
        destination: "/bridging-loans",
        permanent: true,
      },
      {
        source: "/services/commercial-mortgages",
        destination: "/commercial-mortgages",
        permanent: true,
      },
      {
        source: "/services/development-funding",
        destination: "/development-finance",
        permanent: true,
      },
      {
        source: "/services/buy-to-let-mortgages",
        destination: "/foreign-national-buy-to-let-mortgages",
        permanent: true,
      },
      {
        source: "/services/care-home-finance",
        destination: "/commercial-mortgages",
        permanent: true,
      },
      {
        source: "/services/property-sourcing",
        destination: "/",
        permanent: true,
      },
      // Other retired URLs
      { source: "/projects", destination: "/case-studies", permanent: true },
      { source: "/blogs", destination: "/", permanent: true },
      { source: "/blogs/:slug*", destination: "/", permanent: true },
      {
        source: "/resources/privacy-policy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/resources/calculator",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/resources/:path*",
        destination: "/contact-us",
        permanent: true,
      },
      { source: "/get-a-quote", destination: "/contact-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
    ];
  },
};

export default withBotId(nextConfig);
