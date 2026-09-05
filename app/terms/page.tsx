import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata = constructMetadata({
  title: "Terms of Service | Taxoryn",
  description: "Terms and conditions governing the use of Taxoryn software and marketing services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container size="narrow">
        <SectionHeading
          badge="Legal & Terms"
          badgeVariant="navy"
          title="Terms of Service"
          description="Terms and conditions governing the use of Taxoryn practice management and marketing services."
          align="left"
        />

        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#07152B]">1. Acceptance of Terms</h2>
            <p>
              By accessing the Taxoryn marketing website or creating an account on the Taxoryn practice management application, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#07152B]">2. Use of Platform</h2>
            <p>
              Taxoryn provides practice management tooling for tax professionals. You are responsible for ensuring that all tax calculations, return filings, and client communications prepared using the platform comply with applicable Indian tax laws and professional standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#07152B]">3. Subscription & Termination</h2>
            <p>
              Subscriptions may be started, upgraded, or terminated as outlined in your practice plan. You maintain full rights to export your practice records and client document repositories upon termination.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
