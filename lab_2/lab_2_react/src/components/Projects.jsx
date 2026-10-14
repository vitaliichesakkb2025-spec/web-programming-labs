const projects = [
  {
    title: 'Персональне резюме на HTML',
    tag: 'HTML5',
    description: 'Семантична розмітка CV: заголовки, списки, навігація, секції та посилання.',
  },
  {
    title: 'Резюме з React-компонентів',
    tag: 'React + Vite',
    description: 'Розділення інтерфейсу на самостійні компоненти та композиція в App.jsx.',
  },
];

export default function Projects() {
  return (
    <section className="panel" id="projects" aria-labelledby="projects-heading">
      <p className="section-index">04 / ПРАКТИКА</p>
      <h2 id="projects-heading">Навчальні проєкти</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li className="project-item" key={project.title}>
            <span className="project-tag">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
