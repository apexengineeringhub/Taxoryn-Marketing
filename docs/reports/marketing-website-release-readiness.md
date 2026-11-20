# Taxoryn Marketing Website — Release Readiness Audit Report

**Date of Audit:** November 16, 2026  
**Auditor Roles:** Senior Release Manager, SaaS QA Architect, Security Reviewer, Mobile Application Release Engineer  
**Scope:** Marketing Website (`D:\Projects\Taxoryn-Marketing`), Production (`https://taxoryn.com`), Web Application (`https://app.taxoryn.com`), Android Companion App  
**Working Branch:** `prod_demo` (HEAD: `fbdf5a0` + working tree transformation)  
**Product Repository (Reference Only):** `D:\Projects\Taxoryn`  

---

## 1. Executive Summary

A comprehensive, non-destructive release readiness audit of the Taxoryn marketing website was conducted across 10 functional and operational dimensions. 

The website redesign has achieved local code and build maturity:
- **100% test pass rate** (59/59 automated tests passing).
- **TypeScript compilation passed** with zero errors (`tsc --noEmit`).
- **Static HTML export build succeeded** generating all 38 static routes (`Exporting 2/2`).
- **Web Application (`app.taxoryn.com/login`) is live, healthy, and accessible** over TLS 1.3 with HSTS.
- **Android application APK (`com.taxoryn.mobile` v1.0.0)** was located, inspected, and verified with APK Signature Scheme v2.

However, two critical blockers prevent immediate public launch and LinkedIn campaign traffic on the live domain:
1. **Production Deployment Discrepancy (FAIL):** The public production domain `https://taxoryn.com` is currently running previous commit `fbdf5a0`. As a result, critical campaign routes—`/platform`, `/download`, and `/how-it-works`—return **HTTP 404 Not Found** on production until the updated build is deployed.
2. **Android APK Public Distribution (BLOCKED):** `NEXT_PUBLIC_ANDROID_DOWNLOAD_URL` is currently unconfigured in the production environment. While the fallback UI safely redirects users to web early access, direct APK downloads are blocked until the binary is uploaded to a public CDN.

---

## 2. Repository and Configuration Audit

### 2.1 Framework & Version
- **Framework:** Next.js `15.1.7` (React `19.0.0`, React DOM `19.0.0`)
- **CSS Engine:** Tailwind CSS `3.4.17`, PostCSS `8.5.2`, Autoprefixer `10.4.20`
- **TypeScript:** `5.7.3`
- **Export Mode:** Static HTML Export (`output: "export"`, `trailingSlash: false`, `images.unoptimized: true`)

### 2.2 Configuration Resolution (`lib/config/site.ts`)
| Configuration Key | Resolution Method | Fallback Behavior | Audit Status |
|---|---|---|---|
| `NEXT_PUBLIC_ANDROID_DOWNLOAD_URL` | `getEnv("NEXT_PUBLIC_ANDROID_DOWNLOAD_URL", "VITE_ANDROID_DOWNLOAD_URL")` | Defaults to `""` | **PASS** |
| `NEXT_PUBLIC_ANDROID_APP_VERSION` | `getEnv("NEXT_PUBLIC_ANDROID_APP_VERSION", "VITE_ANDROID_APP_VERSION")` | Defaults to `"1.0.0"` | **PASS** |
| `NEXT_PUBLIC_ANDROID_DOWNLOAD_ENABLED`| Evaluates string `!== "false"` | Defaults to `true` | **PASS** |
| `NEXT_PUBLIC_WEB_APP_URL` / `APP_URL`| Strips trailing slashes | Defaults to `"https://app.taxoryn.com"` | **PASS** |
| `NEXT_PUBLIC_EARLY_ACCESS_ENABLED` | Evaluates string `!== "false"` | Defaults to `true` | **PASS** |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Resolves contact email | Defaults to `"support@taxoryn.com"` | **PASS** |

