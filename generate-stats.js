// generate-stats.js
// Counts real entries in the Australia.md archive and writes stats.json.
// Run manually:        node generate-stats.js   (or: npm run stats)
// Run automatically:   .github/workflows/update-stats.yml regenerates and
//   commits stats.json on a daily schedule and on manual dispatch, so the
//   homepage counter cannot drift as new pages are added by the scheduled job.
//
// Entry definition:
//   - Dental clinics: sum of "N clinics" values from medical/dental/index.html
//   - Content sections: h2 + h3 headings in each non-medical category index.html
//
// Output: stats.json at the repo root.

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;

// --- Dental clinics -------------------------------------------------------
// Parse every "N clinics" occurrence in the dental suburb directory listing.
function countDentalClinics() {
  const file = path.join(ROOT, 'medical', 'dental', 'index.html');
  if (!fs.existsSync(file)) return 0;
  const html = fs.readFileSync(file, 'utf8');
  // Only count from suburb-dir-meta lines to avoid double-counting aria-labels.
  let total = 0;
  for (const line of html.split('\n')) {
    if (!line.includes('suburb-dir-meta')) continue;
    // Allow an optional qualifier between the count and "clinic"
    // (e.g. "5 verified clinics", "2 partner clinics") so such cards are not skipped.
    const m = line.match(/(\d+)\s+(?:\w+\s+)*clinic/);
    if (m) total += parseInt(m[1], 10);
  }
  return total;
}

// --- Content sections per category ----------------------------------------
// Count h2 and h3 elements in a category's index.html.
function countCategorySections(category) {
  const file = path.join(ROOT, category, 'index.html');
  if (!fs.existsSync(file)) return 0;
  const html = fs.readFileSync(file, 'utf8');
  const h2 = (html.match(/<h2[\s>]/g) || []).length;
  const h3 = (html.match(/<h3[\s>]/g) || []).length;
  return h2 + h3;
}

// --- Main -----------------------------------------------------------------
const CONTENT_CATEGORIES = [
  'technology',
  'flora-fauna',
  'history',
  'tourism',
  'economy',
  'culture',
  'indigenous',
  'environment',
  'geography',
  'government',
  'education',
];

const dentalClinics    = countDentalClinics();
const categorySections = CONTENT_CATEGORIES.reduce(
  (sum, cat) => sum + countCategorySections(cat), 0
);
const totalEntries = dentalClinics + categorySections;

const stats = {
  entries:    totalEntries,
  // 11 content categories above + Medical & Healthcare (counted via dental clinics)
  categories: CONTENT_CATEGORIES.length + 1,
  breakdown: {
    dentalClinics,
    categorySections,
  },
  generated: new Date().toISOString().slice(0, 10),
};

fs.writeFileSync(
  path.join(ROOT, 'stats.json'),
  JSON.stringify(stats, null, 2) + '\n',
  'utf8'
);

console.log(
  `stats.json written — ${totalEntries} entries ` +
  `(${dentalClinics} dental clinics + ${categorySections} content sections)`
);
