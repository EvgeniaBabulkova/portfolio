import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/evbubble-logo.svg";
import navStyles from "../../styles/nav.module.css";
import { resumeLink } from "../../data/site";
import { useEffect, useState } from "react";
import IconButton from "../UI/IconButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={navStyles.nav}>
      <Link
        to="/"
        className={navStyles.logoLink}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        {<img src={Logo} alt="Logo-evbubble" />}
      </Link>

      <div className={`${navStyles.rightNav} ${isMenuOpen ? navStyles.rightNavOpen : ""}`}>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <IconButton
        onClick={() => setIsMenuOpen((currentIsMenuOpen) => !currentIsMenuOpen)}
        classes={`${navStyles.menuButton} ${isMenuOpen ? navStyles.menuButtonOpen : ""}`}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        icon={
          <span className={navStyles.burgerIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        }
      />
    </nav>
  );
}

// desktop → rightNav visible
// mobile closed → rightNav hidden
// mobile open → rightNav - fullscreen overlay
