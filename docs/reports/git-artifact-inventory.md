# Taxoryn Marketing — Git Artifact Inventory

**Document Reference:** `INV-GIT-2026-01`  
**Revision:** `1.1 (Final Corrections Applied)`  
**Date:** 2026-11-22  
**Repository:** `D:\Projects\Taxoryn-Marketing`  
**Scope:** Complete inspection and classification of all 45 unversioned files in the repository.  
**Classification Categories:**
- **COMMIT:** Permanent project source, configuration, test suite, or verified audit evidence.
- **IGNORE:** Generated build output, package cache, temporary log, or local-only transient artifact.
- **REVIEW:** Unclear ownership, non-standard placement, or requires developer decision prior to versioning.

---

## 1. Inventory Summary by Classification

| Classification | Count | Description | Primary Action |
| :--- | :---: | :--- | :--- |
| **COMMIT** | **44** | Core documentation reports, brand governance artifacts, and formal design acceptance screenshots | Stage and commit across organized semantic commit groups |
| **REVIEW** | **1** | Viewport audit automation script (`audit-slice1.mjs`) located at repository root | Keep uncommitted pending portability and reuse decision |
| **IGNORE** | **0** | Transient browser profiles (`.tmp-*`) are filtered at directory level via `.gitignore` | Retain `.gitignore` rules; no files to track |
| **Total Unversioned** | **45** | | |

---

## 2. Complete Itemized Inventory of all 45 Unversioned Files

The following table details every unversioned file identified by `git status --short -uall`. Purposive descriptions and classifications are based on file contents, not filenames alone.

