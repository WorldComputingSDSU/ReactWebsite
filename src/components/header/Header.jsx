import React from "react";
import { FaBars } from "react-icons/fa";
import "./header.css"; // Make sure to create a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#join">Join</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
          <li>
            <a href="#board">Board</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
        </ul>
      </nav>
      <div className="menu-icon">
        <FaBars size={20} />
      </div>
    </header>
  );
};

export default Header;
