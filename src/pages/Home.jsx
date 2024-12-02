import React from "react";
import { useContext, useRef } from "react";
import "../styles/Home.css";
import { CV } from "../utils/cv";
import { LanguageContext } from "../Context/LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const projectRefs = useRef(CV.portfolio.map(() => React.createRef()));

  const scrollToProject = (index) => {
    projectRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-section">
      <h2>&lt;Full Stack Developer/&gt;</h2>

      <p>
        {language === "es"
          ? "Soy Full Stack Developer con conocimientos en marketing digital lo que me permite crear soluciones alineadas con las necesidades de los usuarios y empresas. Destaco por mi participación en proyectos como páginas web para empresas, mi logro en la Hackathon Caixabank, donde alcancé el 8º puesto entre 500 participantes, y mi experiencia como Full Stack Developer en TAI, trabajando con software web orientado a la industria. Me considero adaptable, comunicativo, creativo y con un aprendizaje rápido, siempre dispuesto a colaborar en equipo."
          : "I am a Full Stack Developer with knowledge in digital marketing which allows me to create solutions aligned with the needs of users and companies. I stand out for my participation in projects such as websites for companies, my achievement in the Caixabank Hackathon, where I reached the 8th place among 500 participants, and my experience as a Full Stack Developer at TAI, working with web software oriented to the industry. I consider myself adaptable, communicative, creative and with a quick learning, always willing to collaborate in a team."}
      </p>
      <div className="section-buttons">
        {CV.portfolio.map((project, index) => (
          <button key={index} onClick={() => scrollToProject(index)}>
            {language === "es" ? project.name1.es : project.name1.en}
          </button>
        ))}
      </div>

      <h2>{language === "es" ? "Proyectos" : "Projects"}</h2>
      <div className="project-container">
        {" "}
        {CV.portfolio.map((project, index) => (
          <div
            className="project-item"
            key={index}
            ref={projectRefs.current[index]}
          >
            <h3>{language === "es" ? project.name1.es : project.name1.en}</h3>
            <div className="project-images">
              {project.img.slice(0, 4).map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${
                    language === "es" ? project.name1.es : project.name1.en
                  } ${idx + 1}`}
                  className="image"
                />
              ))}
            </div>

            <p className="project-description">
              {language === "es"
                ? project.description.es
                : project.description.en}
            </p>

            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button>
                {language === "es" ? "Ver proyecto" : "View project"}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