| # | Relative Path | File Type | Size | Purpose | Class | Reason | Recommended Action |
| :-: | :--- | :---: | :-: | :--- | :---: | :--- | :--- |
| **1** | `audit-slice1.mjs` | `.mjs` | 6.3 KB | Automated headless Edge viewport audit script (CDP) measuring horizontal overflow and typography on `/about` | **REVIEW** | Functional tooling, but currently placed at root with hardcoded Windows Edge path | **Keep uncommitted** pending portability and reuse decision (relocate to `scripts/` or `test/` or archive) |
| **2** | `docs/reports/git-ignore-cleanup-report.md` | `.md` | 13.6 KB | Engineering report detailing `.gitignore` review, CRLF line ending diagnosis, and verification matrix | **COMMIT** | Permanent project documentation for Git hygiene governance | Commit with Governance Documentation group |
| **3** | `docs/reports/phase-1-responsive-navigation-integrity.md` | `.md` | 13.0 KB | Phase 1 milestone certification report auditing navigation header across 10 viewports with zero horizontal overflow | **COMMIT** | Formal QA acceptance record for Phase 1 milestone | Commit with Milestone Reports group |
| **4** | `docs/reports/taxoryn-brand-governance-master-logo.md` | `.md` | 11.4 KB | Brand governance report detailing master logo MD5 validation (`e9ece59e5258823f`) and SVG vector geometry alignment | **COMMIT** | Authoritative corporate and brand governance specification | Commit with Brand Governance group |
| **5** | `docs/reports/taxoryn-cdo-phase-2a-header-logo.md` | `.md` | 12.9 KB | Chief Design Officer visual acceptance report certifying Phase 2A header logo sizing, alignment, and tablet drawer | **COMMIT** | Formal CDO sign-off document for Phase 2A | Commit with Milestone Reports group |
| **6** | `docs/reports/taxoryn-cdo-phase-2b-final-visual-acceptance.md` | `.md` | 20.5 KB | Chief Design Officer final visual acceptance report certifying the 8-act homepage narrative and product showcases | **COMMIT** | Formal CDO milestone certification for Phase 2B | Commit with Milestone Reports group |
| **7** | `docs/reports/taxoryn-cdo-phase-2b-homepage-experience.md` | `.md` | 15.9 KB | Design system audit report detailing 8-act visual hierarchy, typography rhythm, and interaction standards | **COMMIT** | Strategic design reference and audit documentation | Commit with Design Documentation group |
| **8** | `docs/reports/taxoryn-cdo-phase-2c-step-1-assessment.md` | `.md` | 26.9 KB | Preflight UX, content, and architecture audit for Phase 2C secondary pages (`/platform`, `/about`, `/download`, etc.) | **COMMIT** | Planning and defect backlog specification for Phase 2C | Commit with Planning Documentation group |
| **9** | `docs/screenshots/header_1023px.png` | `.png` | 60.7 KB | Phase 1 baseline navigation header capture at 1023px (mobile drawer threshold) | **COMMIT** | Referenced in `phase-1-responsive-navigation-integrity.md` and Phase 2A report | Commit as Phase 1 baseline evidence |
| **10** | `docs/screenshots/header_1024px.png` | `.png` | 60.8 KB | Phase 1 baseline navigation header capture at 1024px (desktop navbar threshold) | **COMMIT** | Referenced in `phase-1-responsive-navigation-integrity.md` and Phase 2A report | Commit as Phase 1 baseline evidence |
| **11** | `docs/screenshots/header_1280px.png` | `.png` | 61.8 KB | Phase 1 baseline navigation header capture at 1280px (standard laptop viewport) | **COMMIT** | Referenced in `phase-1-responsive-navigation-integrity.md` and Phase 2A report | Commit as Phase 1 baseline evidence |
| **12** | `docs/screenshots/header_1440px.png` | `.png` | 62.9 KB | Phase 1 baseline navigation header capture at 1440px (QHD desktop viewport) | **COMMIT** | Referenced in `phase-1-responsive-navigation-integrity.md` and Phase 2A report | Commit as Phase 1 baseline evidence |
| **13** | `docs/screenshots/header_375px.png` | `.png` | 44.8 KB | Phase 1 baseline navigation header capture at 375px (Mobile Small / iPhone SE) | **COMMIT** | Referenced in `phase-1-responsive-navigation-integrity.md` and Phase 2A report | Commit as Phase 1 baseline evidence |
| **14** | `docs/screenshots/header_390px.png` | `.png` | 46.1 KB | Phase 1 baseline navigation header capture at 390px (iPhone 12/13/14 viewport) | **COMMIT** | Referenced in `phase-1-responsive-navigation-integrity.md` and Phase 2A report | Commit as Phase 1 baseline evidence |
| **15** | `docs/screenshots/header_430px.png` | `.png` | 51.1 KB | Phase 1 baseline navigation header capture at 430px (iPhone Pro Max viewport) | **COMMIT** | Referenced in `phase-1-responsive-navigation-integrity.md` and Phase 2A report | Commit as Phase 1 baseline evidence |
| **16** | `docs/screenshots/header_768px.png` | `.png` | 67.9 KB | Phase 1 baseline navigation header capture at 768px (iPad Mini portrait) | **COMMIT** | Referenced in `phase-1-responsive-navigation-integrity.md` and Phase 2A report | Commit as Phase 1 baseline evidence |
| **17** | `docs/screenshots/header_820px.png` | `.png` | 78.9 KB | Phase 1 baseline navigation header capture at 820px (iPad Air portrait) | **COMMIT** | Referenced in `phase-1-responsive-navigation-integrity.md` and Phase 2A report | Commit as Phase 1 baseline evidence |
| **18** | `docs/screenshots/header_912px.png` | `.png` | 90.2 KB | Phase 1 baseline navigation header capture at 912px (Surface Pro 7 portrait) | **COMMIT** | Referenced in `phase-1-responsive-navigation-integrity.md` and Phase 2A report | Commit as Phase 1 baseline evidence |
| **19** | `docs/screenshots/logo_comparison.html` | `.html` | 32.1 KB | Interactive HTML dashboard comparing current vs proposed SVG brand mark geometry | **COMMIT** | Test harness cited in `taxoryn-brand-governance-master-logo.md` | Commit as Brand Governance artifact |
| **20** | `docs/screenshots/master_logo_comparison.html` | `.html` | 56.2 KB | Comprehensive standalone visual audit dashboard with zoom inspections and CSS filter tests | **COMMIT** | Interactive audit harness cited in `taxoryn-brand-governance-master-logo.md` | Commit as Brand Governance artifact |
| **21** | `docs/screenshots/master_logo_governance_comparison.png` | `.png` | 134.7 KB | High-resolution raster comparison verifying path coordinates and aspect ratios | **COMMIT** | Primary visual evidence in `taxoryn-brand-governance-master-logo.md` | Commit as Brand Governance evidence |
| **22** | `docs/screenshots/phase-2b/act3-smart-processes.png` | `.png` | 163.8 KB | Section capture of Act 3 (Smart Processes Architecture) in light mode | **COMMIT** | Visual acceptance evidence in Phase 2B final acceptance report | Commit as Phase 2B evidence |
| **23** | `docs/screenshots/phase-2b/act4-product-showcase-client360.png` | `.png` | 143.5 KB | Section capture of Act 4 Client 360 interactive workbench mockup | **COMMIT** | Visual acceptance evidence in Phase 2B final acceptance report | Commit as Phase 2B evidence |
| **24** | `docs/screenshots/phase-2b/act4-product-showcase.png` | `.png` | 143.1 KB | Section capture of Act 4 Work Operating Board interactive workbench mockup | **COMMIT** | Visual acceptance evidence in Phase 2B final acceptance report | Commit as Phase 2B evidence |
| **25** | `docs/screenshots/phase-2b/act7-origin-trust.png` | `.png` | 134.9 KB | Section capture of Act 7 (Origin Story & Practice Credibility) | **COMMIT** | Visual acceptance evidence in Phase 2B final acceptance report | Commit as Phase 2B evidence |
| **26** | `docs/screenshots/phase-2b/act8-demo-and-cta.png` | `.png` | 255.8 KB | Section capture of Act 8 (Interactive Demo & Early Access CTA) | **COMMIT** | Visual acceptance evidence in Phase 2B final acceptance report | Commit as Phase 2B evidence |
| **27** | `docs/screenshots/phase-2b/homepage-1024px.png` | `.png` | 152.3 KB | Full homepage render at 1024px desktop breakpoint threshold | **COMMIT** | Viewport acceptance proof cited in Phase 2B reports | Commit as Phase 2B evidence |
| **28** | `docs/screenshots/phase-2b/homepage-1280px.png` | `.png` | 176.5 KB | Full homepage render at 1280px standard laptop viewport | **COMMIT** | Viewport acceptance proof cited in Phase 2B reports | Commit as Phase 2B evidence |
| **29** | `docs/screenshots/phase-2b/homepage-1440px.png` | `.png` | 193.4 KB | Full homepage render at 1440px desktop viewport | **COMMIT** | Viewport acceptance proof cited in Phase 2B reports | Commit as Phase 2B evidence |
| **30** | `docs/screenshots/phase-2b/homepage-375px.png` | `.png` | 62.0 KB | Full homepage render at 375px mobile viewport | **COMMIT** | Viewport acceptance proof cited in Phase 2B reports | Commit as Phase 2B evidence |
| **31** | `docs/screenshots/phase-2b/homepage-768px.png` | `.png` | 141.8 KB | Full homepage render at 768px tablet viewport | **COMMIT** | Viewport acceptance proof cited in Phase 2B reports | Commit as Phase 2B evidence |
| **32** | `docs/screenshots/phase2a_header_1023px.png` | `.png` | 5.3 KB | Refined Phase 2A header render at 1023px (mobile drawer threshold) | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **33** | `docs/screenshots/phase2a_header_1024px.png` | `.png` | 14.0 KB | Refined Phase 2A header render at 1024px (desktop navbar threshold) | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **34** | `docs/screenshots/phase2a_header_1280px.png` | `.png` | 20.6 KB | Refined Phase 2A header render at 1280px (laptop viewport) | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **35** | `docs/screenshots/phase2a_header_1440px.png` | `.png` | 20.8 KB | Refined Phase 2A header render at 1440px (desktop viewport) | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **36** | `docs/screenshots/phase2a_header_375px.png` | `.png` | 4.8 KB | Refined Phase 2A header render at 375px (mobile small) | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **37** | `docs/screenshots/phase2a_header_390px.png` | `.png` | 4.8 KB | Refined Phase 2A header render at 390px (mobile standard) | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **38** | `docs/screenshots/phase2a_header_430px.png` | `.png` | 4.9 KB | Refined Phase 2A header render at 430px (mobile large) | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **39** | `docs/screenshots/phase2a_header_768px.png` | `.png` | 5.1 KB | Refined Phase 2A header render at 768px (tablet portrait) | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **40** | `docs/screenshots/phase2a_header_820px.png` | `.png` | 5.1 KB | Refined Phase 2A header render at 820px (tablet large) | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **41** | `docs/screenshots/phase2a_header_912px.png` | `.png` | 5.2 KB | Refined Phase 2A header render at 912px (foldable / Surface) | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **42** | `docs/screenshots/phase2a_tablet_768px_drawer.png` | `.png` | 173.9 KB | Refined Phase 2A mobile drawer open state render at 768px | **COMMIT** | Visual acceptance evidence in `taxoryn-cdo-phase-2a-header-logo.md` | Commit as Phase 2A evidence |
| **43** | `docs/screenshots/tablet_768px_drawer_open.png` | `.png` | 175.8 KB | Phase 1 baseline tablet drawer open state render at 768px | **COMMIT** | Visual evidence cited in `phase-1-responsive-navigation-integrity.md` | Commit as Phase 1 baseline evidence |
| **44** | `docs/screenshots/tablet_820px_drawer_open.png` | `.png` | 206.1 KB | Phase 1 baseline tablet drawer open state render at 820px | **COMMIT** | Visual evidence cited in `phase-1-responsive-navigation-integrity.md` | Commit as Phase 1 baseline evidence |
| **45** | `docs/screenshots/taxoryn_logo_comparison.png` | `.png` | 87.5 KB | Side-by-side visual comparison of legacy header mark vs master mark | **COMMIT** | Cited in `taxoryn-cdo-phase-2a-header-logo.md` as primary geometric defect proof | Commit as Brand Governance evidence |

