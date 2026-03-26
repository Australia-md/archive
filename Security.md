# Security Policy

## Supported Versions

The `main` branch of Australia.md is the only version receiving active security updates. All contributors should work against `main`.

---

## Reporting a Vulnerability

If you discover a security vulnerability, **do not open a public GitHub issue.**

Contact the repository maintainers directly. We commit to:
- Acknowledging receipt within **48 hours**
- Providing a status update within **7 days**
- Issuing a patch or mitigation as quickly as possible

If sensitive data has been accidentally committed (API keys, credentials, private keys), notify the maintainers immediately so credentials can be rotated and commit history scrubbed via `git filter-repo` or BFG Repo Cleaner.

---

## Forbidden: Sensitive Data in Commits

As a public open-source repository, the following must **never** be committed:

| Category | Examples |
|---|---|
| API keys & tokens | GitHub PATs, Google API keys, Stripe keys |
| Private keys | `*.pem`, `*.key`, `*.ppk`, `*.p12` |
| Environment files | `.env`, `.env.local`, `.env.production` |
| Credentials | Passwords, database URIs, secret config files |
| Infrastructure secrets | SSH keys, TLS certificates, cloud service accounts |

These patterns are covered by `.gitignore`. If a secret is detected post-commit, treat it as compromised and rotate it immediately — git history is public and permanent.

---

## Dependency & Supply Chain Security

- All third-party scripts loaded via CDN must use **Subresource Integrity (SRI)** hashes (`integrity` + `crossorigin` attributes).
- Periodically audit external dependencies (Google Fonts, any future npm packages) for changes.
- Do not introduce new third-party scripts without maintainer review.

---

## Content Security

As a knowledge archive with public data:
- No user-submitted content is rendered as HTML without sanitisation.
- Search and filter inputs are sanitised before DOM insertion — never use `innerHTML` with unsanitised input; use `textContent` or a sanitiser library.
- All external links include `rel="noopener noreferrer"`.

## Image & File Upload Security

SVG files must **never** be accepted as user-uploaded images. SVG is an XML-based format that can embed JavaScript (`<script>`), event handlers (`onload`, `onclick`), and external resource references — making it a vector for XSS, SSRF, and data exfiltration attacks.

**Prohibited upload types:**
| Format | Reason |
|---|---|
| `.svg` / `.svgz` | Can contain embedded JS, event handlers, and `<foreignObject>` — XSS risk |
| `.xml` | Can be crafted as a malicious SVG |
| `.html` / `.htm` | Stored XSS via direct serving |

**Permitted raster image types only:**
`image/jpeg`, `image/png`, `image/webp`, `image/gif`, `image/avif`

**Enforcement rules:**
- Validate MIME type server-side — do not trust the file extension or `Content-Type` header sent by the client.
- Validate the file's magic bytes (file signature) to confirm the actual format.
- Strip all metadata (EXIF, XMP) from uploaded images before storage using a server-side library.
- Never serve user-uploaded files from the same origin as the application — use a separate domain or CDN with `Content-Disposition: attachment` to prevent inline rendering.
- Set `Content-Security-Policy: default-src 'self'` to block inline script execution even if a malicious file is served.

Note: SVG files authored and committed directly to this repository (not user-uploaded) are permitted, as they are reviewed code under version control.

---

## LLM & Generative AI Security (OWASP Top 10 for LLMs 2025)

Contributors integrating AI features or reviewing AI-generated code must mitigate the following risks, per the [OWASP Top 10 for Large Language Model Applications 2025](https://owasp.org/www-project-top-10-for-large-language-model-applications/):

| # | Vulnerability | Mitigation for this project |
|---|---|---|
| **LLM01:2025** | **Prompt Injection** | Never pass unsanitised user input directly to an LLM. Validate and constrain inputs at the API boundary. |
| **LLM02:2025** | **Sensitive Information Disclosure** | Ensure no PII, credentials, or internal system details appear in LLM prompts or outputs surfaced to users. |
| **LLM03:2025** | **Supply Chain Vulnerabilities** | Audit third-party models, datasets, and packages. Pin versions. Verify provenance of any pre-trained components. |
| **LLM04:2025** | **Data and Model Poisoning** | Protect the integrity of any training or fine-tuning data. Validate datasets before use. Monitor for data drift. |
| **LLM05:2025** | **Improper Output Handling** | Validate and sanitise all LLM-generated output before rendering. Treat LLM output as untrusted — prevent XSS and injection. |
| **LLM06:2025** | **Excessive Agency** | Restrict agent permissions to the minimum required. No autonomous write or delete operations without explicit human confirmation. |
| **LLM07:2025** | **System Prompt Leakage** | Do not expose system prompts in client-side code or API responses. Keep internal instructions server-side. |
| **LLM08:2025** | **Vector and Embedding Weaknesses** | Secure RAG pipelines — validate retrieval sources, scope access controls, and prevent embedding inversion attacks. |
| **LLM09:2025** | **Misinformation** | Implement guardrails and source citations to reduce hallucination risk. Flag AI-generated content clearly. Defer to authoritative sources. |
| **LLM10:2025** | **Unbounded Consumption** | Rate-limit all inference requests. Set token budgets and timeouts. Monitor for DoS patterns or API budget exhaustion. |

---

## Licence

Distributed under a **Dual Licence**: AGPL-3.0 for open-source use; a Proprietary Commercial Licence for commercial use. See [`LICENSE`](LICENSE) for full terms or contact [james@rxai.com.au](mailto:james@rxai.com.au) for commercial licensing.
