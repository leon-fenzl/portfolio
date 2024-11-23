import React from "react";
import portrait from "../images/cpt.png"
import "../styles/footer.css"
export default function Footer({className,id}){
  return(
    <footer className={className} id={id}>
      <div className="side1"/>
      <div className="content">
        <h1 className="footer-text text-lime">
          {`leon.gameworks@gmail.com`}
        </h1>
        <br/>
        <p className="footer-text text-lime">
          {`ALL CONTENT BELONGS TO LEÓN FENZL, `} 
          <br/> 
          {`UNLESS STATED OTHERWISE.`}
        </p>
      </div>
      <div className="side2"/>
    </footer>
  );
};