---

## 3. Special Technical Review Items

### 3.1 Status of `audit-slice1.mjs`
- In accordance with final governance decisions, `audit-slice1.mjs` remains **uncommitted** in the working tree.
- It will not be staged or tracked until developer consensus on portability (extracting hardcoded Edge binaries) and permanent directory location (`scripts/` vs `test/`) is established.

### 3.2 Evaluation of `next-env.d.ts`
- **Compiler Generation:** Produced dynamically by Next.js compiler during local development.
- **Git History:** Git commit history confirms **zero commits** for `next-env.d.ts` since repository inception.
- **Action:** Retained as excluded in `.gitignore`. No tracking changes applied.

### 3.3 Environment & Secrets Verification
- Entire index audited: **0 secret credentials tracked in Git**.
- `.env.example` verified as containing only documentation keys and blank placeholders.
- Rule `.env.*` ensures no `.env.stage`, `.env.prod`, or `.env.local` files can accidentally enter the Git index.

---

## 4. Tracked Generated Files Verification

`git ls-files -c -i --exclude-standard` was executed against the index:
- **Result:** **0 tracked generated files found.**
- All 123 committed files represent valid source code, application configuration, test suites, or core documentation.
- No historical build artifacts (`.next`, `out/`, `node_modules/`, `coverage/`) were committed in previous revisions.
- No `git rm --cached` operation is required or authorized.

