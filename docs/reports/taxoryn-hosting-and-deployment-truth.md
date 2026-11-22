# Taxoryn Marketing — Hosting Architecture & Deployment Truth Assessment

**Document Reference:** `REL-HOST-2026-01`  
**Date:** November 22, 2026  
**Auditor:** Senior Release Architect  
**Target Domain:** `https://taxoryn.com`  
**Primary Repository:** `D:\Projects\Taxoryn-Marketing`  
**Branch:** `prod_demo` (Local HEAD)  
**Status:** Audit Complete — Forensic Evidence Validated  

---

## 1. Executive Summary

This assessment establishes the definitive technical and architectural truth regarding DNS, edge routing, static hosting, and serverless execution for the Taxoryn marketing platform (`taxoryn.com`).

A critical architectural discrepancy has been uncovered between the **authoritative DNS resolution** and the **repository deployment configuration**:

1. **Active Hosting Reality:** Production traffic for `https://taxoryn.com` is actively terminated by **Vercel** (`Server: Vercel`, IP addresses `216.198.79.1` and `64.29.17.1`).
2. **DNS Zone Authority:** Cloudflare is the authoritative DNS registrar and nameserver provider (`addyson.ns.cloudflare.com`, `nolan.ns.cloudflare.com`). The apex A records in Cloudflare DNS point directly to Vercel in unproxied (DNS-only) mode.
3. **Repository Architecture Drift:** On October 20, 2026, commit `fbdf5a0` reconfigured the codebase for **Cloudflare Pages static export** (`next.config.mjs` with `output: "export"`, `functions/api/early-access.ts`, and `public/_redirects`), and deployed a parallel project to `https://taxoryn-marketing.pages.dev`.
4. **The Deployment Mismatch:** The production domain `taxoryn.com` was **never switched in Cloudflare DNS** to point to Cloudflare Pages. As a result, `taxoryn.com` continues to serve an unmaintained Vercel deployment from late October 2026 (`Age: 2640352` seconds / ~30.56 days old), causing core subpages (`/platform`, `/how-it-works`, `/download`) to return **HTTP 404**.

---

## 2. Forensic Network & Infrastructure Audit

### 2.1 DNS Resolution Evidence
Direct DNS queries executed via `Resolve-DnsName` reveal:

```text
Host: taxoryn.com
Authoritative Nameservers:
  - addyson.ns.cloudflare.com (Cloudflare Managed DNS)
  - nolan.ns.cloudflare.com   (Cloudflare Managed DNS)

Apex A Records:
  - 216.198.79.1 (Vercel Anycast Edge IP)
  - 64.29.17.1   (Vercel Anycast Edge IP)

Subdomain CNAME (www.taxoryn.com):
  - d733f868acf1d3ab.vercel-dns-017.com (Vercel DNS Routing Alias)
```

**Verification Method:** DNS query `Resolve-DnsName taxoryn.com -Type A` and `Resolve-DnsName taxoryn.com -Type NS`.

### 2.2 HTTP Response Header Forensic Analysis
Direct HTTP inspection of `https://taxoryn.com/` returns:

```http
HTTP/1.1 200 OK
Date: Sun, 22 Nov 2026 12:50:56 GMT
Server: Vercel
Age: 2640352
Strict-Transport-Security: max-age=63072000
Vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
X-Matched-Path: /
X-Nextjs-Prerender: 1
X-Nextjs-Stale-Time: 300
X-Vercel-Cache: HIT
X-Vercel-Id: bom1::j7xpt-1795351856168-a77fa8fb7f6e
```

**Key Forensic Facts:**
- `Server: Vercel`: The server header confirms Vercel infrastructure.
- `Age: 2640352`: The asset has been in edge cache for 2,640,352 seconds (30 days, 13 hours).
- `X-Vercel-Id: bom1::...`: Vercel edge node in Mumbai, India (BOM1).
- Absence of `CF-RAY`: Proves traffic does NOT pass through Cloudflare CDN proxy before reaching Vercel.

### 2.3 Secondary Cloudflare Pages Domains
Inspection of active Cloudflare Pages deployments associated with the account:

