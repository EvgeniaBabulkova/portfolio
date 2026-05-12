import skillsStyles from "../../styles/skills.module.css";
import SkillCard from "./SkillCard";
import { databasesTech, extraTech, frontendTech, uxuiTech } from "../../data/techIcons";
import Title from "../UI/Title";

export default function SkillsSection() {
  return (
    <section className={skillsStyles.skillsSection}>
      <Title subtitle="Skills" title="What do i do?" />
      <div className={skillsStyles.skillsGrid}>
        <SkillCard
          title="Title"
          content="content contentcontent contentcontent contentcontent contentcontent contentcontent content"
          tech={frontendTech}
          classes={skillsStyles.frontend}
        />
        <SkillCard
          title="Title"
          content="content contentcontent contentcontent contentcontent contentcontent contentcontent content"
          tech={uxuiTech}
          classes={skillsStyles.uxui}
        />
        <SkillCard
          title="Title"
          content="content contentcontent contentcontent contentcontent contentcontent contentcontent content"
          tech={extraTech}
          classes={skillsStyles.extra}
        />
        <SkillCard title="Title" tech={databasesTech} classes={skillsStyles.databases} />
      </div>
    </section>
  );
}
