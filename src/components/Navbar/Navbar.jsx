import React, { useState } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/Menu Icon.svg";
import crossIcon from "../../assets/Frame 4.svg";

export default function Navbar() {
  const [active, setActive] = useState(false);

  function changeHandler() {
    if (active == false) {
      setActive(true);
      
    }
    else{
      setActive(false);
    }
   
  }
  return (
    <>
      {!active ? (
        <nav>
          <a href="#" className="home">
            Soun<span>DZing</span>
          </a>
          <div className="details-section">
            <a href="#about">About</a>
            <a href="#about">CourseDetails</a>
            <a href="#about">Blog</a>
            <a href="#about">Testimonial</a>
          </div>
          <div className="menu-bar" onClick={changeHandler}>
            <img src={menuIcon} />
          </div>
        </nav>
      ) : (
        <div className="menu-items">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Course Details</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Testmonials</a>
            </li>
          </ul>
          <div onClick={changeHandler}>
            <img src={crossIcon} />
          </div>
        </div>
      )}
    </>
  );
}

//rafce
