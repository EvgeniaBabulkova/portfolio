import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import NotFountPage from "./NotFoundPage";
import projectStyles from "../styles/projects/projectDetails.module.css";
import ContactBanner from "../components/ContactBanner";
import ProjectDetails from "../components/projects/ProjectDetails";

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFountPage />;
  }

  return (
    <>
      <div className={projectStyles.topBanner} style={{ backgroundColor: project.bkgColor }}>
        <img src={project.logo} alt="project-logo" />
      </div>

      <ProjectDetails project={project} />

      <p>From here i'll add the specific prj details components...</p>

      <ContactBanner />
    </>
  );
}
