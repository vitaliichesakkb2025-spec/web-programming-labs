import { useEffect, useState } from 'react';
const STORAGE_KEY = 'kb208.lab4.system';

export default function Footer() {
  const [system, setSystem] = useState({});
  const [storageError, setStorageError] = useState('');
  useEffect(() => {
    const info = {
      'User Agent': navigator.userAgent || 'Недоступно',
      'Платформа': navigator.userAgentData?.platform || navigator.platform || 'Недоступно',
      'Мова': navigator.language || 'Недоступно',
      'Мови': Array.from(navigator.languages || []).join(', ') || 'Недоступно',
      'Виробник браузера': navigator.vendor || 'Не вказано',
      'Cookie дозволені': navigator.cookieEnabled ? 'Так' : 'Ні',
      'Мережа': navigator.onLine ? 'Онлайн' : 'Офлайн',
      'Логічні ядра': navigator.hardwareConcurrency ?? 'Недоступно',
      'Оперативна пам’ять (приблизно)': navigator.deviceMemory ? `${navigator.deviceMemory} ГБ` : 'Недоступно',
      'Екран': `${screen.width} × ${screen.height}`,
      'Область перегляду': `${window.innerWidth} × ${window.innerHeight}`,
      'Глибина кольору': `${screen.colorDepth} біт`,
      'Часовий пояс': Intl.DateTimeFormat().resolvedOptions().timeZone || 'Недоступно',
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
      setSystem(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
    } catch (error) { setStorageError(`localStorage недоступний: ${error.message}`); }
  }, []);

  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-8 text-[10px] font-bold tracking-wide text-slate-500">
      <span>© 2026 Чесак Віталій Володимирович</span>
      <span>ЛАБОРАТОРНА №5 / REACT + DEPLOY v2</span>
      <a href="#top" className="transition hover:text-glow">Нагору ↑</a>
      <details open className="mt-3 w-full border-t border-line pt-5 text-xs font-normal tracking-normal">
        <summary className="cursor-pointer font-bold text-glow">Інформація про браузер та ОС · localStorage</summary>
        <p className="mt-2 text-slate-400">Дані доступні тільки цій сторінці у вашому браузері.</p>
        {storageError ? <p>{storageError}</p> : <dl className="mt-3 grid gap-3 sm:grid-cols-2">{Object.entries(system).map(([key, value]) => <div key={key} className="min-w-0 border-b border-line pb-2"><dt className="text-slate-400">{key}</dt><dd className="mt-1 break-words text-slate-200">{value}</dd></div>)}</dl>}
      </details>
    </footer>
  );
}
