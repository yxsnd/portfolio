import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./Contact.css"

// CSS for the icons
const iconStyle = {
  margin: "10px",
  fontSize: "35px",
  color: "#000", // Default icon color
  transition: "color 0.4s", // Smooth transition for hover effect
};

// Contact Component
const Contact = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <a
        href="https://github.com/yxsnd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          style={iconStyle}
          onMouseOver={(e) => (e.target.style.color = "#6e5494")}
          onMouseOut={(e) => (e.target.style.color = "#000")}
        />
      </a>
      <a
        href="https://linkedin.com/in/itsykd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn
          style={iconStyle}
          onMouseOver={(e) => (e.target.style.color = "#0077b5")}
          onMouseOut={(e) => (e.target.style.color = "#000")}
        />
      </a>
      <a href="mailto:yasindu.d@hotmail.com">
        <FaEnvelope
          style={iconStyle}
          onMouseOver={(e) => (e.target.style.color = "#c23a2b")}
          onMouseOut={(e) => (e.target.style.color = "#000")}
        />
      </a>
    </div>
  );
};

export default Contact;
