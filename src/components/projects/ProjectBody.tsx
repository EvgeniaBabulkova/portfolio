// components/projects/ProjectStickySection.tsx

import projectStyles from "../../styles/projects/projectDetails.module.css";
import type { Project } from "../../data/projects";
import { techIconMap } from "../../data/techIcons";
import { useState } from "react";

type ProjectStickySectionProps = {
  project: Project;
  getProjectImageSrc: (slug: string, file: string) => string;
};

export default function ProjectBody({ project, getProjectImageSrc }: ProjectStickySectionProps) {
  const [enlargedSrc, setEnlargedSrc] = useState<string | null>(null); // ph source or nothing
  const videoStart = project.videoStartSeconds ? `&start=${project.videoStartSeconds}` : "";

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
        {project.videoId && (
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}?rel=0&vq=hd1080${videoStart}`}
            allowFullScreen
            className={projectStyles.projectVideo}
          />
        )}
        {project.screenshots.map((photo) => {
          const src = getProjectImageSrc(project.slug, photo.file);
          if (!src) return null;
          return <img key={photo.file} src={src} alt={photo.alt} onClick={() => setEnlargedSrc(src)} />;
        })}
      </div>
      {enlargedSrc && (
        <div className={projectStyles.overlay} onClick={() => setEnlargedSrc(null)}>
          <button className={projectStyles.overlayClose} onClick={() => setEnlargedSrc(null)}>
            ✕
          </button>
          <img
            src={enlargedSrc}
            alt="enlarged"
            className={projectStyles.overlayImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