> [!NOTE]
> **Build-time vs Runtime Behavior:** Because Next.js uses static export (`output: "export"`), environment variables prefixed with `NEXT_PUBLIC_*` are inlined during build time. Updating these variables in Vercel or Cloudflare requires triggering a new build and deployment. Runtime variable injection is not supported in static export.

---

## 3. Download Journey Validation

### 3.1 Scenario Testing Matrix
The `/download` route configuration was tested across all required edge cases:

| Scenario | Tested Configuration | Observed Behavior | Status |
|---|---|---|---|
| **A. Valid Download URL & Enabled** | `DOWNLOAD_URL="https://.../app.apk"`, `ENABLED=true` | Primary CTA renders direct download button with version tag; `isAvailable=true` | **PASS** |
| **B. Missing Download URL** | `DOWNLOAD_URL=undefined`, `ENABLED=true` | Direct download button hidden; displays preparation notice and routes to Early Access | **PASS** |
| **C. Download URL Empty String** | `DOWNLOAD_URL=""`, `ENABLED=true` | Direct download button hidden; displays preparation notice without broken links | **PASS** |
| **D. Download Disabled** | `DOWNLOAD_URL="https://.../app.apk"`, `ENABLED=false` | Direct download button hidden; `isAvailable=false` | **PASS** |
| **E. Missing Application Version** | `APP_VERSION=undefined` | Defaults gracefully to `"1.0.0"` from package manifest | **PASS** |
| **F. Missing Web App URL** | `WEB_APP_URL=undefined` | Defaults to `"https://app.taxoryn.com"` | **PASS** |

