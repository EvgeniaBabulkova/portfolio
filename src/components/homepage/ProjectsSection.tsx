import { projects } from "../../data/projects";
import ProjectCard from "../../components/projects/ProjectCard";
import Title from "../../components/UI/Title";
import carouselStyles from "../../styles/projects/projectCarousel.module.css";

export default function ProjectsSection() {
  return (
    <section className={carouselStyles.projectsSection}>
      <Title subtitle="Projects" title="See some of my work" />
      <div className={carouselStyles.carouselContainer}>
        <ul className={carouselStyles.carouselCards}>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.slug}
                bkgColor={project.bkgColor}
                logo={project.logo}
                slug={project.slug}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
