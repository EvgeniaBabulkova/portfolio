import type { Project } from "../../data/projects";
import projectStyles from "../../styles/projects/projectDetails.module.css";
import LinkButton from "../UI/LinkButton";

type ProjectDetailsProps = { project: Project };

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className={projectStyles.details}>
      <h1>{project.title}</h1>
      <div className={projectStyles.detailsBox}>
        <div className={projectStyles.labelsGrid}>
          <h5>Category</h5>
          <div className={projectStyles.categoryList}>
            {project.category.map((category) => (
              <p key={category}>{category}</p>
            ))}
          </div>
          <h5>Client</h5>
          <p>{project.client}</p>
          <h5>Year</h5>
          <p>{project.year}</p>
        </div>
        <div className="flex flex-col gap-(--spacing-md)">
          {/* todo: contact me - link button */}
          <p className={projectStyles.description}>{project.shortDescription}</p>
          {project.slug === "pondoo" && (
            <h5>Details limited due to professional context - contact me if you have questions</h5>
          )}
        </div>
        {(project.livePreview || project.figmaPrototype || project.sourceCode) && (
          <div className={projectStyles.prjButtons}>
            {project.sourceCode && <LinkButton link={project.sourceCode}>Source code</LinkButton>}
            {project.livePreview && <LinkButton link={project.livePreview}>Live preview</LinkButton>}
            {project.figmaPrototype && <LinkButton link={project.figmaPrototype}>Live preview</LinkButton>}
          </div>
        )}
      </div>
    </div>
  );
}
