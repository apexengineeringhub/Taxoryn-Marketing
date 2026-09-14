import { SiteConfig } from "@/types";
import { brandConfig } from "./brand";

export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL || "https://app.taxoryn.com"
).replace(/\/$/, "");

export const APP_ROUTES = {
  login: `${APP_URL}/login`,
  register: `${APP_URL}/register`,
} as const;

export const siteConfig: SiteConfig = {
  name: brandConfig.brandName,
  tagline: brandConfig.tagline,
  motto: brandConfig.productDescriptor,
  description:
    `${brandConfig.brandPromise} Built for Indian tax professionals, CA firms, tax consultants, and their clients.`,
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
    learn: "/learn",
    videos: "/videos",
    ourStory: "/about",
    youtube: "https://www.youtube.com/@taxoryn",
    linkedin: "https://www.linkedin.com/company/taxoryn",
  },
};

