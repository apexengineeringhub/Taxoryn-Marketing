import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export type SocialPlatform = "youtube" | "linkedin" | "instagram" | "facebook";

export interface SocialLinkConfig {
  enabled: boolean;
  url: string;
  label?: string;
}

export type SocialLinksConfig = Record<SocialPlatform, SocialLinkConfig>;

export interface SiteConfig {
  name: string;
  tagline: string;
  motto: string;
  description: string;
  url: string;
  appUrl: string;
  supportEmail: string;
  socialLinks: SocialLinksConfig;
  links: {
    joinEarlyAccess: string;
    bookDemo: string;
    startFree: string;
    login: string;
    register: string;
    contactSales: string;
    marketplace: string;
    security: string;
    privacy: string;
    terms: string;
    contact: string;
    learn?: string;
    videos?: string;
    ourStory?: string;
    youtube?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface CapabilityItem {
  id: string;
  title: string;
  shortDescription: string;
  category: "Organize" | "Comply" | "Control" | "Serve" | "Connect" | "Grow";
  iconName: string;
  badge?: string;
}

export interface ProblemPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SolutionPillar {
  pillar: "ORGANIZE" | "COMPLY" | "CONTROL" | "SERVE" | "CONNECT" | "GROW";
  title: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  iconName: string;
}

export interface SegmentSolution {
  id: string;
  title: string;
  badge: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaHref: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
