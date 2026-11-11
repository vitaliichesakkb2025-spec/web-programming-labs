const links=[['GitHub / навчальні роботи','https://github.com/vitaliichesakkb2025-spec/web-programming-labs'],['Львівська політехніка','https://lpnu.ua/'],['Документація Tailwind CSS','https://tailwindcss.com/docs/installation/using-vite']];
export default function Contacts() { return (
  <section id="contacts" aria-labelledby="contacts-title" className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/10 transition hover:border-blue-300/40 sm:p-8">
    <div className="mb-7 flex items-center justify-between border-b border-line pb-4"><span className="text-[11px] font-bold tracking-[.2em] text-glow">05 / КОНТАКТИ</span><span className="text-xl text-peach">◎</span></div>
    <h2 id="contacts-title" className="mb-4 text-3xl font-extrabold tracking-tight">На звʼязку</h2><p className="mb-6 text-sm text-slate-400">Місце навчання: Львів, Україна.</p>
    <ul>{links.map(([label,url])=><li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="flex justify-between gap-3 border-t border-line py-4 text-sm font-semibold text-slate-200 transition hover:translate-x-1 hover:text-glow focus-visible:outline-2 focus-visible:outline-peach"><span>{label}</span><span className="text-peach">↗</span></a></li>)}</ul>
  </section>);
}
