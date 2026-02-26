import React from "react";
import { Link } from "react-router-dom"; 
function Navbar() {
  return (
  <nav className="navbar">
    
    <div id="side1"/>
    
    <div id="nav-content">
      <div className="logo">
        <h1 className="logo-pc"><a href="/" >León Fenzl</a></h1>
        <h1 className="logo-mob"><a href="/" >León</a></h1>
        <h1 className="logo-mob"><a href="/" >Fenzl</a></h1>
      </div>
      
      <a href="#about" className="nav-link">
        <h2 className="nav-link">About</h2>
      </a>
      <a href="#about" className="nav-link">
        <h2 className="nav-link">About</h2>
      </a>

    </div>
    
    <div id="side2"/>

  </nav>
  );
}

export default Navbar;