import { SiteConfig } from "@/types";

export const APP_URL = "https://app.taxoryn.com";

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
  links: {
    startFree: APP_ROUTES.register,
    login: APP_ROUTES.login,
    bookDemo: "/contact?intent=demo",
    contactSales: "/contact",
    marketplace: "/marketplace",
    security: "/security",
    privacy: "/privacy",
    terms: "/terms",
    contact: "/contact",
  },
};
