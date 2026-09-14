import { NavItem } from "@/types";
import { siteConfig } from "./site";

export const mainNavItems: NavItem[] = [
  {
    label: "Product",
    href: "/product",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Marketplace",
    href: siteConfig.links.marketplace,
  },
  {
    label: "Learn",
    href: "/learn",
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
      { label: "Product", href: "/product" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  connect: {
    title: "Connect",
    items: [
      { label: "Marketplace", href: siteConfig.links.marketplace },
      { label: "Learn", href: "/learn" },
      { label: "Contact", href: siteConfig.links.contact },
      { label: "Book a Demo", href: siteConfig.links.bookDemo },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Security", href: siteConfig.links.security },
      { label: "Privacy", href: siteConfig.links.privacy },
      { label: "Terms", href: siteConfig.links.terms },
    ],
  },
};

