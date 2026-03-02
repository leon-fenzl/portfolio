import React from "react";
import Back from "../Components/BackTop";
import PortItem from "../Components/PortItem";
import img1 from "../Images/leon-blaze-fenzl-male-base-hex.jpg"
function Works() {
  return (
  <>
  <section className="section-flex" id="works">
    <div className="side"/>
    <div className="works-container">
      <div className="buffer"/>
      <div className="projects-grid-flex">
        <PortItem bgImg={img1} itemName="HELLO"/>
        <PortItem bgImg={img1} itemName="HELLO"/>
        <PortItem bgImg={img1} itemName="HELLO"/>
        <PortItem bgImg={img1} itemName="HELLO"/>
        <PortItem bgImg={img1} itemName="HELLO"/>
        <PortItem bgImg={img1} itemName="HELLO"/>
        <PortItem bgImg={img1} itemName="HELLO"/>
        <PortItem bgImg={img1} itemName="HELLO"/>
        <PortItem bgImg={img1} itemName="HELLO"/>
        <PortItem bgImg={img1} itemName="HELLO"/>
      </div>
    </div>
    <div className="side"/>
  </section>
  </>
  );
}

export default Works;