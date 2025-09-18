import React, { useState } from "react";
import "./Navbar.css";
import chirang_logo from './Chirag_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo"><img src={chirang_logo} style={{ width: "100px" }}></img></div>

      {/* Hamburger */}
      <div 
        className={`hamburger ${isOpen ? "open" : ""}`}  // ✅ add `open` class
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#curriculum">Course Curriculum</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#course-module">Course Module</a></li>
        <li><a href="#course-details">Course Details</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact"><button className="btn">Enroll Now</button></a></li>
      </ul>
    </nav>
  );

};

export default Navbar;
