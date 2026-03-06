// Client-side i18n engine
// Reads [data-i18n] attributes and replaces text content
// Switches [data-lang-content] blocks (EN/FR project descriptions)
// Persists language choice in localStorage

import type { TranslationKey } from './translations';
import { translations, countryKeyMap } from './translations';

export type Lang = 'en' | 'fr';
const STORAGE_KEY = 'portfolio_lang';

function getLang(): Lang {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'fr' || stored === 'en') return stored;
  }
  return 'en';
}

function setLang(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  applyLang(lang);
  updateToggleButton(lang);
  document.documentElement.setAttribute('lang', lang);
}

function applyLang(lang: Lang) {
  // ── Simple text nodes ──────────────────────────────────────
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as TranslationKey;
    if (translations[key]) {
      el.textContent = translations[key][lang];
    }
  });

  // ── HTML content (for bold/markup) ────────────────────────
  document.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml as TranslationKey;
    if (translations[key]) {
      el.innerHTML = translations[key][lang];
    }
  });

  // ── Aria-labels ───────────────────────────────────────────
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria as TranslationKey;
    if (translations[key]) {
      el.setAttribute('aria-label', translations[key][lang]);
    }
  });

  // ── Bilingual content blocks (project descriptions) ────────
  // Show [data-lang-content="en"] or [data-lang-content="fr"]
  document.querySelectorAll<HTMLElement>('[data-lang-content]').forEach((el) => {
    const elLang = el.dataset.langContent;
    el.style.display = elLang === lang ? '' : 'none';
  });

  // ── Country name tags in travel interests ──────────────────
  // Elements with data-country="USA" etc.
  document.querySelectorAll<HTMLElement>('[data-country]').forEach((el) => {
    const countryEn = el.dataset.country as string;
    const key = countryKeyMap[countryEn];
    if (key && translations[key]) {
      el.textContent = translations[key][lang];
    }
  });

  // ── Bilingual project titles (data-title-en / data-title-fr) ──
  document.querySelectorAll<HTMLElement>('[data-title-en]').forEach((el) => {
    const titleEn = el.dataset.titleEn ?? '';
    const titleFr = el.dataset.titleFr ?? titleEn; // fallback to EN
    el.textContent = lang === 'fr' ? titleFr : titleEn;
  });

  // ── CV PDF download link ───────────────────────────────────
  const cvBtn = document.getElementById('cv-download-btn') as HTMLAnchorElement | null;
  if (cvBtn) {
    const url = lang === 'fr'
      ? (cvBtn.dataset.cvFr ?? cvBtn.dataset.cvEn ?? '')
      : (cvBtn.dataset.cvEn ?? '');
    cvBtn.href = url;
  }
}

function updateToggleButton(lang: Lang) {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  const nextLang = lang === 'en' ? 'fr' : 'en';
  btn.textContent = nextLang.toUpperCase();
  btn.setAttribute('aria-label', lang === 'en' ? 'Passer en français' : 'Switch to English');
  btn.setAttribute('data-current-lang', lang);
}

// ── Bootstrap ────────────────────────────────────────────────
export function initI18n() {
  const lang = getLang();
  applyLang(lang);
  updateToggleButton(lang);
  document.documentElement.setAttribute('lang', lang);

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = (btn.getAttribute('data-current-lang') as Lang) ?? 'en';
      setLang(current === 'en' ? 'fr' : 'en');
    });
  }
}
