export default function Contacts() {
  return (
    <section className="panel" id="contacts" aria-labelledby="contacts-heading">
      <p className="section-index">05 / РЕСУРСИ</p>
      <h2 id="contacts-heading">Корисні посилання</h2>
      <p className="muted">Навчальні ресурси без вигаданих персональних контактів.</p>
      <ul className="links-list">
        <li><a href="https://lpnu.ua/" target="_blank" rel="noopener noreferrer">Львівська політехніка ↗</a></li>
        <li><a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">Документація React ↗</a></li>
        <li><a href="https://developer.mozilla.org/uk/docs/Web/HTML" target="_blank" rel="noopener noreferrer">Довідник HTML ↗</a></li>
      </ul>
    </section>
  );
}
