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
            <p href="#" className="footer-para">
              Sound <span>DZing</span>
            </p>
            <div className="footer-socialmedia">
              <img src={facebook} />
              <img src={twitter} />
              <img src={instagram} />
            </div>
          </div>
          <div className="footer-details footer-contant">
            <p>Quick Links</p>
            <p>Blog</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer-details footer-contant">
            <p>Contact Us</p>
            <p>contact@email.com</p>
            <p>+9800527110</p>
          </div>
        </div>
        <p className="developed-by">
          This website is designed by <span>Shuvankar Bhowmik</span>{" "}
        </p>
      </div>
    </footer>
  );
}
