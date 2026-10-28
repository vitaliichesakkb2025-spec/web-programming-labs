export default function About() { return (
  <section id="about" aria-labelledby="about-title" className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/10 transition hover:border-blue-300/40 sm:p-8">
    <div className="mb-7 flex items-center justify-between border-b border-line pb-4"><span className="text-[11px] font-bold tracking-[.2em] text-glow">01 / ПРО МЕНЕ</span><span className="text-xl text-peach">✳</span></div>
    <h2 id="about-title" className="mb-5 text-3xl font-extrabold tracking-tight">Привіт! 👋</h2>
    <p className="mb-4 leading-8 text-slate-300">Навчаюся в Національному університеті «Львівська політехніка». Цікавлюся веброзробкою, структурою сучасних застосунків і захистом інформації.</p>
    <p className="leading-8 text-slate-300">У навчанні використовую HTML, CSS, Git та React. Розвиваю навички створення адаптивних інтерфейсів.</p>
  </section>);
}
