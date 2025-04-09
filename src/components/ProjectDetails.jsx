import { useParams, Link } from 'react-router-dom';
import projects from './projectsData';
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

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

    // useEffect(() => {
    //     const animation = gsap.to('h1', {
    //         x: 200,
    //         scrollTrigger: {
    //             trigger: 'h1',
    //             start: 'top bottom',
    //             end: 'bottom top',
    //             scrub: true
    //         }
    //     });

    //     return () => {
    //         animation.kill(); // Cleanup animation on unmount
    //     };
    // }, []);
    var count = 1;
    return (
        <>
            <div className="p-6 max-w-4xl mx-auto text-white">
                <div className='p-4 mb-8 rounded-full w-[20%] sm:w-[12%] md:w-[10%] lg:w-[7%] text-2xl bg-white/10 transition-transform duration-700 hover:rotate-[-180deg]'>
                    <Link to="/project">
                        <FaArrowRight />
                    </Link>
                </div>
                <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-xl mb-6 shadow-xl" />
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <h1 className='text-2xl p-2 mb-4'>Overview Of Project</h1>
                <h2 className='text-blue-500 p-2 mb-4'>{project.OverView}</h2>
                {project.ListDown && project.ListDown.length > 0 && (
                    <ol className='pl-6 mb-4'> 
                        {project.ListDown.map((id, content) => (

                            <li key={id} className=''><span>{count++}. </span> {id.content}</li>
                        ))}
                    </ol>
                )}
                {/* <p className="text-lg mb-6">{project.details}</p> */}
                
                <h1 className='text-2xl mb-4'>Technologies Used</h1>
                <div className="grid grid-cols-3 gap-12 mb-6  w-full items-center justify-center">
                    {project.techStack.map((tech) => (
                        <span key={tech} className=" p-20 text-center  rounded-2xl bg-[#ffff]/10 text-sm border hover:border-orange-500 hover:bg-black h-full">
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
            <div className='text-4xl'>
                <span>Still in Development....</span>
            </div>
        </>
    );
};

export default ProjectDetails;