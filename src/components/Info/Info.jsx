import React from "react";
import "./Info.css";
import student1 from "../../assets/Students1.svg";
import student2 from "../../assets/Students2.svg";
import redRectangle from "../../assets/Group red.svg";

const Info = () => {
  return (
    <div className="info">
      <div className="wrapper">
        <img src={redRectangle} className="redRectangle" />
        <div className="info-img">
          <img src={student1} />
          <img src={student2} />
        </div>
      </div>
    </div>
  );
};

export default Info;
