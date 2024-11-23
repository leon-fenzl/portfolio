import React from "react";
import "../styles/footer.css"
export default function Footer({className,id}){
  return(
    <footer className={className} id={id}>
      <div className="side1"/>
      <div className="content">
        <h1 className="footer-text">
          {`All content here presented`}
          <br/>
          {`belongs to León Fenzl,`}
          <br/>
          {`unless otherwise stated.`}
        </h1>
      </div>
      <div className="side2"/>
    </footer>
  );
};