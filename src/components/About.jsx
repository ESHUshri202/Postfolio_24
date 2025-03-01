import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/photo.jpg";

const About = () => {
  const publications =[
    {
      title: "Event Tracking System Using Web APIs and Expert System",
    }
  ];
  const internships = [
    {
      title: "Machine Learning Using Python, CodeSquadz",
      duration: "09/2024 - Present",
    },
    {
      title: "Web Development, Internshala Training",
      duration: "05/2023 - 06/2023",
    },
    {
      title: "Data Science, YBI Foundation",
      duration: "06/2023 - 08/2023",
    },
    {
      title: "Data Analytics and Visualization, Forage",
      duration: "08/2023 - 08/2023",
    },
  ];
  const timelineData = [
    {
      year: "2020-2024",
      title: "BTech in Computer Science",
      institution: "ITM, Gida Gorakhpur",
      icon: "🎓",
    },
    {
      year: "2019-2020",
      title: "Intermediate in PCMC",
      institution: "Central Academy, Gorakhpur",
      icon: "📚",
    },
    {
      year: "2017-2018",
      title: "High School",
      institution: "Central Academy, Gorakhpur",
      icon: "🏫",
    },
  ];

  return (
    <div className="pb-2">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        <h2 className="my-8 text-center text-4xl sm:text-5xl">
          About
          <span className="text-neutral-500"> Me</span>
        </h2>
      </motion.div>
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
      <div className="flex flex-wrap justify-center items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={profilePic}
              className="rounded-full h-full w-full sm:h-full sm:w-full"
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, w: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-sm sm:text-base">
              {ABOUT_TEXT}
            </p>
          </div>
          <motion.div>
            <a href="https://drive.google.com/file/d/1hXq1o4KRAwh1_ONKl9MrkVx4U0UUV6ul/view?usp=sharing">
              <button className="border-none rounded-2xl my-2 max-w-xl py-4 px-6 bg-slate-900 hover:bg-slate-300 hover:text-black duration-100 text-white font-semibold text-sm sm:text-base">
                Download Resume
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Education Section */}
      <section className="p-8">
        <motion.h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-8 text-4xl sm:text-5xl text-center"
        >
          Education
        </motion.h3>
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

        {/* <div className="relative border-l-4 border-blue-500 pl-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className={`container ${index % 2 === 0 ? "left" : "right"}`}
          >
          <div className="content">
            <h2>{item.year}</h2>
            <p>{item.text}</p>
          </div>
          </motion.div>
        ))}
      </div> */}
        <div className="relative max-w-4xl mx-auto p-4">
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white transform -translate-x-1/2"></div>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8 }}
              className={`relative w-full sm:w-1/2 p-4 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left ml-auto"
              }`}
            >
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-4 border-orange-400 rounded-full ${
                  index % 2 === 0 ? "right-[-12px]" : "left-[-12px]"
                }`}
              ></div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-blue-600">
                  {item.year}
                </h2>
                <p className="text-gray-700 mt-2">
                  {item.icon} {item.institution}
                </p>
                <p className="text-gray-700 mt-2">{item.title}</p>
                <p className="text-gray-700 mt-2">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Internship/Training Section */}
      <section className="p-8">
        <motion.h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-8 text-4xl sm:text-5xl text-center"
        >
          Internship/Training
        </motion.h3>
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
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4 lg:p-12"
    >
      {internships.map((internship, index) => (
        <motion.div
          key={index}
          className="relative bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <div className="p-4">
            <h3 className="text-left text-2xl text-black sm:text-3xl font-bold mb-2">
              {internship.title}
            </h3>
            <p className="text-right text-xl sm:text-xl text-gray-700">
              {internship.duration}
            </p>
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center text-white text-lg opacity-0 hover:opacity-100">
            {/* <p>Click for more details</p> */}
          </div>
        </motion.div>
      ))}
    </motion.div>
      </section>

      {/* Publications Section */}
      <section className="my-10">
        <motion.h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-8 text-4xl sm:text-5xl text-center"
        >
          Publications
        </motion.h3>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
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
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4 lg:p-12"
    >
      {publications.map((publication, index) => (
        <motion.div
          key={index} 
          className="relative bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <div className="p-4">
            <h3 className="text-left text-2xl text-black sm:text-3xl font-bold mb-2">
              {publication.title}
            </h3>
            {/* <p className="text-right text-xl sm:text-xl text-gray-700">
              {internship.duration}
            </p> */}
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center text-white text-lg opacity-0 hover:opacity-100">
            {/* <p>r more details</p> */}
          </div>
        </motion.div>
      ))}
    </motion.div>
      </section>
    </div>
  );
};

export default About;
