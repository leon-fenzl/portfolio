import React from "react";
function Modal({targetId,closeModal}) {
  return (
    <div className="bg-modal" 
    onClick={()=>closeModal(false)}>
      <div className="modal-container">
        <h1>MODAL</h1>
      </div>
    </div>
  );
}
export default Modal;