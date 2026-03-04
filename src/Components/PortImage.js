import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom"; 
function PortImage({targetImg,commentary}) {
  return (
  <div className="work-img">
    <img src={targetImg} alt={targetImg}/>
        <div className="comment">{commentary}</div>
  </div>
  );
}
export default PortImage;

/*
  style={{
  backgroundImage:`url(${bgImg})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundAttachment: "local" }}
*/