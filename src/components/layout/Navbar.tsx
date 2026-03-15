import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/evbubble-logo.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-20 py-7">
      <Link to="/">{<img src={Logo} alt="Logo-evbubble" width={65} />}</Link>
      <div className="flex items-center gap-(--spacing-lg) px-(--spacing-xl) py-(--spacing-md) bg-(--col-surface-primary) rounded-(--border-radius-full) [font:var(--font-body-1)]">
        <p>Resume-todo</p>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
