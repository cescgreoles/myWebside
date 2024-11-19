import { useContext } from "react";
import "../styles/AboutMe.css";
import { CV } from "../utils/cv";
import { LanguageContext } from "../Context/LanguageContext";

const AboutMe = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="about-me">
      {/* Sección de Habilidades */}
      <div className="section skills-section">
        <h2 className="section-title">
          {language === "es" ? "Habilidades" : "Skills"}
        </h2>
        <div className="skills-container">
          {CV.skills[language].map((info, index) => (
            <div className="card skill-card" key={index}>
              <h3 className="card-title">{info.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Experiencia Laboral */}
      <div className="section work-section">
        <h2 className="section-title">
          {language === "es" ? "Experiencia Laboral" : "Work Experience"}
        </h2>
        {CV.experience[language].map((info, index) => (
          <div className="card work-card" key={index}>
            <div className="card-content">
              <h3 className="card-title">{info.name}</h3>
              <p className="card-date">{info.date}</p>
              <p className="card-location">{info.where}</p>
              <p className="card-description">{info.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de Educación */}
      <div className="section education-section">
        <h2 className="section-title">
          {language === "es" ? "Educación" : "Education"}
        </h2>
        {CV.education[language].map((info, index) => (
          <div className="card education-card" key={index}>
            <div className="card-content">
              <h3 className="card-title">{info.name}</h3>
              <p className="card-date">{info.date}</p>
              <p className="card-location">{info.where}</p>
              <p className="card-info">{info.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
