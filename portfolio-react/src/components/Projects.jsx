import React from "react";
import Image1 from "../assets/gvgif.gif";
import Image2 from "../assets/portscreen.png";
import Image3 from "../assets/tsmarter.gif";

const projects = [
  {
    name: "Green Valley",
    description: "Spielerischer Lebenslauf im Stile von Stardew Valley.",
    image: Image1,
    tools: ["Unity", "C#", "Photoshop"],
  },
  {
    name: "PortfolioPage",
    description: "Ansprechende Portfolio Website.",
    image: Image2,
    tools: ["HTML", "CSS", "JavaScript", "React", "Express", "MongoDB"],
  },
  {
    name: "TechSmarter",
    description: "Interaktive Lern- und Quiz Website.",
    image: Image3,
    tools: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-bachground py-20">
      <h2
        className="text-primary text-2xl md:text-4xl font-semibold text-center pb-14 md:pb-8"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          backgroundImage: "linear-gradient(to right, #6E0056, #0F9DF8)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Meine Projekte
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="backdrop-blur-2xl rounded-lg shadow-lg shadow-stone-950/50 border p-5 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl text-white mt-4">{project.name}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>

            <div className="flex items-center gap-2 flex-wrap mt-3">
              {project.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="text-[11px] bg-slate-950 rounded md:text-xs px-3 py-1"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
