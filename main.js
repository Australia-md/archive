/**
 * Australia.md — main.js
 * Handles: nav scroll, mobile menu, hero stats counter,
 *          search autocomplete, scroll reveal animations,
 *          newsletter form, and footer year.
 */

'use strict';

// ═══════════════════════════════════════════════════════
// 1. DOM READY GUARD
// ═══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileMenu();
  initStatsCounter();
  initSearchAutocomplete();
  initScrollReveal();
  initNewsletterForm();
  initFooterYear();
  initCardHover();
});


// ═══════════════════════════════════════════════════════
// 2. NAV — scroll shadow + background transition
// ═══════════════════════════════════════════════════════
function initNavScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on init
}


// ═══════════════════════════════════════════════════════
// 3. MOBILE MENU — toggle nav-links visibility
// ═══════════════════════════════════════════════════════
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const navList = document.getElementById('nav-links');
  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    animateBurger(toggle, isOpen);
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      animateBurger(toggle, false);
    }
  });

  // Close on nav-link click (SPA-style)
  navList.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      animateBurger(toggle, false);
    });
  });
}

function animateBurger(toggle, isOpen) {
  const lines = toggle.querySelectorAll('.burger-line');
  if (isOpen) {
    lines[0].style.transform = 'translateY(7px) rotate(45deg)';
    lines[1].style.opacity = '0';
    lines[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    lines[0].style.transform = '';
    lines[1].style.opacity = '';
    lines[2].style.transform = '';
  }
}


// ═══════════════════════════════════════════════════════
// 4. HERO STATS — animated counter on scroll-into-view
// ═══════════════════════════════════════════════════════
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  let animated = false;

  const animate = () => {
    if (animated) return;

    const heroStats = document.querySelector('.hero-stats');
    if (!heroStats) return;

    const rect = heroStats.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      animated = true;
      statNumbers.forEach(animateCounter);
      window.removeEventListener('scroll', animate);
    }
  };

  window.addEventListener('scroll', animate, { passive: true });
  animate(); // check immediately in case hero is visible
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800; // ms
  const startTime = performance.now();
  const startVal = 0;

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startVal + eased * (target - startVal));

    el.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}


// ═══════════════════════════════════════════════════════
// 5. SEARCH AUTOCOMPLETE
// ═══════════════════════════════════════════════════════
const SUGGESTIONS_DATA = [
  { text: 'Medicare provider lookup',    category: 'Medical Directory' },
  { text: 'Royal Melbourne Hospital',    category: 'Medical Directory' },
  { text: 'Australian AI policy 2024',   category: 'AI & IT' },
  { text: 'NBN infrastructure rollout',  category: 'AI & IT' },
  { text: 'Kangaroo conservation status',category: 'Flora & Fauna' },
  { text: 'Great Barrier Reef data',     category: 'Flora & Fauna' },
  { text: 'ANZAC history records',       category: 'History & Heritage' },
  { text: 'Indigenous language archives',category: 'History & Heritage' },
  { text: 'Uluru national park guide',   category: 'Tourism & Destinations' },
  { text: 'Sydney Harbour attractions',  category: 'Tourism & Destinations' },
  { text: 'ASX market statistics',       category: 'Economy & Innovation' },
  { text: 'Australia-China trade policy',category: 'Economy & Innovation' },
  { text: 'Aboriginal art movement',     category: 'Culture & Arts' },
  { text: 'Sydney Opera House history',  category: 'Culture & Arts' },
];

