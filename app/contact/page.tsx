import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { Mail, Phone, Calendar, CheckCircle2 } from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact Taxoryn | Book a Demo or Speak with Sales",
  description:
    "Get in touch with the Taxoryn team to schedule a custom practice demo or discuss enterprise firm onboarding.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Get In Touch"
          badgeVariant="teal"
          title="Schedule a Personalized Practice Walkthrough"
          description="See how Taxoryn can transform your firm's compliance workflows and client communication."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Info Side */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#07152B] text-white space-y-4">
              <h3 className="text-lg font-bold">Taxoryn Practice Advisory</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our practice specialists can help you audit your existing workflow, estimate migration timelines, and configure custom team roles.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#00D1A3]" />
                  <span>support@taxoryn.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#00D1A3]" />
                  <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-[#07152B]">What to Expect on Demo</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                  <span>Live walkthrough of GST, ITR & TDS tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                  <span>Demonstration of client portal & document requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                  <span>Practice listing on Taxoryn Marketplace</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-7 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="CA Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Firm / Practice Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="R. Kumar & Associates"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@rkumarassociates.in"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Practice Size
                </label>
                <select className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none bg-white transition-all">
                  <option>Solo Practitioner (1 Person)</option>
                  <option>Small Firm (2 - 5 Team Members)</option>
                  <option>Medium Firm (6 - 15 Team Members)</option>
                  <option>Growing Practice (16+ Team Members)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  How can we help?
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your current practice tools and requirements..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none transition-all"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center font-bold"
                >
                  Request Practice Demo
                </Button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                We respect your privacy. No spam or unsolicited sales calls.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
