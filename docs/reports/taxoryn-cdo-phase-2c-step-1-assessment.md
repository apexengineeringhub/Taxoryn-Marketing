# TAXORYN CDO PHASE 2C — STEP 1: SECONDARY PAGES ASSESSMENT
## Design, UX, Content, and Implementation Preflight Audit

**Date:** 2026-11-21  
**Repository (Marketing):** `D:\Projects\Taxoryn-Marketing`  
**Repository (Product Reference - READ-ONLY):** `D:\Projects\Taxoryn`  
**Role:** Chief Design Officer and Senior SaaS Product Designer  
**Scope:** Secondary Pages (`/platform`, `/how-it-works`, `/about`, `/download`, `/early-access`), Shared Components, Product Accuracy, and Architecture Preflight  
**Mode:** READ-ONLY Assessment (Zero source file modifications)  

---

## 1. Executive Summary

Following the successful execution and certification of Phase 1 (Responsive Navigation Integrity, 10-viewport zero blackout) and Phase 2A/2B (Header Refinement, Master Logo Governance, and Eight-Act Homepage Narrative), this assessment conducts a rigorous preflight audit of the Taxoryn marketing website's secondary pages before Phase 2C implementation.

### Key Assessment Findings:
1. **Brand Governance Alignment:** The authoritative Taxoryn application master logo (`markVariant="master"`, MD5: `e9ece59e5258823f`) and official brand guidelines (Navy `#07152B`, Mint `#00D1A3`, accessible text mint `#008766` / `#009E77`, Inter typography) are strictly maintained. No unauthorized rebranding or logo substitution has occurred.
2. **Text-Heavy Content & Visual Monotony on `/platform`:** The Platform page contains 296 lines of dense text across four stacked vertical cards with zero authentic product screenshots, zero interactive previews, and no alternating layout rhythm. The connecting flow illustration still utilizes a dark obsidian background (`bg-[#07152B]`) that conflicts with the light-mode SaaS aesthetic established in Phase 2B.
3. **Disjointed Step Presentation on `/how-it-works`:** The 4-step operating model is presented as four isolated cards without a visual timeline connector or progress spine. On mobile viewports, the grid structure creates awkward vertical spacing.
4. **Severe Typography Defect on `/about` (Body Copy at `text-xs`):** Substantial portions of narrative body copy, founder story paragraphs, and core values descriptions on `/about` (`AboutClientContent.tsx`) are styled with `text-xs` (12px), causing severe readability degradation on standard monitors. Additionally, raw `#00D1A3` is used on light backgrounds, failing WCAG AA contrast standards.
5. **APK Metadata Consistency on `/download`:** The package name (`com.taxoryn.mobile`), version (`1.0.0`), and permissions (Camera, Biometrics) accurately reflect the Expo React Native application in `D:\Projects\Taxoryn\mobile\app.json`. However, file size representations exhibit minor discrepancies (`~77 MB` vs `80.8 MB`), which require normalization.
6. **Robust Form Architecture on `/early-access`:** The form implementation is technically sound, utilizing strict client-side validation, accessible ARIA attributes (`aria-required`, `aria-invalid`, `role="alert"`), non-PII analytics sanitization, and graceful degradation via Cloudflare Pages Function (`functions/api/early-access.ts`). However, on mobile viewports, the stacked trust card pushes the first input field below the fold.

---

## 2. Page-by-Page Detailed Assessment

### 2.1 `/platform` (The Taxoryn Platform Architecture)
- **Current State:**
  - Hero section introduces the four core platform processes: *Smart Work Management*, *Smart Client Management*, *Smart Document Management*, and *Practice Intelligence*.
  - A 4-step horizontal process bar (*How the Four Dimensions Work Together*) is housed in a dark container (`bg-[#07152B]`).
  - Four large stacked vertical white cards (`p-6 sm:p-10 rounded-2xl bg-white border border-slate-200/90`) detail each process with a subtitle, narrative description, 5 checklist capabilities, and a callout box ("Practical Value for Practitioners").
