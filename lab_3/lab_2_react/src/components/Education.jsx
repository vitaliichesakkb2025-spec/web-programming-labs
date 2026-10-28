export default function Education() { return (
  <section id="education" aria-labelledby="education-title" className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/10 transition hover:border-blue-300/40 sm:p-8">
    <div className="mb-7 flex items-center justify-between border-b border-line pb-4"><span className="text-[11px] font-bold tracking-[.2em] text-glow">02 / ОСВІТА</span><span className="text-xl text-peach">↗</span></div>
    <h2 id="education-title" className="mb-7 text-3xl font-extrabold tracking-tight">Освіта</h2>
    <p className="mb-2 text-[11px] font-bold tracking-[.2em] text-peach">ВИЩА ОСВІТА</p>
    <h3 className="mb-7 max-w-sm text-xl font-bold leading-8">Національний університет «Львівська політехніка»</h3>
    {[['Напрям','Кібербезпека'], ['Група','КБ-208'], ['Місто','Львів']].map(([label,value]) => <div key={label} className="flex justify-between gap-4 border-t border-line py-4 text-sm"><span className="text-slate-400">{label}</span><strong className="text-right text-slate-100">{value}</strong></div>)}
  </section>);
}
