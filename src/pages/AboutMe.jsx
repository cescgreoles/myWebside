import { useContext } from "react";
import "../styles/AboutMe.css";
import { CV } from "../utils/cv";
import { LanguageContext } from "../Context/LanguageContext";

const AboutMe = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="about-me">
      <section>
        <h2 className="section-title">
          {language === "es" ? "Habilidades" : "Skills"}
        </h2>
        <p className="section-intro">
          {language === "es"
            ? "Soy un desarrollador Full Stack con experiencia en tecnologías modernas como React.js, Node.js, y Google Cloud, especializado en la creación de aplicaciones web robustas y escalables. Mi perfil combina habilidades técnicas avanzadas, adaptabilidas."
            : "Here are some of my technical and soft skills."}
        </p>
        <div className="grid-container skills">
          {CV.skills[language].map((info, index) => (
            <div className="card" key={index}>
              <img className="icon" src={info.img} alt={info.name} />
              <p className="name">{info.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">
          {language === "es" ? "Experiencia Laboral" : "Work Experience"}
        </h2>
        <p className="section-intro">
          {language === "es"
            ? "Mi experiencia laboral en TAI Smart Factory me permitió adquirir habilidades como Full Stack Developer, trabajando en el desarrollo de soluciones web con tecnologías como JavaScript, React y CSS. En los proyectos con empresas, desarrollé la página web de Óptica Carrilet con React, Vercel y CSS responsive; creé un portafolio fotográfico para María Torrecillas utilizando React y Next.js; y diseñé un sitio web para Makalu, un gimnasio, todos con un enfoque en marketing y experiencia del usuario. Además, participé en la Hackathon de Caixabank 2024, donde desarrollé un CRUD completo con React, logrando el 8º lugar entre 500 participantes."
            : "A summary of my professional experience."}
        </p>
        <div className="grid-container experience">
          {CV.experience[language].map((info, index) => (
            <div className="card" key={index}>
              <h3 className="title">{info.name}</h3>
              <p className="date">{info.date}</p>
              <p className="location">{info.where}</p>
              <p className="description">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">
          {language === "es" ? "Educación" : "Education"}
        </h2>
        <p className="section-intro">
          {language === "es"
            ? "Formación académica en Desarrollo Web y un enfoque complementario en Marketing Digital orientado al cliente. Mi formación me ha permitido combinar conocimientos técnicos con una comprensión profunda de las necesidades y expectativas de los usuarios, creando soluciones web eficientes y centradas en el cliente. Esta combinación de habilidades me permite diseñar y desarrollar aplicaciones web no solo funcionales, sino también intuitivas y alineadas con los objetivos comerciales y la experiencia del usuario."
            : "Details about my academic background."}
        </p>
        <div className="grid-container education">
          {CV.education[language].map((info, index) => (
            <div className="card" key={index}>
              <h3 className="title">{info.name}</h3>
              <p className="date">{info.date}</p>
              <p className="location">{info.where}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
