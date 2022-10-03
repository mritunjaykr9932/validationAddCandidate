import React from "react";
import { useNavigate } from "react-router-dom";
import './modal.css';

function Modal({ closeModal }) {
  const navigate = useNavigate();

  const navigateToCandidate = ()=>{
    navigate('/candidate');
  }
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="modal-title">Are you sure want to continue</div>
        <div className="modal-body">Click  <strong>YES!</strong> to finsh</div>
        <div className="modal-footer">
          <button id="cancelBtn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button onClick={navigateToCandidate}>Yes!</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