function initSearchAutocomplete() {
  const input = document.getElementById('search-input');
  const suggestionsBox = document.getElementById('search-suggestions');
  const suggestionsList = document.getElementById('suggestions-list');
  const form = document.getElementById('search-form');

  if (!input || !suggestionsBox || !suggestionsList || !form) return;

  let activeIndex = -1;
  let visibleItems = [];

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    if (query.length < 2) {
      hideSuggestions();
      return;
    }

    const filtered = SUGGESTIONS_DATA.filter((item) =>
      item.text.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    ).slice(0, 6);

    if (filtered.length === 0) {
      hideSuggestions();
      return;
    }

    renderSuggestions(filtered);
    showSuggestions();
    activeIndex = -1;
    visibleItems = filtered;
  });

  // Keyboard navigation
  input.addEventListener('keydown', (e) => {
    const items = suggestionsList.querySelectorAll('.suggestion-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
      updateActiveItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, -1);
      updateActiveItem(items);
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      input.value = visibleItems[activeIndex].text;
      hideSuggestions();
    } else if (e.key === 'Escape') {
      hideSuggestions();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      hideSuggestions();
    }
  });

  // Prevent form submission from reloading
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
      console.info('[Australia.md] Search submitted:', query);
      hideSuggestions();
    }
  });

  function renderSuggestions(items) {
    suggestionsList.innerHTML = items
      .map(
        (item, i) => `
          <li class="suggestion-item" role="option" data-index="${i}" tabindex="-1">
            <span>${escapeHtml(item.text)}</span>
            <span class="suggestion-category">${escapeHtml(item.category)}</span>
          </li>`
      )
      .join('');

    suggestionsList.querySelectorAll('.suggestion-item').forEach((li) => {
      li.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const idx = parseInt(li.dataset.index, 10);
        input.value = visibleItems[idx].text;
        hideSuggestions();
      });
    });
  }

  function showSuggestions() {
    suggestionsBox.removeAttribute('hidden');
    input.setAttribute('aria-expanded', 'true');
  }

  function hideSuggestions() {
    suggestionsBox.setAttribute('hidden', '');
    input.setAttribute('aria-expanded', 'false');
    activeIndex = -1;
  }

  function updateActiveItem(items) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === activeIndex);
    });
  }

  function escapeHtml(str) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
    return str.replace(/[&<>"]/g, (c) => map[c]);
  }
}


// ═══════════════════════════════════════════════════════
// 6. SCROLL REVEAL — fade-in-up animation via IntersectionObserver
// ═══════════════════════════════════════════════════════
function initScrollReveal() {
  // Elements to animate
  const targets = [
    '.hero-tag',
    '.hero-title',
    '.hero-subtitle',
    '.search-container',
    '.hero-stats',
    '.section-header',
    '.category-card',
    '.cta-text',
    '.cta-form',
  ];

  const els = document.querySelectorAll(targets.join(','));
  els.forEach((el) => el.classList.add('fade-in-up'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  // Staggered delay for cards
  const cards = document.querySelectorAll('.category-card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 60}ms`;
  });

  els.forEach((el) => observer.observe(el));
}


// ═══════════════════════════════════════════════════════
// 7. NEWSLETTER FORM
// ═══════════════════════════════════════════════════════
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const btn = document.getElementById('subscribe-btn');
  const emailInput = document.getElementById('email-input');
  if (!form || !btn || !emailInput) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      shakeElement(emailInput);
      return;
    }

    // Simulate submission
    btn.disabled = true;
    btn.textContent = 'Subscribing…';

    setTimeout(() => {
      btn.textContent = '✓ Subscribed';
      btn.style.background = 'var(--clr-primary-container)';
      btn.style.color = 'var(--clr-on-primary-container)';
      emailInput.value = '';
      emailInput.disabled = true;

      console.info('[Australia.md] Newsletter subscription:', email);
    }, 800);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function shakeElement(el) {
    el.style.animation = 'none';
    el.offsetHeight; // force reflow
    el.style.animation = 'shake 400ms ease';
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%       { transform: translateX(-6px); }
        40%       { transform: translateX(6px); }
        60%       { transform: translateX(-4px); }
        80%       { transform: translateX(4px); }
      }
    `;
    if (!document.head.querySelector('style[data-shake]')) {
      style.setAttribute('data-shake', '');
      document.head.appendChild(style);
    }
  }
}


// ═══════════════════════════════════════════════════════
// 8. FOOTER — current year
// ═══════════════════════════════════════════════════════
function initFooterYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}


// ═══════════════════════════════════════════════════════
// 9. CARD HOVER — keyboard accessibility ripple
// ═══════════════════════════════════════════════════════
function initCardHover() {
  const cards = document.querySelectorAll('.category-card');
  cards.forEach((card) => {
    const link = card.querySelector('.card-link');
    if (!link) return;

    // Allow Enter/Space to trigger card link
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });
}
