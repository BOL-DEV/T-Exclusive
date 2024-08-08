import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <header>
      <h1>T Exclusive</h1>
      <nav>
        <ul>
          <NavLink to="Home" className="link">
            Home
          </NavLink>
          <NavLink to="About" className="link">
            About
          </NavLink>
          <NavLink to="Menu" className="link">
            Menu
          </NavLink>
          <NavLink to="Contact" className="link">
            Contact
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
