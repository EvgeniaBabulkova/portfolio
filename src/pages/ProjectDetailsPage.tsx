import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import NotFountPage from "./NotFoundPage";
import projectStyles from "../styles/projects/projectDetails.module.css";
import LinkButton from "../components/UI/LinkButton";
import ContactBanner from "../components/ContactBanner";

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFountPage />;
  }

  // i probably need a big switch statement for all the specific content components

  return (
    <>
      <div className={projectStyles.topBanner} style={{ backgroundColor: project.bkgColor }}>
        <img src={project.logo} alt="project-logo" />
      </div>

      <div className={projectStyles.details}>
        <h1>{project.title}</h1>

        {/* rename later */}
        <div className={projectStyles.metaWrapper}>
          <div className={projectStyles.metaGrid}>
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

          <p className={projectStyles.description}>{project.shortDescription}</p>
          {(project.livePreview || project.figmaPrototype || project.sourceCode) && (
            <div className={projectStyles.buttons}>
              {project.sourceCode && <LinkButton link={project.sourceCode}>Source code</LinkButton>}
              {project.livePreview && <LinkButton link={project.livePreview}>Live preview</LinkButton>}
              {project.figmaPrototype && <LinkButton link={project.figmaPrototype}>Live preview</LinkButton>}
            </div>
          )}
        </div>
      </div>

      <p>From here i'll add the specific prj details components...</p>

      <ContactBanner />
    </>
  );
}
