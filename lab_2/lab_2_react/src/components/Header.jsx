export default function Header() {
  return (
    <header className="hero" id="top">
      <div className="hero-topline">
        <span className="eyebrow">ПОРТФОЛІО / НАВЧАЛЬНЕ РЕЗЮМЕ</span>
        <span className="hero-marker">КБ-208</span>
      </div>
      <h1>Чесак Віталій Володимирович</h1>
      <p className="hero-subtitle">Студент напряму «Кібербезпека»</p>
      <p className="hero-description">
        Розвиваю навички веброзробки, вивчаю HTML5, React та Git.
      </p>
      <nav className="hero-nav" aria-label="Розділи резюме">
        <a href="#about">Про мене</a>
        <a href="#skills">Навички</a>
        <a href="#projects">Проєкти</a>
        <a href="#contacts">Посилання</a>
      </nav>
    </header>
  );
}
