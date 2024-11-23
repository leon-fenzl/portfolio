import React from "react";
import { useState } from "react";
import portrait from "../images/cpt.png"
import "../styles/navbar.css"
import menu1 from "../images/open.png"
import menu2 from "../images/close.png"
export default function Navbar({className,textClass,id}){
  const [showMenu,setShowMenu] = useState(false);
  let mobileMenu 
  if (showMenu){
    mobileMenu = 
    <div className="actual-mobile-menu bg-dark-purple">
      <div className="btt-section">
        <img className="btt-menu" onClick={()=> setShowMenu(!showMenu)} src={menu2} id="close"/>
      </div>
      <div className="mobile-links">
        <a href="#about" className="mLink links text-lime">About</a>
        <a href="#works" className="mLink links text-lime">Works</a>
        <a href="#contact" className="mLink links text-lime">Contact</a>
      </div>
    </div>
  }
  return(
  <>
    <nav className={className} id={id}>
      <div className="side1"/>
      <div className="content">
        <a href="#" className="links title text-lime"><h1>León Fenzl</h1></a>
        <a href="#about" className="pc-links links text-lime">About</a>
        <a href="#works" className="pc-links links text-lime">Works</a>
        <a href="#contact" className="pc-links links text-lime">Contact</a>
        <img className="btt-menu" onClick={()=> setShowMenu(!showMenu)} src={menu1} id="open"/>
      </div>
      <div className="side2"/>
      {mobileMenu}
    </nav>
  </>
  );
};
/*
      <a href="#works" className="mLink links text-lime">Works</a>
      <a href="#contact" className="mLink links text-lime">Contact</a>
*/