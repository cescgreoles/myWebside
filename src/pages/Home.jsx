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
          ? "Soy un Full Stack Developer con experiencia en la creación de soluciones tecnológicas alineadas con las necesidades de usuarios y empresas. Gracias a mis conocimientos en marketing digital, puedo desarrollar proyectos que no solo son funcionales, sino también efectivos en términos de estrategia. He trabajado en el desarrollo de sitios web para empresas, obtuve el 8º puesto en la Hackathon Caixabank entre 500 participantes y he trabajado en una empresa de software industrial con React. Me considero adaptable, comunicativo, creativo y de aprendizaje rápido."
          : "I am a Full Stack Developer with experience in creating technological solutions aligned with the needs of users and companies. Thanks to my knowledge in digital marketing, I can develop projects that are not only functional, but also effective in terms of strategy. I have worked on the development of websites for companies, I obtained the 8th place in the Caixabank Hackathon among 500 participants and I have worked in an industrial software company with React. I consider myself adaptable, communicative, creative and a fast learner."}
      </p>
      <h2>{language === "es" ? "Mis Proyectos" : " My Projects"}</h2>
      <div className="section-buttons">
        {CV.portfolio.map((project, index) => (
          <button key={index} onClick={() => scrollToProject(index)}>
            {language === "es" ? project.name1.es : project.name1.en}
          </button>
        ))}
      </div>

      <div className="project-container">
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
