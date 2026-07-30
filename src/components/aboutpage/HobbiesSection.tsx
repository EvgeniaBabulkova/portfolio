import { hobbies } from "../../data/hobbies";
import aboutStyles from "../../styles/about.module.css";

export default function HobbiesSection() {
  return (
    <section className={aboutStyles.sectionCard}>
      <h5>Hobbies</h5>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-(--spacing-sm)">
        {hobbies.map((hobby) => (
          <article key={hobby.name} className={aboutStyles.hobbyCard}>
            <img src={hobby.image} alt={hobby.name} className={aboutStyles.hobbyImg} />
            <p style={{ font: "var(--font-button)" }}>{hobby.name}</p>
            <p className={aboutStyles.hobbySubtitle}>{hobby.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
