export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "security" | "features" | "pricing";
}

export const faqsData: FAQItem[] = [
  {
    id: "solo-vs-firm",
    category: "general",
    question: "Is Taxoryn suitable for solo practitioners or only larger CA firms?",
    answer:
      "Taxoryn is engineered to scale seamlessly from independent solo practitioners to multi-partner CA firms. Solo practitioners benefit immediately from automated document collection checklists, organized client masters, and self-service client portals. Multi-user firms leverage role-based permissions, manager-partner review queues, and practice-wide workload dashboards.",
  },
  {
    id: "portal-submission-boundary",
    category: "features",
    question: "Does Taxoryn directly file returns to government portals or manage the practice workflow?",
    answer:
      "Taxoryn serves as your practice operating system and compliance workflow manager. It streamlines client data intake, computation workpapers, internal partner review sign-offs, and client acknowledgment distribution. Official statutory submissions are executed by authorized practitioners using their official credentials and digital signatures, maintaining strict statutory compliance and practitioner control.",
  },
  {
    id: "data-protection-privacy",
    category: "security",
    question: "How does Taxoryn protect sensitive client data and financial records?",
    answer:
      "Security is foundational to our platform. Taxoryn enforces logical tenant isolation to ensure practice data remains strictly separated. All network traffic is encrypted using industry-standard TLS in transit, documents are stored in secure cloud environments with token-authorized access, and comprehensive activity logs track every action within your firm.",
  },
  {
    id: "compliance-streams",
    category: "features",
    question: "Which Indian tax compliance streams does Taxoryn support?",
    answer:
      "Taxoryn supports core Indian tax compliance workflows including Goods & Services Tax (GSTR-1, GSTR-3B, annual reconciliations), Income Tax Returns (ITR-1 through ITR-7), Tax Deducted at Source (Form 24Q, 26Q, 27Q), and Advance Tax estimation pipelines.",
  },
  {
    id: "client-portal-experience",
    category: "features",
    question: "How does the Client Portal work for our clients?",
    answer:
      "Clients receive secure, web-based portal access where they can upload required financial documents against structured checklists, track the real-time filing status of their returns, and download computation summaries and official acknowledgments on-demand—reducing repetitive WhatsApp messages and phone calls.",
  },
  {
    id: "data-migration",
    category: "general",
    question: "Can we migrate existing client data from Excel or other practice management tools?",
    answer:
      "Yes. Taxoryn supports standard CSV and spreadsheet data import for client directories, PAN/GSTIN profiles, and historical compliance records. During early access onboarding, our support team assists with structured data onboarding for your firm.",
  },
  {
    id: "communication-security",
    category: "security",
    question: "Why is Taxoryn safer than managing client documents over WhatsApp or email?",
    answer:
      "Email and chat applications lack role-based access control, file expiration safeguards, and audit trails. Taxoryn centralizes documents in authenticated client workspaces with granular staff permissions and activity history, preventing misplaced Form 16s, leaked bank statements, or version mismatches.",
  },
  {
    id: "staff-role-permissions",
    category: "security",
    question: "Can article assistants and staff prepare drafts without partner-level access?",
    answer:
      "Yes. Taxoryn features granular role-based access controls. Article assistants and junior staff can be assigned data entry and document review tasks without having permission to approve computations, modify billing rates, or delete client records. Mandatory partner sign-off queues ensure quality control.",
  },
  {
    id: "marketplace-explained",
    category: "general",
    question: "How does the Taxoryn Marketplace work for tax professionals?",
    answer:
      "The Taxoryn Marketplace provides verified practitioners with a public profile to showcase their statutory specializations, jurisdictional focus, and practice credentials. Prospective business clients searching for tax advisory or filing assistance can discover your practice and submit structured service enquiries.",
  },
  {
    id: "pricing-early-access",
    category: "pricing",
    question: "What are the pricing plans and how does the Early Access program work?",
    answer:
      "Commercial pricing tiers are being finalized based on practice size and team seats. During the Early Access phase, approved practices receive complimentary access to all core platform features, personalized onboarding guidance, and direct product team support in exchange for feedback.",
  },
  {
    id: "data-ownership",
    category: "security",
    question: "Where is our practice data stored and who owns it?",
    answer:
      "Your practice data and client records remain the 100% exclusive property of your firm. Taxoryn does not sell, monetize, or share your proprietary client records with third parties. Practice administrators can export their data at any time.",
  },
  {
    id: "multi-branch-practices",
    category: "features",
    question: "How does Taxoryn accommodate multi-branch or multi-partner firms?",
    answer:
      "Taxoryn enables practice administrators to manage multiple office branches, associate specific staff and clients to designated locations, and view firm-wide consolidated compliance metrics while maintaining regional operational autonomy.",
  },
  {
    id: "client-software-requirement",
    category: "general",
    question: "Do our clients need to install special software to use the portal?",
    answer:
      "No. The Taxoryn client portal is 100% web-based and fully responsive on desktop browsers, tablets, and smartphones. Clients do not need to download or install any native software to view filings or upload documents.",
  },
  {
    id: "early-access-onboarding",
    category: "pricing",
    question: "What happens after submitting an Early Access request?",
    answer:
      "Our onboarding team reviews your practice profile and reaches out via email or phone within 1–2 business days with your dedicated workspace setup link, configuration instructions, and complimentary onboarding support.",
  },
  {
    id: "book-demo-team",
    category: "pricing",
    question: "How do I schedule a live walkthrough for my partners and management team?",
    answer:
      "You can submit a demo request through our Book a Demo page. We will tailor the demonstration to your firm's specific compliance streams, team size, and existing workflow challenges.",
  },
];
