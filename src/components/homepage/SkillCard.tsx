import { techIconMap } from "../../data/techIcons";
import skillsStyles from "../../styles/skills.module.css";

type SkillCardProps = {
  title: string;
  content?: string;
  tech?: string[];
  classes?: string;
  favorabilityStar?: boolean;
};

export default function SkillCard({ title, content, tech, classes, favorabilityStar }: SkillCardProps) {
  return (
    <div className={`${skillsStyles.skillCard} ${classes && classes}`}>
      <div className="flex flex-col gap-(--spacing-md)">
        <div className="flex gap-(--spacing-sm)">
          <h4>{title}</h4>
          {favorabilityStar && <h5 className={skillsStyles.favorabilityStar}>★</h5>}
        </div>
        <p>{content}</p>
      </div>

      <div className="flex flex-wrap gap-(--spacing-md)">
        {tech?.map((tech) => {
          const iconSrc = techIconMap[tech];
          if (!iconSrc) return null;
          return <img src={iconSrc} alt={tech} title={tech} width={24} height={24} className={skillsStyles.techIcon} />;
        })}
      </div>
    </div>
  );
}
