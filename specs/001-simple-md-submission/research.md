# Research: Simple Markdown Submission Interface

**Phase**: 0 — Research  
**Branch**: `001-simple-md-submission`  
**Date**: 2026-03-30

---

## R-001: GitHub Models API in GitHub Actions

**Decision**: Use `@azure/openai` npm package with `GITHUB_TOKEN` bearer authentication against the GitHub Models inference endpoint.

**Rationale**: GitHub Models is natively available to any GitHub Actions workflow with `permissions: models: read`. No external API key is needed. The `@azure/openai` SDK (MIT) uses the `AzureOpenAI` class which works directly with the GitHub Models endpoint. Model `gpt-4o-mini` is sufficient for fact-checking (fast, low cost, available on free tier). Alternative: `claude-3-5-sonnet` for higher accuracy if needed.

**Implementation**:
```yaml
# In workflow YAML:
permissions:
  contents: write
  issues: write
  pull-requests: write
  models: read
```

```typescript
// In .github/scripts/verify-agent.ts
import { AzureOpenAI } from "@azure/openai";

const client = new AzureOpenAI({
  endpoint: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN!,
  apiVersion: "2024-05-01-preview",
});

const completion = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "system", content: FACT_CHECK_SYSTEM_PROMPT },
    { role: "user", content: `SOURCE:\n${sourceContent}\n\nSUBMITTED:\n${submittedContent}` }
  ],
  max_tokens: 200,
  temperature: 0.1
});

const verdict = completion.choices[0]?.message?.content?.trim() ?? "";
// Expected: "VERIFIED" or "REJECTED: <reason>"
```

**npm install**: `npm install @azure/openai`  
**Licence**: MIT ✅ (AGPL-3.0 compatible)  
**Available models**: `gpt-4o`, `gpt-4o-mini`, `gpt-4-turbo`, `claude-3-5-sonnet`, `mistral-large`, `phi-4`  
**Rate limits**: 300 req/month (Copilot Pro); $0.04/req overage  
**Fallback**: On API error or 429 rate limit → apply "Pending Human Review" label, notify admin

**Alternatives considered**:
- `@azure-rest/ai-inference` package — also valid (MIT) but `@azure/openai` has better TypeScript ergonomics with the `AzureOpenAI` class
- `@octokit/core` with `/models` path — not yet officially supported for inference
- Direct `fetch()` to the endpoint — viable but less type-safe; not worth reinventing the SDK

---

## R-002: Email Notifications from GitHub Actions

**Decision**: Use `dawidd6/action-send-mail@v3` with **Gmail SMTP** (App Password) credentials stored in GitHub Secrets.

**Rationale**: Gmail with an App Password (not the account password) is free, requires no third-party service agreement, and supports 500 emails/day — far more than this project needs. `dawidd6/action-send-mail` is MIT licensed. Credentials stored in GitHub Secrets, never in code. Note: SendGrid and Resend are proprietary services (despite having free tiers); Gmail SMTP via App Password is the cleanest zero-cost option.

**Setup**: Google Account → Security → 2-Factor Authentication enabled → App Passwords → generate one for "Mail"

**Implementation**:
```yaml
- name: Send notification email
  uses: dawidd6/action-send-mail@v3
  with:
    server_address: smtp.gmail.com
    server_port: 465
    username: ${{ secrets.GMAIL_ADDRESS }}
    password: ${{ secrets.GMAIL_APP_PASSWORD }}
    subject: "Australia.md submission update: ${{ steps.verify.outputs.status }}"
    to: ${{ steps.parse.outputs.contributor_email }}
    from: Australia.md <${{ secrets.GMAIL_ADDRESS }}>
    body: ${{ steps.compose.outputs.email_body }}
```

**Alternatives considered**:
- SendGrid / Resend — proprietary service agreements; free tier is an API contract, not a right; risk of terms changes
- GitHub's built-in issue comments — contributors must watch the repository; unreliable notification channel; violates FR-007
- `nodemailer` npm package (MIT-0) — viable alternative for custom SMTP logic in a TypeScript script; `dawidd6/action-send-mail` is simpler for this use case

---

## R-003: Proxy for GitHub Issue Creation (Static Site)

**Decision**: **Cloudflare Worker** (TypeScript via Wrangler) as a micro-proxy. The form POSTs JSON to the Worker; the Worker holds the GitHub service account PAT as a Cloudflare Secret and calls the GitHub Issues API.

**Rationale**: 
- Static sites cannot hold a GitHub PAT client-side without exposing it to anyone who inspects the browser
- Cloudflare Workers: free tier = 100,000 requests/day — vastly exceeds expected volume
- TypeScript Worker aligns with the project's TypeScript mandate
- Workers are deployed globally with <1ms latency overhead
- No server to maintain (serverless); zero cost for this project's scale

