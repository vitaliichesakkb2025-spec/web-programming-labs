import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100 antialiased selection:bg-glow selection:text-ink">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-7 lg:px-12">
        <Header />
        <main className="pb-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line py-7 text-xs font-bold tracking-[.18em] text-slate-400">
            <span>ПРОФІЛЬ / 2026</span><span className="text-base font-medium tracking-normal text-slate-200">Від ідеї до робочого інтерфейсу.</span>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-4"><About /><Skills /><Contacts /></div>
            <div className="flex flex-col gap-4"><Education /><Projects /></div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
