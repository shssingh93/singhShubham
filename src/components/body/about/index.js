import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import Wave from "../../../assets/wave.png";
import "../../header/web/web.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div>
          <span className="about-info">Hello</span>{" "}
          <img src={Wave} width="10%" style={{ marginTop: "5px" }} />
          <br />
          <span className="about-info">I'm Shubham Singh</span>.
          <br />
          <span className="info-name" style={{ lineHeight: "50px" }}>
            I Develop things for web
          </span>
          <h3>Senior Software Engineer. Based in India.</h3>
          <a
            href="https://www.linkedin.com/in/shubhamsingh93/"
            className="hoverButton"
            style={{
              border: "2px solid black",
              padding: "5px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              textDecoration: "none",
              marginRight: "20px",
              border: "2px solid black",
              padding: "5px 20px",
              borderRadius: "10px",
            }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:shubhamsingh93.27@gmail.com"
            className="hoverButton"
            style={{
              border: "2px solid black",
              padding: "5px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Mail
          </a>
        </div>
        <br />
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      {/* <SocialContact /> */}
    </div>
  );
}

export default About;
