import { Link } from "react-router-dom";

type ProjectCardProps = {
  logo: string;
  bkgColor: string;
  slug: string;
};

export default function ProjectCard({ logo, bkgColor, slug }: ProjectCardProps) {
  return (
    <Link to={`/projects/${slug}`}>
      <li className="flex justify-center w-80 h-110 rounded-(--border-radius)" style={{ backgroundColor: bkgColor }}>
        <img src={logo} alt="project-logo" width={200} height={200} />
      </li>
    </Link>
  );
}
