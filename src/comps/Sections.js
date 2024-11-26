import React from "react";

import portrait from "../images/cpt.png"
export default function Sections({className,id,children}){
  return(
  <section className={className} id={id}>
    <div className="side1"/>
    <div className="content">
      {children}
    </div>
    <div className="side2"/>
  </section>
  );
};