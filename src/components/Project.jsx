/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "./projectsData";

const filters = [
  { label: "All work", value: "All" },
  { label: "Frontend", value: "Front-End Development Projects" },
  { label: "Python", value: "Python Projects" },
  { label: "AI & machine learning", value: "Machine Learning Projects" },
  { label: "Data", value: "Data Analysis Projects" },
];

const matchesCategory = (project, category) => {
  if (category === "All") return true;

  const stack = project.techStack || [];

  if (category === "Front-End Development Projects") {
    return ["HTML", "CSS", "React Js", "React.js", "Tailwind CSS", "JavaScript", "Bootstrap"]
      .some((technology) => stack.includes(technology));
  }

  if (category === "Machine Learning Projects") {
    return stack.includes("Python") && ["Machine Learning", "TensorFlow", "Streamlit", "Flask", "Django"]
      .some((technology) => stack.includes(technology)) || stack.includes("SQL");
  }

  if (category === "Python Projects") {
    return stack.includes("Python") && ["Django", "OpenCV", "Streamlit", "Flask", "FastAPI"]
      .some((technology) => stack.includes(technology));
  }

  if (category === "Data Analysis Projects") {
    return ["Power BI", "Tableau", "Excel", "SQL"].some((technology) => stack.includes(technology)) ||
      stack.includes("Python") && ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
        .some((technology) => stack.includes(technology));
  }

  return false;
};

const getProjectType = (project) => {
  const stack = project.techStack || [];
  if (stack.includes("Machine Learning") || stack.includes("TensorFlow")) return "AI & Machine Learning";
  if (stack.includes("Python")) return "Python & Data";
  if (stack.includes("React Js") || stack.includes("React.js") || stack.includes("HTML")) return "Web Experience";
  return "Selected Project";
};

const ProjectCard = ({ project, index }) => {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 180,
    damping: 18,
  });

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.article
      className="project-card-wrap"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: Math.min(index % 3, 2) * 0.08 }}
      style={{ perspective: 1100 }}
    >
      <motion.div
        className="project-card"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <Link
          className="project-card-main"
          to={`/project/${encodeURIComponent(project.title)}`}
          aria-label={`View details for ${project.title}`}
        >
          <div className="project-card-image">
            <img
              src={project.image}
              alt=""
              loading="lazy"
              draggable="false"
            />
            <span className="project-card-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="project-card-type">{getProjectType(project)}</span>
            <span className="project-image-action" aria-hidden="true">
              <ArrowUpRight size={19} />
            </span>
          </div>

          <div className="project-card-copy">
            <h2>{project.title}</h2>
            <p>{project.details}</p>
          </div>
        </Link>

        <div className="project-card-bottom">
          <div className="project-tags" aria-label="Technologies">
            {(project.techStack || []).slice(0, 4).map((technology) => (
              <span className="project-tag" key={technology}>{technology}</span>
            ))}
            {(project.techStack || []).length > 4 && (
              <span className="project-tag project-tag-more">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
          {project.projectLink && project.projectLink !== "#" && (
            <a
              className="project-live-link"
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live project in a new tab`}
            >
              Live
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
};

const Project = () => {
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch = !query ||
        project.title.toLowerCase().includes(query) ||
        project.details.toLowerCase().includes(query) ||
        (project.techStack || []).some((technology) => technology.toLowerCase().includes(query));

      return matchesCategory(project, selected) && matchesSearch;
    });
  }, [search, selected]);

  return (
    <main className="projects-page">
      <motion.header
        className="projects-hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="projects-eyebrow">
          <Sparkles size={14} aria-hidden="true" />
          <span>A collection of things I have made</span>
        </div>
        <div className="projects-heading-row">
          <div>
            <h1>Selected <span>work.</span></h1>
            <p className="projects-intro">
              Experiments, useful tools, and thoughtful digital experiences — built with curiosity.
            </p>
          </div>
          <div className="projects-total" aria-live="polite">
            <strong>{String(filteredProjects.length).padStart(2, "0")}</strong>
            <span>projects</span>
          </div>
        </div>
        <div className="projects-rule" aria-hidden="true">
          <span />
        </div>
      </motion.header>

      <section className="projects-browser" aria-label="Browse projects">
        <div className="project-filter-row" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              className={`project-filter${selected === filter.value ? " is-active" : ""}`}
              key={filter.value}
              type="button"
              aria-pressed={selected === filter.value}
              onClick={() => setSelected(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <label className="project-search">
          <Search size={17} aria-hidden="true" />
          <span className="projects-visually-hidden">Search projects</span>
          <input
            type="search"
            placeholder="Find a project or technology..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <kbd>/</kbd>
        </label>
      </section>

      {filteredProjects.length > 0 ? (
        <motion.section className="projects-grid" layout aria-label="Project list">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.section>
      ) : (
        <div className="projects-empty" role="status">
          <Sparkles size={22} aria-hidden="true" />
          <p>No projects found. Try another search or category.</p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSelected("All");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
};

export default Project;
