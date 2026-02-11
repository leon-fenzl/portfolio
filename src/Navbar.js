import React from "react";
import { Link } from "react-router-dom"; 
function Navbar() {
  return (
  <nav className="nav-grid bg-blue">
    <div id="side1"></div>
    <div className="navbar">
      <span className="logo-box margin-left-0">
        <Link to="/" className="nav_link text-yellow">
          <h1>LEÓN FENZL</h1>
        </Link>
        <h3 className="text-yellow margin-left-1">Game Developer</h3>
      </span>
      <div className="nav_links">
        <Link to="/about"className="nav_link text-yellow margin-left-3">
          <h4>About</h4>
        </Link>
        <Link to="/ilust"className="nav_link text-yellow margin-left-3">
          <h4>Ilustrations</h4>
        </Link>
        <Link to="/models"className="nav_link text-yellow margin-left-3">
          <h4>Models</h4>
        </Link>
        <Link to="/contact"className="nav_link text-yellow margin-left-3">
          <h4>Contact</h4>
        </Link>
      </div>
    </div>
    <div id="side2"></div>
  </nav>
  );
}

export default Navbar;