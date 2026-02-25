import React from "react";
import { Link } from "react-router-dom"; 
function Navbar() {
  return (
  <div className="navbar">
    <div className="buffer"/>
    <a href="/" className="logo">
      <h1 className="logo-pc bg-blue text-wheat">León Fenzl</h1>
      <h1 className="logo-mob bg-blue text-wheat">León</h1>
      <h1 className="logo-mob bg-blue text-wheat">Fenzl</h1>
    </a>
    <a href="#about" className="nav-link bg-blue text-wheat">
      <h2>About</h2>
    </a>
    <h2 className="nav-link bg-blue text-wheat">Concepts</h2>
    <a href="#concepts" className="nav-link">
      <h2>Work 1</h2>
    </a>
    <a href="#concepts" className="nav-link">
      <h2>Work 2</h2>
    </a>
    <a href="#concepts" className="nav-link">
      <h2>Work 3</h2>
    </a>
    
    <h2 className="nav-link bg-blue text-wheat">Models</h2>
        <a href="#models" className="nav-link">
      <h2>Work 1</h2>
    </a>
    <a href="#models" className="nav-link">
      <h2>Work 2</h2>
    </a>
    <a href="#models" className="nav-link">
      <h2>Work 3</h2>
    </a>

    <h2 className="nav-link bg-blue text-wheat">Games</h2>
    <a href="#games" className="nav-link">
      <h2>Work 1</h2>
    </a>
    <a href="#games" className="nav-link">
      <h2>Work 2</h2>
    </a>
    <a href="#games" className="nav-link">
      <h2>Work 3</h2>
    </a>

    <a href="#contact" className="nav-link bg-blue text-wheat">
      <h2>Contact</h2>
    </a>
  </div>
  );
}

export default Navbar;