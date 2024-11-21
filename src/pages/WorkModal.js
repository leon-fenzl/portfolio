import React from "react";
import "../styles/dialogs.css"
const ModalProps = props => {
  return(
    <div className="modalProps">
      <img src={props.src}/>
      <h2>{props.h2}</h2>
      <p className="fillText">{props.fillText}</p>
    </div>
  );
};
const WorkModal = ({src,id,p,h2}) => {
  return(
    <div className="dialogContent">
      <ModalProps src={src} h2={h2} fillText={p}/>
    </div>
  );
};

export default WorkModal;