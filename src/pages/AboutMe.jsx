import { useContext } from "react";
import "../styles/AboutMe.css";
import { CV } from "../utils/cv";
import { LanguageContext } from "../Context/LanguageContext";

const AboutMe = () => {
  const { language } = useContext(LanguageContext);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about-me">
      <div className="navigation-buttons">
        <button onClick={() => scrollToSection("skills")}>
          {language === "es" ? "Habilidades" : "Skills"}
        </button>
        <button onClick={() => scrollToSection("experience")}>
          {language === "es" ? "Experiencia" : "Experience"}
        </button>
        <button onClick={() => scrollToSection("education")}>
          {language === "es" ? "Educación" : "Education"}
        </button>
      </div>

      <div id="skills" className="div-container">
        <h2>{language === "es" ? "Habilidades" : "Skills"}</h2>
        <p>
          {language === "es"
            ? "Soy un desarrollador Full Stack con experiencia en tecnologías modernas como React.js, Node.js, y Google Cloud, especializado en la creación de aplicaciones web robustas y escalables. Mi perfil combina habilidades técnicas avanzadas, adaptabilidad."
            : "Here are some of my technical and soft skills."}
        </p>

        <h3>{language === "es" ? "Lenguajes" : "Languages"}</h3>
        <div className="grid-container skills">
          {CV.skills[language].lenguajes.map((info, index) => (
            <div className="card" key={index}>
              <img className="icon" src={info.img} alt={info.name} />
              <p>{info.name}</p>
            </div>
          ))}
        </div>

        <h3>
          {language === "es"
            ? "Librerías y Frameworks"
            : "Libraries & Frameworks"}
        </h3>
        <div className="grid-container skills">
          {CV.skills[language].librerias.map((info, index) => (
            <div className="card" key={index}>
              <img className="icon" src={info.img} alt={info.name} />
              <p>{info.name}</p>
            </div>
          ))}
        </div>

        <h3>{language === "es" ? "Herramientas" : "Tools"}</h3>
        <div className="grid-container skills">
          {CV.skills[language].herramientas.map((info, index) => (
            <div className="card" key={index}>
              <img className="icon" src={info.img} alt={info.name} />
              <p>{info.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="experience" className="div-container">
        <h2>{language === "es" ? "Experiencia Laboral" : "Work Experience"}</h2>
        <p>
          {language === "es"
            ? "Trabajé como Full Stack Developer en TAI Smart Factory, donde desarrollé soluciones web con React y JavaScript. Creé páginas para empresas como Óptica Carrilet y Makalu, y participé en la Hackathon de Caixabank 2024, alcanzando el 8º lugar entre 500 participantes."
            : "I worked as a Full Stack Developer at TAI Smart Factory, building web solutions with React and JavaScript I developed websites for brands like Óptica Carrilet and Makalu, and ranked 8th in the Caixabank 2024 Hackathon among 500 participants."}
        </p>
        <div className="grid-container experience">
          {CV.experience[language].map((info, index) => (
            <div className="card" key={index}>
              <h3>{info.name}</h3>
              <p>{info.date}</p>
              <p>{info.where}</p>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="education" className="div-container">
        <h2>{language === "es" ? "Educación" : "Education"}</h2>
        <p>
          {language === "es"
            ? "Estudié Desarrollo Web con un enfoque en Marketing Digital, combinando habilidades técnicas y una comprensión profunda de las necesidades del usuario. Esto me permite crear aplicaciones web funcionales e intuitivas, alineadas con los objetivos comerciales."
            : "I studied Web Development with a focus on Digital Marketing, blending technical skills with a deep understanding of user needs. This allows me to create functional and intuitive web applications aligned with business goals."}
        </p>
        <div className="grid-container education">
          {CV.education[language].map((info, index) => (
            <div className="card" key={index}>
              <h3>{info.name}</h3>
              <p>{info.date}</p>
              <p>{info.where}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
