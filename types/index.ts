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

export interface SiteConfig {
  name: string;
  tagline: string;
  motto: string;
  description: string;
  url: string;
  appUrl: string;
  links: {
    startFree: string;
    login: string;
    bookDemo: string;
    contactSales: string;
    marketplace: string;
    security: string;
    privacy: string;
    terms: string;
    contact: string;
  };
}

export interface CapabilityItem {
  id: string;
  title: string;
  shortDescription: string;
  category: "Organize" | "Control" | "Serve" | "Grow";
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
  pillar: "ORGANIZE" | "CONTROL" | "SERVE" | "GROW";
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
