"use client";

import React from "react";
import {
  UserSearch,
  MapPin,
  GitMerge,
  Building2,
  MessageSquareShare,
  UserCheck2,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stepIcons = [
  UserSearch,
  MapPin,
  GitMerge,
  Building2,
  MessageSquareShare,
  UserCheck2,
];

export function WorkflowDiagram() {
  const { t } = useLanguage();
  const steps = t.marketplaceSection.workflowSteps;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {steps.map((step, index) => {
          const Icon = stepIcons[index] || UserSearch;

          return (
            <div
              key={`workflow-step-${step.stepNumber}-${index}`}
              className="relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#00D1A3] hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B] group-hover:bg-[#00D1A3]/15 group-hover:text-[#008766] group-hover:border-[#00D1A3]/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#008766]">
                    STEP {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#07152B] mb-1.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
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