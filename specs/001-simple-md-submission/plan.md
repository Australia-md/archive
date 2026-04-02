# Implementation Plan: Simple Markdown Submission Interface (Community Edition)

**Branch**: `001-simple-md-submission` | **Date**: 2026-03-30 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-simple-md-submission/spec.md`

## Summary

A non-technical contributor submission pipeline for the Australia.md archive. A static web form (TypeScript/HTML5/CSS3, no frameworks) lets contributors select a category, fill a Markdown template, enter a fact-check URL, and submit. Submissions are staged as **GitHub Issues** via a Cloudflare Worker proxy (holds the GitHub service account token server-side). A GitHub Action triggers on Issue creation, calls the **GitHub Models API** (`GITHUB_TOKEN`, no external key) to semantically verify the submitted content against the source URL, and either creates a file + PR (VERIFIED) or comments with a rejection reason (REJECTED). Administrators can manually override AI decisions via Issue labels, triggering a second GitHub Action.

This is the **Community Edition** (free tier) in Australia.md's dual-path open-core model. Spec 002 (RxAI Premium Submission Suite) will extend the same Cloudflare Worker and GitHub Actions backend with authentication middleware and priority routing — the shared backend is designed for reuse, not replacement. The submission form deploys to `australiamd.org/submit/` (on Australia.md infrastructure, not RxAI).

## Commercial Context

This spec (001) covers the **Community Web Form** — the free middle tier in Australia.md's open-core model ([Commercial Blueprint v2](../../Australia-md-Commercial-Blueprint-v2.md)). The free form removes the GitHub account barrier for non-technical public contributors, supporting the growth target of 20,000 directory practitioners by Month 12.

**Dual-path architecture**:
| Path | Auth | Queue | Deployed to |
|---|---|---|---|
| GitHub Issues (direct) | GitHub account | Admin-paced | github.com |
| Community Web Form (this spec) | None (IP rate-limited) | Standard (AI via GitHub Models) | `australiamd.org/submit/` |
| RxAI Premium Suite (spec 002) | RxAI subscription | Priority (fast-track AI) | `app.rxai.com.au` |

**Reusability constraint**: The Cloudflare Worker proxy and GitHub Actions workflows defined here MUST be extensible by spec 002. Specifically:
- Worker route structure must support additional middleware (authentication, priority tagging)
- Action scripts must accept configuration (e.g., verification priority) without code changes
- Shared TypeScript types must be importable by both spec 001 and 002 frontends

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode, per constitution) + Node.js 20 (Actions runner)  
**Primary Dependencies**:
- Frontend: Vanilla TypeScript (no framework — per constitution); compiled to `dist/`
- Cloudflare Worker proxy: TypeScript via Wrangler (`@cloudflare/workers-types`, `itty-router`)
- GitHub Action scripts: `@actions/core`, `@actions/github`, `@azure/openai`, native `fetch()` (Node 20 built-in)
- Email: `dawidd6/action-send-mail` GitHub Action (Gmail SMTP via App Password, stored in GitHub Secrets)

**Storage**: No database. GitHub Issues = submission queue. Repository files = accepted content. Cloudflare Workers KV stores rate-limit counters (`RATE_LIMIT_KV`), contributor emails keyed by issue number (`EMAIL_KV`, TTL 30 days), and system status flags (`STATUS_KV`, TTL 60s).  
**Testing**: `vitest` for TypeScript unit tests; GitHub Actions test runs via `act` locally  
**Target Platform**: Static site (GitHub Pages / any CDN) + Cloudflare Workers (free tier) + GitHub Actions (ubuntu-latest)  
**Project Type**: Web application (static frontend + serverless proxy + GitHub Actions automation)  
**Performance Goals**: SC-001 form submit < 3 min UX; SC-003 end-to-end pipeline < 5 min  
**Constraints**:
- No external LLM API key (GitHub Models via `GITHUB_TOKEN`)
- AGPL-3.0 compatible dependencies only
- No hardcoded tokens anywhere; all secrets in GitHub Secrets / Cloudflare Secrets
- Copilot Pro: 300 GitHub Models requests/month included
- GitHub Models rate limit: graceful fallback to "Pending Human Review" label

**Scale/Scope**: Small open-source project, expected < 50 submissions/month. Single repository.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-checked after Phase 1 design.*

| Rule | Status | Notes |
|------|--------|-------|
| TypeScript strict mode | ✅ PASS | All source in `src/`, compiled to `dist/`. Action scripts in `.github/scripts/` |
| No frameworks (frontend) | ✅ PASS | Vanilla TS for form UI. Cloudflare Worker has `itty-router` (server-side only, not frontend) |
| WCAG 2.1 Level AA | ✅ PASS | Form must have `<label>` associations, keyboard nav, ARIA for live regions |
| No `innerHTML` with user input | ✅ PASS | Template pre-fill uses `textContent`; user input never rendered via `innerHTML` |
| No secrets in code | ✅ PASS | GitHub token in Cloudflare Secrets; SMTP creds in GitHub Secrets |
| AGPL-3.0 compatible deps | ✅ PASS | `@azure/ai-inference` (MIT), `@actions/core` (MIT), `@actions/github` (MIT), `itty-router` (MIT), `dawidd6/action-send-mail` (MIT) |
| SRI on CDN assets | ✅ PASS | No third-party CDN on submission form; Google Fonts uses `<link>` (no SRI needed for stylesheet) |
| SEO meta tags | ✅ PASS | Submission page needs `<title>`, `<meta description>`, Open Graph, canonical |

**Complexity justification** (itty-router in Worker): The Cloudflare Worker is a server-side proxy only, not part of the static frontend. The constitution "no frameworks" rule applies to the static site frontend. The Worker is a distinct runtime environment. `itty-router` (MIT, 1KB) is used only for routing within the Worker.

## Project Structure

### Documentation (this feature)

```text
specs/001-simple-md-submission/
├── plan.md              ← this file
├── research.md          ← Phase 0 output
├── data-model.md        ← Phase 1 output
├── quickstart.md        ← Phase 1 output
├── contracts/           ← Phase 1 output
│   ├── worker-api.md       GitHub Issues proxy contract
│   └── action-agent.md     AI Verification Agent contract
└── tasks.md             ← Phase 2 output (speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── main.ts                  # existing site JS (unchanged)
├── submission/
│   ├── form.ts              # submission form controller
│   ├── templates.ts         # Markdown template definitions
│   └── categories.ts        # category/subcategory list

dist/                        # compiled output (committed, static site)
├── main.js
└── submission/
    ├── form.js
    ├── templates.js
    └── categories.js

submit/
└── index.html               # submission form page (new HTML page)

worker/                      # Cloudflare Worker proxy (separate deploy)
├── src/
│   ├── index.ts             # Worker entrypoint — receives form POST, creates GitHub Issue
│   ├── rate-limiter.ts      # IP-based rate limiting (2 per 15 min, KV-backed)
│   ├── email-store.ts       # Store/retrieve contributor emails (KV, TTL 30d)
│   ├── validator.ts         # Server-side input validation (mirrors client-side)
│   ├── status-checker.ts    # System status (KV + GitHub rate_limit)
│   ├── issue-builder.ts     # Format Issue title/body with email redaction
│   └── github-client.ts     # GitHub API client with retry
├── wrangler.toml            # KV bindings: RATE_LIMIT_KV, EMAIL_KV, STATUS_KV
└── package.json

.github/
├── workflows/
│   ├── verify-submission.yml      # triggers on issues: opened — AI verification
│   └── admin-override.yml         # triggers on issues: labeled — admin override
└── scripts/
    ├── verify-agent.ts            # GitHub Models API fact-check logic
    ├── create-content-file.ts     # creates MD file + opens PR on VERIFIED
    └── notify-contributor.ts      # formats and sends email notification

docs/
└── submit/                        # (no MD file — page is in submit/index.html)
```

**Structure Decision**: Web application pattern. Static frontend (`src/submission/`) compiled to `dist/`. Cloudflare Worker (`worker/`) deployed separately as a micro-proxy. GitHub Actions automation (`.github/workflows/` + `.github/scripts/`) handles the server-side pipeline. All TypeScript strict throughout.

## Complexity Tracking

| Consideration | Why Needed | Simpler Alternative Rejected Because |
|---|---|---|
| Cloudflare Worker proxy | Static site cannot hold GitHub token client-side (security). Worker holds token server-side, receives form POST, creates Issue. | Direct `workflow_dispatch` from frontend exposes PAT in browser. GitHub App is more complex to set up. |
| Separate Worker package | Worker needs its own `wrangler.toml` and Node modules; cannot share `tsconfig.json` with static site. | Monorepo single `package.json` would create build conflicts between browser targets and Worker runtime. |
| Reusable Worker + Actions | Spec 002 (RxAI Premium) will extend the same Worker with auth middleware and priority routing. Designing endpoints as composable middleware avoids a full rewrite when spec 002 starts. | Building spec-001-only endpoints would require refactoring when spec 002 begins. |

## Spec 002 Extension Points

The following components are designed for reuse by spec 002 (RxAI Premium Submission Suite):

| Component | Extension mechanism | Notes |
|---|---|---|
| `worker/src/index.ts` | Add auth middleware before route handlers | New routes for priority submission at `/api/premium/submit` |
| `.github/scripts/verify-agent.ts` | Accept `priority` env var for queue ordering | Premium submissions verified ahead of standard queue |
| `.github/scripts/create-content-file.ts` | No changes expected | Same file creation logic for both tiers |
| `src/submission/types.ts` | Add `SubmissionTier` enum (`community` / `premium`) | Shared type imported by both frontends |
| Success message (T021) | MAY include non-intrusive upsell touchpoint | "Want faster verification? Try RxAI Premium" link |
