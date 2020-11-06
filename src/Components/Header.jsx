import React from "react";
import "../Styles/header.css";

function Header() {
  return (
    <div>
      <nav className="header-format">
        <a href="#about" className="link">About</a>
        <a href="#projects" className="link">Projects</a>
        <a href="#contact" className="link">Contact</a>
      </nav>
    </div>
  );
}

export default Header;