---

## 5. Recommended Staging & Commit Plan

When ready to commit the unversioned files, execute the following structured atomic commits:

### Group 1 — Git Hygiene & Governance Documentation
- `M .gitignore`
- `docs/reports/git-ignore-cleanup-report.md`
- `docs/reports/git-repository-hygiene-policy.md`
- `docs/reports/git-artifact-inventory.md`

### Group 2 — Brand Governance Specification & Evidence
- `docs/reports/taxoryn-brand-governance-master-logo.md`
- `docs/screenshots/master_logo_governance_comparison.png`
- `docs/screenshots/logo_comparison.html`
- `docs/screenshots/master_logo_comparison.html`
- `docs/screenshots/taxoryn_logo_comparison.png`

### Group 3 — Phase 1 Responsive Navigation QA & Evidence
- `docs/reports/phase-1-responsive-navigation-integrity.md`
- `docs/screenshots/header_375px.png` through `docs/screenshots/header_1440px.png` (10 files)
- `docs/screenshots/tablet_768px_drawer_open.png`
- `docs/screenshots/tablet_820px_drawer_open.png`

### Group 4 — Phase 2A Header Refinement & Evidence
- `docs/reports/taxoryn-cdo-phase-2a-header-logo.md`
- `docs/screenshots/phase2a_header_375px.png` through `docs/screenshots/phase2a_header_1440px.png` (10 files)
- `docs/screenshots/phase2a_tablet_768px_drawer.png`

### Group 5 — Phase 2B Homepage Final Acceptance & Visual Proof
- `docs/reports/taxoryn-cdo-phase-2b-final-visual-acceptance.md`
- `docs/reports/taxoryn-cdo-phase-2b-homepage-experience.md`
- `docs/screenshots/phase-2b/` (all 10 section zooms and viewport captures)

### Group 6 — Phase 2C Planning Documentation
- `docs/reports/taxoryn-cdo-phase-2c-step-1-assessment.md`
- *(Note: `audit-slice1.mjs` remains uncommitted)*
