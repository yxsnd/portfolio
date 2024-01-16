import profilePic from "../../img/profilepic.jpg";
import "./About.css";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div className="profile-pic-container">
      <img className="profile-pic" src={profilePic} alt="" />
      <h1>Hi, I am Yasindu Dissanayake</h1>
      <TypeAnimation
        sequence={[
          // typing sequence replace the words after "A"
          "A Developer",
          1000, 
          "A Problem Solver",
          1000,
          "A Fast Learner",
          1000,
          "A Technologist",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default About;
