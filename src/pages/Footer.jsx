import React, { useContext, useState } from "react";
import "./footer.css";
import { Navigate } from "react-router-dom";
import Modal from "./Modal";

function Footer(props) {

  const [openModal,setOpenModal] = useState(false)
  return (
    <div>
    {openModal && <Modal closeModal={setOpenModal} />}
      <div className="footer">
        <button
          className="footer-button"
          disabled={props.headerlen === 0}
          onClick={()=>{setOpenModal(true)}}
          id="openModalBtn"
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default Footer;
