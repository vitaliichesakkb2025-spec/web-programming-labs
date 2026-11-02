const projects=[{title:'Семантичне резюме',description:'Вебсторінка на HTML5 з логічною структурою, навігацією та розділами.',tags:['HTML5']},{title:'Адаптивне CSS-резюме',description:'Оформлення за допомогою CSS, Flexbox, Grid та медіазапитів.',tags:['CSS3','RESPONSIVE']},{title:'Резюме на React',description:'Компонентна архітектура із Vite та утилітарними класами Tailwind CSS 4.',tags:['REACT','TAILWIND']}];
export default function Projects() { return (
  <section id="projects" aria-labelledby="projects-title" className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/10 transition hover:border-blue-300/40 sm:p-8">
    <div className="mb-7 flex items-center justify-between border-b border-line pb-4"><span className="text-[11px] font-bold tracking-[.2em] text-glow">04 / ПРАКТИКА</span><span className="text-xl text-peach">↗</span></div>
    <h2 id="projects-title" className="mb-6 text-3xl font-extrabold tracking-tight">Навчальні проєкти</h2>
    <ol>{projects.map((p,i)=><li key={p.title} className="flex gap-5 border-t border-line py-6"><span className="text-xs font-bold text-peach">0{i+1}</span><div><h3 className="mb-2 text-lg font-bold">{p.title}</h3><p className="mb-3 text-sm leading-7 text-slate-400">{p.description}</p><div className="flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-md border border-blue-300/20 bg-blue-200/10 px-2 py-1 text-[10px] font-bold tracking-wide text-glow">{t}</span>)}</div></div></li>)}</ol>
  </section>);
}
