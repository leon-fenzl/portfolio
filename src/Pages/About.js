import React from "react";
import '../style.css';
function About() {
  return (
    <section className="home" id="about">
      <div className="buffer"/>
      <div className="section-content home-content">
        <image className="dummy"/>
        <h2 className="text-about">
          Hi there!
          My name is León Fenzl,<br/>
          Game Artist & Programmer.<br/>
          I have over 5 years of experience in digital game development, <br/>
          working as a consultant and game designer, as well as a 3D modeler <br/>
          and programmer. <br/>
          My mission is to create engaging digital experiences that combine <br/>
          aesthetics and functionality, without forgetting that fun is the main focus of the gaming experience!
        </h2>
      </div>
    </section>
  );
}

export default About;