export type ContentType = "ARTICLE" | "GUIDE" | "UPDATE" | "PRODUCT_GUIDE";
export type TargetAudience = "taxpayer" | "practitioner" | "dual";
export type CtaType = "practice" | "taxpayer" | "marketplace" | "demo";

export interface ContentFAQ {
  question: string;
  answer: string;
}

export interface OfficialSource {
  title: string;
  url: string;
  authority: string;
}

export interface ResourceCategory {
  id: string;
  slug: string;
  name: string;
  badge: string;
  shortDescription: string;
  description: string;
  iconName: string;
}

export interface ArticleSection {
  heading: string;
  content: string; // Plain text or clean formatted paragraphs
  subsections?: {
    subheading: string;
    text: string;
    bullets?: string[];
  }[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    type: "tip" | "info" | "warning";
    text: string;
  };
}

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  seoDescription?: string;
  category: string; // Category slug
  type: ContentType;
  audience: TargetAudience;
  publishedDate: string;
  updatedDate: string;
  author: string;
  readingTime: string;
  featured?: boolean;
  sections: ArticleSection[];
  keyTakeaways: string[];
  faqs?: ContentFAQ[];
  officialSources?: OfficialSource[];
  relatedArticleIds: string[];
  ctaType: CtaType;
  ctaTitle?: string;
  ctaDescription?: string;
}
