import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <div className="brand">
            <img src="images/meta-white-logo.svg" alt="white-logo" />
          </div>
          <div className="social">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
          <p>© 2022 Metabnb</p>
        </div>
        <div className="col">
          <h3>Community</h3>
          <p>NFTs</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div className="col">
          <h3>Places</h3>
          <p>Castles</p>
          <p>Farm</p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div className="col">
          <h3>About Us</h3>
          <p>Roadmap</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
