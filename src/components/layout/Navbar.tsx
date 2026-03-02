import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Homee</Link>
      <div>
        <NavLink to="/about">Aboutt</NavLink>
        <NavLink to="/projects">Projectss</NavLink>
        <NavLink to="/contact">Contactt</NavLink>
      </div>
    </div>
  );
}
