import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Title.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="profile-image"></div>
      <div>
        <h1>
          <span className="intro">Hey, my name is </span>
          <span className="highlight-name">Yasindu Dissanayake</span>
        </h1>
        <p className="intro-paragraph">
          I am a Software Developer with a Bachelors in Statistics and Human
          Biology. I have a passion for creating useful software to innovate or solving real
          world problems and everything in between.
        </p>
        <h2 className="type-animation">
          <code>
            <TypeAnimation
              sequence={[
                // typing sequence replace the words after "A"
                'print("Hello World")',
                1000,
                ' System.out.println("Hello World");',
                1000,
                'console.log("Hello World");',
                1000,
                ' System.Console.WriteLine("Hello World");',
                1000,
                'std::cout << "Hello World";',
                1000,
                "puts 'Hello World'",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </code>
        </h2>
      </div>
    </section>
  );
};

export default About;
