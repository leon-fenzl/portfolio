import React from "react";
import { Link } from "react-router-dom"; 
function Navbar() {
  return (
    <nav className="nav">
      <div className='side'/>
      <div className='navbar'>
        <h1 className='logo'>
        <a href='/' className='logo-pc'><span>LEÓN FENZL</span></a>
        <a href='/' className='logo-mob'>
          <span>LEÓN</span>
          <span>FENZL</span>
        </a>
        </h1>
        <h3 className='nav-options'>
          <a href='#about'>About</a>
          <a href='#works'>Works</a>
          <a href='#contact'>Contact</a>
        </h3>
      </div>
      <div className='side'/>
    </nav>
  );
}

export default Navbar;