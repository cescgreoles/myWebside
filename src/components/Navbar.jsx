import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Navbar.css";
import { LanguageContext } from "../Context/LanguageContext";

function Navbar() {
  const { language } = useContext(LanguageContext);
  const [selectedPage, setSelectedPage] = useState("/");
  const navigate = useNavigate();

  const translations = {
    en: { home: "Home", aboutMe: "About Me" },
    es: { home: "Inicio", aboutMe: "Sobre Mí" },
  };

  const t = translations[language] || translations["en"];

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedPage(value);
    navigate(value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-name">Francesc Greoles</div>

      <div className="navbar-icons">
        <NavLink
          href="https://github.com/cescgreoles"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-icon"
        >
          <FaGithub />
        </NavLink>
        <NavLink
          href="https://www.linkedin.com/in/francesc-greoles-baldrich-a215a5152/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-icon"
        >
          <FaLinkedin />
        </NavLink>
        <NavLink href="mailto:fgreoles@gmail.com" className="navbar-icon">
          <FaEnvelope />
        </NavLink>
      </div>

      <div className="navbar-select-container">
        <select
          value={selectedPage}
          onChange={handleSelectChange}
          className="page-select"
        >
          <option value="/">{t.home}</option>
          <option value="/aboutMe">{t.aboutMe}</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
