/**
 * Australia.md — main.ts
 * Handles: nav scroll, mobile menu, hero stats counter,
 *          search autocomplete, scroll reveal animations,
 *          newsletter form, and footer year.
 */

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
function initNavScroll(): void {
  const header = document.getElementById('main-header');
  if (!header) return;

  const onScroll = (): void => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


// ═══════════════════════════════════════════════════════
// 3. MOBILE MENU — toggle nav-links visibility
// ═══════════════════════════════════════════════════════
function initMobileMenu(): void {
  const toggle = document.getElementById('mobile-toggle');
  const navList = document.getElementById('nav-links');
  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    animateBurger(toggle, isOpen);
  });

  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as Node;
    if (!toggle.contains(target) && !navList.contains(target)) {
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      animateBurger(toggle, false);
    }
  });

  navList.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      animateBurger(toggle, false);
    });
  });
}

function animateBurger(toggle: HTMLElement, isOpen: boolean): void {
  const lines = toggle.querySelectorAll<HTMLElement>('.burger-line');
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
function initStatsCounter(): void {
  const statNumbers = document.querySelectorAll<HTMLElement>('.stat-number[data-target]');
  if (!statNumbers.length) return;

  let animated = false;

  const animate = (): void => {
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
  animate();
}

function animateCounter(el: HTMLElement): void {
  const target = parseInt(el.dataset.target ?? '0', 10);
  const duration = 1800;
  const startTime = performance.now();

  const step = (currentTime: number): void => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

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
interface SuggestionItem {
  text: string;
  category: string;
}

const SUGGESTIONS_DATA: SuggestionItem[] = [
  { text: 'Medicare provider lookup',     category: 'Medical Directory' },
  { text: 'Royal Melbourne Hospital',     category: 'Medical Directory' },
  { text: 'Australian AI policy 2024',    category: 'AI & IT' },
  { text: 'NBN infrastructure rollout',   category: 'AI & IT' },
  { text: 'Kangaroo conservation status', category: 'Flora & Fauna' },
  { text: 'Great Barrier Reef data',      category: 'Flora & Fauna' },
  { text: 'ANZAC history records',        category: 'History & Heritage' },
  { text: 'Indigenous language archives',  category: 'History & Heritage' },
  { text: 'Uluru national park guide',    category: 'Tourism & Destinations' },
  { text: 'Sydney Harbour attractions',   category: 'Tourism & Destinations' },
  { text: 'ASX market statistics',        category: 'Economy & Innovation' },
  { text: 'Australia-China trade policy', category: 'Economy & Innovation' },
  { text: 'Aboriginal art movement',      category: 'Culture & Arts' },
  { text: 'Sydney Opera House history',   category: 'Culture & Arts' },
];

function initSearchAutocomplete(): void {
  const inputEl = document.getElementById('search-input') as HTMLInputElement | null;
  const suggestionsBoxEl = document.getElementById('search-suggestions');
  const suggestionsListEl = document.getElementById('suggestions-list');
  const formEl = document.getElementById('search-form');

  if (!inputEl || !suggestionsBoxEl || !suggestionsListEl || !formEl) return;

  const input: HTMLInputElement = inputEl;
  const suggestionsBox: HTMLElement = suggestionsBoxEl;
  const suggestionsList: HTMLElement = suggestionsListEl;
  const form: HTMLElement = formEl;

  let activeIndex = -1;
  let visibleItems: SuggestionItem[] = [];

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

  input.addEventListener('keydown', (e: KeyboardEvent) => {
    const items = suggestionsList.querySelectorAll<HTMLElement>('.suggestion-item');
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

  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as Element;
    if (!target.closest('.search-container')) {
      hideSuggestions();
    }
  });

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
      console.info('[Australia.md] Search submitted:', query);
      hideSuggestions();
    }
  });

  function renderSuggestions(items: SuggestionItem[]): void {
    suggestionsList.innerHTML = items
      .map(
        (item, i) => `
          <li class="suggestion-item" role="option" data-index="${i}" tabindex="-1">
            <span>${escapeHtml(item.text)}</span>
            <span class="suggestion-category">${escapeHtml(item.category)}</span>
          </li>`
      )
      .join('');

    suggestionsList.querySelectorAll<HTMLElement>('.suggestion-item').forEach((li) => {
      li.addEventListener('mousedown', (e: MouseEvent) => {
        e.preventDefault();
        const idx = parseInt(li.dataset.index ?? '0', 10);
        input.value = visibleItems[idx].text;
        hideSuggestions();
      });
    });
  }

  function showSuggestions(): void {
    suggestionsBox.removeAttribute('hidden');
    input.setAttribute('aria-expanded', 'true');
  }

  function hideSuggestions(): void {
    suggestionsBox.setAttribute('hidden', '');
    input.setAttribute('aria-expanded', 'false');
    activeIndex = -1;
  }

  function updateActiveItem(items: NodeListOf<HTMLElement>): void {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === activeIndex);
    });
  }

  function escapeHtml(str: string): string {
    const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
    return str.replace(/[&<>"]/g, (c) => map[c]);
  }
}


// ═══════════════════════════════════════════════════════
// 6. SCROLL REVEAL — fade-in-up animation via IntersectionObserver
// ═══════════════════════════════════════════════════════
function initScrollReveal(): void {
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

  const els = document.querySelectorAll<HTMLElement>(targets.join(','));
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

  const cards = document.querySelectorAll<HTMLElement>('.category-card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 60}ms`;
  });

  els.forEach((el) => observer.observe(el));
}


// ═══════════════════════════════════════════════════════
// 7. NEWSLETTER FORM
// ═══════════════════════════════════════════════════════
function initNewsletterForm(): void {
  const form = document.getElementById('newsletter-form');
  const btn = document.getElementById('subscribe-btn') as HTMLButtonElement | null;
  const emailInput = document.getElementById('email-input') as HTMLInputElement | null;
  if (!form || !btn || !emailInput) return;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      shakeElement(emailInput);
      return;
    }

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

  function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function shakeElement(el: HTMLElement): void {
    el.style.animation = 'none';
    void el.offsetHeight; // force reflow
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
function initFooterYear(): void {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear().toString();
}


// ═══════════════════════════════════════════════════════
// 9. CARD HOVER — keyboard accessibility ripple
// ═══════════════════════════════════════════════════════
function initCardHover(): void {
  const cards = document.querySelectorAll<HTMLElement>('.category-card');
  cards.forEach((card) => {
    const link = card.querySelector<HTMLAnchorElement>('.card-link');
    if (!link) return;

    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });
}
