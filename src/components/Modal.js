import React from "react";
import "./modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>Connect Wallet</h3>
        </div>
        <hr />
        <div className="body">
          <p>Choose your preferred wallet</p>
          <div className="wallet-pop-up">
            <div className="wallet-box">
              <img src="images/metamask.png" alt="wallet" />
              <span>metamask</span> <i> ▶</i>
            </div>
            <div className="wallet-box">
              <img src="images/wallet-connect.png" alt="wallet" />
              <span>Wallet connect</span> <i>▶</i>
            </div>
          </div>
        </div>
        {/* <div className="footer"> */}
        {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>

          <button>Continue</button> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Modal;
