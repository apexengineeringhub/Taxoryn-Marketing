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
  Clock,
  Send,
  Sparkles,
} from "lucide-react";

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

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    firmName: "",
    email: "",
    phone: "",
    practiceSize: "Solo Practitioner (1 Person)",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }

    if (!formData.firmName.trim()) {
      newErrors.firmName = "Please enter your firm or practice name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact number.";
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || submitted) return;

    if (validateForm()) {
      setIsSubmitting(true);

      const subject = encodeURIComponent(
        `Taxoryn Practice Consultation Request - ${formData.firmName}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.fullName}
Firm / Practice: ${formData.firmName}
Work Email: ${formData.email}
Phone: ${formData.phone}
Practice Size: ${formData.practiceSize}

Context / Message:
${formData.message || "None provided"}

---
Sent via Taxoryn Practice Consultation Form`
      );

      const mailtoUrl = `mailto:support@taxoryn.com?subject=${subject}&body=${body}`;

      // Open user's default email client
      if (typeof window !== "undefined") {
        window.location.href = mailtoUrl;
      }

      setIsSubmitting(false);
      setSubmitted(true);
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
          badge="Practice Consultation"
          badgeVariant="teal"
          title="Schedule a Personalized Practice Walkthrough"
          description="Learn how Taxoryn helps streamline client management, compliance deadlines, and team review queues."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Practice Info Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#07152B] text-white space-y-4 shadow-sm">
              <h3 className="text-lg font-bold">Taxoryn Practice Advisory</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Speak directly with our practice specialists to explore workflow organization, team role configurations, and client portal setup for your practice.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#00D1A3]" />
                  <span>support@taxoryn.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#00D1A3]" />
                  <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-[#07152B]">
                Walkthrough Overview
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>GST, ITR & TDS preparation-to-filing pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Client portal and document collection checklists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Practice profile on Taxoryn Marketplace</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {submitted ? (
              <div
                role="status"
                className="space-y-5 py-4 text-center"
                aria-live="polite"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#07152B]">
                  Opening Email Client
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry for <strong>{formData.firmName}</strong> has been formatted for our advisory team. Your default mail application should open automatically.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-2">
                  <p className="font-semibold text-slate-800">
                    Did your email client not open?
                  </p>
                  <p>
                    Send your inquiry directly to:{" "}
                    <a
                      href={`mailto:support@taxoryn.com?subject=Taxoryn Practice Consultation - ${encodeURIComponent(formData.firmName)}&body=Name: ${encodeURIComponent(formData.fullName)}%0D%0APractice: ${encodeURIComponent(formData.firmName)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0APractice Size: ${encodeURIComponent(formData.practiceSize)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`}
                      className="text-[#082E5B] underline font-medium hover:text-[#00D1A3]"
                    >
                      support@taxoryn.com
                    </a>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={`mailto:support@taxoryn.com?subject=Taxoryn Practice Consultation - ${encodeURIComponent(formData.firmName)}&body=Name: ${encodeURIComponent(formData.fullName)}%0D%0APractice: ${encodeURIComponent(formData.firmName)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0APractice Size: ${encodeURIComponent(formData.practiceSize)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#00D1A3] text-[#07152B] hover:bg-[#00D1A3]/90 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Open Email Directly
                  </a>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        firmName: "",
                        email: "",
                        phone: "",
                        practiceSize: "Solo Practitioner (1 Person)",
                        message: "",
                      });
                    }}
                  >
                    Edit Inquiry
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
                      Your Name <span className="text-rose-500">*</span>
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
                      htmlFor="firmName"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Firm / Practice Name <span className="text-rose-500">*</span>
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      placeholder="name@firmdomain.in"
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
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
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
                    <option value="Solo Practitioner (1 Person)">
                      Solo Practitioner (1 Person)
                    </option>
                    <option value="Small Firm (2 - 5 Team Members)">
                      Small Firm (2 - 5 Team Members)
                    </option>
                    <option value="Medium Firm (6 - 15 Team Members)">
                      Medium Firm (6 - 15 Team Members)
                    </option>
                    <option value="Growing Practice (16+ Team Members)">
                      Growing Practice (16+ Team Members)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Message / Current Software Context (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current practice tools and key requirements..."
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
                    {isSubmitting
                      ? "Recording Request..."
                      : "Request Practice Walkthrough"}
                  </Button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  We respect your confidentiality. We do not ask for PAN, GST credentials, or financial documents on marketing inquiries.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
