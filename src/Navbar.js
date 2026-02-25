import React from "react";
import { Link } from "react-router-dom"; 
function Navbar() {
  return (
  <div className="navbar">
    <div className="buffer"/>
     <h1 href="#home" className="logo bg-blue">
      <a>León Fenzl</a>
    </h1>
    <a href="#home" className="nav-link">
      <h3>Home</h3>
    </a>
    <a href="#about" className="nav-link">
      <h3>About</h3>
    </a>
  </div>
  );
}

export default Navbar;