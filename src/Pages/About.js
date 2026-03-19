import React from "react";
import portrait from "../Images/Portrait.jpg";
function About() {
  return (
    <section className="section-flex" id="about">
      <div className="side"/>
      <div className="container about-container ">
        <div className="portrait"/>
        <div className="about-textBox about-contact">
          <h1 className="show-on-pc">
            Hi there!<br/>
            My name is León Fenzl,
            Game Artist & Programmer.<br/>
            I have over 5 years of experience in digital game development, 
            working as a consultant and game designer, as well as a 3D modeler 
            and programmer.
            <br/>
            <br/>
            One of my passions is to create engaging digital games that combine 
            aesthetics and functionality, without forgetting that entertainment is and
            should be the main focus in any interactive experience!
          </h1>
          <h3 className="show-on-mob">
            Hi there!<br/>
            My name is León Fenzl,
            Game Artist & Programmer.<br/>
            I have over 5 years of experience in digital game development, 
            working as a consultant and game designer, as well as a 3D modeler 
            and programmer.
            <br/>
            <br/>
            One of my passions is to create engaging digital games that combine 
            aesthetics and functionality, without forgetting that entertainment is and
            should be the main focus in any interactive experience!
          </h3>
          <br/>
          <h3>
            Wanna say hello or discuss some future project?<br/>
            Hit me up at:<br/>
            leon.gameworks@gmail.com
          </h3>
          <br/>
        </div>
      </div>
      <div className="side"/>
    </section>
  );
}
export default About;
/*
v
          <div className="about-textBox about-contact">
            <h1 className="show-on-pc">
              Hi there!<br/>
              My name is León Fenzl,
              Game Artist & Programmer.<br/>
              I have over 5 years of experience in digital game development, 
              working as a consultant and game designer, as well as a 3D modeler 
              and programmer.<br/> 
              One of my passions is to create engaging digital experiences that combine 
              aesthetics and functionality, without forgetting that entertainment is and
              should be the main focus of any !
            </h1>
            <h3 className="show-on-mob">
              Hi there!<br/>
              My name is <span>León Fenzl </span>,
              <span>Game Artist & Programmer.</span><br/>
              I have over 5 years of experience in digital game development, 
              working as a consultant and game designer, as well as a 3D modeler 
              and programmer. 
              My mission is to create engaging digital experiences that combine 
              aesthetics and functionality, without forgetting that fun is the main
              focus of the gaming experience!
            </h3>
            <br/>
            <br/>
            <h2>
              Wanna say hello or discuss some future project?<br/>
              Hit me up at:<br/>
              leon.gameworks@gmail.com
            </h2>
            <br/>
            <br/>
            </div>
*/