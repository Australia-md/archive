/**
 * Australia.md — listing.js
 * Endocrinology / Specialist Listing page
 * Handles: sort tabs, map pin interaction, card highlighting,
 *          scroll reveal, footer year.
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initScrollRevealListing();
  initSortTabs();
  initMapInteraction();
  initFooterYear();
});

// ═══════════════════════════════════════════════════════
// 1. SCROLL REVEAL
// ═══════════════════════════════════════════════════════
function initScrollRevealListing() {
  const cards = document.querySelectorAll('.clinic-card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });

  // Reveal header elements immediately
  ['.listing-eyebrow', '.listing-title', '.listing-verified-row', '.listing-filter-row']
    .forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => el.classList.add('visible'));
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
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
}


// ═══════════════════════════════════════════════════════
// 2. SORT TABS
// ═══════════════════════════════════════════════════════
function initSortTabs() {
  const tabs = document.querySelectorAll('.sort-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-checked', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-checked', 'true');
      // Sorting logic would re-order clinic cards here.
      // Current data is static; extend with real backend data.
    });
  });
}


// ═══════════════════════════════════════════════════════
// 3. MAP ↔ CLINIC CARD INTERACTION
// ═══════════════════════════════════════════════════════
function initMapInteraction() {
  const mapPins     = document.querySelectorAll('.map-pin');
  const mapRows     = document.querySelectorAll('.map-clinic-row');
  const clinicCards = document.querySelectorAll('.clinic-card');
  const mapFocusBtns = document.querySelectorAll('.btn-map-focus');

  // Activate a clinic by its data-clinic id (string)
  function activateClinic(id) {
    // Reset all
    mapPins.forEach((p) => p.classList.remove('active-pin'));
    mapRows.forEach((r) => r.classList.remove('active-row'));
    clinicCards.forEach((c) => c.classList.remove('active-card'));

    // Activate matching elements
    const pin  = document.querySelector(`.map-pin[data-clinic="${id}"]`);
    const row  = document.querySelector(`.map-clinic-row[data-clinic="${id}"]`);
    const card = document.getElementById(`clinic-${id}`);

    pin?.classList.add('active-pin');
    row?.classList.add('active-row');
    card?.classList.add('active-card');
  }

  // Map pins → scroll to card
  mapPins.forEach((pin) => {
    pin.addEventListener('click', () => {
      const id = pin.dataset.clinic;
      activateClinic(id);
      const card = document.getElementById(`clinic-${id}`);
      if (card) {
        const top = card.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
    pin.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pin.click(); }
    });
  });

  // Map mini-list rows → scroll to card
  mapRows.forEach((row) => {
    row.addEventListener('click', () => {
      const id = row.dataset.clinic;
      activateClinic(id);
      const card = document.getElementById(`clinic-${id}`);
      if (card) {
        const top = card.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Clinic card "Show on map" button → highlight pin
  mapFocusBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.clinicId;
      activateClinic(id);
      // Scroll map panel into view on mobile
      const mapPanel = document.getElementById('map-panel');
      if (mapPanel && window.innerWidth < 900) {
        mapPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });
}


// ═══════════════════════════════════════════════════════
// 4. FOOTER YEAR
// ═══════════════════════════════════════════════════════
function initFooterYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}
