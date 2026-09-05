import { analyticsConfig } from "../config/analytics";
import { EventName, EventPropertiesMap, PageViewEvent } from "./events";

export const CONSENT_STORAGE_KEY = "taxoryn_analytics_consent";

export type ConsentState = "unknown" | "granted" | "declined";

const SENSITIVE_PROPERTY_KEYS = [
  "email",
  "phone",
  "name",
  "fullname",
  "full_name",
  "firstname",
  "lastname",
  "first_name",
  "last_name",
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
  "city",
  "form_data",
  "formdata",
  "message",
  "details",
  "query",
  "notes",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s-]{7,15}$/;
const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;
const GSTIN_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i;

let providerInitialized = false;

/**
 * Returns the explicit consent state: "unknown" | "granted" | "declined".
 * Defaults to "unknown" on initial load or if localStorage is unavailable/throws.
 * Fails closed.
 */
export function getConsentState(): ConsentState {
  if (typeof window === "undefined") return "unknown";
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "granted") return "granted";
    if (value === "declined") return "declined";
    return "unknown";
  } catch {
    return "unknown";
  }
}

/**
 * Checks if user has explicitly granted consent for analytics.
 * STRICT FAIL-CLOSED: returns true ONLY when consent is explicitly "granted".
 * Returns false if consent is "unknown", "declined", or if storage is unavailable.
 */
export function getAnalyticsConsent(): boolean {
  return getConsentState() === "granted";
}

/**
 * Updates the user's analytics consent preference and notifies listeners.
 */
export function setAnalyticsConsent(consented: boolean): void {
  setConsentState(consented ? "granted" : "declined");
}

/**
 * Persists explicit consent state ("granted" or "declined") and dispatches a browser event.
 */
export function setConsentState(state: "granted" | "declined"): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, state);
    if (state === "granted") {
      initAnalyticsProvider();
    } else {
      resetAnalyticsProvider();
    }
    window.dispatchEvent(
      new CustomEvent("taxoryn_consent_changed", { detail: { state } })
    );
  } catch {
    // Fail gracefully without crashing
  }
}

/**
 * Initializes the configured analytics provider on client-side ONLY after explicit consent.
 */
export function initAnalyticsProvider(): void {
  if (typeof window === "undefined") return;
  if (!getAnalyticsConsent()) return;
  if (!analyticsConfig.enabled || analyticsConfig.provider === "none") return;
  if (providerInitialized) return;

  try {
    if (analyticsConfig.provider === "google-analytics" && analyticsConfig.measurementId) {
      const id = analyticsConfig.measurementId;
      if (!document.getElementById("ga-script")) {
        const script = document.createElement("script");
        script.id = "ga-script";
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
        document.head.appendChild(script);

        const win = window as unknown as {
          dataLayer: unknown[];
          gtag: (...args: unknown[]) => void;
        };
        win.dataLayer = win.dataLayer || [];
        win.gtag = function () {
          win.dataLayer.push(arguments);
        };
        win.gtag("js", new Date());
        win.gtag("config", id, {
          send_page_view: false,
          anonymize_ip: true,
        });
      }
      providerInitialized = true;
    } else if (analyticsConfig.provider === "plausible" && analyticsConfig.measurementId) {
      const domain = analyticsConfig.measurementId;
      if (!document.getElementById("plausible-script")) {
        const script = document.createElement("script");
        script.id = "plausible-script";
        script.defer = true;
        script.setAttribute("data-domain", domain);
        script.src = "https://plausible.io/js/script.manual.js";
        document.head.appendChild(script);
      }
      providerInitialized = true;
    } else if (analyticsConfig.provider === "custom") {
      providerInitialized = true;
    }
  } catch {
    // Fail gracefully
  }
}

/**
 * Resets/disables provider if consent is revoked.
 */
export function resetAnalyticsProvider(): void {
  providerInitialized = false;
  if (typeof window === "undefined") return;
  try {
    if (analyticsConfig.provider === "google-analytics" && analyticsConfig.measurementId) {
      const win = window as unknown as Record<string, unknown>;
      win[`ga-disable-${analyticsConfig.measurementId}`] = true;
    }
  } catch {
    // Fail gracefully
  }
}

/**
 * Sanitizes an object by stripping any sensitive keys, PII, or regex matches.
 */
export function sanitizeProperties(
  properties?: Record<string, unknown>
): Record<string, unknown> {
  if (!properties || typeof properties !== "object") return {};

  const sanitized: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(properties)) {
    const lowerKey = key.toLowerCase();
    const isSensitive = SENSITIVE_PROPERTY_KEYS.some((sensitive) =>
      lowerKey.includes(sensitive)
    );
    if (!isSensitive && val !== undefined && val !== null) {
      if (typeof val === "string") {
        const trimmed = val.trim();
        if (
          EMAIL_REGEX.test(trimmed) ||
          PHONE_REGEX.test(trimmed) ||
          PAN_REGEX.test(trimmed) ||
          GSTIN_REGEX.test(trimmed)
        ) {
          continue;
        }
        sanitized[key] = trimmed;
      } else {
        sanitized[key] = val;
      }
    }
  }
  return sanitized;
}

