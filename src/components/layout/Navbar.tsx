import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Homee</Link>
      <div>
        <NavLink to="/about">Aboutt</NavLink>
        <NavLink to="/projects">Projectss</NavLink>
        <NavLink to="/contact">Contactt</NavLink>
      </div>
    </nav>
  );
}
