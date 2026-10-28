# Bing IndexNow Submission Ledger

This file records URLs submitted to Bing and IndexNow so unchanged URLs are not resubmitted unnecessarily. Resubmit a URL only when the page content, canonical URL, HTTP status, metadata, or sitemap `<lastmod>` changes after the recorded submission.

## IndexNow Key

| Field | Value |
|---|---|
| Host | `australia.md` |
| Key file | `375e338047314ab09f7f78f40d3b420a.txt` |
| Key value | `375e338047314ab09f7f78f40d3b420a` |
| Key location | `https://australia.md/375e338047314ab09f7f78f40d3b420a.txt` |
| Bulk endpoint | `https://api.indexnow.org/IndexNow` |
| Direct Bing endpoint | `https://www.bing.com/indexnow` |

## Submission Rules

- Use the `sitemap.xml` URL list as the source of truth for bulk submissions.
- Do not resubmit a URL if its page and sitemap `<lastmod>` are unchanged since the recorded submission.
- After any future successful submission, update this file with the submitted URL, sitemap `<lastmod>`, submission time, endpoint, and HTTP response.
- `HTTP 200` means the URL was accepted. `HTTP 202` means the request was accepted and processing is pending.
- **Automated since 2026-10-28:** `.github/workflows/indexnow.yml` runs `scripts/indexnow-submit.mjs` after `sitemap.xml` changes on `main`. It waits for the GitHub Pages deploy, submits only new or changed URLs that return HTTP 200, and updates this table. Retry by hand with the workflow's "Run workflow" button or `npm run seo:indexnow`.

## Submission History

