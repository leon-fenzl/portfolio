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
    <div className="mHolder bg-yellow">
      <img className="btt-menu" onClick={()=> setShowMenu(!showMenu)} src={menu2}/>
      <div className="actual-Menu">
        <a href="#about" className="mLink links text-dark">About</a>
        <a href="#2dart" className="mLink links text-dark">2D</a>
        <a href="#3dart" className="mLink links text-dark">3D</a>
      </div>
    </div>
  }
  return(
  <>
  <nav className={className} id={id}>
    <div className="side1"/>
    <div className="content">
      <a href="#" className="links title text-dark">León Fenzl</a>
      <a href="#about" className="pcLink links text-dark">About</a>
      <a href="#2dart" className="pcLink links text-dark">2D</a>
      <a href="#3dart" className="pcLink links text-dark">3D</a>
      <img className="mLink links btt-menu show" onClick={()=> setShowMenu(!showMenu)} src={menu1}/>
      {mobileMenu}
    </div>
    <div className="side2"/>
  </nav>
  </>
  );
};