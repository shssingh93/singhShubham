import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h2 style={{ color: "white" }}>SHUBHAM SINGH</h2>
      <h2 style={{ color: "white" }}>PRIVACY</h2>
    </div>
  );
}

export default Footer;
