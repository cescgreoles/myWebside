import { useContext } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { LanguageContext } from "../Context/LanguageContext";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: { home: "Home", aboutMe: "About Me" },
    es: { home: "Inicio", aboutMe: "Sobre Mí" },
  };

  const t = translations[language];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-link">
          <h2>Francesc Greoles</h2>
        </Link>
      </div>

      <div className="navbar-icons">
        <a
          href="https://github.com/cescgreoles"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-link"
        >
          <FaGithub className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/francesc-greoles-baldrich-a215a5152/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-link"
        >
          <FaLinkedin className="icons" />
        </a>
        <a href="mailto:fgreoles@gmail.com" className="navbar-link">
          <FaEnvelope className="icons" />
        </a>
      </div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          {t.home}
        </Link>
        <Link to="/aboutMe" className="navbar-link">
          {t.aboutMe}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
