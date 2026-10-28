export default function Header() {
  const nav = [['#about', '01. Про мене'], ['#education', '02. Освіта'], ['#skills', '03. Навички'], ['#projects', '04. Проєкти'], ['#contacts', '05. Контакти']];
  return (
    <header id="top" className="relative -mx-4 overflow-hidden border-b border-line bg-gradient-to-br from-[#111e36] via-[#0e182b] to-ink px-5 sm:-mx-7 sm:px-9 lg:-mx-12 lg:px-14">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-16 size-[360px] rounded-full bg-blue-400/10 blur-[90px]" />
      <div className="relative flex flex-wrap items-center justify-between gap-4 pt-7">
        <div className="flex items-center gap-3 text-xs font-extrabold tracking-[.18em]"><span className="grid size-10 place-items-center rounded-xl bg-glow font-black tracking-normal text-ink">VC</span> PORTFOLIO<span className="text-peach">.</span></div>
        <span className="text-[10px] font-bold tracking-[.15em] text-slate-400">КБ-208 <span className="mx-2 text-peach">•</span> ЛЬВІВ, УКРАЇНА</span>
      </div>
      <div className="relative flex min-h-[440px] items-center justify-between gap-7 py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="mb-6 text-[11px] font-bold tracking-[.2em] text-glow">01 / ПЕРСОНАЛЬНЕ РЕЗЮМЕ</p>
          <h1 className="mb-7 text-[clamp(66px,10vw,132px)] font-black leading-[.94] tracking-[-.08em]">Віталій<br/><span className="text-glow">Чесак<span className="text-peach">.</span></span></h1>
          <p className="mb-8 max-w-xl text-sm leading-7 text-slate-300 sm:text-lg">Студент напряму «Кібербезпека» — досліджую вебтехнології, програмування та інформаційну безпеку.</p>
          <div className="flex flex-wrap gap-3"><a href="#projects" className="rounded-lg bg-glow px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-peach">Мої проєкти ↗</a><a href="#contacts" className="rounded-lg border border-slate-500 px-6 py-3 text-sm font-bold transition hover:-translate-y-1 hover:border-glow hover:text-glow">Контакти ↘</a></div>
        </div>
        <div aria-hidden="true" className="hidden shrink-0 flex-col items-center gap-6 xl:flex"><div className="flex size-72 rotate-[-9deg] flex-col items-center justify-center gap-5 rounded-full border border-blue-300/30 bg-blue-300/5 shadow-[0_0_0_24px_#cbdcff05,0_0_0_66px_#cbdcff03]"><span className="text-[10px] font-bold tracking-[.24em] text-glow">LEARN / BUILD / GROW</span><span className="text-7xl font-extrabold text-glow">&lt;/&gt;</span><span className="text-[10px] font-bold tracking-[.24em] text-glow">WEB • DEVELOPMENT</span></div><span className="text-[10px] font-bold tracking-[.2em] text-slate-500">HTML / CSS / REACT / GIT</span></div>
      </div>
      <nav aria-label="Навігація резюме" className="relative flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-700/70 py-5 text-xs font-semibold text-slate-300">{nav.map(([href, label]) => <a key={href} href={href} className="transition hover:text-glow focus-visible:outline-2 focus-visible:outline-peach">{label}</a>)}</nav>
    </header>
  );
}