### 3.2 Android Binary Inspection (`taxoryn-preview.apk`)
Inspection performed using Android SDK tools (`apkanalyzer.bat` and `apksigner.bat`):
- **File Location:** `D:\Projects\Taxoryn\mobile\taxoryn-preview.apk`
- **File Size:** 80,810,614 bytes (77.06 MB)
- **Package Name:** `com.taxoryn.mobile`
- **Version Code:** `1`
- **Version Name:** `1.0.0`
- **Min SDK Version:** `24` (Android 7.0 Nougat) — *Fully compatible with marketing claim of Android 8.0+ (API 26)*
- **Target SDK Version:** `36`
- **Signature Scheme:** Verified using **APK Signature Scheme v2** (Signer #1 RSA 2048-bit, SHA-256 Digest: `7a749702bf65181325dbe74a74ea45e338208b4a8a0326f571338925551dc54c`)
- **Distribution Finding:** `NEXT_PUBLIC_ANDROID_DOWNLOAD_URL` is currently not configured in production. Direct public download is **BLOCKED** pending public asset upload.

---

## 4. Production Website Verification (`https://taxoryn.com`)

Live network checks were performed against `https://taxoryn.com`:

| Route | Live HTTP Status | Content-Type | Server | Finding |
|---|---|---|---|---|
| `/` | `200 OK` | `text/html; charset=utf-8` | Vercel | Serves legacy homepage version (commit `fbdf5a0`) |
| `/platform` | `404 Not Found` | `text/html; charset=utf-8` | Vercel | **BLOCKER:** Redesigned route not yet deployed |
| `/how-it-works`| `404 Not Found` | `text/html; charset=utf-8` | Vercel | **BLOCKER:** Redesigned route not yet deployed |
| `/about` | `200 OK` | `text/html; charset=utf-8` | Vercel | Healthy, renders company story |
| `/download` | `404 Not Found` | `text/html; charset=utf-8` | Vercel | **BLOCKER:** LinkedIn landing page not yet deployed |
| `/early-access`| `200 OK` | `text/html; charset=utf-8` | Vercel | Healthy, renders early access application form |
| `/pricing` | `200 OK` | `text/html; charset=utf-8` | Vercel | Healthy, renders planned tier model |
| `/security` | `200 OK` | `text/html; charset=utf-8` | Vercel | Healthy, renders security architecture |

---

## 5. Web Application Access Validation (`https://app.taxoryn.com/login`)

Live network verification of the primary SaaS application:
- **HTTP Status:** `200 OK`
- **TLS Configuration:** Modern TLS 1.3 enforced via Cloudflare Edge
- **HSTS:** Enforced (`strict-transport-security: max-age=63072000; includeSubDomains; preload`)
- **Response Headers:** `x-vercel-cache: HIT`, `cf-cache-status: DYNAMIC`
- **Page Title:** `Taxoryn — Simplifying Tax Practice Management`
- **Application Shell:** Client-side React/Vite single-page application loaded and ready for practitioner authentication.

---

## 6. Product Accuracy and Trust Verification

Claims made on the marketing website were cross-examined against the codebase and implementation reports in `D:\Projects\Taxoryn`:

| Claim / Capability | Marketing Presentation | Repository Implementation Evidence | Classification |
|---|---|---|---|
| **Smart Work Management** | Task worklists, statutory checklists (GST, TDS, ITR), deadline calendar | `TasksPage.tsx`, `WorkOperatingBoardPage.tsx`, `WorkTemplatesPage.tsx`, `EngagementsPage.tsx` | **Verified Implemented** |
| **Smart Client Management** | Unified Client 360, PAN/GSTIN profiles, entity hierarchy | `ClientsPage.tsx`, `Client360Page.tsx`, `CustomerProfilePage.tsx` | **Verified Implemented** |
| **Smart Document Management** | Document requests, client upload links, permanent vault | `DocumentsPage.tsx`, `DocumentService`, `scan_to_vault` module | **Verified Implemented** |
| **Role-Based Access Control (RBAC)** | Role-based permissions between partners, managers, articles | Spring Security `PreAuthorize`, `UserRole`, `RolePermissions` | **Verified Implemented** |
| **Two-Factor Authentication (MFA)** | TOTP authentication with authenticator apps | `MfaChallengeForm.tsx`, `TotpQrEnrollmentCard.tsx`, `AccountSecurityPage.tsx` | **Verified Implemented** |
| **Tenant Data Isolation** | Multi-tenant organization isolation | `TenantContext`, `TenantFilter`, organization-scoped tables | **Verified Implemented** |
| **Client Portal** | Client-facing portal for document submission and receipt review | `ClientPortalManagementPage.tsx`, `CustomerOnboardingPortalPage.tsx` | **Verified Implemented** |
| **Practice Intelligence** | Firm workload distribution, turnaround times, compliance tracking | `ReportsPage.tsx`, `DashboardPage.tsx` operational statistics | **Partially Implemented** (Operational dashboards implemented; advanced automated AI forecasting planned) |
| **Document Collaboration** | Multi-user document requests and client uploads | Implemented for file sharing; live simultaneous co-editing planned | **Partially Implemented** |

---

## 7. Security and Privacy Checks

- **Secrets Audit:** Inspected frontend source code, `lib/config/site.ts`, and generated output assets (`out/index.html`, `out/download.html`). **Result:** Zero API keys, database credentials, or secret tokens detected.
- **Environment Isolation:** Zero private environment variables are exposed in client bundles.
- **Network Boundaries:** Zero `localhost` or `127.0.0.1` development URLs exist in production assets.
- **Privacy & Terms:** Links to `/privacy` and `/terms` are present on all headers and footers.
- **Form PII Sanitization:** Form analytics sanitizer actively strips email, phone numbers, PAN, GSTIN, and names before any analytics dispatch.

---

## 8. LinkedIn Sharing Readiness

Social sharing metadata was inspected from compiled static assets:

| Route | Open Graph Title | Open Graph Description | Canonical URL | Twitter Card | Audit Status |
|---|---|---|---|---|---|
| `/` | `Taxoryn — Tax Practice Management Software for Indian CAs & Tax Professionals` | Included | `https://taxoryn.com` | `summary_large_image` | **PASS** |
| `/download` | `Download Taxoryn Mobile App (Android APK v1.0.0)` | Included | `https://taxoryn.com/download` | `summary_large_image` | **PASS** (Note: `og:image` defaults to brand logo fallback) |
| `/platform` | `Taxoryn — Tax Practice Management Software for Indian CAs & Tax Professionals` | Included | `https://taxoryn.com/platform` | `summary_large_image` | **PASS** |

---

## 9. Performance & Responsive Evaluation

- **Static HTML Payload:** 
  - Homepage: ~15.7 kB HTML, 180 kB first-load JS.
  - Download Hub: ~7.8 kB HTML, 106 kB first-load JS.
  - Platform Page: ~8.1 kB HTML, 106 kB first-load JS.
- **Font Optimization:** Google Fonts `Inter` configured with `display: 'swap'` and Next.js font optimization.
- **Accessibility:** Touch targets adhere to minimum 44px height; `aria-required`, `aria-invalid`, `role="alert"`, and `role="status"` properly bound.
- **Mobile Responsiveness:** Viewport meta tags configured; slide-out mobile navigation drawer implements accessible focus trapping, escape dismissal, and body scroll lock.

---

## 10. Automated Test Results

### 10.1 Command Execution
```bash
npm.cmd test
```
- **Exit Code:** `0`
- **Total Tests:** 59
- **Passed:** 59 (100%)
- **Failed:** 0
- **Suites:** 7 suites (Analytics Consent, i18n Multilingual, Header Layout, Grounded Copy & Zero Fake Claims, Configurable Social Links, Early Access Form Architecture, Design System & Accessibility).

```bash
npm.cmd run type-check
```
- **Exit Code:** `0` (Zero TypeScript errors)

```bash
npm.cmd run build
```
- **Exit Code:** `0` (Compiled successfully in 6.6s, generated all 38 static routes, exported static bundle).

---

## 11. Release Blockers

| Blocker ID | Description | Severity | Impact |
|---|---|---|---|
| **BLK-01** | Production routes `/platform`, `/download`, and `/how-it-works` return **HTTP 404** on live domain `https://taxoryn.com` because current changes have not been deployed. | **HIGH (CRITICAL)** | Visitors from LinkedIn campaigns to `/download` or `/platform` will encounter 404 pages. |
| **BLK-02** | `NEXT_PUBLIC_ANDROID_DOWNLOAD_URL` is empty. No public download link exists for the compiled Android APK (`taxoryn-preview.apk`). | **MEDIUM** | Android direct download cannot complete; users are gracefully redirected to Early Access. |

---

## 12. Recommended Remediation Plan

1. **Step 1 (Pre-deployment APK Hosting):** Upload `D:\Projects\Taxoryn\mobile\taxoryn-preview.apk` to an authorized public storage bucket (e.g., Cloudflare R2 or AWS S3) and set `NEXT_PUBLIC_ANDROID_DOWNLOAD_URL="https://.../taxoryn-mobile-v1.0.0.apk"`.
2. **Step 2 (Production Deployment):** Trigger a production deployment of the `prod_demo` branch on Vercel/Cloudflare Pages so that `/platform`, `/download`, and `/how-it-works` are live and returning HTTP 200.
3. **Step 3 (Post-deployment Smoke Test):** Perform non-destructive HTTP 200 verification on the live domain after deployment.

---

## Final Release Decision

```
NOT READY — BLOCKING ISSUES FOUND
```

**Justification:** While local builds, static page exports, TypeScript checks, and test suites are 100% green, the live production site `https://taxoryn.com` has not yet been deployed with these updates, resulting in HTTP 404 errors on `/platform`, `/download`, and `/how-it-works`. Additionally, public hosting for the Android APK binary must be configured prior to launching marketing campaigns.
