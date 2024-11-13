import React from "react";
import "./Testimonils.css";
import rectangle19 from "../../assets/Rectangle19.png";
import rectangle20 from "../../assets/Rectangle20.png";
import rectangle21 from "../../assets/Rectangle21.png";

export default function Testimonils() {
  return (
    <div className="testimonils">
      <div className="wrapper">
        <h2 className="testimonils-heading">What our students say?</h2>
        <div className="description">
          <div className="details">
            <img src={rectangle19} />
            <div className="magic-section">
              <h3>Peter Adams</h3>
              <p>This is a great course. I got to learn a lot.</p>
            </div>
          </div>
          <div className="details">
            <img src={rectangle20} />
            <div className="magic-section">
              <h3>Robert Fox</h3>
              <p>
                I got to learn a lot about Music Production with this course.
                Thanks :)
              </p>
            </div>
          </div>
          <div className="details">
            <img src={rectangle21} />
            <div className="magic-section">
              <h3>Emily Smith</h3>
              <p>Awesome! Great job!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
