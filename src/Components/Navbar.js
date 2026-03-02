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
        <h3 className='nav-options'>
          <Link to='/about'>About</Link>
          <Link to='/works'>Works</Link>
          <Link to='/contact'>Contact</Link>
        </h3>
      </div>
      <div className='side'/>
    </nav>
  );
}

export default Navbar;