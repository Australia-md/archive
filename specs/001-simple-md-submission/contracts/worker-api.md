# Contract: Cloudflare Worker Proxy API

**Phase**: 1 — Design  
**Branch**: `001-simple-md-submission`  
**Date**: 2026-03-30

The Worker proxy is the only entry point between the static submission form and the GitHub API. It receives form data, validates it, and creates a GitHub Issue using the stored service account token.

---

## Endpoint

```
POST https://submit.australiamd.org/api/submit
```

*(The Worker is deployed as a Cloudflare Worker with a custom domain or `*.workers.dev` subdomain.)*

---

## Request

### Headers

| Header | Value | Required |
|---|---|---|
| `Content-Type` | `application/json` | ✅ |
| `Origin` | `https://australiamd.org` | ✅ (CORS validated by Worker) |

### Body (JSON)

```json
{
  "contributorEmail": "user@example.com",
  "category": "Health",
  "subcategory": null,
  "templateType": "MedicalPractice",
  "factCheckUrl": "https://www.health.gov.au/example",
  "content": "# Royal North Shore Hospital\n\nLocated in...",
  "submittedAt": "2026-03-30T05:00:00.000Z"
}
```

| Field | Type | Constraints |
|---|---|---|
| `contributorEmail` | string | Valid RFC 5322 email |
| `category` | SubmissionCategory enum | Must be a valid category value |
| `subcategory` | string \| null | Optional |
| `templateType` | TemplateType enum | Must be a valid template value |
| `factCheckUrl` | string | Valid URL; must start with `https://` |
| `content` | string | Min 50 characters |
| `submittedAt` | string | ISO 8601 datetime |

---

## Response

### 200 OK — Issue created successfully

```json
{
  "success": true,
  "issueNumber": 42,
  "issueUrl": "https://github.com/owner/australia/issues/42",
  "message": "Your submission has been received. You will be notified by email when verification is complete."
}
```

### 400 Bad Request — Validation failure

```json
{
  "success": false,
  "error": "VALIDATION_ERROR",
  "field": "factCheckUrl",
  "message": "The fact-check URL must start with https://"
}
```

### 429 Too Many Requests — Rate limit exceeded

```json
{
  "success": false,
  "error": "RATE_LIMITED",
  "message": "You have reached the submission limit. Please wait 15 minutes before submitting again.",
  "retryAfter": 900
}
```

Response header: `Retry-After: 900`

### 503 Service Unavailable — GitHub API unavailable

```json
{
  "success": false,
  "error": "UPSTREAM_ERROR",
  "message": "Unable to create your submission at this time. Please try again in a few minutes."
}
```

---

## GitHub Issue Format Created by Worker

**Title**: `[Submission] {category}: {first 60 chars of content heading}`

**Labels applied**: `submission`, `pending-review`

**Body format**:
```markdown
## Submission Details

**Category**: Health  
**Template**: MedicalPractice  
**Contributor Email**: user@example.com  
**Submitted At**: 2026-03-30T05:00:00Z

## Fact-Check URL

https://www.health.gov.au/example

## Submitted Content

# Royal North Shore Hospital

Located in...
```

*The body format is the canonical parse contract for all downstream Action scripts — changes to the format require coordinated updates to `verify-agent.ts`, `create-content-file.ts`, and `notify-contributor.ts`.*

---

## Worker Environment Secrets

| Secret name | Description |
|---|---|
| `GITHUB_TOKEN` | Fine-grained PAT with `issues: write` on the Australia repository only |
| `ALLOWED_ORIGIN` | `https://australiamd.org` (CORS allow-list) |

---

## Rate Limiting

- **2 submissions per IP address per 15-minute sliding window**
- Enforced via Cloudflare Workers KV (key: `ratelimit:{ip}`, value: submission count, TTL: 900s)
- Shared across all Worker instances globally
- Tracked by IP address only — no PII stored in KV (consistent with email privacy requirement)
- On limit reached: `429` response with `Retry-After: 900` header
- **Note**: Users behind shared NAT/office IPs share the same limit — acceptable trade-off for this project scale
