
import { motion } from "framer-motion";

const Project = () => {
   
  return (
    <div className="px-24 gap-2">
        <div className="border-b border-neutral-900 pb-3 ">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-10 text-center text-4xl"
        >
          Projects
        </motion.h2>
        <div className="flex justify-center gap-6 ">
          <div className="">
            <motion.h4
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="my-10 text-center text-2xl border-b-2 p-1 flex m-32 w-fit"
            >
              Data Analytics Projects
            </motion.h4>
            <div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
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
              </div>
          </div>
          <div className="border-r-4 "></div>
          <div className="">
            <motion.h4
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="my-10 text-center text-2xl border-b-2 p-1 flex m-28 w-fit"
            >
              Front-End Development Projects
            </motion.h4>
            <div>
                <div className="mb-8 flex flex-wrap lg:justify-center ">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/4"
                  >
                    <img
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Freact%2Fcomments%2F1eaapos%2Fi_created_google_gemini_clone_using_react%2F&psig=AOvVaw3fbcpjAjLSBZLcoGINcVtT&ust=1729408151461000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCuocfxmYkDFQAAAAAdAAAAABAE"
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
                    <a href="https://github.com/ESHUshri202/Medical_Recommendation_System">
                      <h6 className="mb-2 font-semibold">
                        Mamba AI
                      </h6>
                    </a>
                    <p className="mb-4 text-neutral-400">
                    Mamba AI, a replica of Gemini AI, is built using ReactJS and APIs to deliver intelligent responses and real-time data analysis. ReactJS manages the frontend, while APIs handle communication with machine learning models, offering dynamic and interactive user experiences.
                    </p>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                      HTML
                    </span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                      CSS
                    </span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                      ReactJs
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
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNetflix&psig=AOvVaw30w1r6Gwk-8XeYk4ZCNHgY&ust=1729408011841000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCB0YHxmYkDFQAAAAAdAAAAABAE"
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
                        Netflix Clone
                      </h6>
                    </a>
                    <p className="mb-4 text-neutral-400">A Netflix clone using ReactJS and Firebase allows users to browse and stream content. Firebase handles authentication, real-time database for movie data, and hosting, while React manages the UI/UX.</p>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                      HTML
                    </span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                      CSS
                    </span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                      Javascript
                    </span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                      ReactJs
                    </span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                      Firebase
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
                      alt="project1"
                      className="mb-6 rounder"
                    />
                  </motion.div>
                  {/* <motion.div
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
                  </motion.div> */}
                </div>
              </div>
          </div>
        </div>
    
        
      </div>
    </div>
  );
};

export default Project;
