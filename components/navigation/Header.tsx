"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig, androidConfig } from "@/lib/config/site";
import { ArrowRight, Smartphone } from "lucide-react";

export function Header() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.platform || "Platform", href: "/platform" },
    { label: t.nav.howItWorks || "How It Works", href: "/how-it-works" },
    { label: t.nav.about || "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <Container
        size="wide"
        className="flex items-center justify-between h-16 sm:h-[68px]"
      >
        {/* 1. LEFT: Brand Lockup */}
        <div className="flex items-center shrink-0">
          <Logo
            variant="horizontal"
            size="md"
            tagline={t.brand.tagline}
            descriptor={t.brand.productDescriptor}
            hideSubtextBelow="xl"
          />
        </div>

        {/* 2. CENTER: Main Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 mx-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#07152B] hover:bg-slate-100/80 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3]"
            >
              {item.label}
            </Link>
          ))}
          {androidConfig.enabled && (
            <Link
              href="/download"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#07152B] hover:bg-slate-100/80 rounded-lg transition-colors whitespace-nowrap"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#009E77]" />
              <span>{t.nav.download || "App"}</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                APK
              </span>
            </Link>
          )}
        </nav>

        {/* 3. RIGHT: Action CTAs & Language Selector */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
          {/* Compact Language Switcher */}
          <LanguageSwitcher variant="header" />

          {/* Secondary Action: Login */}
          <a
            href={siteConfig.links.login}
            className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs xl:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 hover:text-[#07152B] rounded-lg border border-slate-200 hover:border-slate-300 shadow-2xs transition-all whitespace-nowrap"
          >
            {t.nav.login}
          </a>

          {/* Primary Action: Get Started */}
          <a
            href={siteConfig.links.joinEarlyAccess}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-xs xl:text-sm font-bold text-[#07152B] bg-[#00D1A3] hover:bg-[#00C498] rounded-lg shadow-sm transition-all duration-150 active:scale-[0.99] whitespace-nowrap"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>

        {/* Mobile Navigation Drawer Trigger */}
        <MobileNav />
      </Container>
    </header>
  );
}
