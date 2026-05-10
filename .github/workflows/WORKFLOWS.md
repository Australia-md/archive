# GitHub Actions Workflows — `.github/workflows/`

There are two workflows in this pipeline. Both are triggered by GitHub Issue events — neither runs on push or pull request.

---

## Workflows Overview

| File | Trigger | Purpose |
|------|---------|---------|
| [`verify-submission.yml`](#verify-submissionyml) | Issue **opened** with `submission` label | AI fact-checks the submission and creates a file + PR or rejects it |
| [`admin-override.yml`](#admin-overrideyml) | Issue **labeled** with `Verified` or `Rejected` | Lets an authorised admin manually accept or reject a submission |

---

## `verify-submission.yml`

**Name**: Verify Submission  
**Trigger**: `on: issues: types: [opened]`  
**Condition**: Only fires if the opened Issue already has the `submission` label (applied by the Cloudflare Worker when it creates the Issue)  
**Runner**: `ubuntu-latest` · Node 20  
**Timeout**: 5 minutes

### Purpose

This is the **main automation pipeline**. Every time the submission form is used, the Cloudflare Worker creates a GitHub Issue. This workflow immediately fires, runs an AI fact-check, and routes to one of four outcomes.

### Permissions required

| Permission | Why |
|-----------|-----|
| `contents: write` | Create branch and commit the verified `.md` file |
| `issues: write` | Add/remove labels, post comments |
| `pull-requests: write` | Open a PR for the verified content |
| `models: read` | Call GitHub Copilot API (`gpt-5.4-mini`) using `GITHUB_TOKEN` |

### Step-by-step flow

```
1. actions/checkout@v4
2. actions/setup-node@v4 (Node 20, npm cache)
3. npm ci  (.github/scripts/)
4. Retrieve contributor email  →  calls Worker GET /api/email/{N}
5. Run AI verification         →  npx tsx verify-agent.ts
      │
      ├─ VERIFIED
      │     ├─ npx tsx create-content-file.ts  (branch + file + PR)
      │     ├─ Add label: Verified, remove: pending-review
      │     └─ Email contributor: congratulations + Issue link
      │
      ├─ REJECTED
      │     ├─ Add label: Needs Fix, remove: pending-review
      │     ├─ Post Issue comment with AI rejection reason
      │     └─ Email contributor: rejection reason + fix instructions
      │
      ├─ SCRAPE_BLOCKED
      │     ├─ Add labels: Scrape Blocked + Pending Human Review
      │     ├─ Post Issue comment: queued for manual review
      │     ├─ Email admin: manual review required
      │     └─ Email contributor: queued for review
      │
      └─ RATE_LIMITED
            (GitHub Copilot API quota hit — falls through to SCRAPE_BLOCKED path)
```

### Step 4 — Retrieve contributor email

The contributor's real email is **never stored in the GitHub Issue body** (Australian Privacy Act compliance). It is stored in the Cloudflare Worker's KV store (keyed by Issue number, TTL 30 days) when the form is submitted.

This step calls `GET /api/email/{issueNumber}` on the Worker, authenticated with `INTER_SVC_TOKEN`. If the endpoint returns 404 or the request fails:
- `email_missing=true` is set
- All email notification steps are skipped (they check `email_missing == 'false'`)
- The admin is not notified via a fallback — the issue remains visible for manual follow-up

### Step 5 — AI verification (`verify-agent.ts`)

Calls `gpt-5.4-mini` via the **GitHub Copilot API** (`https://api.githubcopilot.com`) using `GITHUB_TOKEN` as the bearer token — no external API key required. Passes source text and submitted Markdown. Expects `VERIFIED` or `REJECTED: <reason>`. Any other response (malformed AI output, timeout, unexpected error) is treated as `SCRAPE_BLOCKED`.

### Outcome — email behaviour

| Outcome | Contributor email | Admin email |
|---------|------------------|-------------|
| VERIFIED | ✅ Sent | ❌ Not sent |
| REJECTED | ✅ Sent | ❌ Not sent |
| SCRAPE_BLOCKED | ✅ Sent | ✅ Sent (`secrets.ADMIN_EMAIL`) |
| RATE_LIMITED | ❌ Not sent | ✅ Sent (`secrets.ADMIN_EMAIL`) |

### Secrets required

| Secret | Used for |
|--------|---------|
| `GITHUB_TOKEN` | Auto-provided — GitHub API + GitHub Copilot API (bearer token) |
| `INTER_SVC_TOKEN` | Authenticate Worker email-retrieval endpoint |
| `WORKER_URL` | Base URL of the Cloudflare Worker (e.g. `https://submit.australiamd.org`) |
| `GMAIL_ADDRESS` | From address for outbound email |
| `GMAIL_APP_PASSWORD` | Gmail App Password (SMTP auth via `dawidd6/action-send-mail`) |
| `ADMIN_EMAIL` | Admin notification address for SCRAPE_BLOCKED / RATE_LIMITED |

---

## `admin-override.yml`

**Name**: Admin Override  
**Trigger**: `on: issues: types: [labeled]`  
**Condition**: Only fires if the Issue already has the `submission` label AND the newly applied label is `Verified` or `Rejected`  
**Runner**: `ubuntu-latest` · Node 20  
**Timeout**: 5 minutes

### Purpose

Gives an authorised administrator the ability to **manually accept or reject** a submission — typically used when:
- The AI verification failed (`SCRAPE_BLOCKED` or `RATE_LIMITED`)
- An admin disagrees with the AI decision and wants to override it
- A submission was blocked by a web scraping restriction but the admin has verified it manually

Only users listed in `secrets.ADMIN_USERNAMES` (comma-separated GitHub usernames) can trigger an action. If anyone else applies a `Verified` or `Rejected` label, the workflow posts a blocking comment and exits cleanly.

### Permissions required

| Permission | Why |
|-----------|-----|
| `contents: write` | Create branch and commit file (Verified path) |
| `issues: write` | Post comments, close Issues, apply labels |
| `pull-requests: write` | Open PR (Verified path) |

> Note: `models: read` is **not** needed — no AI call is made in this workflow.

### Step-by-step flow

```
1. actions/checkout@v4
2. actions/setup-node@v4 (Node 20, npm cache)
3. npm ci  (.github/scripts/)
4. Check admin authorization    →  npx tsx check-admin-runner.ts
      │
      ├─ NOT admin
      │     └─ Post Issue comment: "Override rejected: only authorised administrators..."
      │        Exit 0 (no further steps run)
      │
      └─ IS admin
            │
            ├─ Retrieve contributor email  →  Worker GET /api/email/{N}
            │
            ├─ Label == 'Verified'
            │     └─ npx tsx create-content-file.ts  (branch + file + PR)
            │
            └─ Label == 'Rejected'
                  ├─ Post Issue comment: "This submission has been rejected by an administrator."
                  ├─ Close the Issue via GitHub API
                  └─ Email contributor: rejected by admin + Issue link
```

### Admin authorisation check

`check-admin-runner.ts` reads `secrets.ADMIN_USERNAMES` (a comma-separated list, e.g. `HoHo1979,james`) and compares it against `github.actor` (case-insensitive). The result is exposed as step output `is_admin: "true" | "false"`. All subsequent steps gate on `is_admin == 'true'`.

Non-admin actors are not failed — the workflow exits with code 0 after posting the comment, so the Actions run shows green. This is intentional: a failure would generate noise for routine label activity by contributors.

### Idempotency

`create-content-file.ts` checks for an existing open PR on branch `submission/issue-{N}` before creating a new one. If a PR already exists (e.g. AI verified it and a PR is already open), the script exits cleanly with no duplicate PR.

### Secrets required

| Secret | Used for |
|--------|---------|
| `GITHUB_TOKEN` | Auto-provided — GitHub API |
| `ADMIN_USERNAMES` | Comma-separated list of authorised admin GitHub usernames |
| `INTER_SVC_TOKEN` | Authenticate Worker email-retrieval endpoint |
| `WORKER_URL` | Base URL of the Cloudflare Worker |
| `GMAIL_ADDRESS` | From address for outbound email |
| `GMAIL_APP_PASSWORD` | Gmail App Password (SMTP auth) |

---

## Shared Design Decisions

### Why Issue events, not push events?

The submission pipeline uses GitHub Issues as its queue. Issues are created by the Cloudflare Worker (not by git pushes), so `on: issues` is the correct trigger. This also means the pipeline never runs on direct repository pushes — it only fires on community submissions.

### Why `timeout-minutes: 5`?

The spec requires end-to-end pipeline completion within 5 minutes (SC-003). The timeout enforces this contract and prevents runaway Actions charges if the AI inference or URL fetch hangs.

### Why `dawidd6/action-send-mail`?

Gmail SMTP via App Password requires no additional paid service. `dawidd6/action-send-mail@v3` is MIT-licensed and handles TLS correctly on port 465. The App Password is stored in GitHub Secrets — never in code or workflow files.

### Email fallback when `email_missing=true`

If the Worker's email KV entry has expired (TTL 30 days) or the Worker is unreachable, contributor email steps are skipped silently. The Issue remains open and visible in GitHub for manual follow-up. Admin-directed outcomes (`SCRAPE_BLOCKED`, `RATE_LIMITED`) still notify `secrets.ADMIN_EMAIL`.

---

## Full Pipeline Sequence Diagram

```
Contributor                 Cloudflare Worker              GitHub
    │                             │                           │
    │── fill form ─────────────── │                           │
    │                             │── POST /api/submit ──────▶│
    │                             │                    create Issue #N
    │                             │◀─ { issueNumber, issueUrl }
    │◀── success message ─────────│                           │
    │                             │                           │
    │                             │         Issue opened ─────▶ verify-submission.yml fires
    │                             │                           │
    │                             │◀── GET /api/email/{N} ───── retrieve-email step
    │                             │─── { email } ────────────▶│
    │                             │                           │
    │                             │                    verify-agent.ts
    │                             │                    fetch-source.ts  (scrape URL)
    │                             │                    GitHub Copilot API — gpt-5.4-mini
    │                             │                           │
    │                             │                    VERIFIED?
    │                             │                    ├─ create-content-file.ts → PR opened
    │◀───────────────────── email: verified ────────────────── │
    │                             │                    REJECTED?
    │◀───────────────────── email: reason ──────────────────── │
    │                             │                    SCRAPE_BLOCKED?
    │◀───────────────────── email: queued ──────────────────── │
    │                             │                    admin◀── email: manual review
    │
    │                             Admin applies 'Verified' label
    │                             │                           │
    │                             │                admin-override.yml fires
    │                             │                    check-admin-runner.ts
    │                             │                    (if authorised)
    │                             │                    create-content-file.ts → PR opened
    │◀───────────────────── email: rejected (if Rejected label) ──
```
