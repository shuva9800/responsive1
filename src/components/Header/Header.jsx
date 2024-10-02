import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
// import HeaderImg from "../../assets/Rectangle 8.jpg"

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <Navbar/>
        <div className="card">
          <p className="course-name">Sound Design Masterclass</p>
          {/* <hr/> */}
          <h1 className="course-heading">Learn the Art of Sound Design</h1>
          <a href="#" className="demo-btn">
            Demo Lesson
          </a>
        </div>
      </div>
     
    </header>
  );
}
