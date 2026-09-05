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
  Calendar,
  Mail,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Send,
} from "lucide-react";

interface BookDemoFormState {
  fullName: string;
  email: string;
  firmName: string;
  phone: string;
  practiceSize: string;
  demoFocus: string;
  contactMethod: string;
  preferredTiming: string;
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

const DEMO_FOCUS_OPTIONS = [
  "Complete Product Walkthrough",
  "Client Management & Profile Directory",
  "GST / ITR / TDS Filing Tracking",
  "Team & Article Assistant Workload Management",
  "Document Requests & Secure Storage",
  "Client Portal Experience",
  "Taxoryn Marketplace Practice Profile",
];

const CONTACT_METHODS = [
  "Email Coordination",
  "Video Call (Google Meet)",
  "Phone Call",
];

function BookDemoContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<BookDemoFormState>({
    fullName: "",
    email: "",
    firmName: "",
    phone: "",
    practiceSize: "Solo Practitioner",
    demoFocus: "Complete Product Walkthrough",
    contactMethod: "Video Call (Google Meet)",
    preferredTiming: "",
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
    const subject = `Taxoryn Product Demo Request - ${formData.firmName}`;
    const campaignCtx = getCleanCampaignContext();

    const bodyLines = [
      `TAXORYN PRODUCT DEMO REQUEST`,
      `---------------------------------`,
      `Full Name: ${formData.fullName}`,
      `Work Email: ${formData.email}`,
      `Practice / Firm: ${formData.firmName}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Practice Size: ${formData.practiceSize}`,
      `Demo Focus: ${formData.demoFocus}`,
      `Preferred Contact Method: ${formData.contactMethod}`,
      `Preferred Day / Time: ${formData.preferredTiming || "Flexible"}`,
      ``,
    ];

    if (campaignCtx) {
      bodyLines.push(`Campaign Context:`, campaignCtx, ``);
    }

    bodyLines.push(
      `---`,
      `Submitted via Taxoryn Marketing Website (https://taxoryn.com/book-demo)`
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
          badge="Product Walkthrough"
          badgeVariant="navy"
          title="Book a Taxoryn Product Demo"
          description="Walk through Taxoryn's practice workflows with our team and see how it fits your firm's compliance operations."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Context & Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="default" padding="lg" className="bg-[#07152B] text-white space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D1A3] uppercase inline-block">
                INTERACTIVE DEMO
              </span>
              <h3 className="text-xl font-bold text-white">
                What to Expect
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A 20-minute focused walkthrough tailored to your practice size and current workflow challenges.
              </p>

              <ul className="space-y-3 pt-2 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Interactive demonstration of the practice command center</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Discussion of client intake and document request workflows</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Staff delegation, review queues and partner sign-off states</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Q&A on your practice requirements and early access timelines</span>
                </li>
              </ul>
            </Card>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#07152B]">
                <ShieldCheck className="w-5 h-5 text-[#00D1A3]" />
                <span>Confidentiality Guaranteed</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We only discuss practice structure and software workflows. We do not inspect or collect confidential client tax files during product demonstrations.
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
                    Your email client is being opened with your demo request prepared for our team at{" "}
                    <strong>{siteConfig.supportEmail}</strong>.
                  </p>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Once you send the email, our team will follow up to confirm a convenient demonstration slot.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-2">
                    <p className="font-semibold text-slate-800">
                      If your email client does not open automatically:
                    </p>
                    <p>
                      Email us directly at:{" "}
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
                      Request a Product Walkthrough
                    </h3>
                    <p className="text-xs text-slate-500">
                      Please enter your contact details. Your email client will open with your demo request prepared for Taxoryn.
                    </p>
                  </div>

                  {/* Required: Full Name & Work Email */}
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
                        placeholder="e.g. CA Sunita Sharma"
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
                        placeholder="sunita@firmdomain.in"
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
                        placeholder="e.g. S. Sharma & Co."
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
                        Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
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

                  {/* Practice Size & Demo Focus */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="practiceSize"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Practice Size
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

                    <div>
                      <label
                        htmlFor="demoFocus"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        What would you like to see?
                      </label>
                      <select
                        id="demoFocus"
                        name="demoFocus"
                        value={formData.demoFocus}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none bg-white transition-all"
                      >
                        {DEMO_FOCUS_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Contact Method & Timing Window */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contactMethod"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Preferred Contact Method
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none bg-white transition-all"
                      >
                        {CONTACT_METHODS.map((method) => (
                          <option key={method} value={method}>
                            {method}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="preferredTiming"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Preferred Timing / Note <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="preferredTiming"
                        name="preferredTiming"
                        type="text"
                        value={formData.preferredTiming}
                        onChange={handleChange}
                        placeholder="e.g. Weekday afternoons, or next Tuesday"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none transition-all"
                      />
                    </div>
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
                      {isSubmitting ? "Preparing Demo Request..." : "Book a Product Demo"}
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

export function BookDemoForm() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-slate-500 text-sm">
          Loading Demo booking...
        </div>
      }
    >
      <BookDemoContent />
    </Suspense>
  );
}
