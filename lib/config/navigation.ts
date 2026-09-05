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
    label: "Features",
    href: "/features",
  },
  {
    label: "Marketplace",
    href: siteConfig.links.marketplace,
  },
  {
    label: "Resources",
    href: "/resources",
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
      { label: "Product Overview", href: "/product" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Marketplace", href: siteConfig.links.marketplace },
    ],
  },
  solutions: {
    title: "Solutions",
    items: [
      { label: "Solo Practitioner", href: "/solutions/solo-practitioner" },
      { label: "Small Tax Firm", href: "/solutions/small-firm" },
      { label: "Growing Practice", href: "/solutions/growing-practice" },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { label: "Resources Hub", href: "/resources" },
      { label: "GST Practice", href: "/features#gst" },
      { label: "ITR Filing", href: "/features#itr" },
      { label: "TDS Management", href: "/features#tds" },
      { label: "Tax Guides", href: "/resources#guides" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: siteConfig.links.contact },
      { label: "Book a Demo", href: siteConfig.links.bookDemo },
    ],
  },
  trust: {
    title: "Trust & Legal",
    items: [
      { label: "Security Architecture", href: siteConfig.links.security },
      { label: "Privacy Policy", href: siteConfig.links.privacy },
      { label: "Terms of Service", href: siteConfig.links.terms },
    ],
  },
};
