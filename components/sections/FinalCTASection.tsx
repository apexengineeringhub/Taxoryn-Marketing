import React from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 sm:py-28 bg-[#07152B] relative overflow-hidden text-white border-t border-slate-800">
      {/* Background glow & subtle patterns */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00D1A3]/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D1A3] uppercase inline-block">
            EARLY ACCESS AVAILABLE
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight">
            Ready to simplify your tax practice?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-pretty">
            Bring your clients, team, compliance and documents into one connected workspace. Join forward-thinking tax professionals across India.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={siteConfig.links.joinEarlyAccess}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto px-8 py-3.5 font-bold shadow-lg shadow-[#00D1A3]/25"
            >
              Join Early Access
            </Button>

            <Button
              href={siteConfig.links.bookDemo}
              variant="dark"
              size="lg"
              icon={Calendar}
              iconPosition="left"
              className="w-full sm:w-auto px-8 py-3.5 font-semibold"
            >
              Book a Demo
            </Button>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00D1A3]" />
              Tenant-Aware Data Isolation
            </span>
            <span>•</span>
            <span>Role-Based Permissions</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
