"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const productLinks = [
    { label: t.footer.productLinks.product, href: "/product" },
    { label: t.footer.productLinks.features, href: "/features" },
    { label: t.footer.productLinks.pricing, href: "/pricing" },
  ];

  const connectLinks = [
    { label: t.footer.connectLinks.marketplace, href: siteConfig.links.marketplace },
    { label: t.footer.connectLinks.learn, href: "/learn" },
    { label: t.footer.connectLinks.contact, href: siteConfig.links.contact },
    { label: t.footer.connectLinks.bookDemo, href: siteConfig.links.bookDemo },
  ];

  const companyLinks = [
    { label: t.footer.companyLinks.about, href: "/about" },
    { label: t.footer.companyLinks.security, href: siteConfig.links.security },
    { label: t.footer.companyLinks.privacy, href: siteConfig.links.privacy },
    { label: t.footer.companyLinks.terms, href: siteConfig.links.terms },
  ];

  return (
    <footer className="bg-[#07152B] text-slate-300 border-t border-slate-800/90">
      <Container className="pt-9 pb-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-7 border-b border-slate-800/80">
          {/* Column 1: Brand (5 cols on lg) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
            <div className="space-y-2.5">
              <Logo
                variant="horizontal"
                theme="dark"
                size="md"
                tagline={t.brand.tagline}
                descriptor={t.brand.productDescriptor}
                linkHref="/"
              />
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed pt-0.5">
                {t.footer.brandPromise}
              </p>
            </div>

            {/* Follow Taxoryn Social Links */}
            <div className="pt-2">
              <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2.5">
                {t.footer.followTaxoryn}
              </h3>
              <SocialLinks ariaLabel={t.footer.followTaxoryn} />
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-3">
            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider">
              {t.footer.productHeading}
            </h3>
            <ul className="space-y-2 text-xs">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#00D1A3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-3">
            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider">
              {t.footer.connectHeading}
            </h3>
            <ul className="space-y-2 text-xs">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#00D1A3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-3">
            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider">
              {t.footer.companyHeading}
            </h3>
            <ul className="space-y-2 text-xs">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#00D1A3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Clean & Minimal */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {currentYear} {t.footer.copyright}</p>
          <div className="flex items-center gap-5">
            <Link
              href={siteConfig.links.privacy}
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href={siteConfig.links.terms}
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.terms}
            </Link>
            <Link
              href={siteConfig.links.security}
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.security}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

