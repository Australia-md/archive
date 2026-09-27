/**
 * Australia.md — listing.js
 * Dental directory listing page
 * Handles: suburb directory (sort A–Z / by clinics, live filter,
 *          self-healing count), progressive scroll reveal, footer year.
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initSuburbDirectory();
  initScrollRevealListing();
  initFooterYear();
});

// ═══════════════════════════════════════════════════════
// 0. SUBURB DIRECTORY — sort, live filter, self-healing count
// ═══════════════════════════════════════════════════════
// The suburb list is machine-appended by the nightly generator in arbitrary
// order and without updating the header count, so we sort and count from the
// DOM to keep both honest, then wire the sort tabs and a name filter.
function initSuburbDirectory() {
  const list = document.querySelector('.suburb-dir-list');
  if (!list) return;

  const items = Array.from(list.querySelectorAll(':scope > li'));
  const countEl = document.querySelector('.suburb-dir-count');
  const input = document.getElementById('suburb-filter');
  const empty = document.querySelector('.suburb-dir-empty');
  const facetsEl = document.getElementById('suburb-facets');
  const tabs = Array.from(document.querySelectorAll('.sort-tab'));

  const nameOf = (li) =>
    (li.querySelector('.suburb-dir-name')?.textContent || '').trim();
  // Parse "… · N clinics · …" (also "N verified clinics") from the meta line.
  const clinicsOf = (li) => {
    const m = (li.querySelector('.suburb-dir-meta')?.textContent || '')
      .match(/(\d+)\s+(?:verified\s+)?clinic/i);
    return m ? parseInt(m[1], 10) : 0;
  };
  // Pre-compute each suburb's set of service tags (lowercased) for filtering.
  items.forEach((li) => {
    li._services = new Set(
      [...li.querySelectorAll('.suburb-dir-chip')].map((c) => c.textContent.trim().toLowerCase())
    );
  });

  // ── Sort ──
  const sorters = {
    alpha: (a, b) => nameOf(a).localeCompare(nameOf(b)),
    count: (a, b) => clinicsOf(b) - clinicsOf(a) || nameOf(a).localeCompare(nameOf(b)),
  };
  const applySort = (mode) => {
    items.slice().sort(sorters[mode] || sorters.alpha).forEach((li) => list.appendChild(li));
  };
  applySort('alpha');

  const total = items.length;
  const countLabel = (n) => `${n} suburb ${n === 1 ? 'directory' : 'directories'}`;
  if (countEl) countEl.textContent = countLabel(total);

  // ── Service facets, derived from the suburbs' own service tags ──
  const selected = new Set();
  let facetClearBtn = null;
  if (facetsEl) {
    const freq = new Map();
    items.forEach((li) =>
      li.querySelectorAll('.suburb-dir-chip').forEach((c) => {
        const label = c.textContent.trim();
        const key = label.toLowerCase();
        if (!freq.has(key)) freq.set(key, { label, key, n: 0 });
        freq.get(key).n += 1;
      })
    );
    // Most common services first, then alphabetical.
    const services = [...freq.values()].sort((a, b) => b.n - a.n || a.label.localeCompare(b.label));
    if (services.length) {
      const labelEl = document.createElement('span');
      labelEl.className = 'suburb-dir-facets-label';
      labelEl.textContent = 'Service';
      facetsEl.appendChild(labelEl);
      services.forEach((svc) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'suburb-facet';
        btn.setAttribute('aria-pressed', 'false');
        btn.dataset.service = svc.key;
        btn.textContent = svc.label;
        btn.addEventListener('click', () => {
          const on = btn.getAttribute('aria-pressed') === 'true';
          btn.setAttribute('aria-pressed', on ? 'false' : 'true');
          if (on) selected.delete(svc.key); else selected.add(svc.key);
          applyFilter();
        });
        facetsEl.appendChild(btn);
      });
      facetClearBtn = document.createElement('button');
      facetClearBtn.type = 'button';
      facetClearBtn.className = 'suburb-dir-facets-clear';
      facetClearBtn.textContent = 'Clear services';
      facetClearBtn.hidden = true;
      facetClearBtn.addEventListener('click', clearServices);
      facetsEl.appendChild(facetClearBtn);
      facetsEl.hidden = false;
    }
  }

  function clearServices() {
    selected.clear();
    facetsEl?.querySelectorAll('.suburb-facet[aria-pressed="true"]')
      .forEach((b) => b.setAttribute('aria-pressed', 'false'));
    applyFilter();
  }
  function clearAll() {
    if (input) input.value = '';
    clearServices(); // re-runs applyFilter with everything reset
  }

  // ── Unified filter: name match AND (any selected service) ──
  function applyFilter() {
    const q = input ? input.value.trim().toLowerCase() : '';
    let shown = 0;
    items.forEach((li) => {
      const nameMatch = !q || nameOf(li).toLowerCase().includes(q);
      let svcMatch = true;
      if (selected.size) {
        svcMatch = false;
        for (const s of selected) { if (li._services.has(s)) { svcMatch = true; break; } }
      }
      const match = nameMatch && svcMatch;
      li.hidden = !match;
      if (match) shown += 1;
    });
    const filtering = q !== '' || selected.size > 0;
    if (countEl) countEl.textContent = filtering ? `${shown} of ${total}` : countLabel(total);
    if (facetClearBtn) facetClearBtn.hidden = selected.size === 0;
    if (empty) empty.hidden = shown !== 0;
  }

  // ── Sort tabs: ARIA radiogroup with click, Enter/Space, and arrow-key roving.
  const selectTab = (tab, moveFocus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle('active', on);
      t.setAttribute('aria-checked', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    if (moveFocus) tab.focus();
    applySort(tab.dataset.sort);
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tab, false));
    tab.addEventListener('keydown', (e) => {
      let next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (next) { e.preventDefault(); selectTab(next, true); }
    });
  });

  // ── Name filter + empty-state recovery ──
  if (input) input.addEventListener('input', applyFilter);
  document.querySelector('.suburb-dir-clearall')?.addEventListener('click', clearAll);
}

// ═══════════════════════════════════════════════════════
// 1. SCROLL REVEAL (progressive enhancement)
// ═══════════════════════════════════════════════════════
function initScrollRevealListing() {
  const revealNow = (el) => el.classList.add('visible');
  const targets = document.querySelectorAll('.fade-in-up');

  // Header elements (above the fold) reveal immediately.
  ['.listing-eyebrow', '.listing-title', '.listing-verified-row', '.listing-filter-row']
    .forEach((sel) => document.querySelectorAll(sel).forEach(revealNow));

  // Without IntersectionObserver, reveal everything now so nothing is left
  // hidden behind the .js gate.
  if (!('IntersectionObserver' in window)) {
    targets.forEach(revealNow);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  targets.forEach((el) => observer.observe(el));
}


// ═══════════════════════════════════════════════════════
// 2. FOOTER YEAR
// ═══════════════════════════════════════════════════════
function initFooterYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}
