import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillsData = [
  { name: "HTML+CSS", color: "#7cc3ff", level: "advanced" },
  { name: "Git+GitHub", color: "#c6ff7c", level: "advanced" },
  { name: "JavaScript", color: "#fff87c", level: "intermediate" },
  { name: "React", color: "#ffb77c", level: "advanced" },
  { name: "TypeScript", color: "#ffc8e6", level: "beginner" },
];

const skills = skillsData;

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList className="skill" />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="img/junocchi.jpg" alt="Juliana" />;
}

function Intro() {
  return (
    <div>
      <h1>Ju Nocchi</h1>
      <p>
        Full-stack web developer who enjoys working on collaborative projects.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.name} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
