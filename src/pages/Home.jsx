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
        <h2>&lt;Full Stack Developer/&gt;</h2>
        <p>
          {language === "es"
            ? "Soy un desarrollador web con más de un año de experiencia en la creación de páginas web modernas y receptivas, he estado durante un año trabajando con una óptica para el desarrollo de su página web. También tengo experiencia de seis meses en una empresa como desarrollador de software. Allí estuve seis meses y me especialize en Javascript, con los frameworks de React, Node.js. Para cualquier consulta podrás descargar mi CV a la parte inferior de la página"
            : "I am a web developer with over a year of experience in creating modern and responsive websites, I have been for a year working with an optician for the development of their website. I also have six months experience in a company as a software developer. There I spent six months and specialized in Javascript, with React, Node.js frameworks. For any questions you can download my CV at the bottom of the page."}
        </p>
      </div>
      <div className="cv-projects">
        <h2>{language === "es" ? "Mis Proyectos" : "My Projects"}</h2>
        <div className="projects-grid">
          {CV.portfolio1.map((project, index) => (
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
      <div className="cv-projects">
        <h2>
          {language === "es" ? "Proyectos Bootcamp" : "Bootcamp Projects"}
        </h2>
        <div className="projects-grid">
          {CV.portfolio.map((project, index) => (
            <div
              className="project-item"
              key={index}
              onClick={() => openPopup(project)}
            >
              <img
                src={project.img}
                alt={language === "es" ? project.name.es : project.name.en}
                className="project-image"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="popup open">
          <div className="popup-content">
            <span className="popup-close" onClick={closePopup}>
              &times;
            </span>
            <div className="popup-inner">
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
                className="popup-image"
              />
              <div className="popup-text">
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
