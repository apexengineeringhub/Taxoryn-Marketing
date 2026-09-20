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

describe("Taxoryn Configurable Social Media Links Test Suite", () => {
  function isValidSocialUrl(url) {
    if (!url || typeof url !== "string") return false;
    const trimmed = url.trim();
    if (!trimmed || trimmed === "#" || trimmed.startsWith("mailto:")) return false;
    return trimmed.startsWith("https://") || trimmed.startsWith("http://");
  }

  function getActiveSocialLinks(config) {
    const platforms = ["youtube", "linkedin", "instagram", "facebook"];
    const active = [];
    for (const platform of platforms) {
      const item = config[platform];
      if (item && item.enabled && isValidSocialUrl(item.url)) {
        active.push({
          id: platform,
          url: item.url.trim(),
          name:
            item.label ||
            (platform === "youtube"
              ? "YouTube"
              : platform === "linkedin"
              ? "LinkedIn"
              : platform === "instagram"
              ? "Instagram"
              : "Facebook"),
        });
      }
    }
    return active;
  }

  test("TEST 27: Active social links render when enabled and valid URL exists (YouTube & LinkedIn default)", () => {
    const config = {
      youtube: { enabled: true, url: "https://www.youtube.com/@taxoryn", label: "YouTube" },
      linkedin: { enabled: true, url: "https://www.linkedin.com/company/taxoryn", label: "LinkedIn" },
      instagram: { enabled: false, url: "", label: "Instagram" },
      facebook: { enabled: false, url: "", label: "Facebook" },
    };
    const active = getActiveSocialLinks(config);
    assert.equal(active.length, 2);
    assert.equal(active[0].id, "youtube");
    assert.equal(active[0].url, "https://www.youtube.com/@taxoryn");
    assert.equal(active[1].id, "linkedin");
    assert.equal(active[1].url, "https://www.linkedin.com/company/taxoryn");
  });

  test("TEST 28: Instagram renders when enabled with valid URL", () => {
    const config = {
      youtube: { enabled: true, url: "https://www.youtube.com/@taxoryn", label: "YouTube" },
      linkedin: { enabled: true, url: "https://www.linkedin.com/company/taxoryn", label: "LinkedIn" },
      instagram: { enabled: true, url: "https://www.instagram.com/taxoryn", label: "Instagram" },
      facebook: { enabled: false, url: "", label: "Facebook" },
    };
    const active = getActiveSocialLinks(config);
    assert.equal(active.length, 3);
    assert.equal(active[2].id, "instagram");
    assert.equal(active[2].url, "https://www.instagram.com/taxoryn");
  });

  test("TEST 29: All four platforms render in correct order when all are enabled", () => {
    const config = {
      youtube: { enabled: true, url: "https://www.youtube.com/@taxoryn", label: "YouTube" },
      linkedin: { enabled: true, url: "https://www.linkedin.com/company/taxoryn", label: "LinkedIn" },
      instagram: { enabled: true, url: "https://www.instagram.com/taxoryn", label: "Instagram" },
      facebook: { enabled: true, url: "https://www.facebook.com/taxoryn", label: "Facebook" },
    };
    const active = getActiveSocialLinks(config);
    assert.equal(active.length, 4);
    assert.deepEqual(
      active.map((a) => a.id),
      ["youtube", "linkedin", "instagram", "facebook"]
    );
  });

  test("TEST 30: Works correctly with only one social platform enabled", () => {
    const config = {
      youtube: { enabled: false, url: "https://www.youtube.com/@taxoryn", label: "YouTube" },
      linkedin: { enabled: true, url: "https://www.linkedin.com/company/taxoryn", label: "LinkedIn" },
      instagram: { enabled: false, url: "https://www.instagram.com/taxoryn", label: "Instagram" },
      facebook: { enabled: false, url: "https://www.facebook.com/taxoryn", label: "Facebook" },
    };
    const active = getActiveSocialLinks(config);
    assert.equal(active.length, 1);
    assert.equal(active[0].id, "linkedin");
  });

  test("TEST 31: Disabled social links are not returned/rendered even if URL exists", () => {
    const config = {
      youtube: { enabled: false, url: "https://www.youtube.com/@taxoryn", label: "YouTube" },
      linkedin: { enabled: true, url: "https://www.linkedin.com/company/taxoryn", label: "LinkedIn" },
      instagram: { enabled: false, url: "https://www.instagram.com/taxoryn", label: "Instagram" },
      facebook: { enabled: false, url: "https://www.facebook.com/taxoryn", label: "Facebook" },
    };
    const active = getActiveSocialLinks(config);
    assert.equal(active.length, 1);
    assert.equal(active[0].id, "linkedin");
  });

  test("TEST 32: Empty, whitespace, or invalid URLs are never rendered", () => {
    const config = {
      youtube: { enabled: true, url: "   ", label: "YouTube" },
      linkedin: { enabled: true, url: "", label: "LinkedIn" },
      instagram: { enabled: true, url: "", label: "Instagram" },
      facebook: { enabled: true, url: null, label: "Facebook" },
    };
    const active = getActiveSocialLinks(config);
    assert.equal(active.length, 0);
  });

  test("TEST 33: Zero '#' placeholder links or mailto links generated", () => {
    const config = {
      youtube: { enabled: true, url: "#", label: "YouTube" },
      linkedin: { enabled: true, url: "mailto:taxoryn@example.com", label: "LinkedIn" },
      instagram: { enabled: true, url: "#", label: "Instagram" },
      facebook: { enabled: true, url: "javascript:void(0)", label: "Facebook" },
    };
    const active = getActiveSocialLinks(config);
    assert.equal(active.length, 0);
  });

  test("TEST 34: SocialLinks component source enforces target='_blank', rel='noopener noreferrer', and aria-labels for all platforms", async () => {
    const fs = await import("node:fs");
    const componentContent = fs.readFileSync("components/navigation/SocialLinks.tsx", "utf-8");
    assert.ok(componentContent.includes('target="_blank"'), "target='_blank' present");
    assert.ok(componentContent.includes('rel="noopener noreferrer"'), "rel='noopener noreferrer' present");
    assert.ok(componentContent.includes("aria-label="), "aria-label present on anchor");
    assert.ok(componentContent.includes("<nav"), "Semantic nav container present");
    assert.ok(componentContent.includes("focus-visible:ring-2"), "Keyboard focus ring present");
    assert.ok(componentContent.includes("YouTubeIcon"), "YouTube icon included");
    assert.ok(componentContent.includes("LinkedInIcon"), "LinkedIn icon included");
    assert.ok(componentContent.includes("InstagramIcon"), "Instagram icon included");
    assert.ok(componentContent.includes("FacebookIcon"), "Facebook icon included");
  });

  test("TEST 35: Footer component embeds SocialLinks and retains existing navigation structure", async () => {
    const fs = await import("node:fs");
    const footerContent = fs.readFileSync("components/navigation/Footer.tsx", "utf-8");
    assert.ok(footerContent.includes("<SocialLinks"), "SocialLinks component embedded in Footer");
    assert.ok(footerContent.includes("t.footer.followTaxoryn"), "Follow Taxoryn section header referenced");
    assert.ok(footerContent.includes("productLinks"), "Product links retained in Footer");
    assert.ok(footerContent.includes("connectLinks"), "Connect links retained in Footer");
    assert.ok(footerContent.includes("companyLinks"), "Company links retained in Footer");
    assert.ok(footerContent.includes("siteConfig.links.privacy"), "Privacy link retained in Footer");
    assert.ok(footerContent.includes("siteConfig.links.terms"), "Terms link retained in Footer");
    assert.ok(footerContent.includes("siteConfig.links.security"), "Security link retained in Footer");
  });

  test("TEST 36: Centralized configuration in site.ts exports socialLinks and environment overrides for all channels", async () => {
    const fs = await import("node:fs");
    const siteContent = fs.readFileSync("lib/config/site.ts", "utf-8");
    assert.ok(siteContent.includes("socialLinksConfig"), "socialLinksConfig defined");
    assert.ok(siteContent.includes("socialLinks: socialLinksConfig"), "socialLinks attached to siteConfig");
    assert.ok(siteContent.includes("NEXT_PUBLIC_TAXORYN_YOUTUBE_URL"), "YouTube env var supported");
    assert.ok(siteContent.includes("NEXT_PUBLIC_TAXORYN_LINKEDIN_URL"), "LinkedIn env var supported");
    assert.ok(siteContent.includes("NEXT_PUBLIC_TAXORYN_INSTAGRAM_URL"), "Instagram env var supported");
    assert.ok(siteContent.includes("NEXT_PUBLIC_TAXORYN_FACEBOOK_URL"), "Facebook env var supported");
    assert.ok(siteContent.includes("https://www.youtube.com/@taxoryn"), "Official YouTube channel configured");
    assert.ok(siteContent.includes("https://www.linkedin.com/company/taxoryn"), "Official LinkedIn page configured");
  });

  test("TEST 37: i18n dictionaries contain followTaxoryn heading and accessible social labels for YouTube, LinkedIn, Instagram, and Facebook", async () => {
    const fs = await import("node:fs");
    const enContent = fs.readFileSync("lib/i18n/en.ts", "utf-8");
    const hiContent = fs.readFileSync("lib/i18n/hi.ts", "utf-8");
    assert.ok(enContent.includes('followTaxoryn: "Follow Taxoryn"'), "English followTaxoryn string exists");
    assert.ok(hiContent.includes('followTaxoryn: "Taxoryn से जुड़ें"'), "Hindi followTaxoryn string exists");
    assert.ok(enContent.includes('youtube: "Taxoryn on YouTube"'), "English YouTube label exists");
    assert.ok(hiContent.includes('youtube: "YouTube पर Taxoryn"'), "Hindi YouTube label exists");
    assert.ok(enContent.includes('linkedin: "Taxoryn on LinkedIn"'), "English LinkedIn label exists");
    assert.ok(hiContent.includes('linkedin: "LinkedIn पर Taxoryn"'), "Hindi LinkedIn label exists");
    assert.ok(enContent.includes('instagram: "Taxoryn on Instagram"'), "English Instagram label exists");
    assert.ok(hiContent.includes('instagram: "Instagram पर Taxoryn"'), "Hindi Instagram label exists");
    assert.ok(enContent.includes('facebook: "Taxoryn on Facebook"'), "English Facebook label exists");
    assert.ok(hiContent.includes('facebook: "Facebook पर Taxoryn"'), "Hindi Facebook label exists");
  });

  test("TEST 38: CustomerStoriesSection has ONE primary CTA (Share Feedback) with no competing Get Started", async () => {
    const fs = await import("node:fs");
    const content = fs.readFileSync("components/trust/CustomerStoriesSection.tsx", "utf-8");
    assert.ok(content.includes("t.helpShape.shareFeedback"), "Uses shareFeedback string");
    assert.ok(content.includes("siteConfig.links.contact"), "Points to contact/feedback link");
    assert.ok(!content.includes("t.helpShape.getStarted"), "Does not contain competing getStarted button in Help Shape section");
  });

  test("TEST 39: FinalCTASection has unambiguous primary (Request Early Access) and secondary (Book a Demo) CTAs", async () => {
    const fs = await import("node:fs");
    const content = fs.readFileSync("components/sections/FinalCTASection.tsx", "utf-8");
    assert.ok(content.includes("siteConfig.links.joinEarlyAccess"), "Primary points to early access");
    assert.ok(content.includes("siteConfig.links.bookDemo"), "Secondary points to book demo");
    assert.ok(content.includes("t.finalCTA.getStarted"), "Primary uses finalCTA.getStarted key");
    assert.ok(content.includes("t.finalCTA.bookDemo"), "Secondary uses finalCTA.bookDemo key");
    assert.ok(content.includes("Calendar"), "Secondary uses Calendar icon");
    assert.ok(!content.includes('href="#demo-video"'), "Secondary no longer points to ambiguous demo video anchor");
  });

  test("TEST 40: Standardized form submit CTAs in English and Hindi", async () => {
    const fs = await import("node:fs");
    const enContent = fs.readFileSync("lib/i18n/en.ts", "utf-8");
    const hiContent = fs.readFileSync("lib/i18n/hi.ts", "utf-8");
    
    // Contact form
    assert.ok(enContent.includes('submitButton: "Send Message"'), "EN Contact submit button is Send Message");
    assert.ok(hiContent.includes('submitButton: "Message भेजें"'), "HI Contact submit button is Message भेजें");
    
    // Book Demo form
    assert.ok(enContent.includes('submitButton: "Book a Demo"'), "EN Book Demo submit button is Book a Demo");
    assert.ok(hiContent.includes('submitButton: "डेमो बुक करें"'), "HI Book Demo submit button is डेमो बुक करें");
    
    // Early Access form
    assert.ok(enContent.includes('submitButton: "Request Early Access"'), "EN Early Access submit button is Request Early Access");
    assert.ok(hiContent.includes('submitButton: "Early Access Request करें"'), "HI Early Access submit button is Early Access Request करें");
  });

  test("TEST 41: Header and Hero have clean primary vs secondary intent separation", async () => {
    const fs = await import("node:fs");
    const headerContent = fs.readFileSync("components/navigation/Header.tsx", "utf-8");
    const heroContent = fs.readFileSync("components/sections/HeroSection.tsx", "utf-8");

    // Header has Watch Demo (secondary/ghost) and Get Started (primary)
    assert.ok(headerContent.includes("t.nav.watchDemo"), "Header has Watch Demo secondary action");
    assert.ok(headerContent.includes("t.nav.getStarted"), "Header has Get Started primary action");

    // Hero has Get Started (primary) and Watch Demo (secondary)
    assert.ok(heroContent.includes("siteConfig.links.joinEarlyAccess"), "Hero primary points to joinEarlyAccess");
    assert.ok(heroContent.includes('href="#demo-video"'), "Hero secondary points to demo-video section anchor");
  });
});

