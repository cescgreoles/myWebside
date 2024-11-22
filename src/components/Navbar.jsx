import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaUser } from "react-icons/fa";
import "../styles/Navbar.css";
import { LanguageContext } from "../Context/LanguageContext";
import ProfilePopup from "../components/ProfilePopup";

function Navbar() {
  const { language } = useContext(LanguageContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleProfileClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const translations = {
    en: { home: "Home", aboutMe: "About Me" },
    es: { home: "Inicio", aboutMe: "Sobre Mí" },
  };

  const t = translations[language] || translations["en"];

  return (
    <nav className="navbar">
      <div className="navbar-name">
        <Link to="/" className="link">
          Francesc Greoles
        </Link>
        <button onClick={handleProfileClick} className="profile-button">
          <FaUser size={24} color="black" />
        </button>

        {showPopup && <ProfilePopup onClose={handleClosePopup} />}
      </div>

      <div className="navbar-icons">
        <NavLink
          to="https://github.com/cescgreoles"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-icon"
        >
          <FaGithub />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/francesc-greoles-baldrich-a215a5152/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-icon"
        >
          <FaLinkedin />
        </NavLink>
        <NavLink to="mailto:fgreoles@gmail.com" className="navbar-icon">
          <FaEnvelope />
        </NavLink>
      </div>

      <div className="navbar-select-container">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          {t.home}
        </NavLink>

        <NavLink
          to="/aboutMe"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          {t.aboutMe}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
