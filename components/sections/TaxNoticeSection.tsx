import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import {
  FileWarning,
  UserCheck,
  FileSearch,
  FileEdit,
  CheckCircle2,
  Send,
  Clock,
  ChevronRight,
  Info,
} from "lucide-react";

export function TaxNoticeSection() {
  const steps = [
    { num: "01", name: "Notice Received", desc: "Ingest departmental notice (IT/GST/TDS)", icon: FileWarning },
    { num: "02", name: "Assign", desc: "Allocate to specialized manager or senior associate", icon: UserCheck },
    { num: "03", name: "Review", desc: "Analyze grounds, demand, and assessment records", icon: FileSearch },
    { num: "04", name: "Prepare Response", desc: "Draft legal reply and assemble supporting working papers", icon: FileEdit },
    { num: "05", name: "Review/Approval", desc: "Mandatory partner sign-off before client approval", icon: CheckCircle2 },
    { num: "06", name: "Submit", desc: "Furnish response on official departmental portal", icon: Send },
    { num: "07", name: "Track Resolution", desc: "Monitor appeal stages, rectification, or closure", icon: Clock },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2">
            <Badge variant="navy" size="md">
              COMPLIANCE & NOTICE WORKFLOW
            </Badge>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
              Planned Feature Roadmap
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#07152B] tracking-tight">
            From Notice Received to Resolution — Stay in Control.
          </h2>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            A structured resolution pipeline designed to manage statutory notices across GST, Income Tax, and TDS with complete auditability.
          </p>
        </div>

        {/* 7-Step Workflow Visualization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 mb-8">
          {steps.map((stg, i) => {
            const Icon = stg.icon;
            return (
              <div
                key={stg.num}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-[#00D1A3] transition-colors group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#00D1A3]">
                      {stg.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#082E5B]" />
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-[#07152B] leading-snug">
                    {stg.name}
                  </h3>

                  <p className="text-[11px] text-slate-500 leading-tight">
                    {stg.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Truth Notice */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-center flex items-center justify-center gap-2 text-xs text-slate-600">
          <Info className="w-4 h-4 text-slate-500 shrink-0" />
          <span>
            Notice tracking workflows are part of Taxoryn&apos;s compliance module roadmap and are being refined with practicing tax professionals.
          </span>
        </div>
      </Container>
    </section>
  );
}
