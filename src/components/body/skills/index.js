import React from "react";
import Separator from "../../common/separator/index";
import "./skills.css";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";
function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      {/* <Separator /> */}
      <label
        style={{ fontSize: "30px", fontWeight: "500", marginBottom: "20px" }}
      >
        Interests and Skills
      </label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div>
              <label className="skills-section-title">{item.type}</label>
              <br />
              <span style={{ display: "flex", flexWrap: "wrap" }}>
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </span>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
