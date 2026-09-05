import React from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { ProductPreview } from "@/components/marketing/ProductPreview";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, Calendar, CheckCircle2, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EDF4FA]/60 to-[#F8FAFC]">
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-75 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Positioning Category Tag */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="navy" size="md">
              TAX PRACTICE MANAGEMENT
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#07152B] tracking-tight leading-[1.1] text-balance">
            Run Your Tax Practice. <br />
            <span className="text-[#082E5B] underline decoration-[#00D1A3] decoration-4 underline-offset-8">
              Not Your Spreadsheets.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed text-pretty">
            Manage clients, teams, GST, ITR, TDS, compliance, documents and client communication in one connected workspace.
          </p>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              href={siteConfig.links.joinEarlyAccess}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold shadow-md shadow-[#00D1A3]/20"
            >
              Join Early Access
            </Button>

            <Button
              href={siteConfig.links.bookDemo}
              variant="outline"
              size="lg"
              icon={Calendar}
              iconPosition="left"
              className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold"
            >
              Book a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#64748B] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D1A3]" />
              Purpose-Built for Indian Tax Practices
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#082E5B]" />
              Tenant-Aware Data Isolation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D1A3]" />
              Cloud-Native Workspace
            </span>
          </div>
        </div>

        {/* Product Visual Mockup Component */}
        <div className="mt-12 sm:mt-16">
          <ProductPreview />
        </div>
      </Container>
    </section>
  );
}
