import React from "react";
import "../styles/hero.css"
import portrait from "../images/cpt.png"
export default function Works({className,id}){
  return(
  <section className={className} id={id}>
    <div className="side1"/>
    <div className="content">
      <h1 className="secName">Works</h1>
    </div>
    <div className="side2"/>
  </section>
  );
};