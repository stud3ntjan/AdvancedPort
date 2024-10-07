import React from "react";
import { PROFILE_DATA } from "../utils/data";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { MdOutlineBadge } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import PROFILE_PIC from "../assets/janclean4k.png";

const Hero = () => {
  const {
    name,
    tagline,
    jobTitle,
    yearsOfExperience,
    location,
    email,
    skills,
  } = PROFILE_DATA;

  return (
    <section
      className="relative max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto"
      id="hero"
    >
      <div className="flex-1 text-center md:text-left z-[1]">
        <span className="text-xs md:text-sm text-white font-extralight">
          A Media Designer & Frontend Developer
        </span>

        <h2 className="text-3xl mt-3 md:text-5xl md:mt-5">{name}</h2>

        <p className="w-full text-xs font-light text-white leading-5 my-6 lg:w[38vw] md:text-sm md:leading-6 md:my-8">
          {tagline}
        </p>

        <button
          className="pulse primary-btn"
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
        </button>
      </div>

      <div className="flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]">
        <div className="w-[403px] bg-transparent backdrop-blur-2xl rounded-lg shadow-lg shadow-stone-950/30 p-6">
          <div className="flex items-center justify-center">
            <img className="hero-img" src={PROFILE_PIC} alt="img one" />
          </div>

          <div className="bg-transparent rounded-md text-center mt-3 p-4">
            <h5 className="text-sm md:text-base text-white">{name}</h5>
            <p className="text-slate-400 text-xs md:font-medium mt-1">
              {jobTitle}
            </p>

            <div className="flex items-center justify-center gap-2 text-white text-xs mt-1 ">
              <HiOutlineLocationMarker />
              <p className="font-medium">{location}</p>
            </div>
          </div>

          <InfoTile
            icon={<FiMail size={20} className="text-neutral-50 " />}
            text={email}
          />

          <InfoTile
            icon={<MdOutlineBadge size={20} className="text-neutral-50" />}
            text={`${yearsOfExperience} Jahre Erfahrung`}
          />

          <div className="flex items-center gap-2 flex-wrap my-3">
            {skills.map((item) => (
              <div
                key={item}
                className="text-[11px] bg-fuchsia-950 rounded md:text-xs px-3 py-1"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fuchsia-950 p-2 rounded"
            >
              <FaGithub className="text-lg md:text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/janlie"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fuchsia-950 p-2 rounded"
            >
              <FaLinkedin className="text-lg md:text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="ui-circle absolute top-6 md:top-10 -left-10 md:left-0"></div>
    </section>
  );
};

const InfoTile = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 bg-fuchsia-950 p-4 mt-3 rounded-md">
      {icon}
      <p className="text-xs md:text-sm font-normal">{text}</p>
    </div>
  );
};

export default Hero;
