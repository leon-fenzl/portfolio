import React from "react";
import { useState } from "react";
import CompMenu from "./pages/CompMenu";
import CompMobileMenu from "./pages/CompMobileMenu";
import CompWorks from "./pages/CompWorks";
import "./styles/main.css"
import "./styles/app.css"
import "./styles/imgsadress.css"
import "./styles/colors.css"
import portr from "./images/cpt.png"
import menu1 from "./images/MenuOpen.png"
import menu2 from "./images/MenuClose.png"
export default function App(){
  const [showMenu,setShowMenu] = useState(false);
  let mobileMenu 
  if (showMenu){
    mobileMenu = 
    <div className="mHolder bg-bege">
      <button className="mClose" onClick={()=> setShowMenu(!showMenu)}>
        <img src={menu2}/>
      </button>
      <div className="actual-Menu">
        <a href="#about" className="mLink links purple">About</a>
        <a href="#2dart" className="mLink links purple">2D</a>
        <a href="#3dart" className="mLink links purple">3D</a>
      </div>
    </div>
  }
  return(
    <>
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
          <div className="hello-text">
            <p>
              {`Hi! I am a Generalist Game & Software Developer.`}
              <br/>
              {` I offer a wide varietty of services in different areas such as:`}
            </p>
            <h1 className="areas-text">
              {`UNITY`}
            </h1>
          </div>
          <img id="portr" src={portr}/>
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
    </>
  );
};
/*
        <>
      <div className="page bg-lines">
        <div className="empty1"></div>
          <div className="center">
            <CompMenu/>
            <CompMobileMenu/>
            <div className="content">
              <div className="intro">
                <p className="text-about">
                  {`I'm a generalist 3D modeler and gameplay programmer.`}
                  <br/>
                  {`I offer a wide range of services, from modeling, riging 
                  and animation up to development in Unity, Unreal & Godot.`}
                </p>
              </div>
              <section>
                <h1 className="section-title">3D Models</h1>
                <CompWorks/>
              </section>
              <section>
                <h1 className="section-title">Games</h1>
              </section>
              <footer>
                <h2>All works </h2><h1> © </h1><h2> León Fenzl unless otherwise stated.</h2>
              </footer>
            </div>
          </div>
        <div className="empty2"></div>
      </div>
    </>
*/