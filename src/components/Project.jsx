// import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
// import usePagination from '@mui/material/usePagination';
// import Pagination from '@mui/material/Pagination';
// import { useState } from "react";
const Project = () => {
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage,setPostsPerPage] = useState(8);

    // const lastPostIndex = currentPage * postsPerPage;
    // const firstPostIndex = lastPostIndex - postsPerPage;
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNy7J6qEvprld4BAgellLyQdlBvAqaaOLkA&s"
              width={150}
              height={150}
              alt="project2"
              className="mb-6 rounder"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a href="https://github.com/ESHUshri202/Medical_Recommendation_System">
              <h6 className="mb-2 font-semibold">
                Medical Recommendation System
              </h6>
            </a>
            <p className="mb-4 text-neutral-400">
              Medical Recommendation System is an online platform which can
              detect the disease using given symptoms. A fully functional
              machine learning based project with features like disease
              detection, providing prescription, diet analysis, medicine
              recommending and workout details.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Python
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Flask
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Machine Learning
            </span>
          </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src="/src/assets/projects/project-3.jpg"
              width={150}
              height={150}
              alt="project2"
              className="mb-6 rounder"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a href="https://github.com/ESHUshri202/Face-Recognition-Based-Smart-Attendance-System">
              <h6 className="mb-2 font-semibold">
                Face-Recognition Based Smart Attendance System
              </h6>
            </a>
            <p className="mb-4 text-neutral-400">FRBSAS(Face-Recognition Based Smart Attendance System) is an application which mark the attendance using the camera using one of the library of python known open-cv. Using this application,
                             management of attendance becomes easier.</p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Python
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Open-cv
            </span>
          </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src="/src/assets/projects/project-4.jpg"
              width={150}
              height={150}
              alt="project4"
              className="mb-6 rounder"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a href="https://github.com/ESHUshri202/Movie_Recommendation_System">
              <h6 className="mb-2 font-semibold">
                Movie Recommendation System
              </h6>
            </a>
            <p className="mb-4 text-neutral-400">Developed a Movie Recommendation System that suggests personalized movie options based on user preferences and features.
                                Utilized collaborative filtering and machine learning algorithms to enhance user experience and provide accurate, tailored recommendations.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Python
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Machine Learning 
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Streamlit
            </span>
          </motion.div>
        </div>
        {/* <span ><Pagination className="flex my-5 px-1/4 justify-center text-4xl shadow-md" count={5} color='success' variant="outlined"/></span> */}
        {/* <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src="/src/assets/projects/project-1.jpg"
              width={150}
              height={150}
              alt="project1"
              className="mb-6 rounder"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a href="#">
              <h6 className="mb-2 font-semibold">
                Medical Recommendation System
              </h6>
            </a>
            <p className="mb-4 text-neutral-400">its</p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Python
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Python
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Python
            </span>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
