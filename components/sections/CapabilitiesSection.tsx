import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CapabilityCard } from "@/components/marketing/CapabilityCard";
import { CapabilityItem } from "@/types";

const capabilities: CapabilityItem[] = [
  {
    id: "client-mgmt",
    title: "Client Management",
    shortDescription:
      "Comprehensive master client directory with multi-entity support, PAN/GSTIN records, and contact mapping.",
    category: "Organize",
    iconName: "Users",
  },
  {
    id: "team-mgmt",
    title: "Team & Staff Management",
    shortDescription:
      "Role-based access control for Partners, Managers, and Article Assistants with assigned client scopes.",
    category: "Organize",
    iconName: "UserCheck",
  },
  {
    id: "gst-mgmt",
    title: "GST Management",
    shortDescription:
      "Complete lifecycle tracking for GSTR-1, GSTR-3B, GSTR-9, ITC matching, 2B reconciliation, and filing acknowledgments.",
    category: "Control",
    iconName: "FileSpreadsheet",
  },
  {
    id: "itr-mgmt",
    title: "ITR Management",
    shortDescription:
      "Full assessment year return pipelines (ITR 1-7), tax regime comparisons, computation sheets, and e-verification.",
    category: "Control",
    iconName: "FileCheck2",
  },
  {
    id: "tds-mgmt",
    title: "TDS Management",
    shortDescription:
      "Quarterly return workflows (Form 24Q, 26Q, 27Q), challan reconciliations, and Form 16/16A generation.",
    category: "Control",
    iconName: "Receipt",
  },
  {
    id: "task-mgmt",
    title: "Task Management",
    shortDescription:
      "Kanban boards, task assignments, deadline alerts, priority queues, and internal notes per client assignment.",
    category: "Control",
    iconName: "CheckSquare",
  },
  {
    id: "compliance-calendar",
    title: "Compliance Calendar",
    shortDescription:
      "Statutory due date tracker with automatic calculation of penalties, interest deadlines, and extension alerts.",
    category: "Control",
    iconName: "ShieldCheck",
  },
  {
    id: "doc-mgmt",
    title: "Document Management",
    shortDescription:
      "Secure document repository categorized by financial year, client, and tax type with quick search.",
    category: "Serve",
    iconName: "FolderLock",
  },
  {
    id: "doc-requests",
    title: "Document Requests",
    shortDescription:
      "Document collection checklists sent directly to clients via email and client portal.",
    category: "Serve",
    iconName: "Send",
  },
  {
    id: "notifications",
    title: "Automated Notifications",
    shortDescription:
      "Keep clients and team informed of upcoming filing deadlines, status updates, and document verification.",
    category: "Serve",
    iconName: "Bell",
  },
  {
    id: "client-portal",
    title: "Client Portal",
    shortDescription:
      "Self-service web experience where your clients can view filed returns, download computations, and upload files.",
    category: "Serve",
    iconName: "Globe",
  },
  {
    id: "billing",
    title: "Practice Billing & Invoicing",
    shortDescription:
      "Generate professional tax invoices, track fee receipts, outstanding balances, and payment milestones.",
    category: "Organize",
    iconName: "CreditCard",
  },
  {
    id: "reports",
    title: "Practice Reports & Analytics",
    shortDescription:
      "Deep visibility into team productivity, pending filings, revenue per client, and compliance SLA metrics.",
    category: "Control",
    iconName: "BarChart3",
  },
  {
    id: "marketplace-profile",
    title: "Marketplace Practice Profile",
    shortDescription:
      "Connect with new business and individual clients seeking professional tax practice expertise in your region.",
    category: "Grow",
    iconName: "ShoppingBag",
    badge: "Growth Engine",
  },
  {
    id: "onboarding",
    title: "Customer Onboarding",
    shortDescription:
      "Streamlined intake workflow to quickly capture new client credentials, prior filings, and KYC details.",
    category: "Grow",
    iconName: "UserPlus",
  },
  {
    id: "learn",
    title: "Learn & Tax Resources",
    shortDescription:
      "Curated practice guides, tax rate updates, compliance checklists, and platform tutorials.",
    category: "Grow",
    iconName: "BookOpen",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Product Capabilities"
          badgeVariant="navy"
          title="Built for the complete lifecycle of tax practice operations."
          description="Every capability in Taxoryn is engineered to reduce administrative friction and deliver professional accuracy across Indian tax regulations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.id} capability={cap} />
          ))}
        </div>
      </Container>
    </section>
  );
}
