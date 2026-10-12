/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
    SiCss3,
    SiDjango,
    SiDocker,
    SiFastapi,
    SiFlask,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiJupyter,
    SiMongodb,
    SiMicrosoftsqlserver,
    SiMicrosoftexcel,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiPostgresql,
    SiPowerbi,
    SiPython,
    SiReact,
    SiScikitlearn,
    SiTailwindcss,
    SiTensorflow,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { Code2, Database, Layers3, Sparkles } from "lucide-react";

const pythonStack = [
    { name: "Python", icon: SiPython, color: "#ffd75e" },
    { name: "Django", icon: SiDjango, color: "#79bd8c" },
    { name: "Flask", icon: SiFlask, color: "#eee7d8" },
    { name: "FastAPI", icon: SiFastapi, color: "#69d4c3" },
    { name: "REST APIs", icon: Code2, color: "#d6bd80" },
    { name: "NumPy", icon: SiNumpy, color: "#75bdf1" },
    { name: "Pandas", icon: SiPandas, color: "#c9a0e5" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#efa85c" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#f0a044" },
    { name: "Power BI", icon: SiPowerbi, color: "#e4c93d" },
    { name: "Excel", icon: SiMicrosoftexcel, color: "#83c49a" },
];

const databases = [
    { name: "MySQL", icon: SiMysql, color: "#69bde8", note: "Relational" },
    { name: "MongoDB", icon: SiMongodb, color: "#83c49a", note: "Document" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#86aee3", note: "Relational" },
    { name: "MSSQL", icon: SiMicrosoftsqlserver, color: "#e77f83", note: "Relational" },
];

const frontendStack = [
    { name: "HTML5", icon: SiHtml5, color: "#f28b62" },
    { name: "CSS3", icon: SiCss3, color: "#7aa8ec" },
    { name: "JavaScript", icon: SiJavascript, color: "#f0d566" },
    { name: "React", icon: SiReact, color: "#70d4e8" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#69d4c3" },
];

const developerTools = [
    { name: "Git", icon: SiGit, color: "#ed8d71" },
    { name: "Docker", icon: SiDocker, color: "#76aee8" },
    { name: "Jupyter", icon: SiJupyter, color: "#f0a044" },
    { name: "VS Code", icon: BiLogoVisualStudio, color: "#72bde9" },
];

const SkillTile = ({ skill, index, compact = false }) => {
    const Icon = skill.icon;

    return (
        <motion.div
            className={`tech-skill-tile${compact ? " tech-skill-tile-compact" : ""}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.045 }}
            whileHover={{ y: -4 }}
            title={skill.name}
        >
            <Icon className="tech-skill-icon" style={{ color: skill.color }} aria-hidden="true" />
            <span className="tech-skill-name">{skill.name}</span>
            {skill.note && <span className="tech-skill-note">{skill.note}</span>}
        </motion.div>
    );
};

const TechGroup = ({ className = "", icon: Icon, eyebrow, title, description, skills, compact = false }) => (
    <motion.section
        className={`tech-group ${className}`}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.5 }}
    >
        <div className="tech-group-heading">
            <span className="tech-group-icon"><Icon size={19} aria-hidden="true" /></span>
            <div>
                <span className="tech-group-eyebrow">{eyebrow}</span>
                <h2>{title}</h2>
            </div>
        </div>
        <p className="tech-group-description">{description}</p>
        <div className={`tech-skill-grid${compact ? " tech-skill-grid-compact" : ""}`}>
            {skills.map((skill, index) => (
                <SkillTile key={skill.name} skill={skill} index={index} compact={compact} />
            ))}
        </div>
    </motion.section>
);

const Technologies = () => (
    <main className="tech-page">
        <motion.header
            className="tech-hero"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
        >
            <div className="tech-hero-copy">
                <span className="tech-hero-eyebrow">
                    <Sparkles size={14} aria-hidden="true" />
                    Tools I build with
                </span>
                <h1>Full Stack <span>Python</span><br />Technologies</h1>
                <p>
                    From backend logic and intelligent data tools to polished interfaces and production databases.
                </p>
            </div>
            <div className="tech-hero-mark" aria-hidden="true">
                <div className="tech-orbit tech-orbit-one" />
                <div className="tech-orbit tech-orbit-two" />
                <div className="tech-hero-core"><SiPython /></div>
                <span className="tech-orbit-dot tech-orbit-dot-one" />
                <span className="tech-orbit-dot tech-orbit-dot-two" />
            </div>
            <div className="tech-hero-footer">
                <span><Layers3 size={15} aria-hidden="true" /> Full stack toolkit</span>
                <span><Database size={15} aria-hidden="true" /> Four database systems</span>
            </div>
        </motion.header>

        <div className="tech-groups">
            <TechGroup
                className="tech-group-python"
                icon={Code2}
                eyebrow="Core stack"
                title="Python development"
                description="Backend frameworks, API development, machine learning, and data tools — brought together in one Python ecosystem."
                skills={pythonStack}
            />
            <TechGroup
                className="tech-group-databases"
                icon={Database}
                eyebrow="Data layer"
                title="Working databases"
                description="Hands-on experience across relational and document databases."
                skills={databases}
                compact
            />
            <TechGroup
                className="tech-group-frontend"
                icon={Layers3}
                eyebrow="User experience"
                title="Frontend"
                description="Building responsive interfaces that connect cleanly to the backend."
                skills={frontendStack}
                compact
            />
            <TechGroup
                className="tech-group-tools"
                icon={Sparkles}
                eyebrow="Build & ship"
                title="Developer tools"
                description="Everyday tools for developing, testing, and shipping software."
                skills={developerTools}
                compact
            />
        </div>
    </main>
);

export default Technologies;
