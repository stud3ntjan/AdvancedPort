import React from "react";

import PROFILE_PIC from "../assets/jangradi.png";
import { ABOUT_ME_DATA } from "../utils/data";

const AboutMe = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto py-10 md:py-24" id="about">
      <h5
        className="text-primary text-2xl md:text-4xl font-semibold text-center pb-14 md:pb-8"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          backgroundImage: "linear-gradient(to right, #6E0056, #0F9DF8)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        About me
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <img
          className="w-full h-80 object-contain rounded-lg mb-4 md:md-0"
          src={PROFILE_PIC}
          alt="profile pic"
        />

        <div className="col-span-2 bg-gradient-to-br from-fuchsia-950 to-slate-950 rounded-lg border border-slate-950 p-6">
          <p className="text-white text-xs md:text-[13px] font-normal text-justify leading-6">
            {ABOUT_ME_DATA.introduction}
            <br />
            {ABOUT_ME_DATA.background}
            <br />
            {ABOUT_ME_DATA.interests}
          </p>

          <br />

          <p className="text-white text-xs md:text-[13px] font-normal text-justify leading-6">
            {ABOUT_ME_DATA.skills} {ABOUT_ME_DATA.careerGoals}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <InfoCard
          count={ABOUT_ME_DATA.stats.yearsOfExperience}
          lable="Jahre Erfahrung"
        />

        <InfoCard
          count={ABOUT_ME_DATA.stats.numberOfProjects}
          lable="Fertige Projekte"
        />

        <InfoCard
          count={ABOUT_ME_DATA.stats.certificationsEarned}
          lable="Zertifikat"
        />
      </div>
    </section>
  );
};

const InfoCard = ({ lable, count }) => {
  return (
    <div className="bg-gradient-to-br from-fuchsia-950 to-slate-950 rounded-lg border border-slate-950 px-4 md:px-6 py-3">
      <h6 className="text-white text-xl md:text-2xl font-semibold">{count}</h6>

      <span className="text-white text-xs md:text-sm font-normal">{lable}</span>
    </div>
  );
};

export default AboutMe;
