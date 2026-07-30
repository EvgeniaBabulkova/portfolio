import { experienceHistory } from "../../data/experienceHistory";
import aboutStyles from "../../styles/about.module.css";

export default function ExperienceHistorySection() {
  return (
    <section className={aboutStyles.sectionCard}>
      <h5>History</h5>

      <div className="flex flex-col">
        {experienceHistory.map((item) => (
          <article key={item.name} className={aboutStyles.historyRow}>
            <div className={aboutStyles.historyImg}>{item.image ? <img src={item.image} alt={item.name} /> : "?"}</div>

            <div className="flex items-start justify-between gap-(--spacing-sm)">
              <div>
                <h5
                  className={item.accent ? "text-(--col-text-tertiary)" : "text-(--col-text-primary)"}
                  style={{ font: "var(--font-button)" }}
                >
                  {item.name}
                </h5>
                <p className={aboutStyles.historyPlace}>{item.place}</p>
                <p className={aboutStyles.historyPeriod}>{item.period}</p>
              </div>
              <span className={aboutStyles.historyTime}>{item.totalTime}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
