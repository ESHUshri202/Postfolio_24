import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Layers3, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import projects from "./projectsData";

const ProjectDetails = () => {
  const { title = "" } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const project = projects.find((item) => item.title === decodedTitle);

  if (!project) {
    return (
      <main className="project-detail-page">
        <section className="project-not-found">
          <span className="project-detail-eyebrow">Project archive</span>
          <h1>That project isn’t in the archive.</h1>
          <p>It may have moved, or the link may be out of date.</p>
          <Link className="project-back-link" to="/project">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to all projects
          </Link>
        </section>
      </main>
    );
  }

  const relatedProjects = projects
    .filter((item) => item.title !== project.title)
    .map((item) => ({
      ...item,
      overlap: (item.techStack || []).filter((technology) => (project.techStack || []).includes(technology)).length,
    }))
    .filter((item) => item.overlap > 0)
    .sort((first, second) => second.overlap - first.overlap)
    .slice(0, 3);

  const architectureSteps = project.systemArchitecture
    ? project.systemArchitecture.split(/\s*→\s*/)
    : [];

  return (
    <main className="project-detail-page">
      <nav className="project-detail-breadcrumb" aria-label="Breadcrumb">
        <Link to="/project">
          <ArrowLeft size={15} aria-hidden="true" />
          All projects
        </Link>
        <span aria-hidden="true">/</span>
        <span>{project.title}</span>
      </nav>

      <motion.header
        className="project-detail-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="project-detail-hero-copy">
          <span className="project-detail-eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            Project overview
          </span>
          <h1>{project.title}</h1>
          <p className="project-detail-summary">{project.details}</p>
          <div className="project-detail-hero-actions">
            {project.projectLink && project.projectLink !== "#" && (
              <a
                className="project-detail-primary"
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore live project
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
            <Link className="project-detail-secondary" to="/project">
              Browse more work
            </Link>
          </div>
          {project.techStack?.length > 0 && (
            <div className="project-detail-tech-chips" aria-label="Technology stack">
              {project.techStack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          )}
        </div>

        <div className="project-detail-visual">
          <img src={project.image} alt={`${project.title} preview`} />
          <div className="project-detail-visual-caption">
            <span>Featured project</span>
            <Layers3 size={17} aria-hidden="true" />
          </div>
          <span className="project-detail-visual-glow" aria-hidden="true" />
        </div>
      </motion.header>

      <div className="project-detail-content">
        <motion.section
          className="project-detail-overview"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="project-section-label">
            <span>01</span>
            <span>The idea</span>
          </div>
          <div>
            <h2>About the project</h2>
            <p>{project.OverView || project.details}</p>
          </div>
        </motion.section>

        {project.keyFeatures?.length > 0 && (
          <motion.section
            className="project-detail-section"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
          >
            <div className="project-section-heading">
              <div className="project-section-label">
                <span>02</span>
                <span>Highlights</span>
              </div>
              <h2>What it brings</h2>
            </div>
            <div className="project-feature-grid">
              {project.keyFeatures.map((feature, index) => (
                <article className="project-feature-card" key={feature}>
                  <span className="project-feature-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="project-feature-check"><Check size={15} aria-hidden="true" /></span>
                  <h3>{feature}</h3>
                </article>
              ))}
            </div>
          </motion.section>
        )}

        {architectureSteps.length > 0 && (
          <motion.section
            className="project-detail-section project-architecture"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
          >
            <div className="project-section-heading">
              <div className="project-section-label">
                <span>03</span>
                <span>Under the hood</span>
              </div>
              <h2>How it works</h2>
            </div>
            <div className="project-architecture-flow">
              {architectureSteps.map((step, index) => (
                <div className="project-architecture-step" key={`${step}-${index}`}>
                  <span className="project-architecture-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                  {index < architectureSteps.length - 1 && (
                    <ArrowRight className="project-architecture-arrow" size={17} aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {project.ListDown?.length > 0 && (
          <motion.section
            className="project-detail-section project-capabilities"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
          >
            <div className="project-section-heading">
              <div className="project-section-label">
                <span>04</span>
                <span>Capabilities</span>
              </div>
              <h2>Made to do more</h2>
            </div>
            <ul>
              {project.ListDown.map((item) => (
                <li key={item.id}>
                  <Check size={15} aria-hidden="true" />
                  <span>{item.content}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {project.analysis && (
          <motion.figure
            className="project-detail-analysis"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <img src={project.analysis} alt={`${project.title} analysis`} loading="lazy" />
          </motion.figure>
        )}

        {project.trends && (
          <section className="project-detail-section">
            <div className="project-section-heading">
              <div className="project-section-label">
                <span>05</span>
                <span>Insights</span>
              </div>
              <h2>Trends</h2>
            </div>
            <p className="project-detail-prose">{project.trends}</p>
          </section>
        )}

        {project.benefits?.length > 0 && (
          <motion.section
            className="project-detail-benefits"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
          >
            <div className="project-section-label">
              <span>06</span>
              <span>Why it matters</span>
            </div>
            <h2>Built for real-world impact.</h2>
            <div className="project-benefit-list">
              {project.benefits.map((benefit) => (
                <span key={benefit}><Check size={15} aria-hidden="true" />{benefit}</span>
              ))}
            </div>
            {project.conclusion && <p>{project.conclusion}</p>}
          </motion.section>
        )}

        {relatedProjects.length > 0 && (
          <section className="project-detail-related">
            <div className="project-section-heading">
              <div className="project-section-label">
                <span>07</span>
                <span>Keep exploring</span>
              </div>
              <h2>Related projects</h2>
            </div>
            <div className="project-related-grid">
              {relatedProjects.map((related) => (
                <Link
                  className="project-related-card"
                  key={related.title}
                  to={`/project/${encodeURIComponent(related.title)}`}
                >
                  <div>
                    <span>{related.techStack?.slice(0, 2).join(" · ")}</span>
                    <h3>{related.title}</h3>
                  </div>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProjectDetails;
