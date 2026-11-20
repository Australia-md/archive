// scripts/sitemap-policy.mjs — pages kept out of sitemap.xml although they are indexable.
// Shared by build-sitemap.mjs (generator) and seo-validate.mjs (release gate, check 5) so the
// two cannot drift. Pages marked `noindex` are excluded separately by both scripts.
//
// education/road-rules-game/ — owner decision 2026-11-21: the road-rules games are not
// knowledge pages and do not belong in the sitemap.
export const SITEMAP_SKIP = /^education\/road-rules-game(\/|$)/;
