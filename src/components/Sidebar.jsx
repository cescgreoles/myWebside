import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaTools,
  FaBriefcase,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "../styles/Sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu">
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/education">
          <FaUserGraduate size={24} />
        </Link>
        <Link to="/skills">
          <FaTools size={24} />
        </Link>
        <Link to="/work">
          <FaBriefcase size={24} />
        </Link>
        <Link to="/contact">
          <FaEnvelope size={24} />
        </Link>
      </div>
      <div className="social">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
