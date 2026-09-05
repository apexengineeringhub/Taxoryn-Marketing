"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { siteConfig } from "@/lib/config/site";
import {
  Send,
  Mail,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

interface EarlyAccessFormState {
  fullName: string;
  email: string;
  firmName: string;
  phone: string;
  city: string;
  practiceSize: string;
  primaryInterest: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  firmName?: string;
  phone?: string;
}

const PRACTICE_SIZES = [
  "Solo Practitioner",
  "2–10 Team Members",
  "11–25 Team Members",
  "26–50 Team Members",
  "50+ Team Members",
];

const PRIMARY_INTERESTS = [
  "Practice Management",
  "GST Workflows & 2B/3B Reconciliation",
  "ITR Computation & Pipelines",
  "TDS Tracking & Generation",
  "Client Portal & Document Requests",
  "Secure Document Repository",
  "Taxoryn Marketplace Practice Profile",
  "Other",
];

function EarlyAccessContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<EarlyAccessFormState>({
    fullName: "",
    email: "",
    firmName: "",
    phone: "",
    city: "",
    practiceSize: "Solo Practitioner",
    primaryInterest: "Practice Management",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrepared, setIsPrepared] = useState(false);

  // Capture optional campaign parameters safely
  const source = searchParams?.get("source") || "";
  const utmSource = searchParams?.get("utm_source") || "";
  const utmMedium = searchParams?.get("utm_medium") || "";
  const utmCampaign = searchParams?.get("utm_campaign") || "";
  const utmContent = searchParams?.get("utm_content") || "";
  const utmTerm = searchParams?.get("utm_term") || "";

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid work email address.";
    }

    if (!formData.firmName.trim()) {
      newErrors.firmName = "Please enter your practice or firm name.";
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
      if (!phoneRegex.test(formData.phone.trim().replace(/\s+/g, ""))) {
        newErrors.phone = "Please enter a valid contact phone number.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getCleanCampaignContext = (): string => {
    const contextLines: string[] = [];
    if (source) contextLines.push(`Source: ${source.replace(/[\r\n]/g, " ")}`);
    if (utmSource) contextLines.push(`UTM Source: ${utmSource.replace(/[\r\n]/g, " ")}`);
    if (utmMedium) contextLines.push(`UTM Medium: ${utmMedium.replace(/[\r\n]/g, " ")}`);
    if (utmCampaign) contextLines.push(`UTM Campaign: ${utmCampaign.replace(/[\r\n]/g, " ")}`);
    if (utmContent) contextLines.push(`UTM Content: ${utmContent.replace(/[\r\n]/g, " ")}`);
    if (utmTerm) contextLines.push(`UTM Term: ${utmTerm.replace(/[\r\n]/g, " ")}`);
    return contextLines.join("\n");
  };

  const constructMailtoUrl = () => {
    const subject = `Taxoryn Early Access Application - ${formData.firmName}`;
    const campaignCtx = getCleanCampaignContext();

    const bodyLines = [
      `TAXORYN EARLY ACCESS INQUIRY`,
      `---------------------------------`,
      `Full Name: ${formData.fullName}`,
      `Work Email: ${formData.email}`,
      `Practice / Firm: ${formData.firmName}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `City: ${formData.city || "Not provided"}`,
      `Practice Size: ${formData.practiceSize}`,
      `Primary Interest: ${formData.primaryInterest}`,
      ``,
    ];

    if (campaignCtx) {
      bodyLines.push(`Campaign Context:`, campaignCtx, ``);
    }

    bodyLines.push(
      `---`,
      `Submitted via Taxoryn Marketing Website (https://taxoryn.com/early-access)`
    );

    return `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isPrepared) return;

    if (validate()) {
      setIsSubmitting(true);
      const mailtoUrl = constructMailtoUrl();

      if (typeof window !== "undefined") {
        window.location.href = mailtoUrl;
      }

      setIsSubmitting(false);
      setIsPrepared(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Early Access Onboarding"
          badgeVariant="teal"
          title="Join Taxoryn Early Access"
          description="Be among the first practices to experience a connected workspace for clients, compliance, documents and practice growth."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Context & Trust Column */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="default" padding="lg" className="bg-[#07152B] text-white space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D1A3] uppercase inline-block">
                PRACTICE PROGRAM
              </span>
              <h3 className="text-xl font-bold text-white">
                What Early Access Includes
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We are actively working with Indian Chartered Accountants, Tax Consultants, and boutique firms to refine practice workflows.
              </p>

              <ul className="space-y-3 pt-2 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Full access to client directory, task boards & compliance calendar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>GST, ITR and TDS tracking pipelines for your practice</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Branded client portal and structured document collection</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Direct feedback line with the Taxoryn engineering team</span>
                </li>
              </ul>
            </Card>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#07152B]">
                <ShieldCheck className="w-5 h-5 text-[#00D1A3]" />
                <span>Confidentiality & Privacy Commitment</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your practice and contact details are used solely to coordinate your early access account. We never request PAN, Aadhaar, GST portal passwords, or financial returns on marketing forms.
              </p>
              <div className="pt-1">
                <Link
                  href="/privacy"
                  className="text-xs text-[#082E5B] hover:text-[#00D1A3] font-semibold underline underline-offset-4"
                >
                  Read Taxoryn Privacy Policy →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              {isPrepared ? (
                <div
                  role="status"
                  className="space-y-5 py-4 text-center"
                  aria-live="polite"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#07152B]">
                    Thanks for your interest in Taxoryn
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your email client is being opened with your request prepared for our team at{" "}
                    <strong>{siteConfig.supportEmail}</strong>.
                  </p>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Once you send the email, our team will follow up with your practice onboarding instructions.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-2">
                    <p className="font-semibold text-slate-800">
                      If your email client does not open automatically:
                    </p>
                    <p>
                      Email us directly with your details at:{" "}
                      <a
                        href={constructMailtoUrl()}
                        className="text-[#082E5B] underline font-medium hover:text-[#00D1A3]"
                      >
                        {siteConfig.supportEmail}
                      </a>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center pt-3">
                    <a
                      href={constructMailtoUrl()}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold rounded-lg bg-[#00D1A3] text-[#07152B] hover:bg-[#00D1A3]/90 transition-colors shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      Open Email Client
                    </a>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setIsPrepared(false)}
                    >
                      Edit Information
                    </Button>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-center gap-4 text-xs font-semibold text-[#082E5B]">
                    <Link href="/" className="hover:underline">
                      Back to Taxoryn Home
                    </Link>
                    <span>•</span>
                    <Link href="/product" className="hover:underline">
                      Explore Product
                    </Link>
                    <span>•</span>
                    <Link href="/resources" className="hover:underline">
                      Explore Resources
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#07152B]">
                      Practice Registration Form
                    </h3>
                    <p className="text-xs text-slate-500">
                      Please enter your professional details. Your email client will open with the information prepared for Taxoryn.
                    </p>
                  </div>

                  {/* Required: Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. CA Rajesh Kumar"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={
                          errors.fullName ? "fullName-error" : undefined
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all ${
                          errors.fullName
                            ? "border-rose-300 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20"
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="fullName-error"
                          role="alert"
                          className="text-xs text-rose-600 mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@practice.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all ${
                          errors.email
                            ? "border-rose-300 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20"
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          role="alert"
                          className="text-xs text-rose-600 mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Required: Practice / Firm Name & Optional Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firmName"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Practice / Firm Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="firmName"
                        name="firmName"
                        type="text"
                        required
                        value={formData.firmName}
                        onChange={handleChange}
                        placeholder="e.g. R. Kumar & Associates"
                        aria-invalid={!!errors.firmName}
                        aria-describedby={
                          errors.firmName ? "firmName-error" : undefined
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all ${
                          errors.firmName
                            ? "border-rose-300 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20"
                        }`}
                      />
                      {errors.firmName && (
                        <p
                          id="firmName-error"
                          role="alert"
                          className="text-xs text-rose-600 mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.firmName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Contact Number <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all ${
                          errors.phone
                            ? "border-rose-300 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20"
                        }`}
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          role="alert"
                          className="text-xs text-rose-600 mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Optional: City & Practice Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        City / Location <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai, New Delhi, Bengaluru"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="practiceSize"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Practice Size <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <select
                        id="practiceSize"
                        name="practiceSize"
                        value={formData.practiceSize}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none bg-white transition-all"
                      >
                        {PRACTICE_SIZES.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Optional: Primary Interest */}
                  <div>
                    <label
                      htmlFor="primaryInterest"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Primary Area of Interest <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <select
                      id="primaryInterest"
                      name="primaryInterest"
                      value={formData.primaryInterest}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none bg-white transition-all"
                    >
                      {PRIMARY_INTERESTS.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submission note & Button */}
                  <div className="pt-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={Send}
                      className="w-full justify-center font-bold shadow-md shadow-[#00D1A3]/20"
                    >
                      {isSubmitting ? "Preparing Email..." : "Join Early Access"}
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2 leading-normal">
                    Please do not submit sensitive tax or financial information through this form. By submitting, your email client will open addressed to{" "}
                    <span className="font-semibold text-slate-700">{siteConfig.supportEmail}</span>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export function EarlyAccessForm() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-slate-500 text-sm">
          Loading Early Access onboarding...
        </div>
      }
    >
      <EarlyAccessContent />
    </Suspense>
  );
}
