import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import { useState } from "react";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  console.log(setOpenNav);

  function handleNav() {
    setOpenNav(!openNav);
  }
  return (
    <header>
      {/* <img src="/Logo.jfif" alt="Logo"/> */}

      <h1>T Exclusive</h1>
      <nav>
        <div className="icons">
          {!openNav ? (
            <FontAwesomeIcon
              icon={faTimes}
              fontWeight={800}
              fontSize="40px"
              className="times"
              onClick={() => handleNav()}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              fontWeight={800}
              fontSize="40px"
              className="bars"
              onClick={() => handleNav()}
            />
          )}
        </div>
        {!openNav ? (
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
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}

export default NavBar;
