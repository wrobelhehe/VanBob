import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/header.png";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes className="fatimes" />
          ) : (
            <FaBars className="fabars" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/swinki" onClick={closeMenu}>
              Świnki
            </a>
          </li>
          <li className="nav-item">
            <a href="/mioty" onClick={closeMenu}>
              Mioty
            </a>
          </li>
          <li className="nav-item">
            <a href="/planmioty" onClick={closeMenu}>
              Planowane mioty
            </a>
          </li>
          <li className="nav-item">
            <a href="/sprzedaz" onClick={closeMenu}>
              Sprzedaż
            </a>
          </li>
          <li className="nav-item">
            <a href="/wystawy" onClick={closeMenu}>
              Wystawy
            </a>
          </li>
          <li className="nav-item">
            <a href="/szukaj" onClick={closeMenu}>
              Szukaj
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
