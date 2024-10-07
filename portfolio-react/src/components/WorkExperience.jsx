import React from "react";

import { WORK_EXPERIENCE } from "../utils/data";

// bg-gradient-to-r from-fuchsia-500 to-sky-500 text-transparent bg-clip-text GRADIENT
const WorkExperience = () => {
  return (
    <section
      className="max-w-screen-xl mx-auto pb-0 md:pb-20 px-6 md:px-20 relative"
      id="experience"
    >
      <h5
        className="text-primary text-2xl md:text-4xl font-semibold text-center pb-14 md:pb-4"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          backgroundImage: "linear-gradient(to right, #3a585d, #0F9DF8)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Work Experience
      </h5>

      {WORK_EXPERIENCE.map((item, index) => (
        <WorkExpericeneCard
          key={item.company}
          index={index}
          company={item.company}
          position={item.position}
          duration={item.duration}
          description={item.description}
          isLast={WORK_EXPERIENCE.length === index + 1}
        />
      ))}
    </section>
  );
};

const WorkExpericeneCard = ({
  company,
  position,
  duration,
  description,
  index,
  isLast,
}) => {
  return (
    <div className="relative">
      <div
        className={`hidden md:block h-[120px] border-b ${
          index > 0 ? "min-w-96 border-l" : " ml-auto w-40"
        } ${isLast ? "w-40 mr-auto" : ""} border-slate-950 border-dashed`}
      />

      {!isLast && (
        <div className="hidden md:block min-w-96 h-[140px] border-r border-b border-slate-950 border-dashed" />
      )}

      <div className="bg-gradient-to-br from-fuchsia-950 to-slate-950 rounded-lg border border-slate-950 p-4 mx-0 md:mx-10 md:absolute top-[70px] mb-6 md:mb-0">
        <div className="flex items-center justify-between flex-1">
          <div>
            <p className="text-white text-[13.5px] md:text-base font-medium leading-4 md:leading-5">
              {company}
            </p>
            <span className="text-slate-500 text-xs">{position}</span>
          </div>

          <div className="text-slate-100 text-[11px] md:text-xs font-medium bg-fuchsia-950 rounded border border-slate-50 border-dashed justify-center items-center px-4 py-2">
            {duration}
          </div>
        </div>

        <p className="text-fuchsia-50 text-xs font-normal leading-5 mt-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
