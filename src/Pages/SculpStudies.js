import React from "react";
import { Link } from "react-router-dom";
import sculpt1 from "../Images/leon-fenzl-daily-sculpt.jpg"
import sculpt2 from "../Images/leon-fenzl-esboco-elfa.jpg"
import sculpt3 from "../Images/leon-fenzl-esboco-elfa-2.jpg"
import sculpt4 from "../Images/leon-fenzl-female-base.jpg"
import sculpt5 from "../Images/leon-fenzl-male-base.jpg"
import PortImage from "../Components/PortImage";
function SculpStudies() {
  return (
    <div className="port-page" id="sculpstudies">
      <div className="side"/>
      <div className="work-content">
        <div className="buffer"/>
        <h1>Content</h1>
        <div className="actual-content">
          <PortImage targetImg={sculpt1} commentary="hello"/>
          <PortImage targetImg={sculpt2}/>
          <PortImage targetImg={sculpt3}/>
          <PortImage targetImg={sculpt4}/>
          <PortImage targetImg={sculpt5}/>
        </div>
      </div>
      <div className="side"/>
    </div>
  );
}

export default SculpStudies;