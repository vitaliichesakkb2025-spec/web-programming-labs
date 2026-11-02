import { FORMSPREE_ENDPOINT } from './form-config.js';

const STORAGE_KEY = 'kb208.lab4.system';
const SESSION_MODAL_KEY = 'kb208.lab4.modalDismissed';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/posts/24/comments';
const byId = (id) => document.getElementById(id);

function writeSystemInfo() {
  const nav = navigator;
  const info = {
    'User Agent': nav.userAgent || 'Недоступно',
    'Платформа': nav.userAgentData?.platform || nav.platform || 'Недоступно',
    'Мова': nav.language || 'Недоступно',
    'Мови': Array.from(nav.languages || []).join(', ') || 'Недоступно',
    'Виробник браузера': nav.vendor || 'Не вказано',
    'Cookie дозволені': nav.cookieEnabled ? 'Так' : 'Ні',
    'Мережа': nav.onLine ? 'Онлайн' : 'Офлайн',
    'Логічні ядра': nav.hardwareConcurrency ?? 'Недоступно',
    'Оперативна пам’ять (приблизно)': nav.deviceMemory ? `${nav.deviceMemory} ГБ` : 'Недоступно',
    'Екран': `${screen.width} × ${screen.height}`,
    'Область перегляду': `${window.innerWidth} × ${window.innerHeight}`,
    'Глибина кольору': `${screen.colorDepth} біт`,
    'Часовий пояс': Intl.DateTimeFormat().resolvedOptions().timeZone || 'Недоступно',
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    byId('system-data').replaceChildren(...Object.entries(stored).map(([key, value]) => {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const desc = document.createElement('dd');
      term.textContent = key;
      desc.textContent = String(value);
      row.append(term, desc);
      return row;
    }));
  } catch (error) {
    byId('system-data').textContent = 'localStorage недоступний: ' + error.message;
  }
}

let controller;
async function loadReviews() {
  if (controller) controller.abort();
  controller = new AbortController();
  const status = byId('reviews-status');
  const container = byId('reviews-list');
  status.textContent = 'Завантажую відгуки…';
  container.replaceChildren();
  try {
    const response = await fetch(COMMENTS_URL, { signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const items = await response.json();
    if (!Array.isArray(items)) throw new Error('Некоректний формат відповіді');
    for (const item of items) {
      const card = document.createElement('article');
      card.className = 'review-card';
      const title = document.createElement('h3');
      const author = document.createElement('p');
      const body = document.createElement('p');
      title.textContent = item.name;
      author.className = 'review-author';
      author.textContent = item.email;
      body.textContent = item.body;
      card.append(title, author, body);
      container.append(card);
    }
    status.textContent = `Завантажено ${items.length} тестових коментарів (публікація №24).`;
  } catch (error) {
    if (error.name === 'AbortError') return;
    status.textContent = 'Помилка отримання коментарів. Перевір інтернет і спробуй «Оновити відгуки». ' + error.message;
  }
}

const modal = byId('contact-modal');
let lastFocusedElement = null;
function openModal() {
  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('modal-is-open');
  modal.querySelector('input').focus();
}
function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-is-open');
  try { sessionStorage.setItem(SESSION_MODAL_KEY, '1'); } catch (_) { /* Browser privacy mode. */ }
  lastFocusedElement?.focus();
}
function initialiseForm() {
  const form = byId('feedback-form');
  const configured = /^https:\/\/formspree\.io\/f\/[\w-]+$/.test(FORMSPREE_ENDPOINT) &&
    !FORMSPREE_ENDPOINT.includes('REPLACE_ME');
  if (configured) form.action = FORMSPREE_ENDPOINT;
  form.addEventListener('submit', (event) => {
    if (!configured) {
      event.preventDefault();
      byId('form-status').textContent = 'Надсилання ще не підключено: додай свій Formspree endpoint у form-config.js.';
    }
  });
  byId('open-contact').addEventListener('click', openModal);
  byId('close-modal').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
    if (event.key === 'Tab' && !modal.hidden) {
      const focusable = [...modal.querySelectorAll('button, input, textarea')].filter(el => !el.disabled);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  let dismissed = false;
  try { dismissed = sessionStorage.getItem(SESSION_MODAL_KEY) === '1'; } catch (_) { /* No sessionStorage. */ }
  if (!dismissed) window.setTimeout(openModal, 60_000);
}

const currentTheme = () => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? 'light' : 'dark';
};
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const button = byId('theme-toggle');
  button.textContent = theme === 'dark' ? '☀ Світла тема' : '☾ Темна тема';
  button.setAttribute('aria-pressed', String(theme === 'dark'));
}
function initialiseTheme() {
  let manualSelection = false;
  applyTheme(currentTheme());
  byId('theme-toggle').addEventListener('click', () => {
    manualSelection = true;
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });
  // Automatic theme updates after a clock boundary unless visitor has selected a manual override.
  window.setInterval(() => { if (!manualSelection) applyTheme(currentTheme()); }, 60_000);
}

writeSystemInfo();
loadReviews();
initialiseTheme();
initialiseForm();
byId('reload-reviews').addEventListener('click', loadReviews);
