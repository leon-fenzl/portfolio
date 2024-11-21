import React from "react";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";
import portrait from "../images/cpt.png"
export default function About(){
  return(
  <>
  <div className="about" id="about">
    <div className="about-info">
      <h1>León Fenzl - Game Developer</h1>
      <h2>
        {`I'm a generalist 3D modeler and gameplay programmer.
        I offer a wide range of services, from modeling, riging 
        and animation up to development in C#, Blueprint & GDScript.`}
      </h2>
    </div>
    <img src={portrait} id="portrait"/>
  </div>
  </>
  );
};