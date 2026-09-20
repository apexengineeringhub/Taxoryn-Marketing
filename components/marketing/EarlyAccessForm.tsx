"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { siteConfig } from "@/lib/config/site";
import { trackEvent } from "@/lib/analytics";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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

function EarlyAccessContent() {
  const { t } = useLanguage();
  const ef = t.forms.earlyAccess;
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<EarlyAccessFormState>({
    fullName: "",
    email: "",
    firmName: "",
    phone: "",
    city: "",
    practiceSize: ef.firmTypeOptions[0]?.value || "Solo Practitioner",
    primaryInterest: ef.primaryInterestOptions[0]?.value || "Practice Management",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formStartedRef = useRef(false);

  // Capture optional campaign parameters safely
  const source = searchParams?.get("source") || "";
  const utmSource = searchParams?.get("utm_source") || "";
  const utmMedium = searchParams?.get("utm_medium") || "";
  const utmCampaign = searchParams?.get("utm_campaign") || "";
  const utmContent = searchParams?.get("utm_content") || "";
  const utmTerm = searchParams?.get("utm_term") || "";

  useEffect(() => {
    trackEvent("early_access_view", {
      source: utmSource || source || undefined,
      campaign: utmCampaign || undefined,
    });
  }, [utmSource, source, utmCampaign]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = ef.nameError;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = ef.emailError;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = ef.emailInvalid;
    }

    if (!formData.firmName.trim()) {
      newErrors.firmName = ef.firmError;
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
      if (!phoneRegex.test(formData.phone.trim().replace(/\s+/g, ""))) {
        newErrors.phone = ef.phoneInvalid;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSuccess) return;

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Track submit intent without ANY personal PII
    trackEvent("early_access_submit_intent", {
      practice_size: formData.practiceSize,
      primary_interest: formData.primaryInterest,
      has_city: Boolean(formData.city.trim()),
      has_phone: Boolean(formData.phone.trim()),
    });

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          firmName: formData.firmName,
          phone: formData.phone,
          city: formData.city,
          practiceSize: formData.practiceSize,
          primaryInterest: formData.primaryInterest,
          campaign: {
            source,
            utmSource,
            utmMedium,
            utmCampaign,
            utmContent,
            utmTerm,
          },
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || ef.errorMessage);
      }

      // Track submit success
      trackEvent("early_access_submit_success", {
        practice_size: formData.practiceSize,
        primary_interest: formData.primaryInterest,
      });

      setIsSuccess(true);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error && err.message ? err.message : ef.errorMessage;
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent("early_access_form_start", {
        practice_size: formData.practiceSize,
        primary_interest: formData.primaryInterest,
      });
    }

    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  return (
    <div className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Practice Onboarding"
          badgeVariant="teal"
          title="Get Started with Taxoryn"
          description="Connect your practice workflows — clients, compliance, documents and growth in one structured workspace."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Left Context & Trust Column */}
          <div className="lg:col-span-5 space-y-5">
            <Card variant="default" padding="lg" className="bg-white border-slate-200/90 shadow-sm space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#009E77] bg-emerald-50 px-2.5 py-0.5 rounded uppercase border border-emerald-100 inline-block">
                PRACTICE PROGRAM
              </span>
              <h3 className="text-xl font-bold text-[#07152B]">
                What Practice Onboarding Includes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We are actively working with Indian Chartered Accountants, Tax Consultants, and boutique firms to refine practice workflows.
              </p>

              <ul className="space-y-3 pt-2 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Access to evaluate client directory, task boards & compliance calendar</span>
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
              {isSuccess ? (
                <div
                  role="status"
                  className="space-y-5 py-4 text-center"
                  aria-live="polite"
                >
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#07152B]">
                      {ef.successTitle}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      {ef.successDesc}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-sm mx-auto text-center font-medium">
                    <span className="text-slate-500 mr-1.5">{ef.submittedEmailLabel}</span>
                    <strong className="text-[#07152B] font-semibold">{formData.email}</strong>
                  </div>

                  <div className="pt-3 flex justify-center">
                    <Button
                      href="/"
                      variant="primary"
                      size="md"
                      className="font-bold shadow-sm"
                    >
                      {ef.continueExploring}
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
                      {ef.submitButton}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Please enter your professional details to evaluate early access for your practice.
                    </p>
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Required: Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        {ef.nameLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        aria-required="true"
                        disabled={isSubmitting}
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={ef.namePlaceholder}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={
                          errors.fullName ? "fullName-error" : undefined
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all ${
                          errors.fullName
                            ? "border-rose-300 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20"
                        } disabled:opacity-60 disabled:cursor-not-allowed`}
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
                        {ef.emailLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={ef.emailPlaceholder}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all ${
                          errors.email
                            ? "border-rose-300 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20"
                        } disabled:opacity-60 disabled:cursor-not-allowed`}
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
                        {ef.firmLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="firmName"
                        name="firmName"
                        type="text"
                        required
                        aria-required="true"
                        disabled={isSubmitting}
                        value={formData.firmName}
                        onChange={handleChange}
                        placeholder={ef.firmPlaceholder}
                        aria-invalid={!!errors.firmName}
                        aria-describedby={
                          errors.firmName ? "firmName-error" : undefined
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all ${
                          errors.firmName
                            ? "border-rose-300 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20"
                        } disabled:opacity-60 disabled:cursor-not-allowed`}
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
                        {ef.phoneLabel} <span className="text-slate-400 font-normal">{ef.optionalLabel}</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={ef.phonePlaceholder}
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border outline-none transition-all ${
                          errors.phone
                            ? "border-rose-300 focus:ring-2 focus:ring-rose-200"
                            : "border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20"
                        } disabled:opacity-60 disabled:cursor-not-allowed`}
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
                        {ef.cityLabel} <span className="text-slate-400 font-normal">{ef.optionalLabel}</span>
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        disabled={isSubmitting}
                        value={formData.city}
                        onChange={handleChange}
                        placeholder={ef.cityPlaceholder}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="practiceSize"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        {ef.firmTypeLabel} <span className="text-slate-400 font-normal">{ef.optionalLabel}</span>
                      </label>
                      <select
                        id="practiceSize"
                        name="practiceSize"
                        disabled={isSubmitting}
                        value={formData.practiceSize}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none bg-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {ef.firmTypeOptions.map((size) => (
                          <option key={size.value} value={size.value}>
                            {size.label}
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
                      {ef.primaryInterestLabel} <span className="text-slate-400 font-normal">{ef.optionalLabel}</span>
                    </label>
                    <select
                      id="primaryInterest"
                      name="primaryInterest"
                      disabled={isSubmitting}
                      value={formData.primaryInterest}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none bg-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {ef.primaryInterestOptions.map((interest) => (
                        <option key={interest.value} value={interest.value}>
                          {interest.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submission Button */}
                  <div className="pt-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={isSubmitting ? Loader2 : Send}
                      className="w-full justify-center font-bold shadow-md shadow-[#00D1A3]/20"
                    >
                      {isSubmitting ? ef.submittingButton : ef.submitButton}
                    </Button>
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-slate-500 text-center pt-2 leading-relaxed">
                    {ef.privacyNote}{" "}
                    <Link
                      href="/privacy"
                      className="text-[#082E5B] hover:text-[#00D1A3] underline font-medium"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  {/* Direct support optional link */}
                  <p className="text-[11px] text-slate-400 text-center pt-0.5">
                    {ef.directSupportText}{" "}
                    <a
                      href={`mailto:${siteConfig.supportEmail}`}
                      className="text-slate-600 hover:text-[#00D1A3] underline font-medium"
                    >
                      {siteConfig.supportEmail}
                    </a>
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
          Loading practice onboarding...
        </div>
      }
    >
      <EarlyAccessContent />
    </Suspense>
  );
}
