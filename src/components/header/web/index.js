import React from "react";
import "./web.css";
import pdf from "../../../assets/Shubham_Singh.pdf";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#skills">Interests and Skills</a>
      </div>
      <div className="web-option">
        <a href="#projects">Projects</a>
      </div>

      <div className="web-option">
        <a href="#work">Work</a>
      </div>
      <div className="web-option">
        <a href="#contact">Contact</a>
      </div>
      <a
        href={pdf}
        className="hoverButton"
        style={{
          border: "2px solid black",
          padding: "5px 20px",
          borderRadius: "10px",
        }}
      >
        Resume
      </a>
    </div>
  );
}

export default Web;
