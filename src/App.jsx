import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import { useContext } from "react";
import {
  LanguageProvider,
  LanguageContext,
} from "../src/Context/LanguageContext"; // Importar el contexto
import { FaDownload } from "react-icons/fa"; // Icono de descarga

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutMe" element={<AboutMe />} />
            </Routes>
          </div>
          <LanguageToggleButton />
          <DownloadButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}

function LanguageToggleButton() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage} className="language-toggle-button">
      {language === "es" ? "En" : "Es"}
    </button>
  );
}

function DownloadButton() {
  const handleDownload = () => {
    const fileUrl = `../publiccvCescEnglish.pdf`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "cvCescEnglish.pdf";
    link.click();
  };

  return (
    <button onClick={handleDownload} className="download-button">
      <FaDownload size={24} color="#fff" />
    </button>
  );
}

export default App;
