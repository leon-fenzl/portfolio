import React from "react";
import { useState } from "react";
import portrait from "../images/cpt.png"
import "../styles/navbar.css"
import menu1 from "../images/MenuOpen.png"
import menu2 from "../images/MenuClose.png"
export default function Navbar({className,id}){
  const [showMenu,setShowMenu] = useState(false);
  let mobileMenu 
  if (showMenu){
    mobileMenu = 
    <div className="mHolder bg-lime">
      <img className="btt-menu" onClick={()=> setShowMenu(!showMenu)} src={menu2}/>
      <div className="actual-Menu">
        <a href="#works" className="mLink links text-dark">Works</a>
        <a href="#contact" className="mLink links text-dark">Contact</a>
      </div>
    </div>
  }
  return(
  <>
  <nav className={className} id={id}>
    <div className="side1"/>
    <div className="content">
      <a href="#" className="links title text-dark">León Fenzl</a>
      <a href="#works" className="pcLink links text-dark">Works</a>
      <a href="#contact" className="pcLink links text-dark">Contact</a>
      <img className="mLink links btt-menu show" onClick={()=> setShowMenu(!showMenu)} src={menu1}/>
      {mobileMenu}
    </div>
    <div className="side2"/>
  </nav>
  </>
  );
};