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
    <footer className="relative bg-white text-slate-600 border-t border-slate-200">
      {/* Subtle 1px Top Gradient Transition Accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D1A3]/30 to-transparent pointer-events-none" />

      <Container className="pt-10 pb-6 sm:pt-11 sm:pb-7 lg:pt-12 lg:pb-8">
        {/* Main Content Grid: Target ~220-280px Content-Driven Height on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 pb-7 sm:pb-8 border-b border-slate-200/90">
          {/* Column 1: Brand & Socials (~35-40% on Desktop) */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-5 space-y-3.5">
            <div className="space-y-2">
              <Logo
                variant="horizontal"
                theme="light"
                size="md"
                tagline={t.brand.tagline}
                descriptor={t.brand.productDescriptor}
                linkHref="/"
              />
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
                {t.footer.brandPromise}
              </p>
            </div>

            {/* Follow Taxoryn Social Links */}
            <div className="pt-1.5 space-y-2">
              <h3 className="text-[11px] sm:text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                {t.footer.followTaxoryn}
              </h3>
              <SocialLinks variant="footer" ariaLabel={t.footer.followTaxoryn} />
            </div>
          </div>

          {/* Column 2: Product (~16-18%) */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#07152B] uppercase tracking-wider">
              {t.footer.productHeading}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[#009E77] focus-visible:text-[#009E77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded-xs transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect (~20-22%) */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#07152B] uppercase tracking-wider">
              {t.footer.connectHeading}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[#009E77] focus-visible:text-[#009E77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded-xs transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company (~16-18%) */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#07152B] uppercase tracking-wider">
              {t.footer.companyHeading}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[#009E77] focus-visible:text-[#009E77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded-xs transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar: ~56-64px Height, Single Row on Desktop, Clean Separators */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] text-slate-500">
          <p>© {currentYear} {t.footer.copyright}</p>
          <div className="flex items-center gap-4 sm:gap-5 font-medium">
            <Link
              href={siteConfig.links.privacy}
              className="hover:text-[#009E77] focus-visible:text-[#009E77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded-xs transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <span className="text-slate-300 select-none" aria-hidden="true">|</span>
            <Link
              href={siteConfig.links.terms}
              className="hover:text-[#009E77] focus-visible:text-[#009E77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded-xs transition-colors"
            >
              {t.footer.terms}
            </Link>
            <span className="text-slate-300 select-none" aria-hidden="true">|</span>
            <Link
              href={siteConfig.links.security}
              className="hover:text-[#009E77] focus-visible:text-[#009E77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded-xs transition-colors"
            >
              {t.footer.security}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
