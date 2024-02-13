import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./nav.css";

function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header
      className="w-full bg-transparent fixed top-0 left-0 z-50"
      id="header"
    >
      <nav className="h-14 flex justify-between items-center max-w-4xl mx-auto px-4">
        <Link
          to="/"
          className="text-text-color-light z-50 uppercase font-bold tracking-wide flex items-center gap-1 transition duration-500 hover:text-body-color"
          alt="logo"
          onClick={() => setIsMenuVisible(false)}
        >
          <i className="bx bx-planet font-semibold"></i> elshater
        </Link>

        <div className="flex items-center">
          {/* links */}
          <div
            className={
              isMenuVisible
                ? "fixed top-0 -right-[100%] bg-body-color flex justify-center py-20 transition duration-500 w-full h-full"
                : "nav-menu"
            }
            id="nav-menu"
          >
            <ul className="flex flex-col items-center gap-8">
              <li className="nav__item">
                <Link
                  to="/"
                  className="nav__link"
                  onClick={() => setIsMenuVisible(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/about"
                  className="nav__link"
                  onClick={() => setIsMenuVisible(false)}
                >
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/projects"
                  className="nav__link"
                  onClick={() => setIsMenuVisible(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/contact"
                  className="nav__link"
                  onClick={() => setIsMenuVisible(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <i className="bx bx-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
