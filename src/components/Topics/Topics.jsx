import React, { useState } from "react";
import "./Topics.css";
import topicImg from "../../assets/Rectangle 13.jpg";
import daw from "../../assets/Rectangle 14.jpg";
import vocal from "../../assets/Rectangle 15.jpg";
import mixing from "../../assets/Rectangle 17.jpg";
import mixingconsole from "../../assets/Rectangle 16.jpg";
import mastring from "../../assets/Rectangle 18.jpg";
import rectangle from "../../assets/Group 7.svg"

const Topics = () => {
  const [image , setImage]= useState(topicImg);
  return (
    <section className="topics-section">
      <div className="wrapper">
        <h2 className="topics-heading">What will you learn?</h2>
        <div className="topics-details">
          <ul>
            <li onMouseEnter={()=> setImage(topicImg)}>What are frequencies?</li>
            <li onMouseEnter={()=> setImage(daw)}>Using DAW</li>
            <li onMouseEnter={()=> setImage(vocal)}>Vocals Processing</li>
            <li onMouseEnter={()=> setImage(mixing)}>Mixing</li>
            <li onMouseEnter={()=> setImage(mixingconsole)}>Mixing Console</li>
            <li onMouseEnter={()=> setImage(mastring)}>Mastering</li>
          </ul>
          <div className="topics-details-img">
            <img src={image} className="computer-img"/>
            <img src={rectangle} className="rectangle"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
