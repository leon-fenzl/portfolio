import React from "react";
import { Link } from "react-router-dom"; 
function Navbar() {
  return (
  <nav className="nav-grid bg-bisque text-coral">
    <div id="side1"/>
    <div className="navbar">
      <span className="logo-box margin-left-0">
        <Link to="/" className="nav_link text-coral">
        <h1>LEÓN FENZL</h1>
        </Link>
        <h3 className="margin-left-1 text-coral">Game Developer</h3>
      </span>
      <div className="nav_links">
        <Link to="/about"className="nav_link margin-left-3 text-coral">
          <h4>About</h4>
        </Link>
        <Link to="/ilust"className="nav_link margin-left-3 text-coral">
          <h4>Ilustrations</h4>
        </Link>
        <Link to="/models"className="nav_link margin-left-3 text-coral">
          <h4>Models</h4>
        </Link>
        <Link to="/contact"className="nav_link margin-left-3 text-coral">
          <h4>Contact</h4>
        </Link>
      </div>
    </div>
    <div id="side2"/>
  </nav>
  );
}

export default Navbar;