import { useContext } from "react";
import { RiComputerFill } from "react-icons/ri";
import { MdOutlineWork, MdSchool } from "react-icons/md";
import "../styles/AboutMe.css";
import { CV } from "../utils/cv";
import { LanguageContext } from "../Context/LanguageContext";

const AboutMe = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="about-me">
      <div className="section education-section">
        <h2 className="section-title">
          {language === "es" ? "Educación" : "Education"}
        </h2>
        {CV.education[language].map((info, index) => (
          <div className="card education-card" key={index}>
            <MdSchool className="card-icon" />
            <div className="card-content">
              <h3 className="card-title">{info.name}</h3>
              <p className="card-date">{info.date}</p>
              <p className="card-location">{info.where}</p>
              <p className="card-info">{info.info}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section work-section">
        <h2 className="section-title">
          {language === "es" ? "Experiencia Laboral" : "Work Experience"}
        </h2>
        {CV.experience[language].map((info, index) => (
          <div className="card work-card" key={index}>
            <MdOutlineWork className="card-icon" />
            <div className="card-content">
              <h3 className="card-title">{info.name}</h3>
              <p className="card-date">{info.date}</p>
              <p className="card-location">{info.where}</p>
              <p className="card-description">{info.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section skills-section">
        <h2 className="section-title">
          {language === "es" ? "Habilidades" : "Skills"}
        </h2>
        {CV.skills[language].map((info, index) => (
          <div className="card skill-card" key={index}>
            <RiComputerFill className="card-icon" />
            <div className="card-content">
              <h3 className="card-title">{info.name}</h3>
              <p className="card-description">{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
