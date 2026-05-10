# Quickstart: Simple Markdown Submission Interface

**Branch**: `001-simple-md-submission`  
**Date**: 2026-03-30

This guide walks a developer through setting up the full local development environment and deploying the pipeline from scratch.

---

## Prerequisites

| Tool | Version | Install |
|---|---|---|
| Node.js | 20+ | [nodejs.org](https://nodejs.org) |
| npm | 10+ | Bundled with Node |
| TypeScript | 5.x | `npm install -g typescript` |
| Wrangler (Cloudflare CLI) | 3.x | `npm install -g wrangler` |
| GitHub CLI | 2.x | [cli.github.com](https://cli.github.com) |

---

## 1. Clone and install

```bash
git clone https://github.com/owner/australia.git
cd australia
git checkout 001-simple-md-submission
npm install
```

---

## 2. Build the static site TypeScript

```bash
npm run build
# Compiles src/ → dist/
```

The submission form TypeScript lives in `src/submission/` and compiles to `dist/submission/`.

---

## 3. Set up the Cloudflare Worker proxy

```bash
cd worker/
npm install
wrangler login            # Authenticate with your Cloudflare account
wrangler secret put GITHUB_TOKEN   # Paste your fine-grained PAT (issues: write only)
wrangler secret put ALLOWED_ORIGIN # Paste: https://australiamd.org
```

**Create the fine-grained PAT**:
1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Repository access: `australia` only
3. Permissions: `Issues: Read and write`
4. No other permissions needed

**Test the Worker locally**:
```bash
cd worker/
wrangler dev
# Worker runs at http://localhost:8787
# Test: curl -X POST http://localhost:8787/api/submit -H "Content-Type: application/json" -d '{...}'
```

**Deploy the Worker**:
```bash
wrangler deploy
```

---

## 4. Set up GitHub Secrets for Actions

Go to: GitHub repository → Settings → Secrets and variables → Actions → New repository secret

| Secret name | Value |
|---|---|
| `GMAIL_ADDRESS` | Your Gmail address (e.g. `bot@gmail.com`) |
| `GMAIL_APP_PASSWORD` | App Password from Google Account security settings |

**Create a Gmail App Password**:
1. Google Account → Security → 2-Step Verification (must be enabled)
2. Security → App Passwords → Generate for "Mail" / "Other (custom name)"
3. Copy the 16-character password → paste into GitHub Secret

---

## 5. Set up GitHub Issue Labels

The pipeline depends on specific labels existing in the repository. Run once:

```bash
gh label create "submission" --color "0075ca" --description "Community content submission"
gh label create "pending-review" --color "e4e669" --description "Awaiting AI verification"
gh label create "Verified" --color "0e8a16" --description "Content verified by AI agent"
gh label create "Needs Fix" --color "d93f0b" --description "Rejected — contributor must revise"
gh label create "Scrape Blocked" --color "5319e7" --description "Source URL could not be fetched"
gh label create "Pending Human Review" --color "b60205" --description "AI rate limited — manual review required"
gh label create "Rejected" --color "b60205" --description "Permanently rejected"
```

---

## 6. Add the submission page to the site

The static HTML page lives at `submit/index.html` and is linked from the main site navigation. No server required — the form JavaScript POSTs to the Cloudflare Worker.

Open `submit/index.html` in a browser (or `npx serve .`) and verify:
- Category dropdown populates correctly
- Template selection pre-fills the content textarea
- URL field validates `.gov.au` / `.edu.au` domains

---

## 7. Test the full pipeline end-to-end

1. Fill the submission form and click "Submit"
2. Check the GitHub Issues tab — a new Issue should appear with `submission` and `pending-review` labels
3. Check the Actions tab — `verify-submission.yml` should have triggered
4. Wait up to 5 minutes for the pipeline to complete
5. The Issue should be labeled `Verified` or `Needs Fix`, and the contributor email should be sent

**Manual test via curl**:
```bash
curl -X POST https://YOUR_WORKER.workers.dev/api/submit \
  -H "Content-Type: application/json" \
  -H "Origin: https://australiamd.org" \
  -d '{
    "contributorEmail": "test@example.com",
    "category": "Health",
    "subcategory": null,
    "templateType": "MedicalPractice",
    "factCheckUrl": "https://www.health.gov.au/topics/hospitals",
    "content": "# Public Hospital Services\n\nAustralian public hospitals provide...",
    "submittedAt": "2026-03-30T05:00:00.000Z"
  }'
```

---

## 8. Local development — GitHub Action scripts

The Action scripts in `.github/scripts/` can be run locally for development:

```bash
cd .github/scripts/
npm install
export GITHUB_TOKEN=your_token_here
export ISSUE_NUMBER=1
export ISSUE_BODY="$(cat test-issue-body.md)"

npx tsx verify-agent.ts    # Test AI verification locally
```

---

## Architecture Reference

```
contributor          static site          Cloudflare Worker      GitHub
    │                    │                      │                  │
    │──fill form─────────│                      │                  │
    │                    │──POST /api/submit────▶│                  │
    │                    │                      │──create Issue────▶│
    │                    │                      │◀─issue.number────│
    │                    │◀─{issueUrl}──────────│                  │
    │◀───confirmation─────│                      │                  │
    │                    │                      │    GitHub Action fires
    │                    │                      │        │ fetch source URL
    │                    │                      │        │ call GitHub Models API
    │                    │                      │        ▼
    │                    │                      │   VERIFIED → create file + PR
    │                    │                      │   REJECTED → comment + email
    │◀──────────────────────email notification──────────│
```