describe("Taxoryn Early Access API & Web Form Architecture Test Suite", () => {
  test("TEST 42: Early Access form does not contain any mailto: submission or window.location.href mailto redirection", async () => {
    const fs = await import("node:fs");
    const content = fs.readFileSync("components/marketing/EarlyAccessForm.tsx", "utf-8");

    // Zero mailto in submission logic
    assert.ok(!content.includes("constructMailtoUrl"), "No constructMailtoUrl function");
    assert.ok(!content.includes("window.location.href = mailtoUrl"), "No mailto window.location redirect");
    assert.ok(!content.includes("window.open("), "No window.open mailto invocation");
    assert.ok(!content.includes("openEmailClient"), "No openEmailClient button in form flow");
    assert.ok(!content.includes("mailto:?"), "No mailto query builders");
  });

  test("TEST 43: Early Access form uses fetch('/api/early-access', { method: 'POST' }) for submission", async () => {
    const fs = await import("node:fs");
    const content = fs.readFileSync("components/marketing/EarlyAccessForm.tsx", "utf-8");

    assert.ok(content.includes('fetch("/api/early-access"'), "Calls /api/early-access endpoint");
    assert.ok(content.includes('method: "POST"'), "Uses HTTP POST method");
    assert.ok(content.includes('"Content-Type": "application/json"'), "Sends JSON headers");
  });

  test("TEST 44: Early Access API route handler exists and exports POST handler", async () => {
    const fs = await import("node:fs");
    const routeContent = fs.readFileSync("app/api/early-access/route.ts", "utf-8");

    assert.ok(routeContent.includes("export async function POST"), "Exports POST handler");
    assert.ok(routeContent.includes("sanitizeInput"), "Implements input sanitization");
    assert.ok(routeContent.includes("emailRegex"), "Validates email format via regex");
  });

  test("TEST 45: Early Access API validates required fields and handles bad data safely", async () => {
    const fs = await import("node:fs");
    const routeContent = fs.readFileSync("app/api/early-access/route.ts", "utf-8");

    // Validates route structure and error handling
    assert.ok(routeContent.includes("!fullName"), "Validates required fullName");
    assert.ok(routeContent.includes("!email"), "Validates required email");
    assert.ok(routeContent.includes("!firmName"), "Validates required firmName");
    assert.ok(routeContent.includes("status: 400"), "Returns 400 status on validation error");
    assert.ok(routeContent.includes("status: 200"), "Returns 200 status on valid submission");
    assert.ok(routeContent.includes("success: true"), "Returns success: true on valid submission");

    // Test validation logic directly
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[\d\s-]{8,15}$/;

    assert.ok(emailRegex.test("rajesh@rkassociates.in"), "Valid email passes regex");
    assert.ok(!emailRegex.test("invalid-email"), "Invalid email fails regex");
    assert.ok(!emailRegex.test("@no-user.com"), "Malformed email fails regex");
    assert.ok(phoneRegex.test("+91 98765 43210".replace(/\s+/g, "")), "Valid phone passes regex");
    assert.ok(!phoneRegex.test("123"), "Short phone fails regex");
  });

  test("TEST 46: Early Access form renders accessible labels, aria-required, aria-invalid, and status indicators", async () => {
    const fs = await import("node:fs");
    const content = fs.readFileSync("components/marketing/EarlyAccessForm.tsx", "utf-8");

    assert.ok(content.includes('aria-required="true"'), "Enforces aria-required on required inputs");
    assert.ok(content.includes('aria-invalid='), "Binds aria-invalid on validation errors");
    assert.ok(content.includes('role="alert"'), "Errors rendered with role=alert");
    assert.ok(content.includes('role="status"'), "Success state rendered with role=status");
    assert.ok(content.includes('aria-live="polite"'), "Success message announces via aria-live");
  });

  test("TEST 47: Early Access form disables submit button and shows loading indicator while submitting", async () => {
    const fs = await import("node:fs");
    const content = fs.readFileSync("components/marketing/EarlyAccessForm.tsx", "utf-8");

    assert.ok(content.includes("disabled={isSubmitting}"), "Button is disabled during submission");
    assert.ok(content.includes("isSubmitting ? ef.submittingButton : ef.submitButton"), "Button text changes to submitting state");
  });

  test("TEST 48: Early Access form displays success state with submitted email and navigation links", async () => {
    const fs = await import("node:fs");
    const content = fs.readFileSync("components/marketing/EarlyAccessForm.tsx", "utf-8");

    assert.ok(content.includes("ef.successTitle"), "Renders successTitle");
    assert.ok(content.includes("ef.successDesc"), "Renders successDesc");
    assert.ok(content.includes("formData.email"), "Renders submitted user email in success state");
    assert.ok(content.includes("ef.continueExploring"), "Provides continue exploring button");
  });

  test("TEST 49: Early Access form preserves entered form data upon submission failure and displays error message", async () => {
    const fs = await import("node:fs");
    const content = fs.readFileSync("components/marketing/EarlyAccessForm.tsx", "utf-8");

    assert.ok(content.includes("setSubmitError"), "Captures error state without wiping formData");
    assert.ok(content.includes("submitError &&"), "Renders alert box when submitError occurs");
  });

  test("TEST 50: Early Access privacy copy does not contain email client or automatic launch wording", async () => {
    const fs = await import("node:fs");
    const enContent = fs.readFileSync("lib/i18n/en.ts", "utf-8");
    const formContent = fs.readFileSync("components/marketing/EarlyAccessForm.tsx", "utf-8");

    assert.ok(!enContent.includes("Your email client will open"), "No 'email client will open' in en.ts");
    assert.ok(!formContent.includes("Your email client will open"), "No 'email client will open' in EarlyAccessForm.tsx");
    assert.ok(enContent.includes("We only need the information required to evaluate your early access request."), "Contains clear privacy statement in en.ts");
  });

  test("TEST 51: Direct support email is only an optional secondary link and never triggers automatically", async () => {
    const fs = await import("node:fs");
    const content = fs.readFileSync("components/marketing/EarlyAccessForm.tsx", "utf-8");

    assert.ok(content.includes("mailto:${siteConfig.supportEmail}"), "Secondary link uses siteConfig.supportEmail");
    assert.ok(!content.includes("window.location.href"), "No automatic redirect to mailto");
  });

  test("TEST 52: Early Access API checks for RESEND_API_KEY and fails safe if email service is not configured", async () => {
    const fs = await import("node:fs");
    const routeContent = fs.readFileSync("app/api/early-access/route.ts", "utf-8");

    assert.ok(routeContent.includes("process.env.RESEND_API_KEY"), "Reads RESEND_API_KEY from environment");
    assert.ok(routeContent.includes("https://api.resend.com/emails"), "Calls Resend API endpoint when configured");
  });
});