/**
 * Sanitizes referrer URL to keep only origin and pathname (stripping query string and fragment).
 */
function sanitizeReferrer(rawReferrer?: string): string | undefined {
  if (!rawReferrer) return undefined;
  try {
    const url = new URL(rawReferrer);
    return `${url.protocol}//${url.host}${url.pathname}`;
  } catch {
    return undefined;
  }
}

/**
 * Sanitizes UTM parameter values.
 */
function sanitizeUtmParam(val?: string): string | undefined {
  if (!val || typeof val !== "string") return undefined;
  const clean = val.trim();
  if (clean.length === 0 || clean.length > 100) return undefined;
  if (EMAIL_REGEX.test(clean) || PHONE_REGEX.test(clean)) return undefined;
  return clean;
}

/**
 * Internal dispatch mechanism for events.
 * Strictly checks consent, configuration, and provider before firing.
 */
function dispatchEvent(eventName: string, payload: Record<string, unknown>): void {
  try {
    // 1. Consent Gate: Fail closed
    if (!getAnalyticsConsent()) {
      return;
    }

    // 2. Configuration Gate
    if (!analyticsConfig.enabled || analyticsConfig.provider === "none") {
      return;
    }

    // 3. Property Sanitization (Zero PII)
    const sanitized = sanitizeProperties(payload);

    // Development debugging console log (only when explicitly configured)
    if (analyticsConfig.debug && typeof window !== "undefined") {
      // eslint-disable-next-line no-console
      console.log(`[Taxoryn Analytics: ${eventName}]`, sanitized);
    }

    // 4. Provider Dispatch
    switch (analyticsConfig.provider) {
      case "plausible":
        if (
          typeof window !== "undefined" &&
          (window as unknown as { plausible?: (event: string, opts?: unknown) => void }).plausible
        ) {
          (window as unknown as { plausible: (event: string, opts?: unknown) => void }).plausible(
            eventName,
            { props: sanitized }
          );
        }
        break;

      case "google-analytics":
        if (
          typeof window !== "undefined" &&
          (window as unknown as { gtag?: (type: string, name: string, opts?: unknown) => void }).gtag
        ) {
          (window as unknown as { gtag: (type: string, name: string, opts?: unknown) => void }).gtag(
            "event",
            eventName,
            sanitized
          );
        }
        break;

      case "custom":
        if (typeof window !== "undefined") {
          const customEvent = new CustomEvent("taxoryn_analytics", {
            detail: { event: eventName, properties: sanitized, timestamp: Date.now() },
          });
          window.dispatchEvent(customEvent);
        }
        break;

      default:
        // No-op
        break;
    }
  } catch {
    // Analytics failure mode: ALWAYS fail silently to prevent application errors
  }
}

/**
 * Track a page view event with privacy-safe path, sanitized referrer, and whitelisted UTM parameters.
 */
export function trackPageView(data: PageViewEvent): void {
  try {
    if (!getAnalyticsConsent()) return;

    const payload: Record<string, unknown> = {
      path: data.path,
      title: data.title || (typeof document !== "undefined" ? document.title : ""),
    };

    const cleanReferrer = sanitizeReferrer(data.referrer);
    if (cleanReferrer) payload.referrer = cleanReferrer;

    const utmSource = sanitizeUtmParam(data.utm_source);
    const utmMedium = sanitizeUtmParam(data.utm_medium);
    const utmCampaign = sanitizeUtmParam(data.utm_campaign);
    const utmContent = sanitizeUtmParam(data.utm_content);
    const utmTerm = sanitizeUtmParam(data.utm_term);

    if (utmSource) payload.utm_source = utmSource;
    if (utmMedium) payload.utm_medium = utmMedium;
    if (utmCampaign) payload.utm_campaign = utmCampaign;
    if (utmContent) payload.utm_content = utmContent;
    if (utmTerm) payload.utm_term = utmTerm;

    dispatchEvent("page_view", payload);
  } catch {
    // Fail silently
  }
}

/**
 * Track a custom marketing event with non-sensitive properties.
 */
export function trackEvent<T extends EventName>(
  name: T,
  properties?: EventPropertiesMap[T]
): void {
  try {
    if (!getAnalyticsConsent()) return;
    dispatchEvent(name, (properties as Record<string, unknown>) || {});
  } catch {
    // Fail silently
  }
}
