import React from "react";
import portrait from "../Images/Portrait.jpg"
function About() {
  return (
    <section className="section-flex" id="about">
      <div className="side"/>
      <div className="container">
        <div className="buffer"/>
        <div className="flex-container ">
          <img src={portrait} className="portrait"/>
          <h1 className="about-center show-on-pc">
            Hi there!<br/>
            My name is León Fenzl,
            Game Artist & Programmer.<br/>
            I have over 5 years of experience in digital game development, 
            working as a consultant and game designer, as well as a 3D modeler 
            and programmer. 
            My mission is to create engaging digital experiences that combine 
            aesthetics and functionality, without forgetting that fun is the main
            focus of the gaming experience!
          </h1>
          <h3 className="about-center show-on-mob">
            Hi there!<br/>
            My name is León Fenzl,
            Game Artist & Programmer.<br/>
            I have over 5 years of experience in digital game development, 
            working as a consultant and game designer, as well as a 3D modeler 
            and programmer. 
            My mission is to create engaging digital experiences that combine 
            aesthetics and functionality, without forgetting that fun is the main
            focus of the gaming experience!
          </h3>
        </div>
      </div>
      <div className="side"/>
    </section>
  );
}
export default About;
/*

      <div className="buffer"/>
      <h1>About</h1>


*/