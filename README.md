# Taxoryn Marketing Website (`taxoryn-marketing`)

The official public marketing website for **Taxoryn** ([taxoryn.com](https://taxoryn.com)) — the all-in-one SaaS practice management platform designed for Indian tax professionals, Chartered Accountants, and tax consultancy firms.

---

## 1. Project Purpose

This repository powers the high-performance public marketing website for Taxoryn. It communicates Taxoryn's value proposition, showcases product capabilities across GST, ITR, TDS, Tasks, and Documents, introduces the Taxoryn Marketplace, builds practitioner trust, and channels prospective customers to the core SaaS application ([app.taxoryn.com](https://app.taxoryn.com)).

### Primary Conversion Journey:
```
Visitor → Understand Taxoryn → Explore Product → See Features → See Marketplace → See Pricing → Start Free / Book Demo → Taxoryn Application
```

---

## 2. Technology Stack

- **Framework**: Next.js 15+ (App Router, Server Components by default)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v3 with centralized Taxoryn design tokens
- **Icons**: Lucide React
- **Typography**: Inter (Google Fonts via `next/font/google`)
- **SEO & Metadata**: Next.js Metadata API, dynamic Open Graph, Twitter Cards, `robots.ts`, `sitemap.ts`, Schema.org SoftwareApplication JSON-LD

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
│   ├── layout.tsx                # Root layout with Inter font, SEO & Header/Footer
│   ├── page.tsx                  # Complete Homepage with all 11 core sections
│   ├── globals.css               # Design tokens, custom utilities, animation classes
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── sitemap.ts                # Dynamic sitemap.xml
│   ├── product/page.tsx          # Product overview scaffold
│   ├── features/page.tsx         # Features overview scaffold
│   ├── solutions/
│   │   ├── page.tsx              # Solutions overview scaffold
│   │   ├── solo-practitioner/    # Solo practitioner solution
│   │   ├── small-firm/           # Small tax firm solution
│   │   └── growing-practice/     # Growing practice solution
│   ├── marketplace/page.tsx      # Taxoryn Marketplace page
│   ├── pricing/page.tsx          # Pricing page
│   ├── security/page.tsx         # Security architecture page
│   ├── about/page.tsx            # About mission page
│   ├── contact/page.tsx          # Book a Demo / Contact page
│   ├── resources/page.tsx        # Tax resources & knowledge hub
│   ├── privacy/page.tsx          # Privacy policy
│   └── terms/page.tsx            # Terms of service
├── components/
│   ├── common/                   # Reusable UI primitives (Button, Container, SectionHeading, Badge, Card)
│   ├── navigation/               # Header, MobileNav, Footer, Logo
│   ├── marketing/                # ProductPreview, CapabilityCard, WorkflowDiagram, TrustStrip
│   └── sections/                 # 11 homepage sections (Hero, Trust, Problem, Solution, Capabilities, Showcase, Marketplace, ClientExperience, Security, SolutionsSegment, FinalCTA)
├── lib/
│   ├── config/                   # Centralized configuration (site.ts, navigation.ts, brand.ts)
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

## 5. Design Tokens & Brand System

| Design Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Navy** | `#082E5B` | Primary brand color, hero accents, main headings |
| **Dark Navy** | `#07152B` | Dark section backgrounds, header accents |
| **Obsidian** | `#070C1A` | Dark cards, deep contrast backgrounds |
| **Primary Teal** | `#00D1A3` | Primary brand accent, primary CTA highlight, active states |
| **Teal Dark** | `#00B388` | Teal hover states, borders |
| **Emerald** | `#059669` | Success badges, verified indicators |
| **Cyan** | `#0EA5E9` | Secondary accents, gradient highlights |
| **Light Cyan** | `#38BDF8` | Glows, subtle highlights |
| **Background** | `#F8FAFC` | Main page background |
| **Primary Text** | `#0F172A` | High contrast headings and primary body text |
| **Secondary Text**| `#475569` | Body text, subheadings |
| **Muted Text** | `#64748B` | Footnotes, captions, small labels |
| **Border** | `#E2E8F0` | Default clean borders |
| **Strong Border** | `#CBD5E1` | Interactive borders |

---

## 6. Local Development Setup

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

## 7. Build and Verification Commands

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

## 8. Deployment Instructions (Vercel)

1. Push this repository to GitHub / GitLab / Bitbucket.
2. In the Vercel Dashboard, click **Add New Project** and import `taxoryn-marketing`.
3. Framework Preset: **Next.js**
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Click **Deploy**.

### Custom Domain Configuration (Vercel):
- Add domain `taxoryn.com` and `www.taxoryn.com`.
- Configure DNS A Record pointing `taxoryn.com` to `76.76.21.21` (or Vercel CNAME `cname.vercel-dns.com` for `www`).
- Ensure `app.taxoryn.com` points to your core SaaS application infrastructure independently.

---

## 9. Security & Governance

- This is a static/SSR marketing application with **zero exposed secrets or database credentials**.
- Authentication, customer databases, and sensitive APIs reside exclusively on `app.taxoryn.com` and `api.taxoryn.com`.
