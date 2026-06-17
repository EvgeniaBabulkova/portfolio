import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/evbubble-logo-filled.svg";
import navStyles from "../../styles/nav.module.css";
import { resumeLink } from "../../data/site";
import { useEffect, useState } from "react";
import IconButton from "../UI/IconButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // temporary for nav scroll

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navContent}>
        <Link
          to="/"
          className={navStyles.logoLink}
          onClick={() => {
            setIsMenuOpen(false);
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          {<img src={Logo} alt="Logo-evbubble" />}
        </Link>

        <div className={`${navStyles.rightNav} ${isMenuOpen ? navStyles.rightNavOpen : ""}`}>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <NavLink to="/about">About</NavLink>
          {/* temporary for nav scroll: */}
          <NavLink
            to="/projects"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }), 80);
              } else {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 80);
              } else {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </NavLink>
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
      </div>
    </nav>
  );
}

// desktop → rightNav visible
// mobile closed → rightNav hidden
// mobile open → rightNav - fullscreen overlay
