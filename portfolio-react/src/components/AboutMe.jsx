import React from "react";

import PROFILE_PIC from "../assets/jangradi.png";
import { ABOUT_ME_DATA } from "../utils/data";

const AboutMe = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto py-10 md:py-24" id="about">
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center md:text-left pb-10 md:pb-14">
        About me
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <img className="" src={PROFILE_PIC} alt="profile pic" />

        <div className="">
          <p className="">
            {ABOUT_ME_DATA.introduction} {ABOUT_ME_DATA.background}
            {""}
            {ABOUT_ME_DATA.interests}
          </p>

          <br />

          <p className="">
            {ABOUT_ME_DATA.skills} {ABOUT_ME_DATA.careerGoals}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
