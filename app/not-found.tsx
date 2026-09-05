import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, Home, Compass, BookOpen, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-32 bg-[#F8FAFC] flex items-center min-h-[70vh]">
      <Container size="narrow" className="text-center space-y-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#082E5B]/10 text-[#082E5B] border border-[#082E5B]/20 mx-auto">
          <Compass className="w-8 h-8 text-[#082E5B]" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D1A3] uppercase">
            ERROR 404
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#07152B] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            The page you are looking for does not exist or may have been moved to another location.
          </p>
        </div>

        {/* Helpful Navigation Options */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={Home}
            iconPosition="left"
            className="font-bold shadow-sm"
          >
            Taxoryn Home
          </Button>

          <Button
            href="/product"
            variant="outline"
            size="md"
          >
            Explore Product
          </Button>

          <Button
            href="/resources"
            variant="outline"
            size="md"
            icon={BookOpen}
            iconPosition="left"
          >
            Resources & Guides
          </Button>

          <Button
            href={siteConfig.links.joinEarlyAccess}
            variant="secondary"
            size="md"
            icon={ArrowRight}
          >
            Join Early Access
          </Button>
        </div>

        <div className="pt-8 border-t border-slate-200/80 text-xs text-slate-500">
          Need assistance? Reach our support team at{" "}
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="text-[#082E5B] font-semibold underline hover:text-[#00D1A3]"
          >
            {siteConfig.supportEmail}
          </a>
        </div>
      </Container>
    </div>
  );
}
