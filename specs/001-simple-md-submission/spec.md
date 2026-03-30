# Feature Specification: Simple Markdown Submission Interface

**Feature Branch**: `001-simple-md-submission`  
**Created**: 2026-03-30  
**Updated**: 2025-07-14  
**Status**: Draft  
**Input**: User description: "I would like to create a UX interface that is very simple for non-technical users who can submit their md file to GitHub. There should be an easy category selection, the format of md template to choose, and where the fact-check URL will be entered so our GitHub Action can validate the URL from an authorised source with content. Verification uses an AI agent (GitHub Models API) for semantic fact-checking, and submissions are staged as GitHub Issues before any file enters the codebase."

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

1. **Given** a Submission Issue has a "Needs Fix" label applied by the AI agent, **When** an administrator manually removes "Needs Fix" and applies a "Verified" label, **Then** the system creates the Markdown file and opens a Pull Request.
2. **Given** a Submission Issue has a "Verified" label, **When** an administrator reviews it and determines it should be rejected, **Then** the administrator can apply a "Rejected" label to close the Issue without creating a file.

---

### Edge Cases

- **Invalid URL format**: The system provides real-time validation feedback on the form field before submission.
- **GitHub API Limits**: The submission is queued and retried automatically if the API is temporarily unavailable.
- **Empty Content**: Submissions are blocked if the user has not modified the template fields.
- **Web Scraping Blockers**: Some authorised sources (e.g., government news sites) may have anti-bot protections (Cloudflare, etc.) that block the GitHub Action from fetching the source URL. In this case, the Action applies a "Scrape Blocked" label and notifies the admin for manual review.
- **AI Hallucination**: The AI Verification Agent may incorrectly reject a valid submission or approve a flawed one. The admin manual override (User Story 4) is the mitigation. Administrators are the final authority.
- **GitHub Models Rate Limit**: The GitHub Models API is rate-limited based on the repository owner's Copilot subscription tier (300 req/month on Copilot Pro, 1,500 on Pro+). If the limit is exceeded, the Action fails gracefully and notifies the admin to retry.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a web-based user interface accessible without technical setup.
- **FR-002**: The system MUST allow users to select from a predefined list of categories (e.g., Government, Education, Tourism).
- **FR-003**: The system MUST allow users to select a Markdown template that pre-fills the content area.
- **FR-004**: The system MUST provide a dedicated input field for a fact-check URL.
- **FR-005**: The system MUST provide an input field for the contributor's email address.
- **FR-006**: The system MUST submit the form data as a formatted GitHub Issue to the repository using a central service account (no user GitHub account required).
- **FR-007**: The system MUST trigger a GitHub Action when a Submission Issue is opened, which calls the GitHub Models API (authenticated via `GITHUB_TOKEN`, no external API key required) to semantically verify the submitted content against the content fetched from the fact-check URL, and then labels the Issue and notifies the contributor based on the outcome.
- **FR-008**: When the AI Verification Agent returns `VERIFIED`, the system MUST automatically create the Markdown file in the correct repository path, open a Pull Request referencing the originating Issue, and apply a "Verified" label to that Issue.
- **FR-009**: When the AI Verification Agent returns `REJECTED: [reason]`, the system MUST post a comment on the Submission Issue containing the rejection reason, apply a "Needs Fix" label, and send an email to the contributor with the reason and instructions for correction.

### Key Entities

- **Submission**: Represents the data sent by the user, including contributor email, category, template type, fact-check URL, and body content.
- **Submission Issue**: The GitHub Issue created by the system to represent a pending submission in the review pipeline. It is the staging area for all content before it enters the codebase.
- **Markdown Template**: A predefined structure for different types of content (e.g., Medical, Culture).
- **Authorized Source**: A domain or specific URL pattern that is recognised by the system as a valid fact-checking authority.
- **AI Verification Agent**: The GitHub Models API service, authenticated via `GITHUB_TOKEN`, that fetches the content at the fact-check URL and semantically compares it against the submitted content, responding with only `VERIFIED` or `REJECTED: [reason]`.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users with no technical background can successfully submit content in under 3 minutes.
- **SC-002**: 100% of submissions are correctly categorized according to the user's selection.
- **SC-003**: The GitHub Action AI verification and email notification complete within 5 minutes of a Submission Issue being opened (allows for AI inference latency of 5–10 seconds and source URL fetching).
- **SC-004**: 95% of semantically valid submissions are correctly classified as "Verified" by the AI Verification Agent without requiring admin manual override.

## Assumptions

- **Target Users**: Users have a modern web browser and a stable internet connection.
- **GitHub Repository**: A dedicated GitHub repository exists and is configured to receive these submissions.
- **GitHub Models Access**: The repository owner has a GitHub Copilot subscription (Pro or higher) to access the GitHub Models API via `GITHUB_TOKEN` at sufficient rate limits for the expected submission volume.
- **Authorized Sources**: A list of authorized source domains (e.g., `.gov.au`, `.edu.au`) is maintainable by administrators and used to pre-screen the fact-check URL before it is passed to the AI agent.
- **Markdown Formatting**: Users will primarily fill in the templates rather than writing complex Markdown from scratch.

