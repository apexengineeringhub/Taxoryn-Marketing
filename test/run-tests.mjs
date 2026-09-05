import { test, describe, beforeEach } from "node:test";
import assert from "node:assert/strict";

// Mock environment
class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] !== undefined ? this.store[key] : null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
  clear() {
    this.store = {};
  }
}

const CONSENT_STORAGE_KEY = "taxoryn_analytics_consent";

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

function getConsentState() {
  if (typeof global.window === "undefined") return "unknown";
  try {
    const value = global.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "granted") return "granted";
    if (value === "declined") return "declined";
    return "unknown";
  } catch {
    return "unknown";
  }
}

function getAnalyticsConsent() {
  return getConsentState() === "granted";
}

function setConsentState(state) {
  if (typeof global.window === "undefined") return;
  try {
    global.localStorage.setItem(CONSENT_STORAGE_KEY, state);
    global.window.dispatchEvent(
      new global.CustomEvent("taxoryn_consent_changed", { detail: { state } })
    );
  } catch {}
}

function setAnalyticsConsent(consented) {
  setConsentState(consented ? "granted" : "declined");
}

function sanitizeProperties(properties) {
  if (!properties || typeof properties !== "object") return {};
  const sanitized = {};
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

function dispatchEvent(eventName, payload, config = { enabled: false, provider: "custom" }) {
  try {
    if (!getAnalyticsConsent()) return;
    if (!config.enabled || config.provider === "none") return;
    const sanitized = sanitizeProperties(payload);
    if (typeof global.window !== "undefined") {
      const customEvent = new global.CustomEvent("taxoryn_analytics", {
        detail: { event: eventName, properties: sanitized, timestamp: Date.now() },
      });
      global.window.dispatchEvent(customEvent);
    }
  } catch {}
}

function trackPageView(data, config) {
  if (!getAnalyticsConsent()) return;
  dispatchEvent("page_view", data, config);
}

function trackEvent(name, properties, config) {
  if (!getAnalyticsConsent()) return;
  dispatchEvent(name, properties, config);
}

describe("W8.1 Analytics & Consent Remediation Test Suite", () => {
  beforeEach(() => {
    global.localStorage = new LocalStorageMock();
    global.CustomEvent = class CustomEvent {
      constructor(type, eventInitDict) {
        this.type = type;
        this.detail = eventInitDict?.detail;
      }
    };
    global.window = {
      dispatchEvent: () => true,
      addEventListener: () => {},
      removeEventListener: () => {},
      localStorage: global.localStorage,
    };
  });

  test("TEST 1: No consent (unknown) -> analytics disabled", () => {
    global.localStorage.clear();
    assert.equal(getConsentState(), "unknown");
    assert.equal(getAnalyticsConsent(), false);
  });

  test("TEST 2: Consent granted -> analytics enabled", () => {
    setAnalyticsConsent(true);
    assert.equal(getConsentState(), "granted");
    assert.equal(getAnalyticsConsent(), true);
  });

  test("TEST 3: Consent declined -> analytics disabled", () => {
    setAnalyticsConsent(false);
    assert.equal(getConsentState(), "declined");
    assert.equal(getAnalyticsConsent(), false);
  });

  test("TEST 4: localStorage unavailable / throws -> analytics disabled (fail closed)", () => {
    global.localStorage = {
      getItem: () => { throw new Error("SecurityError: Storage is blocked"); },
      setItem: () => { throw new Error("QuotaExceededError"); },
    };
    assert.equal(getConsentState(), "unknown");
    assert.equal(getAnalyticsConsent(), false);
  });

  test("TEST 5: Provider unavailable -> website continues without error", () => {
    setAnalyticsConsent(true);
    global.window.dispatchEvent = () => { throw new Error("Provider dispatch failure"); };
    assert.doesNotThrow(() => {
      trackEvent("cta_click", { cta_name: "Test CTA", cta_location: "Hero" }, { enabled: true, provider: "custom" });
    });
  });

  test("TEST 6: Form analytics -> no PII sent (sanitizer strips email/phone/PAN/GSTIN/names)", () => {
    const inputWithPii = {
      practice_size: "Solo Practitioner",
      primary_interest: "GST & ITR",
      email: "ca.rajesh@example.com",
      phone: "+91 98765 43210",
      fullName: "CA Rajesh Kumar",
      pan: "ABCDE1234F",
      gstin: "27ABCDE1234F1Z5",
      password: "secretpassword123",
      random_field_with_email: "test@domain.in",
      random_field_with_phone: "+91 9876543210",
      valid_metric: "123",
    };
    const sanitized = sanitizeProperties(inputWithPii);
    assert.equal(sanitized.practice_size, "Solo Practitioner");
    assert.equal(sanitized.primary_interest, "GST & ITR");
    assert.equal(sanitized.valid_metric, "123");
    assert.equal(sanitized.email, undefined);
    assert.equal(sanitized.phone, undefined);
    assert.equal(sanitized.fullName, undefined);
    assert.equal(sanitized.pan, undefined);
    assert.equal(sanitized.gstin, undefined);
    assert.equal(sanitized.password, undefined);
    assert.equal(sanitized.random_field_with_email, undefined);
    assert.equal(sanitized.random_field_with_phone, undefined);
  });

  test("TEST 7: SSR -> no window/localStorage access, returns false/unknown", () => {
    const savedWindow = global.window;
    delete global.window;
    assert.equal(getConsentState(), "unknown");
    assert.equal(getAnalyticsConsent(), false);
    global.window = savedWindow;
  });

  test("TEST 8: Provider = none -> no analytics events dispatched", () => {
    setAnalyticsConsent(true);
    let dispatched = false;
    global.window.dispatchEvent = () => { dispatched = true; return true; };
    trackEvent("navigation_click", { destination: "/pricing", location: "header" }, { enabled: true, provider: "none" });
    assert.equal(dispatched, false);
  });

  test("TEST 9: Analytics disabled via environment -> no analytics", () => {
    setAnalyticsConsent(true);
    let dispatched = false;
    global.window.dispatchEvent = () => { dispatched = true; return true; };
    trackEvent("product_preview_select", { area: "compliance" }, { enabled: false, provider: "custom" });
    assert.equal(dispatched, false);
  });

  test("TEST 10: Unknown consent -> no page_view dispatched", () => {
    global.localStorage.clear(); // unknown
    let dispatched = false;
    global.window.dispatchEvent = () => { dispatched = true; return true; };
    trackPageView({ path: "/features" }, { enabled: true, provider: "custom" });
    assert.equal(dispatched, false);
  });
});