- **Issues Identified:**
  1. *Visual Monotony & Wall of Text (P1):* All four processes are displayed in identical vertical text boxes. There are no authentic UI screenshots, no interactive mini-workbenches, and no visual breathing room.
  2. *Color Inconsistency in Architecture Diagram (P1):* Lines 160–203 wrap the four flow steps in `bg-[#07152B]` and `bg-slate-900/90`. In Phase 2B, all core product mockups and showcase containers were transitioned to clean light mode (`bg-[#F8FAFC]`, `bg-white`, `border-slate-200/90`). This dark block creates an abrupt aesthetic disconnect.
  3. *Terminology Divergence from Product (P2):* Line 45 states task statuses as *"Not Started, In Data Gathering, Drafting, Partner Review, and Client Sign-off"*. While close in concept, the authoritative product in `D:\Projects\Taxoryn\frontend\src\utils\workOperatingBoardUtils.ts` uses six standardized Kanban statuses: `To Do / Not Started`, `In Progress`, `Blocked / Action Needed`, `Under Review`, `Ready for Filing`, `Completed`. Aligning these builds product-level authenticity.
  4. *Top Action Button Contrast (P2):* Line 136 uses `variant="outline"` for the secondary button *"Sign In to Web App"*, whereas other high-converting sections utilize standardized secondary button styling.

---

### 2.2 `/how-it-works` (Practice Operating Workflow)
- **Current State:**
  - Presents a 4-step workflow:
    - Step 01: *Organize Client Records* (Client 360, PAN/GSTIN directory)
    - Step 02: *Track Statutory Compliance* (Compliance calendar, worklists)
    - Step 03: *Serve Clients Seamlessly* (Document collection links, client portal)
    - Step 04: *Operate with Intelligence* (Capacity management, turnaround benchmarks)
  - Bottom CTA box invites users to request early access or sign in to the web app.
- **Issues Identified:**
  1. *Lack of Visual Connectivity / Broken Timeline (P1):* The four steps appear as separate, disconnected cards (`space-y-12 sm:space-y-16`). There is no visual timeline connector (vertical spine on mobile, connected horizontal flow or sequential numbering trail) linking Step 01 through Step 04 into a unified lifecycle.
  2. *Absence of Authentic Visual Evidence (P1):* Each step relies exclusively on text bullets. Introducing small authentic UI elements (e.g., sample compliance status tag for Step 2, document upload chip for Step 3, client entity lockup for Step 1) would dramatically increase practitioner engagement.
  3. *Mobile Column Stacking Rhythm (P2):* Lines 112–122 use `md:col-span-3` for the number badge and `md:col-span-9` for content. On viewports $<768\text{px}$, the badge sits awkwardly above the title without a clear horizontal anchor.

---

### 2.3 `/about` (Mission, Origin Story, and Operating Principles)
- **Current State:**
  - Client component rendered via `components/pages/AboutClientContent.tsx`.
  - Sections:
    1. Mission Hero: *Empowering Indian Tax Practices*
    2. Why We Built Taxoryn: Authentic founder origin story and highlighted quote
    3. Core Principles: 4 values cards (*Practitioner First*, *Data Dignity & Security*, *Calm Software*, *Reliable Architecture*)
    4. What Taxoryn Is vs What It Does Not Replace: Comparative boundary matrix
    5. Final CTA Section
- **Issues Identified:**
  1. *Severe Typography Defect — Body Copy Rendered at `text-xs` (P0):*
     - Lines 67, 70, 81: Origin story body paragraphs are explicitly styled with `text-xs sm:text-sm text-slate-600` (12px on mobile/desktop small).
     - Line 111: Value descriptions in principle cards use `text-xs text-slate-600`.
     - Line 129: Boundary section subtitle uses `text-xs text-slate-500`.
     - Line 152: Boundary list items use `text-xs text-slate-700`.
     - *Impact:* Critical narrative text is unnaturally small, severely impacting readability, accessibility, and brand authority. Primary narrative text must be at least `text-sm sm:text-base` (15–16px), conforming to standard design system typography scale.
  2. *Accessibility Contrast Failure on Light Backgrounds (P1):*
     - Line 78: Quote subtext uses `text-xs text-[#00D1A3] font-semibold`. Mint `#00D1A3` on `bg-slate-50` or white has a contrast ratio of only ~2.1:1, failing WCAG AA (requires $\ge 4.5:1$).
     - Line 154: Bullet points use `text-[#00D1A3]`.
     - *Remedy:* Enforce accessible text mint `#008766` or `#009E77` (contrast $> 4.8:1$) for all text and inline glyphs on light surfaces.
  3. *Hero Section Padding (P2):* The outer wrapper has `py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]` enclosing `SectionHeading`, creating redundant vertical padding before the origin card.

