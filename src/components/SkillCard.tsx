import skillsStyles from "../styles/skills.module.css";

type SkillIcon = {
  id: string;
  src: string;
  alt: string;
};

type SkillCardProps = {
  title: string;
  content?: string;
  icons?: SkillIcon[];
  classes?: string;
};

export default function SkillCard({ title, content, icons, classes }: SkillCardProps) {
  return (
    <div className={`${skillsStyles.skillCard} ${classes && classes}`}>
      <div className="flex flex-col gap-(--spacing-md)">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>

      <div className="flex flex-wrap gap-(--spacing-xs)">
        {icons?.map((icon) => (
          <img key={icon.id} src={icon.src} alt={icon.alt} width={24} height={24} />
        ))}
      </div>
    </div>
  );
}
