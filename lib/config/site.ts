import { SiteConfig, SocialPlatform, SocialLinksConfig } from "@/types";
import { brandConfig } from "./brand";

export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL || "https://app.taxoryn.com"
).replace(/\/$/, "");

export const APP_ROUTES = {
  login: `${APP_URL}/login`,
  register: `${APP_URL}/register`,
} as const;

export const YOUTUBE_URL =
  process.env.NEXT_PUBLIC_TAXORYN_YOUTUBE_URL || "https://www.youtube.com/@taxoryn";

export const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_TAXORYN_LINKEDIN_URL || "https://www.linkedin.com/company/taxoryn";

export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_TAXORYN_INSTAGRAM_URL || "";

export const FACEBOOK_URL =
  process.env.NEXT_PUBLIC_TAXORYN_FACEBOOK_URL || "";

export const socialLinksConfig: SocialLinksConfig = {
  youtube: {
    enabled:
      process.env.NEXT_PUBLIC_TAXORYN_YOUTUBE_ENABLED !== "false" &&
      Boolean(YOUTUBE_URL && YOUTUBE_URL.trim() !== "" && YOUTUBE_URL.trim() !== "#"),
    url: YOUTUBE_URL,
    label: "YouTube",
  },
  linkedin: {
    enabled:
      process.env.NEXT_PUBLIC_TAXORYN_LINKEDIN_ENABLED !== "false" &&
      Boolean(LINKEDIN_URL && LINKEDIN_URL.trim() !== "" && LINKEDIN_URL.trim() !== "#"),
    url: LINKEDIN_URL,
    label: "LinkedIn",
  },
  instagram: {
    enabled:
      process.env.NEXT_PUBLIC_TAXORYN_INSTAGRAM_ENABLED === "true" ||
      Boolean(
        process.env.NEXT_PUBLIC_TAXORYN_INSTAGRAM_ENABLED !== "false" &&
        INSTAGRAM_URL &&
        INSTAGRAM_URL.trim() !== "" &&
        INSTAGRAM_URL.trim() !== "#"
      ),
    url: INSTAGRAM_URL,
    label: "Instagram",
  },
  facebook: {
    enabled:
      process.env.NEXT_PUBLIC_TAXORYN_FACEBOOK_ENABLED === "true" ||
      Boolean(
        process.env.NEXT_PUBLIC_TAXORYN_FACEBOOK_ENABLED !== "false" &&
        FACEBOOK_URL &&
        FACEBOOK_URL.trim() !== "" &&
        FACEBOOK_URL.trim() !== "#"
      ),
    url: FACEBOOK_URL,
    label: "Facebook",
  },
};

/**
 * Validates whether a social URL is non-empty, not a "#" placeholder, and a valid web URL.
 */
export function isValidSocialUrl(url?: string): boolean {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  if (!trimmed || trimmed === "#" || trimmed.startsWith("mailto:")) return false;
  return trimmed.startsWith("https://") || trimmed.startsWith("http://");
}

export interface ActiveSocialLink {
  id: SocialPlatform;
  url: string;
  name: string;
}

/**
 * Returns an ordered array of active and valid social links.
 */
export function getActiveSocialLinks(
  config: SocialLinksConfig = socialLinksConfig
): ActiveSocialLink[] {
  const platforms: SocialPlatform[] = ["youtube", "linkedin", "instagram", "facebook"];
  const active: ActiveSocialLink[] = [];

  for (const platform of platforms) {
    const item = config[platform];
    if (item && item.enabled && isValidSocialUrl(item.url)) {
      active.push({
        id: platform,
        url: item.url.trim(),
        name:
          item.label ||
          (platform === "youtube"
            ? "YouTube"
            : platform === "linkedin"
            ? "LinkedIn"
            : platform === "instagram"
            ? "Instagram"
            : "Facebook"),
      });
    }
  }

  return active;
}

export const siteConfig: SiteConfig = {
  name: brandConfig.brandName,
  tagline: brandConfig.tagline,
  motto: brandConfig.productDescriptor,
  description:
    `${brandConfig.brandPromise} Built for Indian tax professionals, CA firms, tax consultants, and their clients.`,
  url: "https://taxoryn.com",
  appUrl: APP_URL,
  supportEmail: "support@taxoryn.com",
  socialLinks: socialLinksConfig,
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
    youtube: YOUTUBE_URL,
    linkedin: LINKEDIN_URL,
    instagram: INSTAGRAM_URL,
    facebook: FACEBOOK_URL,
  },
};

