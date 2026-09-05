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
  book_demo_view: BookDemoViewEvent;
  book_demo_form_start: BookDemoFormStartEvent;
  book_demo_submit_intent: BookDemoSubmitIntentEvent;
  external_app_click: ExternalAppClickEvent;
};

export type EventName = keyof EventPropertiesMap;
