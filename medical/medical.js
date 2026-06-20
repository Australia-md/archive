/**
 * Australia.md — medical.js
 * Handles: state filter chips, specialty search/filter,
 *          smooth scroll for quick-jump links, footer year.
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initStateFilter();
  initSpecialtySearch();
  initSpecialtyJumpLinks();
  initFooterYear();
  initScrollRevealMed();
});

// ═══════════════════════════════════════════════════════
// 1. STATE / TERRITORY FILTER CHIPS
// ═══════════════════════════════════════════════════════
function initStateFilter() {
  const chips = document.querySelectorAll('.state-chip');
  if (!chips.length) return;

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      // The chips are role="radio" with aria-checked — update that attribute on
      // the chip itself (there is no role="option" ancestor, so the previous
      // closest('[role="option"]') lookup always returned null and did nothing).
      chips.forEach((c) => {
        c.classList.remove('active');
        c.setAttribute('aria-checked', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-checked', 'true');

      const state = chip.dataset.state;
      filterByState(state);
    });
  });
}

function filterByState(state) {
  // Specialty cards are not state-scoped (they carry data-specialty, not state),
  // so there is no per-card state data to filter on yet. Until a card exposes its
  // states (e.g. a data-states attribute), every card stays visible regardless of
  // the chosen state — filter here once that data exists.
  const cards = document.querySelectorAll('.spec-card');
  cards.forEach((card) => {
    const cardStates = (card.dataset.states || '').split(/\s+/).filter(Boolean);
    const show = state === 'all' || cardStates.length === 0 || cardStates.includes(state);
    card.classList.toggle('hidden', !show);
  });

  const visibleCount = document.querySelectorAll('.spec-card:not(.hidden)').length;
  const countEl = document.getElementById('visible-count');
  if (countEl) countEl.textContent = visibleCount;
}


// ═══════════════════════════════════════════════════════
// 2. SPECIALTY SEARCH / FILTER (medical search bar)
// ═══════════════════════════════════════════════════════
function initSpecialtySearch() {
  const form = document.getElementById('med-search-form');
  const input = document.getElementById('med-search-input');
  if (!form || !input) return;

  // Live filter as user types
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    filterSpecialties(query);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    filterSpecialties(input.value.trim().toLowerCase());
  });

  function filterSpecialties(query) {
    const cards = document.querySelectorAll('.spec-card');
    let visibleCount = 0;

    cards.forEach((card) => {
      const title   = card.querySelector('.spec-title')?.textContent.toLowerCase() ?? '';
      const desc    = card.querySelector('.spec-desc')?.textContent.toLowerCase() ?? '';
      const tag     = card.querySelector('.spec-tag')?.textContent.toLowerCase() ?? '';
      const matches = !query || title.includes(query) || desc.includes(query) || tag.includes(query);

      card.classList.toggle('hidden', !matches);
      if (matches) visibleCount++;
    });

    const countEl = document.getElementById('visible-count');
    if (countEl) countEl.textContent = visibleCount;
  }
}


// ═══════════════════════════════════════════════════════
// 3. SPECIALTY QUICK-JUMP SMOOTH SCROLL
// ═══════════════════════════════════════════════════════
function initSpecialtyJumpLinks() {
  const links = document.querySelectorAll('.specialty-jump-link');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = 80; // nav + a little breathing room
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      // Highlight the target card briefly
      target.style.outline = '2px solid rgba(113, 220, 138, 0.5)';
      setTimeout(() => { target.style.outline = ''; }, 1500);
    });
  });
}


// ═══════════════════════════════════════════════════════
// 4. SCROLL REVEAL FOR SPEC CARDS
// ═══════════════════════════════════════════════════════
function initScrollRevealMed() {
  const cards = document.querySelectorAll('.spec-card');
  cards.forEach((card, i) => {
    card.classList.add('fade-in-up');
    card.style.transitionDelay = `${i * 55}ms`;
  });

  // Also reveal header elements
  ['.med-eyebrow', '.med-title', '.med-subtitle', '.med-search-wrap', '.specialties-count']
    .forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => el.classList.add('fade-in-up'));
    });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
}


// ═══════════════════════════════════════════════════════
// 5. FOOTER YEAR
// ═══════════════════════════════════════════════════════
function initFooterYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}
