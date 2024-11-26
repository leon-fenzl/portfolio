import React, { useEffect, useState } from "react";
import "../styles/imageSlider.css"
import arrow from "../images/arrow.png"
export default function Slider({slides}){
  const[currentIndex,setCurrentIndex] = useState(0);
  return(
  <div className="slider-box">
    <img src={arrow} alt="Previous" id="previous"/>
    <div className="slider bg-purple" style={{backgroundImage:`url(${slides[currentIndex]})`}}>
    </div>
    <img src={arrow} alt="Next" id="next"/>
  </div>
  );
};