import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCake,
  faLocationDot,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import profile1 from "../assets/profile1.png";

const ProfilePopup = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.className.includes("popup-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="popup-overlay"
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="popup-content"
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "400px",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          position: "relative",
        }}
      >
        <button
          className="close-button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          X
        </button>
        <div
          className="profile-header"
          style={{ marginBottom: "20px", textAlign: "center" }}
        >
          <img
            src={profile1}
            alt="Francesc Greoles"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
        </div>

        <ul
          className="profile-info"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          <li
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: "10px", fontSize: "16px" }}
            />
            cesc.greoles@gmail.com
          </li>
          <li
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faCake}
              style={{ marginRight: "10px", fontSize: "16px" }}
            />
            28 años
          </li>
          <li
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "10px", fontSize: "16px" }}
            />
            Barcelona, España
          </li>
          <li
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faBriefcase}
              style={{ marginRight: "10px", fontSize: "16px" }}
            />
            Software Developer
          </li>
        </ul>
      </div>
    </div>
  );
};

ProfilePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProfilePopup;
