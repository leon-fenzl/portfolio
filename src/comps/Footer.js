import React from "react";
import portrait from "../images/cpt.png"
import "../styles/footer.css"
export default function Footer({className,id}){
  return(
    <footer className={className}>
      <div className="side1"/>
      <div className="content">
        <p className="footer-text">
          {`leon.gameworks@gmail.com`}
        </p>
        <br/>
        <p className="footer-text">
          {`ALL CONTENT BELONGS TO LEÓN FENZL, UNLESS STATED OTHERWISE`}
        </p>
      </div>
      <div className="side2"/>
    </footer>
  );
};