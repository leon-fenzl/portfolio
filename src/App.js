import React from "react";
import { useState } from "react";
import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import Footer from "./comps/Footer"
import "./styles/main.css"
import "./styles/app.css"
import "./styles/imgsadress.css"
import "./styles/colors.css"
import portr from "./images/cpt.png"
import Works from "./comps/Works";
export default function App(){
  return(
    <>
    <Navbar className={"flex-grid bg-yellow"} id={"navbar"}/>
    <Hero className={"flex-grid hero text-yellow"}/>
    <Works className={"flex-grid works bg-yellow"}/>
    <Footer className={"flex-grid bg-bege"}/>
    </>
  );
};
/*
<nav className="bg-bege">
  <a href="#" className="links title purple">León Fenzl</a>
  <a href="#about" className="pcLink links purple">About</a>
  <a href="#2dart" className="pcLink links purple">2D</a>
  <a href="#3dart" className="pcLink links purple">3D</a>
  <button className="mLink links" onClick={()=> setShowMenu(!showMenu)}><img src={menu1}/></button>
  {mobileMenu}
</nav>
<body>
  <section className="yellow" id="hero">
    <div id="side1"/>
    <div id="center">
      <div className="hello-text">
        <p>
          {`Hi! I am a Generalist Game & Software Developer.`}
          <br/>
          {` I offer a wide varietty of services in different areas such as:`}
        </p>
        <h1 className="areas-text">{`UNITY`}</h1>
      </div>
      <img id="portr" src={portr}/>
    </div>
    <div id="side2"/>
  </section>
  <section className="bg-orange" id="about">
    <h1 className="secName">About</h1>
  </section>
  <section className="" id="2dart">
    <h1 className="secName">2D Arts</h1>
  </section>
  <section className="bg-orange" id="3dart">
    <h1 className="secName">3D Arts</h1>
  </section>
</body>
<footer className="bg-bege">
  <p className="footer-text">
    {`leon.gameworks@gmail.com`}
  </p>
  <br/>
  <p className="footer-text">
    {`ALL CONTENT BELONGS TO LEÓN FENZL, UNLESS STATED OTHERWISE`}
  </p>
</footer>
*/