import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
            href="../../resume/resumeyasindud.docx"
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
