import { useEffect, useState } from 'react';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/posts/24/comments';

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState('loading');
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        setStatus('loading');
        const response = await fetch(COMMENTS_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const items = await response.json();
        if (!Array.isArray(items)) throw new Error('Некоректний формат відповіді');
        setComments(items);
        setStatus('success');
      } catch (error) {
        if (error.name !== 'AbortError') setStatus(`error: ${error.message}`);
      }
    }
    load();
    return () => controller.abort();
  }, [reloadKey]);

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="mt-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
        <div>
          <p className="mb-2 text-[11px] font-bold tracking-[.2em] text-glow">06 / ВІДГУКИ</p>
          <h2 id="reviews-title" className="mb-3 text-3xl font-extrabold">Коментарі з API</h2>
          <p className="max-w-2xl text-sm text-slate-400">Тестові коментарі JSONPlaceholder до публікації №24. Це не реальні відгуки роботодавців.</p>
        </div>
        <button type="button" onClick={() => setReloadKey(k => k + 1)} className="rounded-lg border border-line px-5 py-3 text-sm font-bold transition hover:border-glow">Оновити відгуки ↻</button>
      </div>
      <p role="status" aria-live="polite" className="mb-4 text-sm text-glow">
        {status === 'loading' ? 'Завантаження коментарів…' : status === 'success' ? `Завантажено ${comments.length} тестових коментарів.` : `Помилка завантаження. ${status.slice(7)}`}
      </p>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {status === 'success' && comments.map(comment => (
          <article key={comment.id} className="min-w-0 rounded-xl border border-line bg-[#1d2a43] p-5">
            <h3 className="mb-2 break-words text-lg font-bold">{comment.name}</h3>
            <p className="mb-3 break-words text-xs font-semibold text-glow">{comment.email}</p>
            <p className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-300">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
