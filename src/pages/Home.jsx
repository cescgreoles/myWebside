import { useContext, useState } from "react";
import "../styles/Home.css";
import { CV } from "../utils/cv";
import { LanguageContext } from "../Context/LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="section">
      <div className="cv-header"></div>
      <div className="cv-details">
        <h1>&lt;Full Stack Developer/&gt;</h1>
        <p>
          {language === "es"
            ? "Soy Full Stack Developer con conocimientos en marketing digital lo que me permite crear soluciones alineadas con las necesidades de los usuarios y empresas. Destaco por mi participación en proyectos como páginas web para empresas, mi logro en la Hackathon Caixabank, donde alcancé el 8º puesto entre 500 participantes, y mi experiencia como Full Stack Developer en TAI, trabajando con software web orientado a la industria. Me considero adaptable, comunicativo, creativo y con un aprendizaje rápido, siempre dispuesto a colaborar en equipo."
            : "I am a Full Stack Developer with knowledge in digital marketing which allows me to create solutions aligned with the needs of users and companies. I stand out for my participation in projects such as websites for companies, my achievement in the Caixabank Hackathon, where I reached the 8th place among 500 participants, and my experience as a Full Stack Developer at TAI, working with web software oriented to the industry. I consider myself adaptable, communicative, creative and with a quick learning, always willing to collaborate in a team."}
        </p>
      </div>
      <div className="cv-projects">
        <h2>{language === "es" ? "Proyectos" : "Projects"}</h2>
        <div className="projects-grid">
          {CV.portfolio.map((project, index) => (
            <div
              className="project-item"
              key={index}
              onClick={() => openPopup(project)}
            >
              <img
                src={project.img}
                alt={language === "es" ? project.name1.es : project.name1.en}
                className="project-image"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="custom-popup open">
          <div className="custom-popup-content">
            <span className="popup-close" onClick={closePopup}>
              &times;
            </span>
            <div className="custom-popup-inner">
              <img
                src={selectedProject.img}
                alt={
                  language === "es"
                    ? selectedProject.name1
                      ? selectedProject.name1.es
                      : selectedProject.name.es
                    : selectedProject.name1
                    ? selectedProject.name1.en
                    : selectedProject.name.en
                }
                className="custom-popup-image"
              />
              <div className="custom-popup-text">
                <h2>
                  {language === "es"
                    ? selectedProject.name1
                      ? selectedProject.name1.es
                      : selectedProject.name.es
                    : selectedProject.name1
                    ? selectedProject.name1.en
                    : selectedProject.name.en}
                </h2>
                <p>
                  {language === "es"
                    ? selectedProject.description.es
                    : selectedProject.description.en}
                </p>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === "es" ? "Ver Proyecto" : "View Project"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
