import React from "react";
import "./Projects.css";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="project">
          <div className="project-top">
            <h2 className="project-title">Hair cut booking web-app</h2>
            <p>
              Application for a user to book a haircut with a barber of choice.
            </p>
            <p className="hidden-text">
              <li> Front end with Javascript and React with Tailwindcss</li>
              <li> Backend with Java Spring boot with spring security</li>
              <li> JWT token authentication and social login options</li>
              <li> Database with Postgres SQL</li>
              <div className="project-links">
                <a
                  href="https://github.com/yxsnd/FadesBookHaircutApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="icon-style"
                    onMouseOver={(e) => (e.target.style.color = "#6e5494")}
                    onMouseOut={(e) => (e.target.style.color = "#000")}
                  />
                </a>
              </div>
            </p>
          </div>

          <div className="project-bottom-pic1">bottom</div>
        </div>
      </div>

      <div className="projects-container">
        <div className="project">
          <div className="project-top">
            <h2 className="project-title">Portfolio website</h2>
            <p>
              This webpage to showcase my projects and skills.
            </p>
            <p className="hidden-text">
              <li> Front end with Javascript and React with JSX, HTML and CSS</li>
              <div className="project-links">
                <a
                  href="https://github.com/yxsnd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="icon-style"
                    onMouseOver={(e) => (e.target.style.color = "#6e5494")}
                    onMouseOut={(e) => (e.target.style.color = "#000")}
                  />
                </a>
              </div>
            </p>
          </div>
          <div className="project-bottom-pic2">bottom</div>
        </div>
      </div>
      {/* <div className="projects-container">
        <div className="project">
          <div className="project-top">
            <h2>Hair cut booking web-app</h2>
            <p>
              A functional application for a user to book a haircut with a
              barber of choice.
            </p>
            <p className="hidden-text">
              <li> Front end with Javascript and React with Tailwindcss</li>
              <li> Backend with Java Spring boot with spring security</li>
              <li> JWT token authentication and social login options</li>
              <li> Database with Postgres SQL</li>
            </p>
          </div>
          <div className="project-bottom">
            <img src="../../img/fadesapp.jpg" alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
