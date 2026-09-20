/**
 * Taxoryn Marketing Analytics - Event Catalog & Types
 *
 * Privacy Principles:
 * - NEVER send personal identifiers (names, emails, phones, addresses)
 * - NEVER send statutory data (PAN, GSTIN, Aadhaar, return data)
 * - NEVER send authentication data (passwords, tokens)
 * - Minimum necessary properties only
 */

export interface PageViewEvent {
  path: string;
  title?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface CtaClickEvent {
  cta_name: string;
  cta_location: string;
  page?: string;
  destination?: string;
  audience?: string;
  section?: string;
}

export interface NavigationClickEvent {
  destination: string;
  location: string;
}

export interface ResourceOpenEvent {
  resource_slug: string;
  category?: string;
  page?: string;
}

export interface ResourceCategorySelectEvent {
  category: string;
  page?: string;
}

export interface ProductPreviewSelectEvent {
  area: "overview" | "clients" | "compliance" | "documents" | "portal" | "marketplace" | string;
}

export interface MarketplaceCtaClickEvent {
  audience: "customer" | "practice" | "general";
  location?: string;
}

export interface EarlyAccessViewEvent {
  source?: string;
  campaign?: string;
}

export interface EarlyAccessFormStartEvent {
  practice_size?: string;
  primary_interest?: string;
}

export interface EarlyAccessSubmitIntentEvent {
  practice_size?: string;
  primary_interest?: string;
  has_city?: boolean;
  has_phone?: boolean;
}

export interface EarlyAccessSubmitSuccessEvent {
  practice_size?: string;
  primary_interest?: string;
}

export interface BookDemoViewEvent {
  source?: string;
  campaign?: string;
}

export interface BookDemoFormStartEvent {
  practice_size?: string;
  demo_focus?: string;
}

export interface BookDemoSubmitIntentEvent {
  practice_size?: string;
  demo_focus?: string;
  contact_method?: string;
  has_timing?: boolean;
}

export interface ExternalAppClickEvent {
  destination: "login" | "register" | "app";
  location?: string;
}

export interface WatchDemoEvent {
  video_id?: string;
  location?: string;
  source?: string;
}

export interface YouTubeClickEvent {
  video_id?: string;
  video_title?: string;
  destination_url?: string;
}

export interface GetStartedEvent {
  location?: string;
  cta_name?: string;
  page?: string;
}

export interface MarketplaceClickEvent {
  audience?: "business" | "practice" | "general";
  location?: string;
  destination?: string;
}

export interface FindProfessionalEvent {
  location?: string;
  specialization?: string;
  source?: string;
}

export interface ListPracticeEvent {
  location?: string;
  source?: string;
}

export interface LearnArticleEvent {
  article_slug: string;
  category?: string;
  title?: string;
}

export interface VideoOpenEvent {
  video_id: string;
  video_title?: string;
  category?: string;
}

export interface RegistrationStartedEvent {
  source?: string;
  role?: string;
}

export interface RegistrationCompletedEvent {
  source?: string;
  practice_type?: string;
}

export type EventPropertiesMap = {
  page_view: PageViewEvent;
  cta_click: CtaClickEvent;
  navigation_click: NavigationClickEvent;
  resource_open: ResourceOpenEvent;
  resource_category_select: ResourceCategorySelectEvent;
  product_preview_select: ProductPreviewSelectEvent;
  marketplace_cta_click: MarketplaceCtaClickEvent;
  early_access_view: EarlyAccessViewEvent;
  early_access_form_start: EarlyAccessFormStartEvent;
  early_access_submit_intent: EarlyAccessSubmitIntentEvent;
  early_access_submit_success: EarlyAccessSubmitSuccessEvent;
  book_demo_view: BookDemoViewEvent;
  book_demo_form_start: BookDemoFormStartEvent;
  book_demo_submit_intent: BookDemoSubmitIntentEvent;
  external_app_click: ExternalAppClickEvent;
  watch_demo: WatchDemoEvent;
  youtube_click: YouTubeClickEvent;
  get_started: GetStartedEvent;
  marketplace_click: MarketplaceClickEvent;
  find_professional: FindProfessionalEvent;
  list_practice: ListPracticeEvent;
  learn_article: LearnArticleEvent;
  video_open: VideoOpenEvent;
  registration_started: RegistrationStartedEvent;
  registration_completed: RegistrationCompletedEvent;
};

export type EventName = keyof EventPropertiesMap;
