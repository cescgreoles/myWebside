import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Navbar.css";
import { LanguageContext } from "../Context/LanguageContext";

function Navbar() {
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          Francesc Greoles
          <a
            href="https://github.com/cescgreoles"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/francesc-greoles-baldrich-a215a5152/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:fgreoles@gmail.com" className="navbar-icon">
            <FaEnvelope />
          </a>
        </div>
        <div
          className={`navbar-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
          <li className="navbar-item" onClick={toggleMenu}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {language === "es" ? "Inicio" : "Home"}
            </NavLink>
          </li>
          <li className="navbar-item" onClick={toggleMenu}>
            <NavLink
              to="/aboutMe"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {language === "es" ? "Sobre Mí" : "About Me"}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
