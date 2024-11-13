import React from "react";
import "./Footer.css";
import facebook from "../../assets/Facebook Logo.svg";
import instagram from "../../assets/Instagram Logo.svg";
import twitter from "../../assets/Twitter Logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="wrapper-footer">
          <div className="footer-details">
            <p  className="footer-para">
              Sound <span>DZing</span>
            </p>
            <div className="footer-socialmedia">
              <img src={facebook} />
              <img src={twitter} />
              <img src={instagram} />
            </div>
          </div>
          <div className="footer-details footer-contant">
            <p className="links">Quick Links</p>
            <p className="links-details">Blog</p>
            <p className="links-details">Privacy Policy</p>
          </div>
          <div className="footer-details footer-contant">
            <p className="links">Contact Us</p>
            <p className="links-details">contact@email.com</p>
            <p className="links-details">+9800527110</p>
          </div>
        </div>
        <p className="developed-by">
          This website is designed by <span>Shuvankar Bhowmik</span>{" "}
        </p>
      </div>
    </footer>
  );
}
