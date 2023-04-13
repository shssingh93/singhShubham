import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  return (
    <div className="contact">
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me anytime !</p>
          <a
            href="https://www.linkedin.com/in/shubhamsingh93/"
            style={{
              border: "2px solid black",
              padding: "5px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
              marginRight: "20px",
            }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:shubhamsingh93.27@gmail.com |"
            style={{
              border: "2px solid black",
              padding: "5px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
          >
            Mail
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
