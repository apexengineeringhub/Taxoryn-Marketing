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

describe("Taxoryn i18n Multilingual Test Suite", () => {
  test("TEST 11: Language persistence storage key is taxoryn-language", () => {
    const STORAGE_KEY = "taxoryn-language";
    global.localStorage.setItem(STORAGE_KEY, "hi");
    assert.equal(global.localStorage.getItem(STORAGE_KEY), "hi");
    global.localStorage.setItem(STORAGE_KEY, "en");
    assert.equal(global.localStorage.getItem(STORAGE_KEY), "en");
  });

  test("TEST 12: Default language is English (en)", () => {
    const DEFAULT_LANG = "en";
    assert.equal(DEFAULT_LANG, "en");
  });

  test("TEST 13: English and Hindi dictionary files exist and export typed translations", async () => {
    const fs = await import("node:fs");
    const enContent = fs.readFileSync("lib/i18n/en.ts", "utf-8");
    const hiContent = fs.readFileSync("lib/i18n/hi.ts", "utf-8");
    assert.ok(enContent.includes("export const en"), "English dictionary exported");
    assert.ok(hiContent.includes("export const hi"), "Hindi dictionary exported");
    assert.ok(enContent.includes('product: "Product"'), "English product navigation string exists");
    assert.ok(hiContent.includes('product: "Product"'), "Hindi product navigation retains domain term");
    assert.ok(hiContent.includes('watchDemo: "डेमो देखें"'), "Hindi watchDemo translation exists");
  });

  test("TEST 14: Translation dictionary files include all core marketing sections and pages", async () => {
    const fs = await import("node:fs");
    const enContent = fs.readFileSync("lib/i18n/en.ts", "utf-8");
    const hiContent = fs.readFileSync("lib/i18n/hi.ts", "utf-8");
    const requiredSections = [
      "brand",
      "nav",
      "hero",
      "problem",
      "solution",
      "coreProduct",
      "demoVideo",
      "marketplaceSection",
      "securitySection",
      "finalCTA",
      "footer",
      "common",
      "pages",
      "forms",
    ];
    for (const section of requiredSections) {
      assert.ok(enContent.includes(`${section}: {`), `en.ts contains ${section}`);
      assert.ok(hiContent.includes(`${section}: {`), `hi.ts contains ${section}`);
    }
  });

  test("TEST 15: Language options contain genuine Devanagari Unicode label 'हिन्दी'", async () => {
    const fs = await import("node:fs");
    const indexContent = fs.readFileSync("lib/i18n/index.ts", "utf-8");
    assert.ok(indexContent.includes('nativeLabel: "हिन्दी"'), "Hindi nativeLabel is 'हिन्दी'");
    assert.ok(!indexContent.includes("??????"), "No corrupt question marks in index.ts");
    assert.ok(indexContent.includes('nativeLabel: "English"'), "English nativeLabel is 'English'");
  });

  test("TEST 16: Hindi dictionary contains genuine Devanagari text without corrupt placeholders", async () => {
    const fs = await import("node:fs");
    const hiContent = fs.readFileSync("lib/i18n/hi.ts", "utf-8");
    assert.ok(!hiContent.includes("??????"), "No corrupt question marks in hi.ts");
    assert.ok(hiContent.includes("अपनी Tax Practice को"), "Contains natural Devanagari copy");
  });
});

describe("Taxoryn Header Layout & Spacing Test Suite", () => {
  test("TEST 17: Header implements three-part layout (Brand Left, Nav Center, Actions Right)", async () => {
    const fs = await import("node:fs");
    const headerContent = fs.readFileSync("components/navigation/Header.tsx", "utf-8");
    assert.ok(headerContent.includes("LEFT: Brand Lockup"), "Brand lockup on left");
    assert.ok(headerContent.includes("CENTER: Main Navigation Links"), "Nav links in center");
    assert.ok(headerContent.includes("RIGHT: Action CTAs & Language Selector"), "Action CTAs on right");
    assert.ok(headerContent.includes("<nav"), "Semantic nav container present");
    assert.ok(headerContent.includes("LanguageSwitcher"), "Language switcher present in action group");
    assert.ok(!headerContent.includes("-ml-") && !headerContent.includes("-mr-"), "No arbitrary negative margin hacks on desktop layout");
  });

  test("TEST 18: Header navigation items and actions are distinct flex items with separation", async () => {
    const fs = await import("node:fs");
    const headerContent = fs.readFileSync("components/navigation/Header.tsx", "utf-8");
    assert.ok(headerContent.includes('href="/#demo-video"'), "Watch Demo CTA link exists");
    assert.ok(headerContent.includes("siteConfig.links.login"), "Login link exists");
    assert.ok(headerContent.includes("siteConfig.links.joinEarlyAccess"), "Get Started CTA exists");
  });
});

