import React from "react";

import { SKILLS } from "../utils/data";

const Skills = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto pb-20" id="skills">
      <div className="backdrop-blur-2xl border shadow-lg shadow-stone-950/30 rounded-lg p-4 md:p-8">
        <h5
          className="text-xl font-medium mb-5"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Skills
        </h5>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SKILLS.map((skill) => (
            <SkillsCard
              key={skill.id}
              icon={skill.icon}
              iconProps={skill.iconProps}
              title={skill.title}
              comment={skill.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsCard = ({ icon: Icon, iconProps, title, comment }) => {
  return (
    <div className="bg-slate-950 rounded border border-slate-50 p-5">
      <div className="flex items-center justify-between mb-5">
        <p className="text-base">{title}</p>
        <Icon className="text-white text-3xl" />
      </div>

      <p className="text-xs font-light leading-5 opacity-80">{comment}</p>
    </div>
  );
};

export default Skills;
