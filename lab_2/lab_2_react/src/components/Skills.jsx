const skills = [
  { name: 'HTML5', detail: 'Семантична структура документа' },
  { name: 'Git', detail: 'Історія версій та коміти' },
  { name: 'JavaScript', detail: 'Основи синтаксису та JSX' },
  { name: 'React', detail: 'Компонентна архітектура UI' },
];

export default function Skills() {
  return (
    <section className="panel" id="skills" aria-labelledby="skills-heading">
      <p className="section-index">03 / КОМПЕТЕНЦІЇ</p>
      <h2 id="skills-heading">Навички, які опановую</h2>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li className="skill-item" key={skill.name}>
            <strong>{skill.name}</strong>
            <span>{skill.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