---

### 2.4 `/download` (Android APK & Web Application Access)
- **Current State:**
  - Dual access cards: Android Mobile APK (`bg-[#07152B]`) and Web Application (`bg-[#F8FAFC]`).
  - Compatibility specification table for Android (min Android version, file size, distribution, SHA-256).
  - Step-by-step 4-stage guide on installing the APK from mobile browsers ("Allow from this source", "Download anyway", etc.).
  - Direct distribution disclosure statement.
- **Issues Identified:**
  1. *File Size String Inconsistency (P2):*
     - Line 132 renders `{androidConfig.fileSizeEstimate} (80.8 MB)`.
     - In `lib/config/site.ts`, `fileSizeEstimate` is defined as `"~77 MB"` and `fileSizeBytes` as `80810614` (~77.06 MiB / 80.81 MB). Displaying two differing numbers side-by-side (`~77 MB (80.8 MB)`) creates minor user confusion. It should be standardized to `"77.1 MB (80.8 MB on disk)"` or cleanly formatted as `"~77 MB APK"`.
  2. *Card Visual Weight Discrepancy (P2):* The Android card uses full dark navy (`bg-[#07152B]`, heavy shadow) while the Web App card uses light grey (`bg-[#F8FAFC]`). While visually striking, the dark card's inner spec table (`bg-slate-900/90`) has tighter contrast than the rest of the site.
  3. *Honest Fallback Verification (Passed):* When `NEXT_PUBLIC_ANDROID_DOWNLOAD_URL` is empty, `isAvailable` correctly defaults to `false`, rendering an honest amber advisory notice (*"Direct APK download is currently being prepared for official release"*) and routing to Early Access. This prevents broken 404 links.

---

### 2.5 `/early-access` (Practice Onboarding Form)
- **Current State:**
  - Client component rendered via `components/marketing/EarlyAccessForm.tsx`.
  - Left column: Practice Program details card + Confidentiality Commitment card.
  - Right column: Multi-field onboarding application form (Full Name, Work Email, Firm Name, Phone, City, Practice Size, Primary Interest).
  - Submits to `POST /api/early-access` backed by Cloudflare Pages Function `functions/api/early-access.ts`.
- **Issues Identified:**
  1. *Mobile Viewport Height & Fold Pressure (P1):*
     - On mobile screens (375px/390px), the left column (Practice Program card + Privacy card) stacks above the form.
     - A mobile visitor must scroll past ~450px of introductory cards before reaching the first form input (`Full Name`).
     - *Remedy:* On mobile screens ($<1024\text{px}$), reorder the layout so the form appears first, or condense the trust points into a compact benefit strip below the form header.
  2. *Redundant Headline (P2):* The form card contains an inner `<h3>{ef.submitButton}</h3>` which displays "Request Early Access" directly above the first input, duplicating the page heading "Get Started with Taxoryn".
  3. *Submit Intent Tracking (Passed):* Lines 113–118 track `early_access_submit_intent` with boolean flags only (`has_city`, `has_phone`, `practice_size`), completely stripping PII.

---

## 3. Product Accuracy and Feature Verification Matrix

Every material capability claimed across the secondary pages was cross-referenced against the actual product source code in `D:\Projects\Taxoryn`:

