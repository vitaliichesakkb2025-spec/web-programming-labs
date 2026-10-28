const skills=[['01','HTML5','Структура'],['02','CSS3','Flex / Grid'],['03','JavaScript','Основи / JSX'],['04','React','Компоненти'],['05','Git','Контроль версій'],['06','Tailwind','Utility-first']];
export default function Skills() { return (
  <section id="skills" aria-labelledby="skills-title" className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/10 transition hover:border-blue-300/40 sm:p-8">
    <div className="mb-7 flex items-center justify-between border-b border-line pb-4"><span className="text-[11px] font-bold tracking-[.2em] text-glow">03 / НАВИЧКИ</span><span className="text-xl text-peach">✦</span></div>
    <h2 id="skills-title" className="mb-2 text-3xl font-extrabold tracking-tight">Мій стек</h2><p className="mb-6 text-sm text-slate-400">Технології, які вивчаю та використовую.</p>
    <ul className="grid grid-cols-2 gap-3">{skills.map(([number,name,detail]) => <li key={name} className="rounded-xl border border-slate-700 bg-[#1d2a43] p-4 transition hover:-translate-y-1 hover:border-glow/50"><p className="mb-2 text-[10px] font-bold text-peach">{number}</p><strong className="block text-base">{name}</strong><span className="text-xs text-slate-400">{detail}</span></li>)}</ul>
  </section>);
}
