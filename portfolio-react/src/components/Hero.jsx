import React from "react";
import { PROFILE_DATA } from "../utils/data";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { MdOutlineBadge } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
      className="max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto"
      id="hero"
    >
      <div className="flex-1 text-center md:text-left z-[1]">
        <span className="text-xs md:text-sm text-blue-200 font-thin">
          A Full Stack Developer
        </span>

        <h2 className="text-3xl mt-3 md:text-5xl md:mt-5">{name}</h2>

        <p className="w-full text-xs font-light text-neutral-50 leading-5 my-6 lg:w[38vw] md:text-sm md:leading-6 md:my-8">
          {tagline}
        </p>

        <button className="primary-btn">Contact Me</button>
      </div>

      <div className="">
        <div className="w-[403px] bg-gradient-to-br from-blue-950 to-slate-950 rounded-lg border border-blue-950 p-6">
          <div className="flex items-center justify-center">
            <img className="hero-img" src={PROFILE_PIC} alt="img one" />
          </div>

          <div className="bg-cardbg rounded-md text-center mt-3 p-4">
            <h5 className="">{name}</h5>
            <p className="">{jobTitle}</p>

            <div className="bg-cardbg rounded-md text-center mt-3 p-4">
              <HiOutlineLocationMarker />
              <p className="font-medium">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
