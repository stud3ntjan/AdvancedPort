import React from "react";

import { SKILLS } from "../utils/data";

const Skills = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto pb-20" id="skills">
      <div className="bg-gradient-to-br from-fuchsia-950 to-slate-950 rounded-lg border border-fuchsia-500 p-4 md:p-8">
        <h5 className="text-xl font-medium mb-5">Skills</h5>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SKILLS.map((skill) => (
            <SkillsCard
              key={skill.id}
              icon={skill.icon}
              iconProps={skill.iconProps}
              titel={skill.titel}
              comment={skill.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsCard = ({ icon: IconBase, iconProps, titel, comment }) => {
  return <div className=""></div>;
};

export default Skills;
