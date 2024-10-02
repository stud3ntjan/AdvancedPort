import React from "react";

const MobileNavbar = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
        <div className="ui-circle -ml-20 -mt-10" />

        <ul>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("hero")}>
              Home
            </a>
          </li>

          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("skills")}>
              Skills
            </a>
          </li>

          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("experience")}>
              Work Experience
            </a>
          </li>

          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("projects")}>
              Projects
            </a>
          </li>

          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("about")}>
              About Me
            </a>
          </li>
        </ul>

        <button
          className="h-10 bg-primary text-white text-xs md:text-sm px-6 rounded hover:bg-neutral-900 hover:text-white md:block shadow-md shadow-neutral-900"
          onClick={() => handleScroll("contact")}
        >
          Contact Me
        </button>
      </div>

      <div
        onClick={() => {
          setIsMenuOpen(false);
        }}
        className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
      />
    </div>
  );
};

export default MobileNavbar;
