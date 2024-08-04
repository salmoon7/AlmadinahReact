// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            Al Madinah College is dedicated to providing quality education in
            Islamic and Western disciplines, integrating the latest
            technological advancements to prepare students for the future.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Al Madinah College. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
