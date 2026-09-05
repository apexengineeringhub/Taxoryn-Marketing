import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Logo } from "./Logo";
import { footerNavigation } from "@/lib/config/navigation";
import { siteConfig } from "@/lib/config/site";
import { Shield, Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07152B] text-slate-300 border-t border-slate-800">
      <Container className="pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 xl:gap-12 pb-16 border-b border-slate-800">
          {/* Brand & Motto Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <Logo variant="horizontal" theme="dark" size="md" linkHref="/" />
            <p className="text-xs font-bold tracking-widest text-[#00D1A3] uppercase">
              {siteConfig.motto}
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Taxoryn is the all-in-one tax practice management SaaS built specifically for Indian Chartered Accountants, Tax Consultants, and corporate tax teams.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-[#00D1A3]" />
              <span>Multi-tenant practice data isolation & role-based access</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {footerNavigation.product.title}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.product.items.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#00D1A3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {footerNavigation.solutions.title}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.solutions.items.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#00D1A3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {footerNavigation.resources.title}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.resources.items.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#00D1A3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Trust */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {footerNavigation.company.title} & {footerNavigation.trust.title}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.company.items.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#00D1A3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerNavigation.trust.items.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#00D1A3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Taxoryn Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href={siteConfig.links.privacy}
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href={siteConfig.links.terms}
              className="hover:text-slate-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href={siteConfig.links.security}
              className="hover:text-slate-400 transition-colors"
            >
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
