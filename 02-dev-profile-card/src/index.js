import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
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

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skillName="HTML+CSS" bgColor="blue" emoji="🧑‍🎨" />
      <Skill skillName="JavaScript" bgColor="cyan" emoji="👩‍💻" />
      <Skill skillName="TypeScript" bgColor="green" emoji="⌨️" />
      <Skill skillName="Web Design" bgColor="yellow" emoji="🕸️" />
      <Skill skillName="React" bgColor="orange" emoji="⚛️" />
      <Skill skillName="Git and GitHub" bgColor="red" emoji="🐙" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
