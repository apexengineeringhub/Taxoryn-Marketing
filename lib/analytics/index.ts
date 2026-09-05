import { analyticsConfig } from "@/lib/config/analytics";
import { EventName, EventPropertiesMap, PageViewEvent } from "./events";

const CONSENT_STORAGE_KEY = "taxoryn_analytics_consent";

const SENSITIVE_PROPERTY_KEYS = [
  "email",
  "phone",
  "name",
  "fullname",
  "full_name",
  "pan",
  "gstin",
  "aadhaar",
  "password",
  "token",
  "secret",
  "ssn",
  "bank",
  "account",
  "address",
  "form_data",
  "formdata",
];

/**
 * Checks if user has granted consent for analytics.
 * Defaults to true if no consent framework is strictly required or consent has been granted.
 */
export function getAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (consent === "declined") return false;
    return true; // Default to opted-in or unprompted unless explicitly declined
  } catch {
    return true;
  }
}

/**
 * Updates the user's analytics consent preference.
 */
export function setAnalyticsConsent(consented: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, consented ? "granted" : "declined");
  } catch {
    // Fail gracefully
  }
}

/**
 * Sanitizes an object by removing any accidentally included sensitive keys.
 */
function sanitizeProperties(properties?: Record<string, unknown>): Record<string, unknown> {
  if (!properties || typeof properties !== "object") return {};
  
  const sanitized: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(properties)) {
    const lowerKey = key.toLowerCase();
    const isSensitive = SENSITIVE_PROPERTY_KEYS.some((sensitive) => lowerKey.includes(sensitive));
    if (!isSensitive && val !== undefined && val !== null) {
      // Ensure strings don't contain email patterns
      if (typeof val === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        continue;
      }
      sanitized[key] = val;
    }
  }
  return sanitized;
}

/**
 * Internal dispatch mechanism for events
 */
function dispatchEvent(eventName: string, payload: Record<string, unknown>): void {
  try {
    if (!getAnalyticsConsent()) {
      return;
    }

    const sanitized = sanitizeProperties(payload);

    // Development debugging console log (only when explicitly configured)
    if (analyticsConfig.debug && typeof window !== "undefined") {
      // eslint-disable-next-line no-console
      console.log(`[Taxoryn Analytics: ${eventName}]`, sanitized);
    }

    if (!analyticsConfig.enabled) {
      return;
    }

    // Provider Integration Layer
    switch (analyticsConfig.provider) {
      case "plausible":
        if (typeof window !== "undefined" && (window as unknown as { plausible?: (event: string, opts?: unknown) => void }).plausible) {
          (window as unknown as { plausible: (event: string, opts?: unknown) => void }).plausible(eventName, { props: sanitized });
        }
        break;

      case "google-analytics":
        if (typeof window !== "undefined" && (window as unknown as { gtag?: (type: string, name: string, opts?: unknown) => void }).gtag) {
          (window as unknown as { gtag: (type: string, name: string, opts?: unknown) => void }).gtag("event", eventName, sanitized);
        }
        break;

      case "custom":
      default:
        // Lightweight internal analytics or custom event emitter
        if (typeof window !== "undefined") {
          const customEvent = new CustomEvent("taxoryn_analytics", {
            detail: { event: eventName, properties: sanitized, timestamp: Date.now() },
          });
          window.dispatchEvent(customEvent);
        }
        break;
    }
  } catch {
    // Analytics failure mode: ALWAYS fail silently to prevent application errors
  }
}

/**
 * Track a page view event with privacy-safe path and UTM parameters
 */
export function trackPageView(data: PageViewEvent): void {
  try {
    const payload: Record<string, unknown> = {
      path: data.path,
      title: data.title || (typeof document !== "undefined" ? document.title : ""),
    };

    if (data.referrer) payload.referrer = data.referrer;
    if (data.utm_source) payload.utm_source = data.utm_source;
    if (data.utm_medium) payload.utm_medium = data.utm_medium;
    if (data.utm_campaign) payload.utm_campaign = data.utm_campaign;
    if (data.utm_content) payload.utm_content = data.utm_content;
    if (data.utm_term) payload.utm_term = data.utm_term;

    dispatchEvent("page_view", payload);
  } catch {
    // Fail silently
  }
}

/**
 * Track a custom marketing event with non-sensitive properties
 */
export function trackEvent<T extends EventName>(
  name: T,
  properties?: EventPropertiesMap[T]
): void {
  try {
    dispatchEvent(name, (properties as Record<string, unknown>) || {});
  } catch {
    // Fail silently
  }
}
