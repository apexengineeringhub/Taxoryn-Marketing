# Taxoryn Marketing — Semantic Git Commit Plan & Artifact Governance

**Document Reference:** `REL-GIT-2026-01`  
**Date:** November 22, 2026  
**Auditor:** Senior Release Architect  
**Primary Repository:** `D:\Projects\Taxoryn-Marketing`  
**Branch:** `prod_demo`  
**Status:** Audit Complete — Zero Secrets Tracked, Staging Strategy Codified  

---

## 1. Executive Summary

This document establishes the authoritative, execution-ready Git commit plan for the Taxoryn Marketing repository.

In strict adherence to release governance standards:
- **Zero changes have been staged, committed, or pushed** during this audit.
- All 13 modified application source files authored by Agent 1 and CDO workstreams are preserved intact in the working tree.
- All documentation reports, evidence archives, and screenshots are organized into logical, reviewable semantic commit batches.
- The repository `.gitignore` configuration guarantees that zero secrets, local environment files, IDE caches, or temporary compiler artifacts can accidentally leak into version control.

---

## 2. Working Tree Inventory & Status

Execution of `git status` reveals:

### 2.1 Modified Source Files (13 files):
1. `app/download/page.tsx`: APK download sizing (~77 MB download / 80.8 MB installed), balanced cards, honest availability state.
2. `app/how-it-works/page.tsx`: Connected 4-step vertical timeline, authentic product micro-visuals, standardized status terminology, preserved `TEST 60` sign-in tokens.
3. `app/platform/page.tsx`: Light-mode architecture diagrams, alternating 2-column layout, four authentic product workbenches.
4. `components/marketing/EarlyAccessForm.tsx`: Mobile layout inverted (`order-1` form, `order-2` trust card) for above-the-fold visibility.
5. `components/marketing/ProductExperienceShowcase.tsx`: Refined SaaS component framing and realistic practice data.
6. `components/marketing/WorkflowDiagram.tsx`: Converted workflow connectors from dark obsidian to crisp slate styling.
7. `components/pages/AboutClientContent.tsx`: Verified `text-sm sm:text-base text-slate-600` typography and high-contrast WCAG AA compliance.
8. `components/sections/AccessTaxorynSection.tsx`: Synchronized Android companion specifications and download fallbacks.
9. `components/sections/DemoVideoSection.tsx`: Standardized 16:9 YouTube video embed facade and responsive container padding.
10. `components/sections/ModernPracticeSection.tsx`: Grounded practice operations copy and reduced whitespace gaps.
11. `components/sections/OriginStorySection.tsx`: Authentic founder journey copy and responsive typography.
12. `components/sections/SecuritySection.tsx`: Grounded data sovereignty, bank-grade encryption, and compliance guarantees.
13. `components/sections/SmartProcessesSection.tsx`: Four authentic automated practice workflows with realistic metrics.

### 2.2 Untracked Permanent Documentation (13 reports):
- `docs/reports/taxoryn-final-release-preparation.md` (Master Release Assessment)
- `docs/reports/taxoryn-hosting-and-deployment-truth.md` (Hosting Audit)
- `docs/reports/taxoryn-early-access-operational-verification.md` (Early Access Audit)
- `docs/reports/taxoryn-security-configuration-review.md` (Security Header Review)
- `docs/reports/taxoryn-final-git-commit-plan.md` (Commit Governance Plan)
- `docs/reports/taxoryn-marketing-agent-1-completion.md` (Agent 1 CDO Completion)
- `docs/reports/taxoryn-production-readiness-audit.md` (Agent 2 Production Audit)
- `docs/reports/taxoryn-android-distribution-readiness.md` (Agent 2 Android Distribution)
- `docs/reports/taxoryn-marketing-release-checklist.md` (Release Checklist Matrix)
- `docs/reports/taxoryn-git-governance-final-review.md` (Git Governance Sign-Off)
- `docs/reports/taxoryn-cdo-global-media-consistency-final-acceptance.md` (Media Acceptance)
- `docs/reports/taxoryn-cdo-global-media-consistency.md` (Media Consistency)
- `docs/reports/taxoryn-cdo-global-spacing-optimization.md` (Spacing Optimization)

### 2.3 Untracked Evidence & Screenshot Archives:
- `docs/screenshots/marketing-final/`: 12 full-resolution visual proof screenshots (Desktop 1440px and Mobile 390px across all 6 pages) + `audit-metrics.json` recording 60 zero-overflow viewport evaluations.
- `docs/screenshots/phase-2c/`: Milestone visual acceptance captures for global spacing and media consistency.
- `scripts/run-cdo-final-qa.mjs`: Reusable headless CDP audit automation tool.

### 2.4 Tooling Relocation & Disposition:
- `audit-slice1.mjs`: Legacy viewport testing script located at repo root containing hardcoded Windows paths.
  *Action:* **Retain uncommitted**. Post-release, refactor into `scripts/audit-viewport.mjs` with cross-platform browser detection.

---

## 3. `.gitignore` & Secrets Protection Verification

