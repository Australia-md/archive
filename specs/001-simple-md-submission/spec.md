# Feature Specification: Simple Markdown Submission Interface (Community Edition)

**Feature Branch**: `001-simple-md-submission`
**Created**: 2026-03-30
**Updated**: 2026-03-30
**Status**: Implementation Ready
**Input**: User description: "I would like to create a UX interface that is very simple for non-technical users who can submit their md file to GitHub. There should be an easy category selection, the format of md template to choose, and where the fact-check URL will be entered so our GitHub Action can validate the URL from an authorised source with content. Verification uses an AI agent (GitHub Models API) for semantic fact-checking, and submissions are staged as GitHub Issues before any file enters the codebase."

---

## Scope & Commercial Context

### Dual-Path Submission Model

Australia.md operates an open-core model (see [Commercial Blueprint v2](../../Australia-md-Commercial-Blueprint-v2.md)). Content submission follows a dual-path architecture:

| Path | Access | Auth Required | Verification Speed | Cost |
|---|---|---|---|---|
| **GitHub Issues (direct)** | Anyone with a GitHub account | GitHub account | Standard queue (admin-paced) | Free |
| **Community Web Form (this spec)** | Public — no GitHub account needed | None (rate-limited by IP) | Standard queue (AI verification via GitHub Models API) | Free |
| **RxAI Premium Suite (spec 002)** | RxAI subscribers | RxAI account + subscription | Priority queue (fast-track AI verification) | Paid (see Blueprint §5) |

### This Specification Covers

This spec (**001**) defines the **free Community Web Form** — the middle tier. It removes the GitHub account barrier for non-technical public users while keeping the submission pipeline free, consistent with the Blueprint's Community Base tier ("directory listing, open API, **community editing**, patient search" — free under CDLA-Permissive-2.0).

The free Community Web Form serves the Blueprint's critical growth assumption: reaching 20,000 directory practitioners by Month 12 (Blueprint §6.4) requires maximum contribution velocity from community sources. Gating basic submissions behind payment would directly reduce this velocity.

### What This Spec Does NOT Cover

The **RxAI Premium Submission Suite** (planned as spec `002-rxai-premium-submission`) will add paid features on top of this pipeline, including: priority AI verification, AHPRA credential pre-fill, bulk submission, submission analytics dashboard, draft/preview, and PMS data import. That spec is a separate deliverable with its own requirements, authentication layer, and deployment target (`app.rxai.com.au`).

### Deployment Target

The Community Web Form is part of the Australia.md open-source project and is deployed to `australiamd.org/submit/` (or equivalent static hosting alongside the main site). It is **not** hosted on RxAI infrastructure.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Simplified Content Submission (Priority: P1)

As a non-technical contributor, I want a simple web-based form to submit information so that I don't have to learn how to use Git or edit files directly on GitHub.

**Why this priority**: This is the core functionality that enables the target audience (non-technical users) to contribute.

**Independent Test**: A user navigates to the interface, fills out the required fields (category, template, URL, content), and clicks "Submit". The system successfully creates a GitHub Issue representing the submission, and the contributor receives a confirmation email.

**Acceptance Scenarios**:

1. **Given** the submission page is loaded, **When** the user selects a category and a template, **Then** the content area is pre-populated with the chosen template structure.
2. **Given** a filled-out form with a fact-check URL, **When** the user clicks "Submit", **Then** a GitHub Issue is created in the repository with all submission data, and the contributor receives a confirmation email that their submission is under review.

---

### User Story 2 - Agentic Semantic Verification (Priority: P2)

As a site administrator, I want submitted content to be automatically verified against its cited source URL by an AI agent, so that only factually accurate content progresses to the codebase.

**Why this priority**: Ensures data integrity by replacing simple URL whitelisting with semantic fact-checking, enabling much higher confidence in accepted content.

**Independent Test**: A GitHub Issue is created by a submission, triggering a GitHub Action. The Action extracts the fact-check URL and submitted content, calls the GitHub Models API with a fact-checking prompt, reads the `VERIFIED` or `REJECTED: [reason]` response, and applies the corresponding labels and actions.

**Acceptance Scenarios**:

1. **Given** a Submission Issue is opened, **When** the AI Verification Agent finds the submitted content to be factually consistent with the content at the fact-check URL, **Then** it responds `VERIFIED`, the system creates the Markdown file in the repository, opens a Pull Request, and applies a "Verified" label to the Issue.
2. **Given** a Submission Issue is opened, **When** the AI Verification Agent finds the submitted content to be inconsistent with or unsupported by the content at the fact-check URL, **Then** it responds `REJECTED: [reason]`, the system comments on the Issue with the reason, applies a "Needs Fix" label, and sends an email to the contributor explaining what needs to be corrected.

---

### User Story 3 - Error Feedback for Users (Priority: P3)

As a non-technical user, I want to know if my submission was successful or if I need to fix something, so that I can complete my contribution.

**Why this priority**: Essential for a "very simple" UX to ensure users are not left in the dark.

