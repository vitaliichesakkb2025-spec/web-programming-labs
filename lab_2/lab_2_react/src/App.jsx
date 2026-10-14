import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="site-shell">
      <div className="layout-container">
        <Header />
        <main className="content-grid">
          <div className="content-column">
            <About />
            <Skills />
            <Contacts />
          </div>
          <div className="content-column">
            <Education />
            <Projects />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
