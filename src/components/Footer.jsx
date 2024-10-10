import React from "react";
import { Link } from "react-scroll";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-footer-gradient-br text-white py-8 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 relative z-10">
        <ul className="flex items-center gap-4 text-sm">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="text-center text-xs">
          <p>"Coding is like humor. If you have to explain it, it's bad."</p>
        </div>

        <div className="text-center text-xs">
          &copy; {new Date().getFullYear()} Jan Liedgens
        </div>
      </div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </footer>
  );
};

export default Footer;
