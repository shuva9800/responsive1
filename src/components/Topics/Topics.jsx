import React from "react";
import "./Topics.css";
import topicImg from "../../assets/Rectangle 13.jpg";
import rectangle from "../../assets/Group 7.svg"

const Topics = () => {
  return (
    <section className="topics-section">
      <div className="wrapper">
        <h2 className="topics-heading">What will you learn?</h2>
        <div className="topics-details">
          <ul>
            <li>What are frequencies?</li>
            <li>Using DAW</li>
            <li>Vocals Processing</li>
            <li>Mixing</li>
            <li>Mixing Console</li>
            <li>Mastering</li>
          </ul>
          <div className="topics-details-img">
            <img src={topicImg} className="computer-img"/>
            <img src={rectangle} className="rectangle"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
