import { Link } from "react-router-dom";
import carouselStyles from "../../styles/projects/projectCarousel.module.css";

type ProjectCardProps = {
  logo: string;
  bkgColor: string;
  slug: string;
};

export default function ProjectCard({ logo, bkgColor, slug }: ProjectCardProps) {
  return (
    <div className={carouselStyles.card} style={{ backgroundColor: bkgColor }}>
      <Link to={`/projects/${slug}`} className={carouselStyles.cardLink}>
        <img src={logo} alt="project-logo" width={200} />
      </Link>
    </div>
  );
}
