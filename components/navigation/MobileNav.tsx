"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/common/Button";
import { mainNavItems } from "@/lib/config/navigation";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/components/common/Container";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

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
          // Backward tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Forward tab
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
      // Move focus into the drawer
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
        aria-label={isOpen ? "Close main navigation" : "Open main navigation"}
        aria-expanded={isOpen}
        className="p-2 -mr-2 text-[#0F172A] hover:text-[#082E5B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded-lg transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#07152B]/60 backdrop-blur-sm transition-opacity"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {/* Focus-trapped Drawer */}
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
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <Logo variant="horizontal" size="sm" linkHref="/" onClick={handleClose} />
          <button
            ref={closeBtnRef}
            type="button"
            onClick={handleClose}
            aria-label="Close navigation"
            className="p-2 -mr-2 text-slate-500 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
            Navigation
          </p>
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className={cn(
                  "flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors",
                  isActive
                    ? "bg-[#082E5B]/5 text-[#082E5B] font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            );
          })}
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 px-1">
            <ShieldCheck className="w-4 h-4 text-[#00D1A3]" />
            <span>Tenant-Aware Practice Workspace</span>
          </div>

          <Button
            href={siteConfig.links.startFree}
            variant="primary"
            size="lg"
            className="w-full justify-center shadow-md font-bold"
          >
            Join Early Access
          </Button>

          <Button
            href={siteConfig.links.login}
            variant="outline"
            size="md"
            className="w-full justify-center"
          >
            Practice / Client Login
          </Button>
        </div>
      </div>
    </div>
  );
}
