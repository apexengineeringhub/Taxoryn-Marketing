import React from "react";
import {
  Users,
  UserCheck,
  FileSpreadsheet,
  FileCheck2,
  Receipt,
  CheckSquare,
  ShieldCheck,
  FolderLock,
  Send,
  Bell,
  Globe,
  CreditCard,
  BarChart3,
  ShoppingBag,
  UserPlus,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { CapabilityItem } from "@/types";
import { cn } from "@/components/common/Container";

const iconMap: Record<string, LucideIcon> = {
  Users,
  UserCheck,
  FileSpreadsheet,
  FileCheck2,
  Receipt,
  CheckSquare,
  ShieldCheck,
  FolderLock,
  Send,
  Bell,
  Globe,
  CreditCard,
  BarChart3,
  ShoppingBag,
  UserPlus,
  BookOpen,
};

const categoryBadgeMap: Record<string, "navy" | "teal" | "cyan" | "emerald"> = {
  Organize: "navy",
  Control: "teal",
  Serve: "cyan",
  Grow: "emerald",
};

export function CapabilityCard({ capability }: { capability: CapabilityItem }) {
  const Icon = iconMap[capability.iconName] || Users;
  const badgeVariant = categoryBadgeMap[capability.category] || "navy";

  return (
    <Card
      variant="interactive"
      padding="md"
      className="flex flex-col justify-between h-full bg-white hover:border-[#00D1A3] transition-all duration-200"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-lg bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B] group-hover:bg-[#00D1A3]/10 group-hover:text-[#009E77] group-hover:border-[#00D1A3]/30 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <Badge variant={badgeVariant} size="sm">
            {capability.category}
          </Badge>
        </div>

        <h3 className="text-base font-bold text-[#07152B] mb-2 group-hover:text-[#082E5B]">
          {capability.title}
        </h3>

        <p className="text-sm text-[#475569] leading-relaxed">
          {capability.shortDescription}
        </p>
      </div>

      {capability.badge && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-[#009E77]">
          <span>{capability.badge}</span>
        </div>
      )}
    </Card>
  );
}
