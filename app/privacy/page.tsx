import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Shield, EyeOff, Lock, CheckCircle2 } from "lucide-react";

export const metadata = constructMetadata({
  title: "Privacy Policy | Taxoryn",
  description: "Taxoryn's commitment to practice data privacy, security, confidentiality, and privacy-conscious measurement.",
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
          description="Practice data privacy, confidentiality, and data minimization principles."
          align="left"
        />

        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* 1. Overview */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#082E5B] font-bold text-base sm:text-lg">
              <Shield className="w-5 h-5 text-[#00D1A3]" />
              <h2>1. Overview & Commitment</h2>
            </div>
            <p>
              Taxoryn (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) provides practice management software for Indian Chartered Accountants, Tax Consultants, and corporate tax advisory teams. We treat your practice data, team activities, and client records with rigorous confidentiality, technical security, and transparent operational boundaries.
            </p>
          </section>

          {/* 2. Practice Data Ownership */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#082E5B] font-bold text-base sm:text-lg">
              <Lock className="w-5 h-5 text-[#00D1A3]" />
              <h2>2. Practice Data Ownership & Sovereignty</h2>
            </div>
            <p>
              Your practice retains ownership of the data you provide to Taxoryn, subject to the applicable terms and agreements. All client directories, entity masters, tax computations, GSTIN records, uploaded return acknowledgments, workpapers, and internal notes entered into Taxoryn remain your firm&apos;s property.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-4 border-l-2 border-[#00D1A3]">
              <li>We never sell, rent, monetize, or broker your practice or client data.</li>
              <li>We never inspect client financial returns for advertising purposes.</li>
              <li>Practice administrators retain the ability to export firm records on request.</li>
            </ul>
          </section>

          {/* 3. Privacy-Conscious Marketing Analytics */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#082E5B] font-bold text-base sm:text-lg">
              <EyeOff className="w-5 h-5 text-[#00D1A3]" />
              <h2>3. Privacy-Conscious Website Analytics</h2>
            </div>
            <p>
              Taxoryn may use lightweight, privacy-conscious analytics on our public marketing website to understand aggregate traffic patterns, evaluate page engagement, and improve website navigation.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
              <p className="font-semibold text-[#07152B]">
                Strict Data Minimization Boundaries:
              </p>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span><strong>No Personal Information:</strong> We do NOT send names, email addresses, phone numbers, or practice names to analytics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span><strong>No Statutory or Financial Data:</strong> We never collect PAN, Aadhaar, GSTIN, computation numbers, bank details, or document contents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span><strong>No Invasive Session Replay:</strong> We do NOT employ keystroke recording, session replay software, or biometric fingerprinting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span><strong>Visitor Consent Choice:</strong> Visitors can decline analytics measurement at any time through our privacy banner.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Information Security */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#082E5B] font-bold text-base sm:text-lg">
              <Shield className="w-5 h-5 text-[#00D1A3]" />
              <h2>4. Information Security & Technical Safeguards</h2>
            </div>
            <p>
              We implement industry-standard safeguards including HTTPS encryption in transit, logical tenant isolation, role-based permission scoping, token-authenticated document access, and auditable activity logs.
            </p>
          </section>

          {/* 5. Contact Information */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#082E5B] font-bold text-base sm:text-lg">
              <Shield className="w-5 h-5 text-[#00D1A3]" />
              <h2>5. Inquiries & Contact</h2>
            </div>
            <p>
              For privacy, data protection, or account inquiries, please reach out to our team at{" "}
              <a
                href="mailto:support@taxoryn.com"
                className="text-[#082E5B] font-semibold underline hover:text-[#00D1A3]"
              >
                support@taxoryn.com
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
