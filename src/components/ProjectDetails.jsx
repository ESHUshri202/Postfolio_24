
import { useParams, Link } from 'react-router-dom';
import projects from './projectsData';
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const recommendations = {
    React: ["Medical Recommendation System", "Feast of Flavours", "Netflix Clone", "Mamba AI"],
    Python: ["Medical Recommendation System", "Medico-Brain Stroke Prediction", "Dog & Cat Classification", "Smart Attendance System"],
    "Machine Learning": ["Medical Recommendation System", "Medico-Brain Stroke Prediction", "Stock Price Prediction Model"],
    Flask: ["Medical Recommendation System", "Medico-Brain Stroke Prediction"],
    Django: ["Medical Recommendation System", "Medico-Brain Stroke Prediction"],
    "Tailwind CSS": ["Feast of Flavours", "Company X Template", "Netflix Clone"],
    // Add more technologies and their recommendations as needed
};

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

    var count = 1;
    return (
        <>
            <div className="p-6 max-w-4xl mx-auto text-white">
                <div className='p-4 mb-8 rounded-full w-[20%] sm:w-[12%] md:w-[10%] lg:w-[7%] text-2xl bg-white/10 transition-transform duration-700 hover:rotate-[-180deg]'>
                    <Link to="/project">
                        <FaArrowRight />
                    </Link>
                </div>
                <img src={project.image} alt={project.title} className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-xl mb-6 shadow-xl" />
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
                <h1 className='text-xl sm:text-2xl p-2 mb-4'>Overview Of Project</h1>
                <h2 className='p-2 mb-4'>{project.OverView}</h2>
                {project.ListDown && project.ListDown.length > 0 && (
                    <ol className='pl-6 mb-4'>
                        {project.ListDown.map((item, index) => (
                            <li key={item.id} className=''><span>{count++}. </span> {item.content}</li>
                        ))}
                    </ol>
                )}
                {
                    project.keyFeatures && (
                        <>
                            <h1 className='text-2xl sm:text-3xl mb-4 pt-6 '>Key Features</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 w-full items-center justify-center'>
                                {project.keyFeatures.map((tech) => (
                                    <span key={tech} className="p-4 text-center text-lg sm:text-2xl rounded-2xl h-full shadow-lg shadow-slate-800 bg-gradient-to-r from-green-900 to-indigo-900 hover:bg-gradient-to-r hover:from-black hover:to-blue-800 hover:duration-200 h-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </>
                    )
                }
                {project.systemArchitecture && (
                    <div className='text-wrap'>
                        <h1 className="p-2 text-2xl sm:text-3xl">System Architecture</h1>
                        <span className='pt-6 pb-6 m-2 flex flex-wrap text-[18px] sm:text-[22px] bg-gradient-to-r from-slate-900 to-slate-700 text-center justify-center rounded-xl'>{project.systemArchitecture}</span>
                    </div>
                )}
                <div>
                    {project.analysis && (
                        <img src={project.analysis} alt={project.title} className="w-full h-auto object-cover rounded-sm mb-6 shadow-xl" />
                    )}
                </div>
                {project.trends && (
                    <div>
                        <h1 className='text-xl sm:text-2xl p-2 mb-4'>💹 Trends </h1>
                        <span>{project.trends}</span>
                    </div>
                )}
                <br />
                <div className='p-2'>
                    {
                        project.techStack && (
                            <>
                                <h1 className='text-2xl sm:text-3xl mb-4 pt-6 '>Technologies Used</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 w-full items-center justify-center">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="p-8 text-center flex flex-wrap justify-center text-lg sm:text-2xl rounded-2xl shadow-lg shadow-slate-800 bg-gradient-to-r from-slate-900 to-indigo-900 hover:bg-gradient-to-r hover:from-red-800 hover:to-blue-800 hover:duration-200 h-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )
                    }
                </div>
                {project.projectLink !== "#" && (
                    <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 px-4 sm:px-5 py-2 rounded-xl text-white font-semibold hover:bg-green-700 transition"
                    >
                        View Project
                    </a>
                )}
                <div className='mt-10'>
                    <h1 className='text-2xl sm:text-3xl mb-4'>Recommended Projects</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {project.techStack && project.techStack.map((tech) => (
                            recommendations[tech] ? recommendations[tech].map((recommendedProject) => (
                                <div
                                    key={recommendedProject}
                                    className="bg-slate-900 shadow-md rounded-xl p-4 hover:shadow-lg transition"
                                >
                                    <Link
                                        to={`/project/${encodeURIComponent(recommendedProject)}`}
                                        className="text-lg text-blue-200 flex flex-wrap text-center jutify-center  hover:text-blue-700"
                                    >
                                        {recommendedProject}
                                    </Link>
                                </div>
                            )) : null
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;