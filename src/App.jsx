import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import { useContext } from "react";
import {
  LanguageProvider,
  LanguageContext,
} from "../src/Context/LanguageContext";
import { FaDownload } from "react-icons/fa";
import Navbar from "./components/Navbar";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Navbar />
          <div>
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
    const fileUrl = `/Francesc-2024-esp.pdf`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Francesc-2024-esp.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="download-button">
      <FaDownload size={24} color="#fff" />
    </button>
  );
}

export default App;
