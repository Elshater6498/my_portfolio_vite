import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
// import "./nav.css";

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
          <ul
            className={`flex transition-all fixed flex-col w-full h-full bottom-0 items-center 
            sm:z-auto sm:h-auto sm:w-auto sm:static sm:flex sm:flex-row
${isMenuVisible ? "left-0 bg-body-color text-2xl gap-8 pt-24" : "gap-6 font-extrabold"}`}
          >
            <li className="">
              <Link
                to="/"
                className="text-text-color-light font-medium uppercase  hover:text-body-color"
                onClick={() => setIsMenuVisible(false)}
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="/about"
                className="text-text-color-light font-medium uppercase  hover:text-body-color"
                onClick={() => setIsMenuVisible(false)}
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                to="/projects"
                className="text-text-color-light font-medium uppercase  hover:text-body-color"
                onClick={() => setIsMenuVisible(false)}
              >
                Projects
              </Link>
            </li>
            <li className="">
              <Link
                to="/contact"
                className="text-text-color-light font-medium uppercase  hover:text-body-color"
                onClick={() => setIsMenuVisible(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div
            className="text-text-color-light text-xl z-50 cursor-pointer block sm:hidden"
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
