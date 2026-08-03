import { hobbies } from "../../data/hobbies";
import aboutStyles from "../../styles/about.module.css";

export default function HobbiesSection() {
  return (
    <section className={aboutStyles.sectionCard}>
      <h5 style={{ font: "var(--font-button)" }}>Hobbies</h5>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
        {hobbies.map((hobby) => (
          <article key={hobby.name} className={aboutStyles.hobbyCard}>
            <img src={hobby.image} alt={hobby.name} className={aboutStyles.hobbyImg} />
            <p style={{ font: "var(--font-chip)" }}>{hobby.name}</p>
            <p className={aboutStyles.hobbySubtitle}>{hobby.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
