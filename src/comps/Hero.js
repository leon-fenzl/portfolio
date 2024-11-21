import React from "react";
import "../styles/hero.css"
import portrait from "../images/cpt.png"
export default function Hero({className,id}){
  return(
  <section className={className} id={id}>
    <div className="side1"/>
    <div className="content">
      <div className="hello-text-box">
        <h1>
          {`Hi! I am a Generalist Game & Software Developer.`} 
          <br/>
          {`I offer a wide varietty of services in different areas such as:`}
        </h1>
        <h1 className="wrapper">
          <span>UNREAL</span>
          <span>GODOT</span>
          <span>UNITY</span>
          <span>CONCEPTS</span>
          <span>3D ART</span>
        </h1>
      </div>
      <img className="portrait" src={portrait}/>
    </div>
    <div className="side2"/>
  </section>
  );
};