| URL | Sitemap lastmod at submission | Last submitted UTC | Method | Response | Resubmit only when |
|---|---:|---:|---|---|---|
| https://australia.md/ | 2026-09-28 | 2026-10-28T10:19:49Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/culture/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/flora-fauna/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/geography/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/technology/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/history/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/tourism/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/economy/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/indigenous/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/environment/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/government/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/education/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/endocrinology/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/aberdare/ | 2026-04-02 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/adamstown/ | 2026-04-17 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/airds/ | 2026-04-20 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/albion-park/ | 2026-04-05 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/albury/ | 2026-04-09 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/alexandria/ | 2026-04-10 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/allambie-heights/ | 2026-04-14 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/alstonville/ | 2026-04-24 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/annandale/ | 2026-04-27 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/armidale/ | 2026-05-03 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/arncliffe/ | 2026-05-04 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/artarmon/ | 2026-05-05 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/ashfield/ | 2026-05-07 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/auburn/ | 2026-05-09 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/avalon-beach/ | 2026-05-10 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/avoca-beach/ | 2026-05-11 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/chatswood/ | 2026-03-30 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/macquarie-park/ | 2026-03-27 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/culture.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/economy.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/education.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/environment.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/flora-fauna.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/geography.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/government.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/history.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/indigenous.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/technology.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/tourism.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/aberdare-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/adamstown-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/airds-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/albion-park-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/albury-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/alexandria-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/allambie-heights-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/alstonville-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/annandale-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/armidale-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/arncliffe-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/artarmon-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/ashfield-nsw.md | 2026-05-07 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/auburn-nsw.md | 2026-05-09 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/avalon-beach-nsw.md | 2026-05-09 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/avoca-beach-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/chatswood-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/docs/medical/dental/macquarie-park-nsw.md | 2026-05-10 | 2026-05-12T11:18:42Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 202 Accepted | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/submit/ | 2026-09-28 | 2026-10-28T10:19:49Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/balgowlah-heights/ | 2026-05-19 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/balgowlah/ | 2026-05-17 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bangalow/ | 2026-05-25 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bangor/ | 2026-05-26 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bankstown/ | 2026-05-27 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/banora-point/ | 2026-05-29 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/barham/ | 2026-05-31 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/barrack-heights/ | 2026-06-02 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bateau-bay/ | 2026-06-06 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/batehaven/ | 2026-06-07 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/batemans-bay/ | 2026-06-08 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bathurst/ | 2026-06-09 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/baulkham-hills/ | 2026-06-10 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/beaconsfield/ | 2026-06-12 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/beaumont-hills/ | 2026-06-13 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/beecroft/ | 2026-06-15 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bega/ | 2026-06-16 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/belfield/ | 2026-06-17 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bella-vista/ | 2026-06-19 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bellevue-hill/ | 2026-06-21 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/belmore/ | 2026-06-22 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/belrose/ | 2026-06-23 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/berala/ | 2026-06-27 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/beresfield/ | 2026-06-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/berkeley-vale/ | 2026-06-29 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/berowra-heights/ | 2026-07-01 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/berry/ | 2026-07-04 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/beverly-hills/ | 2026-07-06 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bexley-north/ | 2026-07-08 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bexley/ | 2026-07-07 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bilgola-plateau/ | 2026-07-09 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/billinudgel/ | 2026-07-10 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bingara/ | 2026-07-13 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/blackalls-park/ | 2026-07-24 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/blayney/ | 2026-07-26 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bligh-park/ | 2026-07-26 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/boggabri/ | 2026-08-01 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bomaderry/ | 2026-08-05 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bondi-beach/ | 2026-08-07 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bondi-junction-2022/ | 2026-08-18 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bondi/ | 2026-08-06 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bonnells-bay/ | 2026-08-08 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bonny-hills/ | 2026-08-09 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bonnyrigg/ | 2026-08-10 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/boolaroo/ | 2026-08-12 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/boomerang-beach/ | 2026-08-13 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bourke/ | 2026-08-19 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bowenfels/ | 2026-08-21 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bowral/ | 2026-08-23 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/box-hill/ | 2026-08-24 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bradbury/ | 2026-08-25 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/braidwood/ | 2026-08-26 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/breakfast-point/ | 2026-09-01 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/brighton-le-sands/ | 2026-09-03 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/broadmeadow/ | 2026-09-05 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/broadway/ | 2026-09-06 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/broken-hill/ | 2026-09-09 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bronte/ | 2026-09-10 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/brookvale/ | 2026-09-12 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/broulee/ | 2026-09-13 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/brunswick-heads/ | 2026-09-16 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/budgewoi/ | 2026-09-20 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bulahdelah/ | 2026-09-22 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/bungendore/ | 2026-09-29 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/burraneer/ | 2026-10-03 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/burwood/ | 2026-10-07 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/busby/ | 2026-10-08 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/byron-bay/ | 2026-10-11 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/cabarita-beach/ | 2026-10-12 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/cabramatta-west/ | 2026-10-14 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/cabramatta/ | 2026-10-13 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/caddens/ | 2026-10-15 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/calderwood/ | 2026-10-17 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/cambridge-park/ | 2026-10-21 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/camden/ | 2026-10-22 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/cameron-park/ | 2026-10-23 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/cammeray/ | 2026-10-24 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/campbelltown/ | 2026-10-25 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/campsie/ | 2026-10-26 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/canley-heights/ | 2026-10-27 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/canley-vale/ | 2026-10-28 | 2026-10-28T10:29:26Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/balgownie/ | 2026-05-20 | 2026-10-28T11:04:07Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |
| https://australia.md/medical/dental/balmain/ | 2026-05-22 | 2026-10-28T11:04:07Z | Bulk POST to api.indexnow.org/IndexNow | HTTP 200 OK | Page content, canonical URL, HTTP status, metadata, or sitemap lastmod changes |

## Additional Verification Submissions

| URL | Submitted UTC | Endpoint | Response | Note |
|---|---:|---|---|---|
| https://australia.md/technology/ | 2026-05-12T11:30:37Z | `https://www.bing.com/indexnow` | HTTP 200 | Direct single-URL confirmation after bulk submission |
| https://australia.md/technology/ | 2026-05-12T11:30:37Z | `https://api.indexnow.org/indexnow` | HTTP 200 | Direct single-URL confirmation after bulk submission |
