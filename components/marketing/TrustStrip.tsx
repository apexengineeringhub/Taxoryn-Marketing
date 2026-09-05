import React from "react";
import { Container } from "@/components/common/Container";
import {
  Users,
  ShieldCheck,
  UserCheck,
  FolderLock,
  Globe,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

export function TrustStrip() {
  const pillars = [
    { label: "Clients", icon: Users },
    { label: "Compliance", icon: ShieldCheck },
    { label: "Team Workload", icon: UserCheck },
    { label: "Documents", icon: FolderLock },
    { label: "Client Portal", icon: Globe },
    { label: "Marketplace", icon: ShoppingBag },
  ];

  return (
    <div className="w-full bg-white border-y border-[#E2E8F0] py-6 sm:py-8 shadow-xs">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#082E5B] block mb-0.5">
              Connected Architecture
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#07152B]">
              One connected workspace for your entire tax practice.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-[#0F172A]"
                >
                  <Icon className="w-4 h-4 text-[#00D1A3]" />
                  <span>{pillar.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
