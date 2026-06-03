import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import NotFountPage from "./NotFoundPage";
import projectStyles from "../styles/projects/projectDetails.module.css";
import ContactBanner from "../components/ContactBanner";
import ProjectDetails from "../components/projects/ProjectDetails";
import ProjectBody from "../components/projects/ProjectBody";
import UnderConstruction from "../components/UnderConstruction";

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFountPage />;
  }

  const imageModules = import.meta.glob("../assets/prj-*/*.{png,webp,svg}", {
    eager: true,
    import: "default",
  }) as Record<string, string>;

  function getProjectImageSrc(slug: string, file: string) {
    return imageModules[`../assets/prj-${slug}/${file}`];
  }

  return (
    <>
      <div className={projectStyles.topBanner} style={{ backgroundColor: project.bkgColor }}>
        <img src={project.logo} alt="project-logo" />
      </div>
      {project.slug !== "wash-world" && project.slug !== "daos" ? ( // temporary solution 🥲
        <>
          <UnderConstruction />
        </>
      ) : (
        <>
          <ProjectDetails project={project} />
          <ProjectBody project={project} getProjectImageSrc={getProjectImageSrc} />
          <ContactBanner />
        </>
      )}
    </>
  );
}
