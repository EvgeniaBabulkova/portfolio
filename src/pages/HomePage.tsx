import Banner from "../components/Banner";
import Button from "../components/UI/Button";
import LinkIcon from "../assets/icons/arrow_outward.svg";
import Tag from "../components/UI/Tag";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function HomePage() {
  return (
    <>
      <h1>Lala title</h1>

      <ul className="flex gap-(--spacing-lg)">
        {projects.map((project) => {
          return <ProjectCard key={project.slug} bkgColor={project.bkgColor} logo={project.logo} slug={project.slug} />;
        })}
      </ul>

      <h1>Lala title</h1>

      <Banner subtitle="Contact" title="Let's get in touch!">
        <Button trailingIcon={<img src={LinkIcon} />}>Button here</Button>
      </Banner>
      <Tag onSelect={() => {}}>sonnldsvns</Tag>
    </>
  );
}
