import React from "react";
function Modal({targetId,closeModal}) {
  /*    onClick={()=>closeModal(false)}*/
  return (
    <div className="bg-modal">
      <div className="modal-container">
        <h1>MODAL</h1>
      </div>
    </div>
  );
}
export default Modal;