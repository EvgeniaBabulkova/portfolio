// components/projects/ProjectStickySection.tsx

import projectStyles from "../../styles/projects/projectDetails.module.css";
import type { Project } from "../../data/projects";
import { techIconMap } from "../../data/techIcons";

type ProjectStickySectionProps = {
  project: Project;
  getProjectImageSrc: (slug: string, file: string) => string;
};

export default function ProjectBody({ project, getProjectImageSrc }: ProjectStickySectionProps) {
  return (
    <div className={projectStyles.projectBody}>
      <ul className={projectStyles.techStack}>
        {project.tech.map((tech) => (
          <li key={tech} className={projectStyles.techItem}>
            <img src={techIconMap[tech]} alt={tech} />
            <p>{tech}</p>
          </li>
        ))}
      </ul>

      <div className={projectStyles.screenshots}>
        {project.screenshots.map((photo) => {
          const src = getProjectImageSrc(project.slug, photo.file);
          if (!src) return null;
          return <img key={photo.file} src={src} alt={photo.alt} />;
        })}
      </div>
    </div>
  );
}
