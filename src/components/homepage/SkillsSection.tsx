import skillsStyles from "../../styles/skills.module.css";
import SkillCard from "./SkillCard";
import { backendTech, databasesTech, frontendTech, uxuiTech } from "../../data/techIcons";
import Title from "../UI/Title";

export default function SkillsSection() {
  return (
    <section className={skillsStyles.skillsSection}>
      <Title subtitle="Skills" title="What is my experience?" />
      <div className={skillsStyles.skillsGrid}>
        <SkillCard
          title="Frontend"
          content="Crossed from UX/UI into frontend development at QAMPO ApS, building and maintaining React + TypeScript features for Pondoo - home care visit production software used by Danish municipalities. Worked within existing complex systems, integrating new functionality with a focus on component reusability and design systems."
          tech={frontendTech}
          classes={skillsStyles.frontend}
        />
        <SkillCard
          title="Backend"
          content="Built NestJS APIs with modular architecture, input validation and JWT authentication. Used TypeORM for relational data modeling within a PostgreSQL database."
          tech={backendTech}
          classes={skillsStyles.backend}
        />
        <SkillCard
          title="UX/UI design"
          content="1.5 years designing B2B planning software at QAMPO ApS, including KPI dashboards, interactive schedules and configuration pages. Built a master design system spanning 5 products with light/dark mode and one-click brand switching."
          tech={uxuiTech}
          classes={skillsStyles.uxui}
        />
        <SkillCard title="Databases" tech={databasesTech} classes={skillsStyles.databases} />
      </div>
    </section>
  );
}
