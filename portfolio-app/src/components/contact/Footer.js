import React from "react";
import Contact from "./Contact"; 

const footerStyle = {
  backgroundColor: "#f8f9fa", 
  color: "#6c757d", 
  textAlign: "center",
  padding: "20px",
  position: "relative",
  bottom: "0",
  width: "100%",
  borderTop: "1px solid #e7e7e7", 
};

const copyrightStyle = {
  marginTop: "15px",
  fontSize: "14px",
};


const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Contact />
      <div style={copyrightStyle}>
        © {new Date().getFullYear()} All Rights Reserved to Yasindu Dissanayake
      </div>
    </footer>
  );
};

export default Footer;
