import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/evbubble-logo.svg";
import navStyles from "../../styles/nav.module.css";
import { resumeLink } from "../../data/site";

export default function Navbar() {
  return (
    <nav className={navStyles.nav}>
      <Link to="/">{<img src={Logo} alt="Logo-evbubble" width={65} />}</Link>
      <div className={navStyles.rightNav}>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