| # | Marketing Claim | Page & Component | Product Implementation Evidence (`D:\Projects\Taxoryn`) | Verification Status | Notes / Remediation |
|:---|:---|:---|:---|:---:|:---|
| **1** | Pre-built compliance checklists for GSTR-1, GSTR-3B, TDS (24Q/26Q), and ITR | `/platform`<br>`PlatformPage.tsx:43` | `frontend/src/pages/ComplianceWorkbenchPage.tsx`<br>`frontend/src/pages/ComplianceCalendarPage.tsx` | **VERIFIED** | Accurately implemented with statutory due date mappings in frontend and backend. |
| **2** | Role-based task allocation between partners, managers, and articles | `/platform`<br>`PlatformPage.tsx:44` | `frontend/src/types/index.ts`<br>`frontend/src/pages/TeamManagementPage.tsx` | **VERIFIED** | Distinct user roles (`PARTNER`, `MANAGER`, `ASSOCIATE`, `ARTICLE`) exist with assigned work inventory. |
| **3** | Task workflow statuses: "Not Started, In Data Gathering, Drafting, Partner Review, Client Sign-off" | `/platform`<br>`PlatformPage.tsx:45` | `frontend/src/utils/workOperatingBoardUtils.ts:13-60` (`KANBAN_COLUMNS`) | **PARTIALLY VERIFIED** | Product statuses are `NOT_STARTED`, `IN_PROGRESS`, `BLOCKED`, `UNDER_REVIEW`, `READY_FOR_FILING`, `COMPLETED`. Align copy to exact Kanban statuses. |
| **4** | Digital signature (DSC) expiry tracking | `/platform`<br>`PlatformPage.tsx:80` | `frontend/src/pages/DscRegisterPage.tsx` | **VERIFIED** | Complete DSC register with expiry calculation, client mapping, and reminder thresholds. |
| **5** | UDIN register integration and tracking | `/platform`<br>`PlatformPage.tsx:80` | `frontend/src/pages/UdinRegisterPage.tsx` | **VERIFIED** | Dedicated UDIN register tracking document type, client PAN, partner sign-off, and ICAI UDIN status. |
| **6** | Single Client 360 profile with PAN, state-wise GSTINs, and CIN | `/platform`, `/how-it-works`<br>`PlatformPage.tsx:60` | `frontend/src/pages/Client360Page.tsx`<br>`frontend/src/pages/ClientsPage.tsx` | **VERIFIED** | Comprehensive client master supporting multiple state GSTINs, entity PAN, and stakeholder records. |
| **7** | Client document collection requests with direct upload links | `/platform`, `/how-it-works`<br>`PlatformPage.tsx:77` | `frontend/src/pages/DocumentsPage.tsx`<br>`frontend/src/pages/CustomerOnboardingPortalPage.tsx` | **VERIFIED** | Tokenized external client upload links generated directly from document request worklists. |
| **8** | Practice Intelligence workload distribution and turnaround analytics | `/platform`<br>`PlatformPage.tsx:94-96` | `frontend/src/pages/ReportsPage.tsx`<br>`frontend/src/pages/DashboardPage.tsx` | **VERIFIED** | Implemented through practice capacity reports and executive dashboard widgets. |
| **9** | Bulk data migration from Tally, Excel, and CSV | `/download`<br>`DownloadPage.tsx:249` | `frontend/src/pages/ClientMigrationHubPage.tsx`<br>`GstDataMigrationHubPage.tsx` | **VERIFIED** | Verified migration hubs for client master, GST registers, and TDS records. |
| **10** | Android app package `com.taxoryn.mobile`, v1.0.0, Camera & Biometric permissions | `/download`<br>`DownloadPage.tsx:116` | `mobile/app.json:2-20`<br>`mobile/package.json:3` | **VERIFIED** | Exact package name, version 1.0.0, `CAMERA`, `USE_BIOMETRIC`, and `USE_FINGERPRINT` permissions confirmed. |
| **11** | Direct verified APK with Scheme v2 signing | `/download`<br>`DownloadPage.tsx:136` | `lib/config/site.ts:75-76` | **VERIFIED** | Verified cryptographic certificate SHA-256 and package digest documented in release metadata. |

---

## 4. Prioritized Issues Catalog (P0 / P1 / P2)

