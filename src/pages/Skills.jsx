import { RiComputerFill } from "react-icons/ri";
import "../styles/Skills.css";
import { CV } from "../utils/cv";

const Skills = () => {
  return (
    <div className="skills-block">
      <p className="skills-icon">
        <RiComputerFill className="icon-2" />
      </p>
      {CV.skills.map((info, index) => (
        <div className="skill-item" key={index}>
          <h2 className="skill-title">{info.name}</h2>
          <p className="skill-description">{info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
