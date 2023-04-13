import React from "react";
import "./skill-card.css";
function SkillCard({ skill }) {
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          padding: "5px 20px",
          borderRadius: "10px",
          width: "130px",
          margin: "20px 20px 0px 0px",
        }}
      >
        {skill.icon} <label>{skill.name}</label>
      </div>
    </div>
  );
}
export default SkillCard;
