import React from "react";
import { useState } from "react";
import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import Sections from "./comps/Sections";
import Footer from "./comps/Footer"
import "./styles/main.css"
import "./styles/app.css"
import "./styles/imgsadress.css"
import "./styles/colors.css"
export default function App(){
  return(
    <>
      <Navbar className={"flex-grid bg-dark-purple"} id={"navbar"}/>
      <Hero className={"flex-grid text-lime"} id={"hero"}/>
      <Sections className={"flex-grid bg-dark-purple text-lime"} id={"about"}>
        <h1 className="secName">About</h1>
      </Sections>
      <Sections className={"flex-grid text-lime"} id={"works"}>
        <h1 className="secName">Works</h1>
      </Sections>
      <Sections className={"flex-grid bg-dark-purple contact text-lime"} id={"contact"}>
        <h1 className="secName">Contact:</h1>
        <div className="contact-box">
          <h1 className="contact-text">
            <p>{`Thanks for dropping by !`}</p>
          </h1>
          <h1 className="contact-text">
            <p>{`You can reach me at`}</p>
            <p>{`leon.gameworks@gmail.com`}</p>
          </h1>
        </div>
      </Sections>
      <Footer className={"flex-grid text-lime"}/>
    </>
  );
};
/*
*/