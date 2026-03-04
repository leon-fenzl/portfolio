import React from "react";
import Back from "../Components/BackTop";
import GridItem from "../Components/GridItem";
import sculpt1 from "../Images/leon-fenzl-daily-sculpt.jpg"
import sculpt2 from "../Images/leon-fenzl-esboco-elfa.jpg"
import sculpt3 from "../Images/leon-fenzl-esboco-elfa-2.jpg"
import sculpt4 from "../Images/leon-fenzl-female-base.jpg"
import sculpt5 from "../Images/leon-fenzl-male-base.jpg"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Training from "./SculpStudies";
function Works() {
  return (
  <>
  <section className="section-flex" id="works">
    <div className="side"/>
    <div className="works-container">
      <div className="buffer"/>
      <div className="projects-grid-flex">
        <GridItem bgImg={sculpt1} itemName="Sculpture Studies" targetPage="sculpstudies"/>
        <GridItem bgImg={sculpt2} itemName="Pixel Art Studies" targetPage="pixelart"/>
        <GridItem bgImg={sculpt3} itemName="Game Scenes" targetPage="gamescene"/>
        <GridItem bgImg={sculpt4} itemName="Sketches" targetPage="sketches"/>
        <GridItem bgImg={sculpt5} itemName="Animations" targetPage="animations"/>
      </div>
    </div>
    <div className="side"/>
  </section>
  </>
  );
}

export default Works;