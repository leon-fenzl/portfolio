import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom"; 
function GridItem({bgImg,itemName,targetPage}) {
  return (
  <Link className="item-grid" to={"/"+targetPage}
    style={{backgroundImage:`url(${bgImg})`,
    backgroundRepeat:"no-repeat",backgroundSize:"cover",
    backgroundPosition:"center",backgroundAttachment: "local"}}>
    <div className="item-overlay" >
      <h2 className="item-name">{itemName}</h2>
    </div>
  </Link>
  );
}
export default GridItem;