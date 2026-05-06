import skillsStyles from "../../styles/skills.module.css";
import SkillCard from "./SkillCard";
import { databasesIcons, extraIcons, frontendIcons, uxuiIcons } from "../../data/techIcons";
import Title from "../UI/Title";

export default function SkillsSection() {
  return (
    <section className={skillsStyles.skillsSection}>
      <Title subtitle="Skills" title="What do i do?" />
      <div className={skillsStyles.skillsGrid}>
        <SkillCard
          title="Title"
          content="content contentcontent contentcontent contentcontent contentcontent contentcontent content"
          icons={frontendIcons}
          classes={skillsStyles.frontend}
        />
        <SkillCard
          title="Title"
          content="content contentcontent contentcontent contentcontent contentcontent contentcontent content"
          icons={uxuiIcons}
          classes={skillsStyles.uxui}
        />
        <SkillCard
          title="Title"
          content="content contentcontent contentcontent contentcontent contentcontent contentcontent content"
          icons={extraIcons}
          classes={skillsStyles.extra}
        />
        <SkillCard title="Title" icons={databasesIcons} classes={skillsStyles.databases} />
      </div>
    </section>
  );
}
