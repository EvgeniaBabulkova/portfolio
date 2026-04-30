import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/evbubble-logo.svg";
import navStyles from "../../styles/nav.module.css";

export default function Navbar() {
  return (
    <nav className={navStyles.nav}>
      <Link to="/">{<img src={Logo} alt="Logo-evbubble" width={65} />}</Link>
      <div className={navStyles.rightNav}>
        <a href="/Resume-Evgenia-Babulkova-Jan-2026.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
