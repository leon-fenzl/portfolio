import React from "react";
import { Link } from "react-router-dom"; 
function Navbar() {
  return (
    <nav className="nav">
      <div className='side'/>
      <div className='navbar'>
        <h1 className='logo'>
        <Link to='/' className='logo-pc'><span>LEÓN FENZL</span></Link>
        <Link to='/' className='logo-mob'>
          <span>LEÓN</span>
          <span>FENZL</span>
        </Link>
        </h1>
        <h2 className='nav-options'>
          <Link to='/about'>About</Link>
          <Link to='/works'>Works</Link>
        </h2>
      </div>
      <div className='side'/>
    </nav>
  );
}

export default Navbar;
/*
          <Link to='/contact'>Contact</Link>
*/