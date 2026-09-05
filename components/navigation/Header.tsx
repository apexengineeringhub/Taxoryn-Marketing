import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Logo } from "./Logo";
import { Button } from "@/components/common/Button";
import { MobileNav } from "./MobileNav";
import { mainNavItems } from "@/lib/config/navigation";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, Lock } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]/80 transition-all">
      <Container className="flex items-center justify-between h-20">
        <div className="flex items-center gap-8">
          <Logo variant="horizontal" size="md" />
          
          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[#475569] hover:text-[#082E5B] hover:bg-slate-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href={siteConfig.links.login}
            variant="ghost"
            size="md"
            icon={Lock}
            iconPosition="left"
            className="text-[#0F172A] font-semibold hover:text-[#082E5B]"
            external
          >
            Login
          </Button>

          <Button
            href={siteConfig.links.startFree}
            variant="primary"
            size="md"
            icon={ArrowRight}
            className="font-bold shadow-sm"
            external
          >
            Start Free
          </Button>
        </div>

        {/* Mobile Navigation Drawer Trigger */}
        <MobileNav />
      </Container>
    </header>
  );
}
