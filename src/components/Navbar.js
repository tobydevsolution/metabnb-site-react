import React, { useState } from "react";
import "../App.css";
import Modal from "./Modal";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <header>
      <div className="brand">
        <img src="images/meta-logo.svg" className="meta-logo" alt="meta-logo" />
      </div>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/Places">Place to stay</a>
        <a href="/NFTs">NFTs</a>
        <a href="/#">Community</a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <div className="menu-btn">
        {/* <button
          id="connect_btn"
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Connect Wallet
        </button> */}

        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
          id="connect_btn"
        >
          Connect Wallet
        </button>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </header>
  );
}
export default Navbar;
