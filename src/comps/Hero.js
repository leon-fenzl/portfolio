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
          {`Hi ! I am a Generalist Developer.`}
        </h1>
        <h1>
          {`I offer a wide range of services`}
        </h1>
        <h1>
          {`in different areas such as:`}
        </h1>
        <h1 className="wrapper">
          <span>WEB</span>
          <span>CONCEPTS</span>
          <span>GAMES</span>
          <span>ANIMATIONS</span>
          <span>3D ART</span>
        </h1>
      </div>
      <img className="portrait" src={portrait}/>
    </div>
    <div className="side2"/>
  </section>
  );
};