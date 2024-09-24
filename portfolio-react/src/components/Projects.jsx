import React from "react";

const projects = [
  {
    name: "Projekt 1",
    description: "Kurze Beschreibung von Projekt 1",
    image: "",
  },
  {
    name: "Projekt 2",
    description: "Kurze Beschreibung von Projekt 2",
    image: "",
  },
  {
    name: "Projekt 3",
    description: "Kurze Beschreibung von Projekt 3",
    image: "",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-bachground py-20">
      <h2 className="text-primary text-2xl md:text-4xl font-semibold text-center pb-14 md:pb-8">
        Meine Projekte
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-fuchsia-950 to-slate-950 rounded-lg border border-fuchsia-500 p-5 shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl text-white mt-4">{project.name}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
