import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          name="Ju Nocchi"
          summary="Full-stack web developer who enjoys working on collaborative projects."
        />
      </div>
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="img/junocchi.jpg" alt="Juliana" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.summary}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <div className="skill">
        <Skill skillName="HTML+CSS" bgColor="blue" emoji="🧑‍🎨" />
        <Skill skillName="JavaScript" bgColor="cyan" emoji="👩‍💻" />
        <Skill skillName="TypeScript" bgColor="green" emoji="⌨️" />
        <Skill skillName="Web Design" color="yellow" emoji="🕸️" />
        <Skill skillName="React" bgColor="orange" emoji="⚛️" />
        <Skill skillName="Git and GitHub" bgColor="red" emoji="🐙" />
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <button>
      {props.skillName} {props.bgColor} {props.emoji}
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
