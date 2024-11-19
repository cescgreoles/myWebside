import "../styles/Skills.css";
import { CV } from "../utils/cv";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-block">
        {CV.skills.es.map((info, index) => (
          <div className="skill-item" key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
