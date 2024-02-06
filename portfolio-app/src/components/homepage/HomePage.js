// React Component File: HomePage.js
import React from "react";
import "./HomePage.css"; // Make sure to create a corresponding CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">B</div>
        <nav>
          <ul>
            <li>
              <a href="#about">01. About</a>
            </li>
            <li>
              <a href="#experience">02. Experience</a>
            </li>
            <li>
              <a href="#work">03. Work</a>
            </li>
            <li>
              <a href="#contact">04. Contact</a>
            </li>
          </ul>
        </nav>
        <button className="resume-button">Resume</button>
      </header>
      <main className="main-content">
        <p>Hi, my name is</p>
        <h1>Brittany Chiang.</h1>
        <h2>I build things for the web.</h2>
        <p>
          I'm a software engineer based in Boston, MA specializing in building
          (and occasionally designing) exceptional websites, applications, and
          everything in between.
        </p>
        <button className="cta-button">Get In Touch</button>
      </main>
      <aside className="social-links">
        <a href="https://linkedin.com">in</a>
        <a href="https://github.com">GH</a>
        <a href="https://instagram.com">IG</a>
        <a href="https://twitter.com">TW</a>
      </aside>
      <footer className="footer">
        <p>brittany@chiang.com</p>
      </footer>
    </div>
  );
};

export default HomePage;
