import React from "react";
import "./About.css"; // Make sure to create and import a CSS file for styling

const About = () => {
  return (
    <div className="introduction-container">
      <p>
        I am a passionate software developer with a strong foundation in{" "}
        <span className="highlight-word">Java </span>
        and <span className="highlight-word">JavaScript </span> along with some
        <span className="highlight-word"> Python. </span>My journey in coding
        began when I took university courses in computer science at{" "}
        <span className="highlight-word"> University Of Toronto</span> and I
        enjoyed the process of bringing ideas into software. I am always trying
        to learn newer concepts and recently I am trying to learn more about
        machine learning and artificial intelligence and see how I can use that
        to improve as as software developer
      </p>

      <p>
        Throughout my career, I've embraced challenges, continuously learning
        and adapting to new technologies. My goal is to build software that
        isn't just functional, but also intuitive and enjoyable to use.
      </p>
    </div>
  );
};

export default About;
