import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import projects from './projectsData'; // Import the project data
import Snowfall from "react-snowfall";

const Project = () => {
  const [selected, setSelected] = useState("All");

  function handleSelect(e) {
    setSelected(e.target.value);
  }

  // Function to filter projects based on the selected category
  const filteredProjects = projects.filter((project) => {
    if (selected === "All") return true; // Show all projects
    if (selected === "Front-End Development") {
      return project.techStack.includes("HTML") || project.techStack.includes("CSS") || project.techStack.includes("React Js") || project.techStack.includes("Tailwind CSS");
    }
    if (selected === "Machine Learning") {
      return project.techStack.includes("Python") && (project.techStack.includes("Machine Learning") || project.techStack.includes("TensorFlow") || project.techStack.includes("Streamlit") || project.techStack.includes("Flask") || project.techStack.includes("Django"));
    }
    if (selected === "Data Analysis") {
      return project.techStack.includes("Power BI");
    }
    return false; // Default case
  });

  return (
    <>
    <Snowfall/>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-5xl"
      >
        Projects
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center items-center"
      >
        <span className="border-4 rounded-full border-blue-500 m-2 w-1"></span>
        <span className="border-4 rounded-full border-blue-500 m-2 w-2"></span>
        <span className="border-4 rounded-full border-blue-500 m-2 w-4"></span>
        <span className="border-4 rounded-full border-blue-500 m-2 w-8"></span>
        <span className="border-4 rounded-full border-blue-500 m-2 w-8"></span>
        <span className="border-4 rounded-full border-blue-500 m-2 w-4"></span>
        <span className="border-4 rounded-full border-blue-500 m-2 w-2"></span>
        <span className="border-4 rounded-full border-blue-500 m-2 w-1"></span>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center items-center"
      >
        {/* ... (Your existing span elements) ... */}
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 place-items-center gap-2"
      >
        {/* <div className="mt-6 bg-blue-100 p-1 rounded-2xl">
          <select
            value={selected}
            onChange={handleSelect}
            className="p-4 hover:text-xl m-2 bg-blue-950 text-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option>All</option>
            <option>Front-End Development</option>
            <option>Machine Learning</option>
            <option>Data Analysis</option>
          </select>
        </div> */}
        <div className="mt-6 bg-none p-1 rounded-2xl relative">
          <select
            value={selected}
            onChange={handleSelect}
            className="appearance-none w-full p-4 pr-10 hover:text-xl m-2 bg-blue-950 text-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option>All</option>
            <option>Front-End Development</option>
            <option>Machine Learning</option>
            <option>Data Analysis</option>
          </select>

          {/* Custom arrow positioned slightly left */}
          <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
            <svg
              className="h-4 w-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
            </svg>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 place-items-center gap-10">
          {filteredProjects.map((project, index) => (
            <Link to={`/project/${encodeURIComponent(project.title)}`}>
              <div key={index} className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                  <img
                    className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="p-4">
                  <h6 className="mb-2 text-slate-800 text-xl font-semibold">{project.title}</h6>
                  <p className="text-slate-600 leading-normal font-light">{project.details}</p>
                </div>
                <div className="flex px-4 pt-0">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="px-4 pb-4 pt-0 mt-2">
                  <Link to={project.projectLink}>
                    <button
                      className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      Project Link
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Project;