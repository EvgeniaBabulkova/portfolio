import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import NotFountPage from "./NotFoundPage";
import projectStyles from "../styles/projects/projectDetails.module.css";

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

      <div>
        <h1>{project.title}</h1>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
        <p>From here i'll add the specific prj details components...</p>
      </div>
    </>
  );
}
