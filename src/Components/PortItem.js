import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import Modal from "./Modal";
function PortItem({bgImg,itemName,targetPage}) {
  /*
  const [openModal,setOpenModal] = useState(false);
  onClick={()=>{setOpenModal(true);}}
  {openModal && <Modal closeModal={setOpenModal}/>}
  */
  return (
  <a className="item-grid" href={"/"+targetPage}
    style={{
    backgroundImage:`url(${bgImg})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundAttachment: "local"  }}>
    <div className="item-overlay" >
      <h2 className="item-name">{itemName}</h2>
    </div>
  </a>
  );
}
export default PortItem;