**Independent Test**: A user submits a form and receives an immediate confirmation or a clear error message if the submission fails.

**Acceptance Scenarios**:

1. **Given** a failed network connection during submission, **When** the user clicks "Submit", **Then** a user-friendly error message is displayed.
2. **Given** a successful submission, **When** the AI Verification Agent completes its check, **Then** an automated email is sent to the contributor's provided email address with the verification outcome and next steps.

---

### User Story 4 - Admin Manual Override (Priority: P3)

As a site administrator, I want to be able to manually override the AI Verification Agent's decision on a Submission Issue, so that I can correct cases where the agent made a mistake.

**Why this priority**: The GitHub Issues dashboard provides a visible queue of all pending submissions. Admin override is the safety valve against AI hallucinations or edge-case failures.

**Independent Test**: An administrator navigates to a "Needs Fix" Submission Issue, manually reviews the submission and source URL, and applies a "Verified" label. The system proceeds to create the Markdown file and open a Pull Request as if the AI had approved it.

**Acceptance Scenarios**:

1. **Given** a Submission Issue has a "Needs Fix" label applied by the AI agent, **When** `HoHo1979` (repo owner) manually removes "Needs Fix" and applies a "Verified" label, **Then** the system verifies the actor is in `ADMIN_USERNAMES`, creates the Markdown file and opens a Pull Request.
2. **Given** a Submission Issue has a "Verified" label, **When** `HoHo1979` applies a "Rejected" label, **Then** the system closes the Issue and emails the contributor with the rejection reason.

---

### Edge Cases

- **Invalid URL format**: The system provides real-time validation feedback on the form field before submission.
- **Rate Limit Exceeded**: If a contributor submits more than 2 times within a 15-minute window (tracked by IP address via Cloudflare Workers KV), the Worker returns a `429` response. The form displays: "You have reached the submission limit. Please wait 15 minutes before submitting again." The Submit button is disabled until the window resets.
- **GitHub API Limits**: The Worker retries the GitHub Issue creation up to 3 times with exponential backoff (1s, 2s, 4s). If all attempts fail, the Worker returns a 503 with the message: "Server is temporarily not accepting submissions. Please check the status indicator — when it shows green, resubmit." The status endpoint (`/api/status`) reflects the failure as `red`.
- **Empty Content**: Submissions are blocked if the user has not modified the template fields.
- **Web Scraping Blockers**: Some authorised sources (e.g., government news sites) may have anti-bot protections (Cloudflare, etc.) that block the GitHub Action from fetching the source URL. In this case, the Action applies a "Scrape Blocked" label and notifies the admin (`james@rxai.com.au`) for manual review.
- **AI Hallucination**: The AI Verification Agent may incorrectly reject a valid submission or approve a flawed one. The admin manual override (User Story 4) is the mitigation. Only `HoHo1979` (repo owner) can perform overrides.
- **GitHub Models Rate Limit**: The GitHub Models API is rate-limited based on the repository owner's Copilot subscription tier (300 req/month on Copilot Pro, 1,500 on Pro+). If the limit is exceeded, the Action fails gracefully, applies "Pending Human Review" label, notifies `james@rxai.com.au`, and the status endpoint reflects `red` until the limit resets.
- **File Path Conflict**: If a verified submission targets a file path that already exists, the system archives the current file to `{slug}-archived-YYYY-MM-DD.md` and overwrites the original path with the new verified content. Both operations are committed atomically.
- **Post-Submit UX**: After a successful submission, the form is replaced inline with a success message: "Submitted! Your reference: [Issue #{N} link]. You'll be emailed when verification completes." No page redirect occurs.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a web-based user interface accessible without technical setup.
- **FR-002**: The system MUST allow users to select from a predefined list of categories (e.g., Government, Education, Tourism).
- **FR-003**: The system MUST allow users to select a Markdown template that pre-fills the content area.
- **FR-004**: The system MUST provide a dedicated input field for a fact-check URL.
- **FR-005**: The system MUST provide an input field for the contributor's email address.
- **FR-006**: The system MUST submit the form data as a formatted GitHub Issue to the repository using a central service account (no user GitHub account required). The contributor's email address MUST be stored only in the Worker/Action environment and MUST NOT appear in the public Issue body — the Issue body shows a redacted placeholder (`[email protected]`) in its place. The Worker MUST enforce a rate limit of **2 submissions per IP address per 15-minute sliding window**, enforced via Cloudflare Workers KV. Requests exceeding this limit MUST receive a `429` response with the message: "You have reached the submission limit. Please wait 15 minutes before submitting again."
- **FR-007**: The system MUST trigger a GitHub Action when a Submission Issue is opened, which calls the GitHub Models API (authenticated via `GITHUB_TOKEN`, no external API key required) to semantically verify the submitted content against the content fetched from the fact-check URL, and then labels the Issue and notifies the contributor based on the outcome. The workflow MUST verify that `github.actor` matches the value in the `ADMIN_USERNAMES` secret before executing any admin-triggered path.
- **FR-008**: When the AI Verification Agent returns `VERIFIED`, the system MUST: (1) check if the target file path already exists; (2) if it exists, archive the current file by copying it to `{slug}-archived-YYYY-MM-DD.md` in the same directory; (3) write the new verified content to the original path; (4) open a Pull Request referencing the originating Issue with the archive operation documented in the PR body; (5) apply a "Verified" label to the Issue.
- **FR-009**: When the AI Verification Agent returns `REJECTED: [reason]`, the system MUST post a comment on the Submission Issue containing the rejection reason, apply a "Needs Fix" label, and send an email to the contributor with the reason and instructions for correction.
- **FR-010**: The system MUST expose a public status endpoint (`/api/status`) that returns the current system health as one of three states: `green` (accepting submissions), `amber` (degraded — retrying), or `red` (not accepting — GitHub API or GitHub Models rate limit reached). The submission form MUST read this endpoint on page load and display a visible status banner. When status is not `green`, the Submit button MUST be disabled with the message: "Server is temporarily not accepting submissions. Please check the status indicator — when it shows green, resubmit."

