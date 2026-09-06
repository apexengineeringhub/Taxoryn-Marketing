import { SiteConfig } from "@/types";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.taxoryn.com";

export const APP_ROUTES = {
  login: `${APP_URL}/login`,
  register: `${APP_URL}/register`,
} as const;

export const siteConfig: SiteConfig = {
  name: "Taxoryn",
  tagline: "Tax Practice Management Software for Indian Tax Professionals",
  motto: "SIMPLIFYING TAX PRACTICE MANAGEMENT",
  description:
    "Taxoryn helps tax professionals manage clients, teams, GST, ITR, TDS, compliance, documents and practice operations in one connected workspace.",
  url: "https://taxoryn.com",
  appUrl: APP_URL,
  supportEmail: "support@taxoryn.com",
  links: {
    joinEarlyAccess: "/early-access",
    bookDemo: "/book-demo",
    startFree: "/early-access",
    login: APP_ROUTES.login,
    register: APP_ROUTES.register,
    contactSales: "/book-demo",
    marketplace: "/marketplace",
    security: "/security",
    privacy: "/privacy",
    terms: "/terms",
    contact: "/contact",
  },
};
