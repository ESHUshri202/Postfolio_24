import { useParams, Link } from 'react-router-dom';
import projects from './projectsData';
import { FaArrowRight  } from "react-icons/fa";

const ProjectDetails = () => {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const project = projects.find(p => p.title === decodedTitle);

    if (!project) {
        return (
            <div className="text-center text-white p-10">
                <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                <Link to="/" className="text-blue-400 underline">Go Back</Link>
            </div>
        );
    }

    return (
        <>
            <div className="p-6 max-w-4xl mx-auto text-white">
                <div className='p-4 mb-8 rounded-full w-[20%] sm:w-[12%] md:w-[10%] lg:w-[7%] text-2xl bg-white/10 transition-transform duration-700 hover:rotate-[-180deg]'>
                    <Link to="/project">
                        <FaArrowRight  />
                    </Link>
                </div>
                <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-xl mb-6 shadow-xl" />
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg mb-6">{project.details}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="bg-blue-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
                {project.projectLink !== "#" && (
                    <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 px-5 py-2 rounded-xl text-white font-semibold hover:bg-green-700 transition"
                    >
                        View Project
                    </a>
                )}
            </div>
        </>
    );
};

export default ProjectDetails;
