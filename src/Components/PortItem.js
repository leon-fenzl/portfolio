import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
function PortItem({bgImg,itemName}) {
  return (
  <section className="item-grid" 
    style={{
    backgroundImage:`url(${bgImg})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundAttachment: "local"  }}>
    <div className="item-overlay">
      <h2 className="item-name">{itemName}</h2>
    </div>
  </section>
  );
}
export default PortItem;