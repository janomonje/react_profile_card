import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "#EFD81D",
  },
  {
    skill: "UI/UX Figma",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB",
  },
  {
    skill: "Cypress e2e testing",
    level: "intermediate",
    color: "#FF3B00",
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#FF3B77",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar photo="images/avatar.jpg" name="Alejandro Monje Morales" />
      <div className="data">
        <Intro decription="IT engineer student currently learning React JS.About to finish study program and wishing to move to Tammerforce. Enjoys workingout, spending time with the family, and doing sports." />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.photo} alt={props.name} />
      <h1 className="name">{props.name}</h1>
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <p>{props.decription}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/*So for each skill, we want to create one skill component.
      And then we can pass in the props. */}
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
      {/*<Skill skill="React" emoji="😎" color="lightblue"/>
      <Skill skill="GitHUb" emoji="😎" color="orange"/>
      <Skill skill="Cypress" emoji="😎" color="yellowgreen"/>
      <Skill skill="UI/UX" emoji="😎" color="red"/>
  <Skill skill="Python" emoji="😎" color="grey"/>*/}
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
        {level === "expert" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