| Issue ID | Page / Component | Finding & Current Behavior | Recommended Change | Priority | Depends on Phase 2B Visual Acceptance? |
|:---|:---|:---|:---|:---:|:---:|
| **ISS-2C-01** | `/about`<br>`AboutClientContent.tsx:67,70,81,111,152` | **Severe Typography Defect:** Body copy, founder story, core values, and boundary items are styled at `text-xs` (12px), making narrative unreadable. | Standardize body typography to `text-sm sm:text-base` (15–16px) with `leading-relaxed`. Align with design system primitives. | **P0** | No (Independent) |
| **ISS-2C-02** | `/about`<br>`AboutClientContent.tsx:78,154` | **Accessibility Contrast Failure:** Raw mint `#00D1A3` is used for text and bullets on light background (contrast ratio ~2.1:1, failing WCAG AA). | Replace with accessible dark mint `#008766` or `#009E77` (contrast $> 4.8:1$). | **P1** | No (Independent) |
| **ISS-2C-03** | `/platform`<br>`PlatformPage.tsx:160-203` | **Dark Container Inconsistency:** Flow illustration uses dark obsidian container (`bg-[#07152B]`), clashing with light-mode platform narrative. | Redesign into light-mode connected flow card matching Phase 2B light aesthetic (`bg-[#F8FAFC]`, `border-slate-200/90`). | **P1** | Yes (Adheres to Phase 2B light chrome standard) |
| **ISS-2C-04** | `/platform`<br>`PlatformPage.tsx:212-257` | **Visual Monotony & Wall of Text:** All 4 pillars are stacked identical text cards with zero authentic UI previews or alternating rhythm. | Introduce alternating 2-column layout (Text + Authentic Light UI Preview Card) for each pillar, similar to Phase 2B. | **P1** | Yes (Reuses Phase 2B authentic preview cards) |
| **ISS-2C-05** | `/how-it-works`<br>`HowItWorksPage.tsx:107-147` | **Disconnected Workflow Presentation:** 4 steps appear as isolated boxes with no visual timeline spine or connecting flow. | Implement connected vertical timeline spine on mobile and sequential workflow connectors on desktop. | **P1** | No (Independent) |
| **ISS-2C-06** | `/early-access`<br>`EarlyAccessForm.tsx:200-255` | **Mobile Usability & Form Placement:** Trust cards stack above the form on mobile, forcing ~450px of scrolling before reaching the first input field. | Reorder flex layout on mobile (`order-1` for form, `order-2` for trust cards) or condense trust cards into a compact summary strip. | **P1** | No (Independent) |
| **ISS-2C-07** | `/platform`<br>`PlatformPage.tsx:45` | **Terminology Drift:** Lists task statuses as "In Data Gathering, Drafting, Partner Review, Client Sign-off" instead of actual product Kanban statuses. | Align copy with official product statuses: *To Do / Not Started, In Progress, Blocked / Action Needed, Under Review, Ready for Filing, Completed*. | **P2** | No (Independent) |
| **ISS-2C-08** | `/download`<br>`DownloadPage.tsx:132` | **File Size Ambiguity:** Displays `~77 MB (80.8 MB)` side-by-side, creating minor confusion between disk size and transfer size. | Standardize to `"~77 MB APK package (80.8 MB installed)"` or `"~77 MB download"`. | **P2** | No (Independent) |
| **ISS-2C-09** | `/early-access`<br>`EarlyAccessForm.tsx:307` | **Redundant Form Header:** Inner `<h3>` repeats "Request Early Access" directly above the form inputs. | Replace with contextual guidance: *"Complete your practice profile to evaluate early access"*. | **P2** | No (Independent) |
| **ISS-2C-10** | `/platform`<br>`PlatformPage.tsx:134-141` | **Button Styling Inconsistency:** Top secondary button uses `variant="outline"`, lacking explicit contrast consistency. | Standardize to design system `Button` variant with high-contrast text and border. | **P2** | No (Independent) |

---

## 5. Responsive and Accessibility Observations across 10 Viewports

| Viewport | Target Device | Responsive Assessment across Secondary Pages | Accessibility & Usability Status |
|:---|:---|:---|:---:|
| **375px** | iPhone SE | - `/early-access`: Input labels remain legible; left trust card causes vertical scroll delay.<br>- `/about`: Text at `text-xs` is extremely strained to read.<br>- `/platform`: Long vertical scroll due to stacked cards. Zero horizontal overflow. | **PASS** (Zero overflow; typography fix needed) |
| **390px** | iPhone 12/13/14 | - Forms and buttons maintain full 44px+ touch targets.<br>- Modal drawer navigation functions smoothly with backdrop lock. | **PASS** |
| **430px** | iPhone Pro Max | - Comfortable reading width; button tap targets clear. | **PASS** |
| **768px** | iPad Mini | - Tablet navigation trigger handoff verified in Phase 1.<br>- 2-column grid collapses cleanly on `/platform` and `/how-it-works`. | **PASS** |
| **820px** | iPad Air | - Generous whitespace; cards maintain balanced aspect ratio. | **PASS** |
| **912px** | Surface Pro | - Tablet-desktop handoff boundary holds clean padding. | **PASS** |
| **1023px** | Sub-desktop Edge | - Header handoff occurs smoothly without blackout or overlapping controls. | **PASS** |
| **1024px** | Standard Desktop | - Desktop horizontal navigation activates (`hidden lg:flex`).<br>- Multi-column grids expand to 2-column / 12-column layouts. | **PASS** |
| **1280px** | MacBook / HD | - Full brand lockup appears with tagline; ideal visual balance. | **PASS** |
| **1440px** | Large Screen | - Container max-widths (`max-w-4xl`, `max-w-5xl`) constrain content to prevent excessive line length. | **PASS** |