### Key Entities

- **Submission**: Represents the data sent by the user, including contributor email, category, template type, fact-check URL, and body content.
- **Submission Issue**: The GitHub Issue created by the system to represent a pending submission in the review pipeline. It is the staging area for all content before it enters the codebase.
- **Markdown Template**: A predefined structure for different types of content (e.g., Medical, Culture).
- **Authorized Source**: A domain or specific URL pattern that is recognised by the system as a valid fact-checking authority.
- **AI Verification Agent**: The GitHub Models API service, authenticated via `GITHUB_TOKEN`, that fetches the content at the fact-check URL and semantically compares it against the submitted content, responding with only `VERIFIED` or `REJECTED: [reason]`.
- **System Status**: A real-time health indicator (`green` / `amber` / `red`) exposed by the Worker at `/api/status`, reflecting GitHub API availability and GitHub Models rate limit state. Shown as a banner on the submission form.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users with no technical background can successfully submit content in under 3 minutes.
- **SC-002**: 100% of submissions are correctly categorized according to the user's selection.
- **SC-003**: The GitHub Action AI verification and email notification complete within 5 minutes of a Submission Issue being opened (allows for AI inference latency of 5–10 seconds and source URL fetching).
- **SC-004**: 95% of semantically valid submissions are correctly classified as "Verified" by the AI Verification Agent without requiring admin manual override.
- **SC-005**: The system status endpoint (`/api/status`) correctly reflects `red` within 60 seconds of a GitHub API failure or GitHub Models rate limit being reached.

## Assumptions

- **Target Users**: Users have a modern web browser and a stable internet connection.
- **GitHub Repository**: A dedicated GitHub repository exists and is configured to receive these submissions.
- **GitHub Models Access**: The repository owner has a GitHub Copilot subscription (Pro or higher) to access the GitHub Models API via `GITHUB_TOKEN` at sufficient rate limits for the expected submission volume.
- **Authorized Sources**: A list of authorized source domains (e.g., `.gov.au`, `.edu.au`) is maintainable by administrators and used to pre-screen the fact-check URL before it is passed to the AI agent.
- **Markdown Formatting**: Users will primarily fill in the templates rather than writing complex Markdown from scratch.
- **Admin Identity**: The sole administrator is `HoHo1979` (GitHub username), stored in the `ADMIN_USERNAMES` GitHub Secret. Admin notifications are sent to `james@rxai.com.au`, stored in the `ADMIN_EMAIL` GitHub Secret.
- **Email Privacy**: Contributor email addresses are personal information under the Australian Privacy Act 1988. Emails are stored only in the Worker/Action runtime environment and are never written to public GitHub Issues. The Issue body displays a redacted placeholder (`[email protected]`).
- **Status Page**: A `/api/status` health endpoint is exposed by the Cloudflare Worker. The submission form reads it on load to determine whether to enable the Submit button.

---

## Relationship to Spec 002 (RxAI Premium Submission Suite)

This spec (001) and the planned spec 002 share the same backend pipeline: submissions become GitHub Issues, AI verification runs via GitHub Actions, and verified content enters the codebase as PRs. The difference is in the **frontend entry point** and **service tier**:

- **001 (this spec)**: Free web form → standard verification queue → deployed on `australiamd.org/submit/`
- **002 (planned)**: Authenticated RxAI portal → priority verification queue, AHPRA pre-fill, bulk submission, analytics → deployed on `app.rxai.com.au`

The shared backend (Cloudflare Worker proxy, GitHub Actions workflows) defined in this spec's tasks.md is designed to be reusable. Spec 002 will extend — not replace — the Worker and Action code with authentication middleware and priority routing.

### Upsell Touchpoint

The Community Web Form's success confirmation message (FR post-submit UX in Edge Cases) MAY include a non-intrusive reference to RxAI Premium for users who want faster verification or advanced features. This is consistent with the open-core model (Blueprint §4) — the free tool is fully functional, the paid tier is a genuine upgrade, not a gate on basic functionality.

