import React from "react";
import ModalCard from "./ModalCard";

function ModalScreen(props) {

  function modalIconReplayBtnHandeler(){
      return props.btnClicked("Replay");
  }

  function modalIconNextBtnHandeler(){
      return props.btnClicked("Next");
  }

  return (
    <div>
      <div className="d-flex justify-content-center position-absolute top-50 start-50 translate-middle modal-screen" />
      <ModalCard>
        <div className="modal-message">
          <h3>{props.message.title}</h3>
          <p className= "mt-4">{props.message.message}</p>
        </div>
        <div className="m-3 modal-button">

{
  (props.message.message === "WRONG") ? 


          <button className="btn rePlay-btn" onClick= {modalIconReplayBtnHandeler}>
            <i className="bi bi-arrow-clockwise"></i>
          </button>
          :
          <button className="btn next-btn" onClick= {modalIconNextBtnHandeler}>
            <i className="bi bi-play-circle-fill"></i>
          </button>

        }
        </div>
      </ModalCard>
    </div>
  );
}

export default ModalScreen;
