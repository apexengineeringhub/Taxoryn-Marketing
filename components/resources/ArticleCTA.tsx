import React from "react";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { CtaType } from "@/types/content";
import { ArrowRight, Calendar, ShoppingBag, ShieldCheck } from "lucide-react";

interface ArticleCTAProps {
  ctaType: CtaType;
  title?: string;
  description?: string;
}

export function ArticleCTA({
  ctaType,
  title,
  description,
}: ArticleCTAProps) {
  if (ctaType === "marketplace") {
    return (
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#07152B] to-[#082E5B] text-white space-y-4 my-10 shadow-lg border border-slate-700">
        <span className="text-xs font-mono font-bold tracking-widest text-[#00D1A3] uppercase inline-block">
          TAXORYN MARKETPLACE
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {title || "Looking for a Qualified Tax Practitioner?"}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {description ||
            "Discover qualified Chartered Accountants and tax consultants across India on the Taxoryn Marketplace."}
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Button
            href={siteConfig.links.marketplace}
            variant="primary"
            size="md"
            icon={ShoppingBag}
            iconPosition="left"
            className="font-bold shadow-md shadow-[#00D1A3]/20"
          >
            Explore Marketplace
          </Button>
          <Button
            href={siteConfig.links.joinEarlyAccess}
            variant="dark"
            size="md"
            icon={ArrowRight}
          >
            Join as a Tax Practice
          </Button>
        </div>
      </div>
    );
  }

  // Default: Practice-focused CTA
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#07152B] text-white space-y-4 my-10 shadow-xl border border-slate-800">
      <span className="text-xs font-mono font-bold tracking-widest text-[#00D1A3] uppercase inline-block">
        TAX PRACTICE WORKSPACE
      </span>
      <h3 className="text-xl sm:text-2xl font-bold text-white">
        {title || "Managing Practice Compliance Across Spreadsheets and Chats?"}
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
        {description ||
          "Taxoryn connects your clients, review queues, statutory calendars, and secure document repositories into one intuitive cloud workspace."}
      </p>
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <Button
          href={siteConfig.links.joinEarlyAccess}
          variant="primary"
          size="md"
          icon={ArrowRight}
          className="font-bold shadow-md shadow-[#00D1A3]/20"
        >
          Join Early Access
        </Button>
        <Button
          href={siteConfig.links.bookDemo}
          variant="dark"
          size="md"
          icon={Calendar}
          iconPosition="left"
        >
          Book a Demo
        </Button>
      </div>
      <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
        <ShieldCheck className="w-4 h-4 text-[#00D1A3]" />
        <span>Tenant-aware data isolation • Role permissions • Cloud-native workspace</span>
      </div>
    </div>
  );
}