### Accessibility Checklist:
- **Keyboard Focus:** Visible focus rings (`focus-visible:ring-2 focus-visible:ring-[#00D1A3] focus-visible:ring-offset-2`) are enforced across all interactive buttons and inputs.
- **Form ARIA:** `aria-required="true"`, `aria-invalid`, `aria-describedby`, and `role="alert"` are implemented in `EarlyAccessForm.tsx`.
- **Reduced Motion:** Interactive hover transitions utilize standard `transition-all duration-200` without jarring keyframe animations.
- **Color Contrast:** Navy text (`#07152B`) on white achieves an outstanding 16.8:1 contrast ratio. Secondary body text (`#475569`) achieves 7.1:1. Only inline mint text requires updating from `#00D1A3` (2.1:1) to `#008766` ($> 4.8:1$).

---

## 6. APK and Download Configuration Assessment

1. **Package Verification:**
   - Package identifier `com.taxoryn.mobile` is verified in `D:\Projects\Taxoryn\mobile\app.json`.
   - Reported APK Signature Scheme v2 confirmed in build configuration.
2. **SDK Compatibility:**
   - Target SDK: 36 (Android 15+ readiness).
   - Minimum SDK: 24 (Android 7.0 Nougat).
   - Website copy: *"Android 7.0 (API 24) or higher (Android 8.0+ recommended)"*.
   - Assessment: **Accurate and honest.** Expo SDK 51/52 baseline requires API 24 minimum, while modern background tasks and camera APIs operate optimally on API 26+ (Android 8.0).
3. **Availability State Machine:**
   - Evaluated in `lib/config/site.ts`: `isAvailable: Boolean(ANDROID_DOWNLOAD_ENABLED && isValidApkUrl(ANDROID_DOWNLOAD_URL))`.
   - When no production APK URL is configured, download buttons gracefully switch to *"Request Mobile Early Access"* routing to `/early-access`.
   - No dead links, no placeholder `#` targets, and no unauthorized external hosting.

---

## 7. CTA and Form Behavior Verification

1. **Early Access Form Submission:**
   - Handled via `functions/api/early-access.ts` (Cloudflare Pages Function).
   - Required fields: `fullName`, `email`, `firmName`.
   - Optional fields: `phone` (validated via regex `^[+]?[\d\s-]{8,15}$`), `city`, `practiceSize`, `primaryInterest`.
   - Sanitization: Strips `<>` brackets, limits length to 500 characters.
   - PII Protection: Analytics events track only intent and metadata (`has_phone`, `practice_size`); no names or emails are ever dispatched to analytics.
2. **Navigation and Action Link Destinations:**
   - *Request Early Access* $\rightarrow$ `/early-access` (**Active**)
   - *Sign In to Web App* $\rightarrow$ `https://app.taxoryn.com/login` (**Active**)
   - *Download Android App* $\rightarrow$ `/download` (**Active**)
   - *Book a Demo* $\rightarrow$ `/book-demo` (**Active**)
   - *Explore Platform* $\rightarrow$ `/platform` (**Active**)
   - *How It Works* $\rightarrow$ `/how-it-works` (**Active**)
   - *About Taxoryn* $\rightarrow$ `/about` (**Active**)

---

## 8. Proposed Phase 2C Implementation Sequence

To ensure systematic execution without regressions, Phase 2C should be structured into four sequential, independently verifiable slices:

```mermaid
flowchart TD
    A["Slice 1: Typography & Contrast Remediation (/about)"] --> B["Slice 2: Connected Timeline Architecture (/how-it-works)"]
    B --> C["Slice 3: Visual Rhythm & Light Mode Previews (/platform)"]
    C --> D["Slice 4: Mobile Form Ordering & Spec Polish (/early-access & /download)"]
```

### Slice 1: Typography & Contrast Remediation on `/about` (P0/P1)
- **Scope:** `components/pages/AboutClientContent.tsx`
- **Actions:**
  - Upgrade narrative body copy from `text-xs` to `text-sm sm:text-base text-slate-600 leading-relaxed`.
  - Upgrade values descriptions and boundary items to `text-sm text-slate-600`.
  - Replace raw `#00D1A3` on light backgrounds with accessible `#008766`.
- **Acceptance Criteria:**
  - Zero body copy rendered at 12px (`text-xs`).
  - WCAG AA 4.5:1 contrast compliance verified across all text elements.
  - Automated test suite passes 100%.

### Slice 2: Connected Timeline Architecture on `/how-it-works` (P1)
- **Scope:** `app/how-it-works/page.tsx`
- **Actions:**
  - Introduce vertical timeline spine connecting Steps 01 $\rightarrow$ 04 on mobile and tablet.
  - Add sequential progress connectors on desktop.
  - Include compact UI proof chips (e.g., GSTIN badge, statutory task status pill, upload status).
  - Normalize task statuses to match product Kanban columns.
- **Acceptance Criteria:**
  - Continuous visual timeline links all 4 steps.
  - Zero horizontal overflow across all 10 viewports.
  - 100% test pass rate.

### Slice 3: Visual Rhythm & Light-Mode Previews on `/platform` (P1)
- **Scope:** `app/platform/page.tsx`
- **Actions:**
  - Convert dark flow illustration (lines 160–203) to light-mode connected architecture card (`bg-[#F8FAFC]`, `border-slate-200/90`).
  - Restructure the 4 Smart Processes from vertical text cards into alternating 2-column sections (Text Narrative Left + Authentic Light UI Preview Right).
  - Align task statuses to official product Kanban columns (`NOT_STARTED`, `IN_PROGRESS`, `UNDER_REVIEW`, `READY_FOR_FILING`, `COMPLETED`).
- **Acceptance Criteria:**
  - All 4 pillars feature authentic light-mode UI previews.
  - Cohesive light SaaS design matching Phase 2B homepage.
  - Zero horizontal overflow across all 10 viewports.

### Slice 4: Mobile Form Usability & Download Polish on `/early-access` & `/download` (P1/P2)
- **Scope:** `components/marketing/EarlyAccessForm.tsx`, `app/download/page.tsx`, `lib/config/site.ts`
- **Actions:**
  - On mobile screens, prioritize the form over the introductory cards (`order-1` for form, `order-2` for trust cards).
  - Remove redundant inner form `<h3>`.
  - Normalize APK file size string to `"~77 MB APK package (80.8 MB installed)"`.
- **Acceptance Criteria:**
  - Form input visible on initial mobile viewport without extensive scrolling.
  - File size description clean and unambiguous.
  - Form validation, analytics sanitization, and Cloudflare Pages function pass all automated tests.

---

## 9. Affected Files and Components

1. `app/platform/page.tsx`
2. `app/how-it-works/page.tsx`
3. `app/about/page.tsx`
4. `components/pages/AboutClientContent.tsx`
5. `app/download/page.tsx`
6. `components/marketing/EarlyAccessForm.tsx`
7. `lib/config/site.ts`
8. `lib/i18n/en.ts` / `lib/i18n/hi.ts` (for aligned status terminology)
9. `test/run-tests.mjs` (for automated test assertion coverage)

---

## 10. Final Recommendation

**Recommendation:** **READY WITH DEPENDENCIES**

- **Readiness Justification:** The technical architecture, brand governance, and product capabilities are fully verified and grounded in the authentic product source code (`D:\Projects\Taxoryn`). No blocking architectural flaws exist.
- **Prerequisite Dependencies:**
  1. Complete formal visual acceptance review of Phase 2B (Homepage Experience & Eight-Act Narrative).
  2. Implement Slice 1 (Typography defect on `/about`) as the immediate first action of Phase 2C to resolve the P0 reading strain before visual layout enhancements.

*End of Assessment Report.*
