import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata = constructMetadata({
  title: "Privacy Policy | Taxoryn",
  description: "Taxoryn's commitment to practice data privacy, security, and confidentiality.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container size="narrow">
        <SectionHeading
          badge="Legal & Trust"
          badgeVariant="navy"
          title="Privacy Policy"
          description="Last updated: September 2026"
          align="left"
        />

        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#07152B]">1. Overview & Commitment</h2>
            <p>
              Taxoryn (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the practice management platform and marketing website. We treat your practice data and your clients&apos; tax records with rigorous confidentiality and strict access controls.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#07152B]">2. Practice Data Ownership</h2>
            <p>
              All client profiles, tax computations, GSTIN records, uploaded invoices, and compliance notes entered into Taxoryn remain the exclusive property of your tax practice. We do not sell, rent, or monetize your practice or client data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#07152B]">3. Information Security</h2>
            <p>
              Taxoryn applies security controls designed to protect customer accounts, business data and documents, including access controls, tenant isolation and secure data transmission.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#07152B]">4. Contact Us</h2>
            <p>
              For privacy-related inquiries, please contact our data governance team at support@taxoryn.com.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
