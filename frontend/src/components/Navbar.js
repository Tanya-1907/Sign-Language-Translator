import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left side */}
      <div className="navbar-left">
        <img src={logo} alt="HandTalk Logo" className="navbar-logo" />
        <span className="navbar-title">HandTalk</span>
      </div>

      {/* Hamburger icon (mobile) */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Right side links */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/translate" onClick={() => setIsOpen(false)}>Translate</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