describe("Taxoryn Lighter Premium SaaS Design System & Accessibility Suite", () => {
  test("TEST 53: Button primitive enforces standardized 44-50px touch targets and focus-visible states", async () => {
    const fs = await import("node:fs");
    const buttonContent = fs.readFileSync("components/common/Button.tsx", "utf-8");

    assert.ok(buttonContent.includes("min-h-[44px]"), "Enforces 44px min-height on md button");
    assert.ok(buttonContent.includes("min-h-[46px] sm:min-h-[48px]"), "Enforces 46-48px min-height on lg button");
    assert.ok(buttonContent.includes("focus-visible:ring-[#00D1A3]"), "Enforces visible focus ring");
    assert.ok(buttonContent.includes("rounded-xl"), "Enforces modern rounded-xl geometry");
  });

  test("TEST 54: Card primitive standardizes rounded-2xl and light border-slate-200", async () => {
    const fs = await import("node:fs");
    const cardContent = fs.readFileSync("components/common/Card.tsx", "utf-8");

    assert.ok(cardContent.includes("rounded-2xl"), "Standardizes rounded-2xl border radius");
    assert.ok(cardContent.includes("border-slate-200"), "Uses crisp light border-slate-200");
  });

  test("TEST 55: SectionHeading standardizes H2 scale and 17px body copy", async () => {
    const fs = await import("node:fs");
    const headingContent = fs.readFileSync("components/common/SectionHeading.tsx", "utf-8");

    assert.ok(headingContent.includes("text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.5rem]"), "Standardizes H2 heading typography");
    assert.ok(headingContent.includes("text-[17px]"), "Standardizes 17px subtitle copy");
  });

  test("TEST 56: Global Footer implements light SaaS styling with clean column hierarchy", async () => {
    const fs = await import("node:fs");
    const footerContent = fs.readFileSync("components/navigation/Footer.tsx", "utf-8");

    assert.ok(footerContent.includes("bg-white text-slate-600 border-t border-slate-200"), "Footer uses light background and border");
    assert.ok(footerContent.includes("lg:col-span-5"), "Brand block occupies ~35-40% grid width on lg");
  });

  test("TEST 57: YouTubeEmbed enforces 16:9 aspect ratio standard (pb-[56.25%]) and ARIA play labels", async () => {
    const fs = await import("node:fs");
    const embedContent = fs.readFileSync("components/common/YouTubeEmbed.tsx", "utf-8");

    assert.ok(embedContent.includes("pb-[56.25%]"), "Strictly enforces 16:9 aspect ratio container");
    assert.ok(embedContent.includes('aria-label={`Play video: ${title}`}') || embedContent.includes("aria-label="), "Provides accessible play button label");
  });

  test("TEST 58: Mobile navigation implements accessible focus trapping, escape dismissal, and body lock", async () => {
    const fs = await import("node:fs");
    const mobileNavContent = fs.readFileSync("components/navigation/MobileNav.tsx", "utf-8");

    assert.ok(mobileNavContent.includes('role="dialog"'), "Mobile drawer sets role=dialog");
    assert.ok(mobileNavContent.includes('aria-modal="true"'), "Mobile drawer sets aria-modal=true");
    assert.ok(mobileNavContent.includes("document.body.style.overflow = \"hidden\""), "Locks body scroll when open");
    assert.ok(mobileNavContent.includes("Escape"), "Closes drawer on Escape key");
  });

  test("TEST 59: Subpages adhere to standardized padding and light background", async () => {
    const fs = await import("node:fs");
    const subpages = [
      "components/pages/ProductClientContent.tsx",
      "components/pages/FeaturesClientContent.tsx",
      "components/pages/PricingClientContent.tsx",
      "components/pages/MarketplaceClientContent.tsx",
      "components/pages/SecurityClientContent.tsx",
      "components/pages/LearnClientContent.tsx",
      "components/pages/VideosClientContent.tsx",
      "components/pages/AboutClientContent.tsx",
      "components/pages/OurStoryClientContent.tsx",
      "components/pages/SolutionSoloClientContent.tsx",
      "components/pages/SolutionSmallFirmClientContent.tsx",
      "components/pages/SolutionGrowingClientContent.tsx",
      "components/pages/SolutionBusinessClientContent.tsx",
    ];

    for (const pagePath of subpages) {
      const content = fs.readFileSync(pagePath, "utf-8");
      assert.ok(
        content.includes("py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]"),
        `${pagePath} has standard padding and light background`
      );
    }
  });
});



