import React from "react";
import Back from "../Components/BackTop";
import PortItem from "../Components/PortItem";
import img1 from "../Images/leon-blaze-fenzl-male-base-hex.jpg"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Training from "./Training";
function Works() {
  return (
  <>
  <section className="section-flex" id="works">
    <div className="side"/>
    <div className="works-container">
      <div className="buffer"/>
      <div className="projects-grid-flex">
        <PortItem bgImg={img1} itemName="HELLO" targetPage="training"/>
        <PortItem bgImg={img1} itemName="HELLO" targetPage="training"/>
        <PortItem bgImg={img1} itemName="HELLO" targetPage="training"/>
        <PortItem bgImg={img1} itemName="HELLO" targetPage="training"/>
        <PortItem bgImg={img1} itemName="HELLO" targetPage="training"/>
      </div>
    </div>
    <div className="side"/>
  </section>
  </>
  );
}

export default Works;