**Security model**:
- PAT scope: `repo` with **only** `issues: write` permission (fine-grained PAT). Cannot read private data or push code
- Cloudflare Secret: token stored encrypted in Cloudflare dashboard, not in code or `wrangler.toml`
- CORS: Worker restricts `Origin` to the Australia.md domain only
- Rate limiting: Worker enforces per-IP rate limiting (5 submissions/hour) to prevent abuse

**Implementation sketch**:
```typescript
// worker/src/index.ts
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
    
    const submission = await request.json() as SubmissionPayload;
    // validate + sanitise
    
    const issue = await createGitHubIssue(submission, env.GITHUB_TOKEN);
    return Response.json({ issueUrl: issue.html_url });
  }
};
```

**Alternatives considered**:
- `workflow_dispatch` API triggered from frontend with a PAT — exposes the PAT in browser JavaScript; anyone can extract it and call the API directly. Rejected on security grounds.
- GitHub App with installation token — more secure and scalable, but complex setup (App registration, private key management, JWT minting). Overkill for current scale. Revisit if project grows.
- Vercel / Netlify Function — viable but adds a hosting dependency; project is currently static and Cloudflare Worker is zero-infrastructure

---

## R-004: Source URL Fetching in GitHub Actions

**Decision**: Use native `fetch()` (Node.js 20 built-in) with a 10-second timeout and graceful degradation on 403/429 responses.

**Rationale**: GitHub Actions runners use Node.js 20 which ships with the Fetch API natively. No additional packages needed. Timeouts are set via `AbortController`. On scraping failure, the workflow applies a "Scrape Blocked" label rather than failing the entire pipeline — admin is notified for manual review.

**Implementation**:
```typescript
async function fetchSourceContent(url: string): Promise<string | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Australia.md Fact-Checker/1.0 (https://github.com/owner/australia)'
      }
    });
    
    if (!response.ok) {
      // 403/429 = anti-bot; 404 = bad URL; any non-2xx = blocked
      return null; // triggers "Scrape Blocked" fallback
    }
    
    const html = await response.text();
    return extractTextContent(html); // strip HTML tags, return plain text
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
```

**HTML-to-text**: Simple regex-based tag stripping is sufficient for fact-checking context. No need for `cheerio` or `jsdom` (avoids extra dependencies).

**Fallback on null return**: Action applies "Scrape Blocked" label and posts a comment: "The fact-check URL could not be fetched automatically (anti-bot protection or network error). An administrator will review this submission manually."

**Alternatives considered**:
- `node-fetch` package — redundant in Node 20; adds a dependency with no benefit
- `puppeteer` / `playwright` — full browser automation; justified only if most gov sites block simple fetch. Adds ~100MB to runner. Defer until proven necessary (the edge case, not the default path)
- ScraperAPI / Browserbase — external paid services; violates "no external API keys" spirit for this use case; admin manual review is an acceptable fallback for blocked sites

---

## R-005: Admin Override Workflow Trigger

**Decision**: Separate workflow file `admin-override.yml` triggered on `issues: types: [labeled]`. The script checks `context.payload.label.name` to determine action.

**Rationale**: Separating the admin override into its own workflow file keeps `verify-submission.yml` clean and single-purpose. Label-based triggers are a core GitHub Actions feature, reliable and instantaneous.

**Implementation**:
```yaml
# .github/workflows/admin-override.yml
on:
  issues:
    types: [labeled]

jobs:
  handle-override:
    if: contains(github.event.issue.labels.*.name, 'submission') # only run on submission issues
    runs-on: ubuntu-latest
    permissions:
      contents: write
      issues: write
      pull-requests: write
    steps:
      - name: Handle Verified override
        if: github.event.label.name == 'Verified'
        run: npx tsx .github/scripts/create-content-file.ts
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          ISSUE_NUMBER: ${{ github.event.issue.number }}
          ISSUE_BODY: ${{ github.event.issue.body }}
      
      - name: Handle Rejected override
        if: github.event.label.name == 'Rejected'
        run: npx tsx .github/scripts/notify-contributor.ts rejected
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          ISSUE_NUMBER: ${{ github.event.issue.number }}
          SENDGRID_API_KEY: ${{ secrets.SENDGRID_API_KEY }}
```

**Key detail**: `github.event.label.name` is the *newly added* label. `github.event.issue.labels` contains *all current labels*. The `if:` condition checks `github.event.label.name` to fire only when the correct label is applied.

**Alternatives considered**:
- Single workflow file with a label check step — works but creates a tight coupling; separate files are cleaner to reason about and maintain
- GitHub Apps bot that watches for label events — more complex; unnecessary for current scale
