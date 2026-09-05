# Taxoryn Marketing Website (`taxoryn-marketing`)

The official public marketing website for **Taxoryn** ([taxoryn.com](https://taxoryn.com)) — the all-in-one SaaS practice management platform designed for Indian tax professionals, Chartered Accountants, and tax consultancy firms.

---

## 1. Project Purpose

This repository powers the high-performance public marketing website for Taxoryn. It communicates Taxoryn's value proposition, showcases product capabilities across GST, ITR, TDS, Tasks, and Documents, introduces the Taxoryn Marketplace, builds practitioner trust, and channels prospective customers to the core SaaS application ([app.taxoryn.com](https://app.taxoryn.com)).

### Primary Conversion Journey:
```
Visitor → Understand Taxoryn → Explore Product / Solutions → Choose CTA → Join Early Access (/early-access) OR Book Demo (/book-demo) → Qualified Lead → Sales Follow-up / Onboarding
```

---

## 1.1 Conversion Architecture (W2)

- **Centralized CTA Configuration**: All conversion links and application endpoints are configured in `lib/config/site.ts` (`siteConfig.links.joinEarlyAccess`, `siteConfig.links.bookDemo`, `siteConfig.links.login`, `siteConfig.supportEmail`).
- **Early Access Route** (`/early-access`): Practice onboarding form collecting professional contact and practice scale details without demanding sensitive tax credentials.
- **Book a Demo Route** (`/book-demo`): 20-minute tailored practice walkthrough request form.
- **Truthful Submission Architecture**: In the current phase without a marketing CRM backend, forms prepare structured inquiries and open the visitor's default email client addressed to `support@taxoryn.com` with clear user feedback and fallback mechanisms. This frontend architecture provides clean drop-in points for future API/CRM lead capture endpoints.
- **Marketing Campaign Context & UTM Support**: Both conversion forms support optional campaign parameters (`source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`) and sanitize inputs without storing private data.

---

## 1.2 Analytics & Measurement Architecture (W6)

Taxoryn Marketing implements a **privacy-conscious, fail-safe analytics measurement layer** designed to understand aggregate marketing traffic and conversion intent without tracking personal identity, tax records, or financial information.

### Core Privacy Principles:
1. **Zero Personal Identifiers**: Analytics NEVER collects or transmits visitor names, email addresses, phone numbers, or firm names.
2. **Zero Statutory / Financial Data**: We strictly avoid collecting PAN, GSTIN, Aadhaar, return computations, or documents.
3. **No Invasive Tracking**: Zero session recording (no Hotjar/Clarity), zero keystroke tracking, and zero fingerprinting.
4. **User Consent**: Transparent, non-manipulative consent banner (`AnalyticsConsentBanner.tsx`) storing preferences in `localStorage`.
5. **Fail-Safe Execution**: Analytics failures never interrupt page rendering, block navigation, or fail form submissions.

### Supported Events Catalog (`lib/analytics/events.ts`):
- `page_view`: Route path, page title, referrer, sanitized UTM parameters.
- `cta_click`: CTA name, location, destination, audience segment.
- `navigation_click`: Navigation link destination and header/footer location.
- `resource_open`: Resource slug and category.
- `resource_category_select`: Category filter switch on `/resources`.
- `product_preview_select`: Tab selection in the 6-module interactive product preview.
- `marketplace_cta_click`: Marketplace interest click (audience: customer vs practice).
- `early_access_view`: Visitor view of `/early-access`.
- `early_access_form_start`: First interaction with the early access form.
- `early_access_submit_intent`: Mailto intent triggered (sends only aggregate practice size & primary interest).
- `book_demo_view`: Visitor view of `/book-demo`.
- `book_demo_form_start`: First interaction with the demo booking form.
- `book_demo_submit_intent`: Mailto intent triggered (sends only practice size, demo focus, contact method).
- `external_app_click`: Links navigating to `app.taxoryn.com` (login/register).

### Environment Configuration:
Configure analytics via `.env.local` (see `.env.example`):
```bash
# Enable analytics (disabled by default in development)
NEXT_PUBLIC_ANALYTICS_ENABLED=false

# Provider abstraction ('custom', 'plausible', 'google-analytics', 'none')
NEXT_PUBLIC_ANALYTICS_PROVIDER=custom

# Development debugging (logs sanitized payloads to console when true)
NEXT_PUBLIC_ANALYTICS_DEBUG=false
```

---

## 2. Technology Stack

- **Framework**: Next.js 15+ (App Router, Server Components by default)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v3 with centralized Taxoryn design tokens
- **Icons**: Lucide React
- **Typography**: Inter (Google Fonts via `next/font/google`)
- **SEO & Metadata**: Next.js Metadata API, dynamic Open Graph, Twitter Cards, `robots.ts`, `sitemap.ts`, Schema.org SoftwareApplication, FAQPage & Article JSON-LD

---

## 3. Domain Architecture

| Domain | Role | Target |
| :--- | :--- | :--- |
| `taxoryn.com` | Public Marketing Website | This repository (`taxoryn-marketing`) |
| `app.taxoryn.com` | Core SaaS Application | `https://app.taxoryn.com` |
| `api.taxoryn.com` | SaaS Backend API | `https://api.taxoryn.com` |

All external links (e.g., `Start Free`, `Login`) are centralized in `lib/config/site.ts`.

---

## 4. Project Structure

```
taxoryn-marketing/
├── app/
│   ├── layout.tsx                # Root layout with Inter font, SEO, AnalyticsTracker, ConsentBanner & Header/Footer
│   ├── page.tsx                  # Complete Homepage with all core sections, FAQ, and Cohort Notice
│   ├── globals.css               # Design tokens, custom utilities, animation classes
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── sitemap.ts                # Dynamic sitemap.xml
│   ├── product/page.tsx          # Product overview & 5-stage practice lifecycle
│   ├── features/page.tsx         # Features overview & 4 problem-solution pillars
│   ├── solutions/
│   │   ├── page.tsx              # Solutions overview
│   │   ├── solo-practitioner/    # Solo practitioner solution
│   │   ├── small-firm/           # Small tax firm solution
│   │   └── growing-practice/     # Growing practice solution
│   ├── marketplace/page.tsx      # Taxoryn Marketplace page
│   ├── pricing/page.tsx          # Pricing practice tiers & FAQ
│   ├── security/page.tsx         # Security architecture & boundaries page
│   ├── about/page.tsx            # About mission, principles & boundaries page
│   ├── contact/page.tsx          # Book a Demo / Contact page
│   ├── resources/
│   │   ├── page.tsx              # Resources hub with search & category filters
│   │   └── [slug]/page.tsx       # Cornerstone tax guides with Article schema
│   ├── early-access/page.tsx     # Early access onboarding flow
│   ├── book-demo/page.tsx        # Book a demo flow
│   ├── privacy/page.tsx          # Privacy policy with analytics disclosure
│   └── terms/page.tsx            # Terms of service
├── components/
│   ├── analytics/                # AnalyticsTracker, AnalyticsConsentBanner
│   ├── common/                   # Reusable UI primitives (Button, Container, SectionHeading, Badge, Card)
│   ├── navigation/               # Header, MobileNav, Footer, Logo
│   ├── marketing/                # ProductPreview, CapabilityCard, WorkflowDiagram, TrustStrip, EarlyAccessForm, BookDemoForm
│   ├── resources/                # ResourceSearchFilter, ArticleCard, ArticleContentRenderer, TaxDisclaimer
│   ├── trust/                    # FAQSection, CustomerStoriesSection
│   └── sections/                 # Marketing sections (Hero, Problem, Solution, Capabilities, Showcase, Marketplace, ClientExperience, Security, SolutionsSegment, FinalCTA)
├── lib/
│   ├── analytics/                # Privacy-safe analytics abstraction & event catalog
│   ├── config/                   # Centralized configuration (site.ts, navigation.ts, brand.ts, analytics.ts)
│   ├── content/                  # Cornerstone resources & centralized FAQ datasets
│   └── seo/                      # SEO metadata & JSON-LD generators (metadata.ts)
├── public/
│   ├── brand/                    # Official SVG brand assets (logo.svg, logo-symbol.svg, favicon.svg)
│   └── favicon.svg               # Public favicon
├── types/                        # Strict TypeScript interfaces
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── README.md
```

---

## 5. Local Development Setup

### Prerequisites
- Node.js 18.18+ or 20+ (Node.js 22+ recommended)
- npm 9+ or npm 11+

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/taxoryn/taxoryn-marketing.git
cd taxoryn-marketing

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 6. Build and Verification Commands

```bash
# Type check TypeScript without emitting files
npm run type-check

# Build for production
npm run build

# Start production server locally
npm run start

# Run Next.js linter
npm run lint
```

---

## 7. Security & Governance

- This is a static/SSR marketing application with **zero exposed secrets or database credentials**.
- Authentication, customer databases, and sensitive APIs reside exclusively on `app.taxoryn.com` and `api.taxoryn.com`.
