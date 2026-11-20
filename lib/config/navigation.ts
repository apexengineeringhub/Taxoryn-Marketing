import { NavItem } from "@/types";
import { siteConfig } from "./site";

/**
 * Primary header navigation - Clean, focused 4 core items + Sign In + Get Started
 */
export const primaryNavItems: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const mainNavItems: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Product",
    href: "/product",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Security",
    href: siteConfig.links.security,
  },
];

export const footerNavigation = {
  product: {
    title: "Product",
    items: [
      { label: "Platform", href: "/platform" },
      { label: "Web Application", href: siteConfig.appUrl },
      { label: "Android App", href: "/download" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  connect: {
    title: "Connect",
    items: [
      { label: "Early Access", href: siteConfig.links.joinEarlyAccess },
      { label: "Download App", href: "/download" },
      { label: "Marketplace", href: siteConfig.links.marketplace },
      { label: "Learn", href: "/learn" },
      { label: "Contact", href: siteConfig.links.contact },
      { label: "Book a Demo", href: siteConfig.links.bookDemo },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Security & Trust", href: siteConfig.links.security },
      { label: "Privacy Policy", href: siteConfig.links.privacy },
      { label: "Terms of Service", href: siteConfig.links.terms },
    ],
  },
};