| Domain | Platform | Target Application | HTTP Root Status | HTTP /platform Status | Content / Title |
| :--- | :--- | :--- | :---: | :---: | :--- |
| `https://taxoryn.com` | **Vercel** | Marketing Website (Legacy) | 200 OK | **404 Not Found** | Legacy marketing build (~30.5 days old) |
| `https://taxoryn-marketing.pages.dev` | **Cloudflare Pages** | Marketing Website (Cloudflare Build) | 200 OK | **404 Not Found** | Cloudflare Pages build of marketing site (~30 days old) |
| `https://taxoryn.pages.dev` | **Cloudflare Pages** | React Web Application (`app.taxoryn.com`) | 200 OK | 200 OK (SPA catch-all) | Practice Portal SPA container (`D:\Projects\Taxoryn`) |

---

## 3. Repository & Branch Feed Truth

### 3.1 Git Configuration
- **Remote Origin:** `https://github.com/apexengineeringhub/Taxoryn-Marketing.git`
- **Active Local Branch:** `prod_demo`
- **Branch Relationship:**
  - `prod_demo` is ahead of `origin/prod_demo` by 4 commits.
  - `prod_demo` is ahead of `origin/main` by 6 commits.
- **Commit History Timeline:**
  - `0f8bbce` (Sep 20, 2026): Initial deployment fix.
  - `fbdf5a0` (Oct 20, 2026): *"fix(deploy): sync lockfile dependencies and configure cloudflare pages static export with edge function"*.
  - `248ff35` – `f1253aa` (Nov 22, 2026): Product content and design updates.

### 3.2 Production Platform Decision: Vercel vs. Cloudflare Pages

The marketing repository currently contains configuration tailored for **Cloudflare Pages**, but traffic lands on **Vercel**:

| Feature / Artifact | Local Repository State | Cloudflare Pages Compatibility | Vercel Compatibility (Static Export) |
| :--- | :--- | :--- | :--- |
| **Static Export** | `output: "export"` in `next.config.mjs` | Native support (`dist: out/`) | Native support (`out/`) |
| **API Edge Function** | `functions/api/early-access.ts` | **Native**: Automatically compiled by Pages | **Incompatible**: Vercel ignores `functions/` directory |
| **Redirect Rules** | `public/_redirects` | **Native**: Cloudflare Pages format | **Incompatible**: Vercel requires `vercel.json` |
| **Edge Security Headers** | Currently missing | Supported via `public/_headers` | Supported via `vercel.json` |

---

## 4. Operational Deployment Procedures

### Recommended Target: Cloudflare Pages (Standardized Architecture)

Because `functions/api/early-access.ts` and `public/_redirects` are already architected for Cloudflare Pages, the definitive architectural remediation is to point `taxoryn.com` to Cloudflare Pages:

1. **Step 1 — Build Step:**
   ```bash
   npm run build
   # Generates out/ directory containing 38 static routes
   ```
2. **Step 2 — Add Security Headers:**
   Deploy `public/_headers` (detailed in `taxoryn-security-configuration-review.md`) so that `out/_headers` is generated during build.
3. **Step 3 — Cloudflare Pages Custom Domain Mapping:**
   In the Cloudflare Dashboard under *Workers & Pages $\rightarrow$ taxoryn-marketing $\rightarrow$ Custom Domains*:
   - Attach `taxoryn.com` and `www.taxoryn.com`.
   - Cloudflare will automatically update DNS A/CNAME records to route traffic to the Pages edge cluster.
4. **Step 4 — Environment Secrets:**
   Configure `RESEND_API_KEY` and `TAXORYN_NOTIFICATION_EMAIL` in Cloudflare Pages dashboard under *Settings $\rightarrow$ Environment Variables*.

### Alternative: Retaining Vercel
If leadership mandates remaining on Vercel:
1. Move `functions/api/early-access.ts` back to `app/api/early-access/route.ts`.
2. Remove `output: "export"` from `next.config.mjs` to allow Next.js serverless route execution, OR use an external form backend.
3. Create `vercel.json` to define security headers and redirects.

---

## 5. Rollback Procedures

### Cloudflare Pages Rollback
- Every deployment creates a permanent, immutable deployment URL (`<hash>.taxoryn-marketing.pages.dev`).
- Rollback takes < 5 seconds: In Cloudflare Pages dashboard, navigate to *Deployments*, locate the last known healthy deployment, click `...`, and select *Rollback to this deployment*.

### Vercel Rollback
- In Vercel dashboard under *Deployments*, select the previous green deployment and click *Promote to Production*.
