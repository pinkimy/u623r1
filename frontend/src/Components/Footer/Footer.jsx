import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/footer-logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Content</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-social-icons-container">
          <img src={instagram_icon} alt="" width={30} height={30} />
        </div>
        <div className="footer-social-icons-container">
          <img src={whatsapp_icon} alt="" width={30} height={30} />
        </div>
        <div className="footer-social-icons-container">
          <img src={pinterest_icon} alt="" width={30} height={30} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved</p>
      </div>
    </div>
  );
};
