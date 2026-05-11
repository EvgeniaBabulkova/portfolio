// components/projects/ProjectStickySection.tsx

import projectStyles from "../../styles/projects/projectDetails.module.css";
import type { Project } from "../../data/projects";

type ProjectStickySectionProps = {
  project: Project;
  getProjectImageSrc: (slug: string, file: string) => string;
};

export default function ProjectPhSection({ project, getProjectImageSrc }: ProjectStickySectionProps) {
  return (
    <div className={projectStyles.stickySection}>
      <div className={projectStyles.techStack}>
        <h5>Tech</h5>
        <ul>
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
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
