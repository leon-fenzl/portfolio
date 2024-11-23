import React from "react";
import portrait from "../images/cpt.png"
import "../styles/footer.css"
export default function Footer({className,id}){
  return(
    <footer className={className} id={id}>
      <div className="side1"/>
      <div className="content">
        <h2 className="footer-text">
          {`leon.gameworks@gmail.com`}
        </h2>
        <br/>
        <p className="footer-text">
          {`ALL CONTENT BELONGS TO LEÓN FENZL, `} 
          <br/> 
          {`UNLESS STATED OTHERWISE.`}
        </p>
      </div>
      <div className="side2"/>
    </footer>
  );
};