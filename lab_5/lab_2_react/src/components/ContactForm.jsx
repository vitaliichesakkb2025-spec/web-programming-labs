import { useEffect, useRef, useState } from 'react';
import { FORMSPREE_ENDPOINT } from '../form-config.js';

const DISMISSED_KEY = 'kb208.lab4.modalDismissed';
const configured = /^https:\/\/formspree\.io\/f\/[\w-]+$/.test(FORMSPREE_ENDPOINT) && !FORMSPREE_ENDPOINT.includes('REPLACE_ME');

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const firstInput = useRef(null);
  const closeButton = useRef(null);
  const lastFocusedElement = useRef(null);
  const dismissedRef = useRef(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(DISMISSED_KEY) === '1'; } catch { /* приватний режим */ }
    if (dismissed) return;
    const timer = window.setTimeout(() => { if (!dismissedRef.current) setIsOpen(true); }, 60_000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    lastFocusedElement.current = document.activeElement;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstInput.current?.focus();
    function handleKeyDown(event) {
      if (event.key === 'Escape') dismiss();
      if (event.key === 'Tab') {
        const controls = Array.from(dialogRef.current?.querySelectorAll('button, input, textarea') ?? []);
        if (!controls.length) return;
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', handleKeyDown);
      lastFocusedElement.current?.focus();
    };
  }, [isOpen]);

  function dismiss() {
    dismissedRef.current = true;
    setIsOpen(false);
    try { sessionStorage.setItem(DISMISSED_KEY, '1'); } catch { /* приватний режим */ }
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="mt-2 w-full rounded-xl border border-line bg-surface px-5 py-4 text-left text-sm font-bold transition hover:border-glow">
        Написати через форму ↗
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#020714]/90 p-3 sm:p-6" onMouseDown={e => { if (e.target === e.currentTarget) dismiss(); }}>
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="form-title" aria-describedby="form-description" className="max-h-[94dvh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-surface p-5 shadow-2xl sm:p-7">
            <div className="mb-3 flex items-start justify-between gap-4">
              <div><p className="mb-2 text-[11px] font-bold tracking-[.2em] text-glow">ЗВОРОТНИЙ ЗВ’ЯЗОК</p><h2 id="form-title" className="text-2xl font-black">Залишити повідомлення</h2></div>
              <button type="button" ref={closeButton} onClick={dismiss} aria-label="Закрити форму" className="rounded-lg border border-line px-3 py-2">✕</button>
            </div>
            <p id="form-description" className="mb-5 text-sm leading-6 text-slate-400">Форма з’являється через одну хвилину. Надсилання через Formspree доступне після налаштування особистого endpoint.</p>
            <form method="POST" action={configured ? FORMSPREE_ENDPOINT : undefined} onSubmit={e => { if (!configured) { e.preventDefault(); setFormMessage('Formspree ще не підключений. Додай endpoint у src/form-config.js.'); } }} className="grid gap-4">
              <label className="grid gap-1 text-sm font-semibold">Ім’я <input ref={firstInput} name="name" type="text" autoComplete="name" required minLength={2} maxLength={80} className="form-input" /></label>
              <label className="grid gap-1 text-sm font-semibold">Email <input name="email" type="email" autoComplete="email" required className="form-input" /></label>
              <label className="grid gap-1 text-sm font-semibold">Номер телефону <input name="phone" type="tel" autoComplete="tel" required pattern="[+0-9() .-]{7,22}" title="Номер від 7 до 22 символів" className="form-input" /></label>
              <label className="grid gap-1 text-sm font-semibold">Повідомлення <textarea name="message" required rows={4} minLength={5} maxLength={2000} className="form-input" /></label>
              <p role="status" aria-live="polite" className="text-xs text-peach">{formMessage}</p>
              <button type="submit" className="rounded-lg bg-glow px-6 py-3 font-bold text-ink hover:opacity-90">Надіслати ↗</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
