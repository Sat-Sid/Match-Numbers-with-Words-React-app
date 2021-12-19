import React from "react";


function ModalCard(props) {
 
  return (
    <div className="d-flex flex-column justify-content-center position-absolute top-50 start-50 translate-middle bg-dark text-center p-2 modal-card">
    {props.children}</div>
  );
}

export default ModalCard;
