"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import {
  Mail,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface FormState {
  fullName: string;
  firmName: string;
  email: string;
  phone: string;
  practiceSize: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  firmName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactForm() {
  const { t } = useLanguage();
  const cp = t.pages.contact;
  const cf = t.forms.contact;

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    firmName: "",
    email: "",
    phone: "",
    practiceSize: cf.practiceSizeOptions[0]?.value || "Solo Practitioner (1 Person)",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrepared, setIsPrepared] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = cf.nameError;
    }

    if (!formData.firmName.trim()) {
      newErrors.firmName = cf.firmError;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = cf.emailError;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = cf.emailInvalid;
    }

    const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = cf.phoneError;
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = cf.phoneInvalid;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructMailtoUrl = () => {
    const subject = `Taxoryn Practice Consultation - ${formData.firmName}`;
    const body = [
      `Taxoryn Practice Consultation Request`,
      `======================================`,
      `Name: ${formData.fullName}`,
      `Firm / Practice: ${formData.firmName}`,
      `Work Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Practice Size: ${formData.practiceSize}`,
      ``,
      `Context / Message:`,
      `${formData.message || "None provided"}`,
      ``,
      `---`,
      `Sent via Taxoryn Website (https://taxoryn.com/contact)`,
    ].join("\n");

    return `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isPrepared) return;

    if (validateForm()) {
      setIsSubmitting(true);
      const mailtoUrl = constructMailtoUrl();

      // Open user's default email client
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
    <div className="py-10 sm:py-16 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge={cp.badge}
          badgeVariant="teal"
          title={cp.title}
          description={cp.description}
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Practice Info Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#07152B] text-white space-y-4 shadow-sm">
              <h3 className="text-lg font-bold">{cp.advisoryTitle}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {cp.advisoryDesc}
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#00D1A3]" />
                  <span>{siteConfig.supportEmail}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-[#07152B]">
                {cp.overviewTitle}
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {cp.overviewItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {isPrepared ? (
              <div
                role="status"
                className="space-y-5 py-4 text-center"
                aria-live="polite"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#07152B]">
                  {cf.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {cf.successDesc}{" "}
                  <strong>{siteConfig.supportEmail}</strong>.
                </p>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  {cf.successSub}
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-2">
                  <p className="font-semibold text-slate-800">
                    {cf.emailNotOpenText}
                  </p>
                  <p>
                    {cf.emailUsDirectly}{" "}
                    <a
                      href={constructMailtoUrl()}
                      className="text-[#082E5B] underline font-medium hover:text-[#00D1A3]"
                    >
                      {siteConfig.supportEmail}
                    </a>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={constructMailtoUrl()}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#00D1A3] text-[#07152B] hover:bg-[#00D1A3]/90 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {cf.openEmailClient}
                  </a>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsPrepared(false);
                      setFormData({
                        fullName: "",
                        firmName: "",
                        email: "",
                        phone: "",
                        practiceSize: cf.practiceSizeOptions[0]?.value || "Solo Practitioner (1 Person)",
                        message: "",
                      });
                    }}
                  >
                    {cf.editInquiry}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      {cf.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={cf.namePlaceholder}
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
                      htmlFor="firmName"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      {cf.firmLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="firmName"
                      name="firmName"
                      type="text"
                      required
                      value={formData.firmName}
                      onChange={handleChange}
                      placeholder={cf.firmPlaceholder}
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      {cf.emailLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={cf.emailPlaceholder}
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

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      {cf.phoneLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={cf.phonePlaceholder}
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

                <div>
                  <label
                    htmlFor="practiceSize"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    {cf.practiceSizeLabel}
                  </label>
                  <select
                    id="practiceSize"
                    name="practiceSize"
                    value={formData.practiceSize}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none bg-white transition-all"
                  >
                    {cf.practiceSizeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    {cf.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={cf.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none transition-all"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={Send}
                    className="w-full justify-center font-bold"
                  >
                    {isSubmitting ? cf.submittingButton : cf.submitButton}
                  </Button>
                </div>

                <p className="text-xs text-slate-500 text-center pt-1 leading-relaxed">
                  {cp.formPrivacy}
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