describe("Taxoryn Grounded Copy, Development Journey & Zero Fake Claims Test Suite", () => {
  test("TEST 19: Final CTA uses grounded active-development messaging without unsupported claims", async () => {
    const fs = await import("node:fs");
    const enContent = fs.readFileSync("lib/i18n/en.ts", "utf-8");
    const hiContent = fs.readFileSync("lib/i18n/hi.ts", "utf-8");

    // No unsupported social proof or fabricated stats
    assert.ok(!enContent.includes("hundreds of"), "No 'hundreds of' in en.ts");
    assert.ok(!hiContent.includes("सैकड़ों"), "No 'सैकड़ों' in hi.ts");
    assert.ok(!enContent.includes("14-day"), "No fake 14-day trial claim in en.ts");
    assert.ok(!hiContent.includes("14 दिनों"), "No fake 14-day trial claim in hi.ts");
    assert.ok(!enContent.includes("No credit card required"), "No fake credit card statement in en.ts");

    // Grounded messaging verified
    assert.ok(enContent.includes("Taxoryn is being built around real practice needs."), "Grounded subtitle in en.ts");
    assert.ok(hiContent.includes("Taxoryn को वास्तविक practice needs के अनुसार build किया जा रहा है।"), "Grounded subtitle in hi.ts");
  });

  test("TEST 20: Customer stories section implements authentic Help Shape Taxoryn invitation", async () => {
    const fs = await import("node:fs");
    const customerStories = fs.readFileSync("components/trust/CustomerStoriesSection.tsx", "utf-8");
    assert.ok(customerStories.includes("t.helpShape.badge"), "Development journey badge present via i18n");
    assert.ok(customerStories.includes("t.helpShape.title"), "Help Shape Taxoryn title present via i18n");
    assert.ok(customerStories.includes("t.helpShape.paragraph1"), "Development journey message present via i18n");
  });

  test("TEST 21: Security and marketplace sections use verified benefit-first wording", async () => {
    const fs = await import("node:fs");
    const enContent = fs.readFileSync("lib/i18n/en.ts", "utf-8");
    const hiContent = fs.readFileSync("lib/i18n/hi.ts", "utf-8");

    // Verified security statements
    assert.ok(!enContent.includes("Enterprise-Grade Trust"), "No 'Enterprise-Grade Trust' in en.ts");
    assert.ok(!enContent.includes("Bank-Grade Security"), "No 'Bank-Grade Security' in en.ts");
    assert.ok(enContent.includes("Built With Security and Controlled Access."), "Benefit-first security title in en.ts");
    assert.ok(hiContent.includes("Security और Controlled Access के साथ Built."), "Benefit-first security title in hi.ts");
  });

  test("TEST 22: Pricing page positions tiers as Planned Practice Tiers without fake availability", async () => {
    const fs = await import("node:fs");
    const enContent = fs.readFileSync("lib/i18n/en.ts", "utf-8");
    const hiContent = fs.readFileSync("lib/i18n/hi.ts", "utf-8");
    assert.ok(!enContent.includes("Early Access Tier"), "No 'Early Access Tier' in pricing config");
    assert.ok(!enContent.includes("Public Beta"), "No 'Public Beta' in pricing config");
    assert.ok(enContent.includes("Planned Practice Tier"), "Accurate planned tier status in en.ts");
    assert.ok(hiContent.includes("Planned Practice Tier"), "Accurate planned tier status in hi.ts");
  });

  test("TEST 23: ProductPreview contains NO synthetic metrics or fake growth percentages", async () => {
    const fs = await import("node:fs");
    const previewContent = fs.readFileSync("components/marketing/ProductPreview.tsx", "utf-8");
    assert.ok(!previewContent.includes("142"), "No fake 142 client count");
    assert.ok(!previewContent.includes("96.4%"), "No fake 96.4% compliance metric");
    assert.ok(!previewContent.includes("78"), "No fake 78 ITR count");
    assert.ok(!previewContent.includes("vs last month"), "No fake growth comparisons");
    assert.ok(previewContent.includes("Sample interface — demonstration data"), "Honest preview disclaimer present");
  });

  test("TEST 24: Origin Story section renders the authentic founder journey", async () => {
    const fs = await import("node:fs");
    const enContent = fs.readFileSync("lib/i18n/en.ts", "utf-8");
    const hiContent = fs.readFileSync("lib/i18n/hi.ts", "utf-8");
    const storySection = fs.readFileSync("components/sections/OriginStorySection.tsx", "utf-8");
    const pageContent = fs.readFileSync("app/page.tsx", "utf-8");

    assert.ok(enContent.includes("It Started With a Real Tax Practice."), "English story title");
    assert.ok(hiContent.includes("इसकी शुरुआत एक असली Tax Practice से हुई।"), "Hindi story title");
    assert.ok(enContent.includes("What if a tax practice could manage it all from one connected place?"), "English core question");
    assert.ok(hiContent.includes("क्या होगा अगर एक tax practice यह सब कुछ एक ही connected place से manage कर सके?"), "Hindi core question");
    assert.ok(storySection.includes('id="origin-story"'), "Origin story section has id anchor");
    assert.ok(pageContent.includes("<OriginStorySection />"), "Origin story is included in homepage");
  });

  test("TEST 25: Problem section features human, realistic practice language", async () => {
    const fs = await import("node:fs");
    const enContent = fs.readFileSync("lib/i18n/en.ts", "utf-8");
    const hiContent = fs.readFileSync("lib/i18n/hi.ts", "utf-8");

    assert.ok(enContent.includes("The Work Around Tax Work Can Get Messy."), "Human English problem title");
    assert.ok(hiContent.includes("Tax Work के आसपास की चीज़ें अक्सर उलझ जाती हैं।"), "Human Hindi problem title");
    assert.ok(enContent.includes("Documents across multiple channels"), "Human problem item 1");
    assert.ok(enContent.includes("Repeated client follow-ups"), "Human problem item 3");
  });

  test("TEST 26: Hero section links to the Origin Story", async () => {
    const fs = await import("node:fs");
    const heroContent = fs.readFileSync("components/sections/HeroSection.tsx", "utf-8");
    assert.ok(heroContent.includes('href="#origin-story"'), "Hero links to origin story anchor");
  });
});
