"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck, Smartphone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/common/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig, androidConfig } from "@/lib/config/site";
import { cn } from "@/components/common/Container";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.platform || "Platform", href: "/platform" },
    { label: t.nav.howItWorks || "How It Works", href: "/how-it-works" },
    { label: t.nav.about || "About", href: "/about" },
    { label: "Android App", href: "/download", badge: "APK" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.security, href: siteConfig.links.security },
  ];

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle focus trapping, Escape key, and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? t.nav.close : t.nav.menu}
        aria-expanded={isOpen}
        className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3]"
      >
        <span className="sr-only">{isOpen ? t.nav.close : t.nav.menu}</span>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center gap-4">
          <Logo
            variant="horizontal"
            size="sm"
            tagline={t.brand.tagline}
            descriptor={t.brand.productDescriptor}
            linkHref="/"
            onClick={handleClose}
            className="min-w-0 flex-1"
          />
          <button
            ref={closeBtnRef}
            type="button"
            onClick={handleClose}
            aria-label={t.nav.close}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 text-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {/* Mobile Language Switcher */}
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
              {t.nav.language}
            </p>
            <LanguageSwitcher variant="mobile" />
          </div>

          <div className="pt-2">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
              {t.nav.menu}
            </p>
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleClose}
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-[#082E5B]/5 text-[#082E5B]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.badge && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#00D1A3]/15 text-[#008766]">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 px-1">
            <ShieldCheck className="w-4 h-4 text-[#00D1A3]" />
            <span>Tax Practice Management Platform</span>
          </div>

          <Button
            href={siteConfig.links.joinEarlyAccess}
            variant="primary"
            size="lg"
            className="w-full justify-center shadow-md font-bold"
          >
            {t.nav.getStarted}
          </Button>

          <Button
            href={siteConfig.links.login}
            variant="ghost"
            size="md"
            className="w-full justify-center font-bold text-[#082E5B] hover:bg-slate-100"
          >
            {t.nav.loginToPractice}
          </Button>
        </div>
      </div>
    </div>
  );
}
