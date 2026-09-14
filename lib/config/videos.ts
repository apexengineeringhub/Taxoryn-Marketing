export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail?: string;
  description: string;
  category: "product" | "tax-learn" | "tax-updates";
  audience?: "all" | "practitioners" | "businesses";
  active: boolean;
  featured: boolean;
  displayOrder: number;
  duration?: string;
}

export const DEFAULT_DEMO_YOUTUBE_ID =
  process.env.NEXT_PUBLIC_TAXORYN_DEMO_YOUTUBE_ID || "Kx-DqKwOlqM";

export const TAXORYN_VIDEOS: VideoItem[] = [
  {
    id: "taxoryn-platform-overview",
    title: "Taxoryn Platform Overview & Demo",
    youtubeId: DEFAULT_DEMO_YOUTUBE_ID,
    description:
      "A complete walkthrough of Taxoryn: manage clients, compliance pipelines, tasks, documents, and client portals in one connected workspace.",
    category: "product",
    audience: "practitioners",
    active: true,
    featured: true,
    displayOrder: 1,
    duration: "4:30",
  },
  {
    id: "gst-reconciliation-demo",
    title: "GST Practice Management & 2B Reconciliation",
    youtubeId: "",
    description:
      "How Indian tax practices track GSTR-1, GSTR-3B, and auto-reconcile purchase registers against GSTR-2B effortlessly.",
    category: "product",
    audience: "practitioners",
    active: true,
    featured: false,
    displayOrder: 2,
    duration: "3:45",
  },
  {
    id: "client-portal-walkthrough",
    title: "Client Portal & Document Request SOP",
    youtubeId: "",
    description:
      "See how clients securely upload bank statements, download filed returns, and monitor statutory compliance status.",
    category: "product",
    audience: "all",
    active: true,
    featured: false,
    displayOrder: 3,
    duration: "2:50",
  },
  {
    id: "itr-regime-comparison-guide",
    title: "New vs Old Tax Regime: Systematic Practitioner Analysis",
    youtubeId: "",
    description:
      "Comparative guidelines for choosing between New (Section 115BAC) and Old tax regimes for individual and business returns.",
    category: "tax-learn",
    audience: "practitioners",
    active: true,
    featured: true,
    displayOrder: 4,
    duration: "6:15",
  },
  {
    id: "form-16-26as-ais-reconciliation",
    title: "Reconciling Form 16, 26AS, AIS and TIS for Tax Filings",
    youtubeId: "",
    description:
      "Practical tips to cross-examine financial transactions, savings interest, and dividend payouts before ITR submission.",
    category: "tax-learn",
    audience: "practitioners",
    active: true,
    featured: false,
    displayOrder: 5,
    duration: "5:20",
  },
  {
    id: "monthly-statutory-calendar-updates",
    title: "Monthly GST, TDS & Income Tax Due Date Updates",
    youtubeId: "",
    description:
      "Essential statutory dates, extension notifications, and return filing deadlines for the current tax quarter.",
    category: "tax-updates",
    audience: "all",
    active: true,
    featured: true,
    displayOrder: 6,
    duration: "3:10",
  },
];

export function getFeaturedVideos(): VideoItem[] {
  return TAXORYN_VIDEOS.filter((v) => v.active && v.featured).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
}

export function getVideosByCategory(category: "product" | "tax-learn" | "tax-updates" | "all"): VideoItem[] {
  if (category === "all") {
    return TAXORYN_VIDEOS.filter((v) => v.active).sort(
      (a, b) => a.displayOrder - b.displayOrder
    );
  }
  return TAXORYN_VIDEOS.filter((v) => v.active && v.category === category).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
}