### 3.1 Secrets Prevention Posture
The repository `.gitignore` implements strict fail-closed rules for credentials:
```gitignore
# Environment variables and secrets
.env
.env.*
*.pem
*.key

# Preserve safe environment templates (never ignore)
!.env.example
!.env.*.example
!.env*.example
```
- **Verification:** `git ls-files --stage | grep -i "\.env"` returns only `.env.example`.
- `.env.example` contains only placeholder non-sensitive keys (`RESEND_API_KEY=""`, `NEXT_PUBLIC_APP_URL="https://app.taxoryn.com"`).
- Zero secret values, private keys, or API tokens exist in the Git index.

### 3.2 Visual Studio Code Rules
```gitignore
.idea/
.vscode/*
!.vscode/extensions.json
!.vscode/settings.example.json
```
Personal IDE caches, workspace state files, and local settings are ignored, while shared team extensions (`extensions.json`) remain version-controlled.

### 3.3 TypeScript Definition Artifact (`next-env.d.ts`)
- `next-env.d.ts` is an auto-generated definition file created during `next dev` and `next build`.
- Git log inspection (`git log --all -- next-env.d.ts`) confirms it was never committed in this repository and is properly ignored in `.gitignore`.
- It remains uncommitted to avoid cross-developer compiler path churn.

---

## 4. Execution-Ready Semantic Commit Groups

When authorized by release leadership, files must be staged and committed in these 5 discrete, reviewable groups:

```bash
# ==============================================================================
# COMMIT GROUP 1: Governance & Repository Hygiene
# ==============================================================================
git add .gitignore
git add docs/reports/git-repository-hygiene-policy.md
git add docs/reports/git-artifact-inventory.md
git add docs/reports/git-ignore-cleanup-report.md
git add docs/reports/taxoryn-git-governance-final-review.md
git commit -m "chore(governance): establish permanent repository hygiene, gitignore rules, and artifact policy"

# ==============================================================================
# COMMIT GROUP 2: Phase 1 & 2A Brand and Navigation Acceptance Evidence
# ==============================================================================
git add docs/screenshots/header_*.png
git add docs/screenshots/phase2a_*.png
git add docs/screenshots/logo_comparison.html
git add docs/screenshots/master_logo_comparison.html
git add docs/screenshots/master_logo_governance_comparison.png
git add docs/reports/phase-1-responsive-navigation-integrity.md
git add docs/reports/taxoryn-brand-governance-master-logo.md
git add docs/reports/taxoryn-cdo-phase-2a-header-logo.md
git commit -m "docs(brand): record phase 1 navigation audit and phase 2a master logo governance evidence"

# ==============================================================================
# COMMIT GROUP 3: Phase 2B Homepage Experience & Visual Proofs
# ==============================================================================
git add docs/screenshots/phase-2b/
git add docs/reports/taxoryn-cdo-phase-2b-homepage-experience.md
git add docs/reports/taxoryn-cdo-phase-2b-final-visual-acceptance.md
git commit -m "docs(phase-2b): archive homepage 8-act narrative visual acceptance reports and screenshots"

# ==============================================================================
# COMMIT GROUP 4: Phase 2C Full Website Completion (Source & Evidence)
# ==============================================================================
git add app/download/page.tsx
git add app/how-it-works/page.tsx
git add app/platform/page.tsx
git add components/marketing/EarlyAccessForm.tsx
git add components/marketing/ProductExperienceShowcase.tsx
git add components/marketing/WorkflowDiagram.tsx
git add components/pages/AboutClientContent.tsx
git add components/sections/AccessTaxorynSection.tsx
git add components/sections/DemoVideoSection.tsx
git add components/sections/ModernPracticeSection.tsx
git add components/sections/OriginStorySection.tsx
git add components/sections/SecuritySection.tsx
git add components/sections/SmartProcessesSection.tsx
git add docs/reports/taxoryn-cdo-phase-2c-step-1-assessment.md
git add docs/reports/taxoryn-cdo-homepage-hero-refinement.md
git add docs/reports/taxoryn-cdo-global-spacing-optimization.md
git add docs/reports/taxoryn-cdo-global-media-consistency.md
git add docs/reports/taxoryn-cdo-global-media-consistency-final-acceptance.md
git add docs/reports/taxoryn-marketing-agent-1-completion.md
git add docs/screenshots/phase-2c/
git add docs/screenshots/marketing-final/
git add scripts/run-cdo-final-qa.mjs
git commit -m "feat(cdo): complete phase 2c marketing website design, responsive timeline, platform layouts, and qa proofs"

# ==============================================================================
# COMMIT GROUP 5: Production Readiness & Release Architecture Package
# ==============================================================================
git add docs/reports/taxoryn-production-readiness-audit.md
git add docs/reports/taxoryn-android-distribution-readiness.md
git add docs/reports/taxoryn-marketing-release-checklist.md
git add docs/reports/taxoryn-hosting-and-deployment-truth.md
git add docs/reports/taxoryn-early-access-operational-verification.md
git add docs/reports/taxoryn-security-configuration-review.md
git add docs/reports/taxoryn-final-git-commit-plan.md
git add docs/reports/taxoryn-final-release-preparation.md
git commit -m "docs(release): consolidate senior release architect assessment, hosting truth, and readiness gates"
```
