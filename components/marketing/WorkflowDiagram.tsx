import React from "react";
import {
  UserSearch,
  FileQuestion,
  MapPin,
  GitMerge,
  MessageSquareShare,
  Building2,
  UserCheck2,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/components/common/Container";

interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const marketplaceSteps: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Client Requirement",
    description: "Business or individual needs GST, ITR, Audit, or TDS services.",
    icon: UserSearch,
  },
  {
    stepNumber: "02",
    title: "Location & Expertise",
    description: "Matches by jurisdiction, industry specialization, and language.",
    icon: MapPin,
  },
  {
    stepNumber: "03",
    title: "Practice Matching",
    description: "Tax practice receives inquiry matched to their credentials and service scope.",
    icon: GitMerge,
  },
  {
    stepNumber: "04",
    title: "Direct Enquiry",
    description: "Practice reviews requirement scope and connects with prospect.",
    icon: MessageSquareShare,
  },
  {
    stepNumber: "05",
    title: "Instant Onboarding",
    description: "Seamlessly converts lead into active client on Taxoryn portal.",
    icon: UserCheck2,
  },
  {
    stepNumber: "06",
    title: "Retained Client",
    description: "Ongoing compliance, billing, and document exchange in one workspace.",
    icon: Building2,
  },
];

export function WorkflowDiagram() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {marketplaceSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.stepNumber}
              className="relative p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#00D1A3] hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B] group-hover:bg-[#00D1A3]/15 group-hover:text-[#009E77] group-hover:border-[#00D1A3]/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#00D1A3]">
                    STEP {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#07152B] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < marketplaceSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  {/* Subtle directional indicator */}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
