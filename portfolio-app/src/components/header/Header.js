import React from "react";
import "./Header.css";

const Header = () => {
  const handleAboutClick = () => {
    window.scroll({
      top: 600,
      behavior: "smooth",
    });
  };

  const handleProjectClick = () => {
    window.scrollTo({
      top: 1500,
      behavior: "smooth",
    });
  };

  const handleContactClick = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="#about" onClick={handleAboutClick}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleProjectClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleContactClick}>
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yxsnd"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="../../resume/yasindu-dissanayake-resume.docx"
            // className="resume-button"
            download
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
