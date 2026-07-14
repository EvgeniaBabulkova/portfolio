import { Link } from "react-router-dom";
import TechChip from "../TechChip";
import { techIconMap } from "../../data/techIcons";
import carouselStyles from "../../styles/projects/projectCarousel.module.css";

type ProjectCardProps = {
  logo: string;
  bkgColor: string;
  slug: string;
  title: string;
  tech: string[];
};

export default function ProjectCard({ logo, bkgColor, slug, title, tech }: ProjectCardProps) {
  const visibleTech = tech.slice(0, 4);

  return (
    <div className={carouselStyles.card} style={{ backgroundColor: bkgColor }}>
      <Link to={`/projects/${slug}`} className={carouselStyles.cardLink}>
        <div className={carouselStyles.cardOverlay} />
        <img src={logo} alt={`${title} logo`} width={200} className={carouselStyles.cardLogo} />

        <div className={carouselStyles.cardOverlayContent}>
          <h4>{title}</h4>
          <div className="flex flex-wrap gap-(--spacing-sm) justify-start">
            {visibleTech.map((techName) => {
              const iconSrc = techIconMap[techName];
              if (!iconSrc) return null;
              return <TechChip key={techName} iconSrc={iconSrc} label={techName} />;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}
