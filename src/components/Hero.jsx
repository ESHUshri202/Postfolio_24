import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/photo.jpg";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";
import { SiPython } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiFileExcel2Fill, RiReactjsLine } from "react-icons/ri";
import { SiPowerbi } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants/index";
import { useEffect, useState } from "react";
import { Code2, Database, Sparkles, Brain, Rocket } from 'lucide-react';
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [data, setData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    fetch("https://api.github.com/users/ESHUshri202")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      {/* <div className="border-b border-neutral-900 pb-4 pt-6 lg:mb-35">
        <div className="flex flex-wrap justify-center items-center">
          <div className="lg:w-full h-full border">
            <div className="flex flex-col items-center justify-center h-full lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin 
                    tracking-tight lg:mt-16 lg:text-8xl"
              >
                Achintya Shrivastava
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Data Analyst || Front-End Developer
              </motion.span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8 rounded-md">
            <div className="flex justify-center rounded">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilePic}
                className="rounded-full shadow-violet-600"
                alt="Achintya"
              ></motion.img>
            </div>
          </div>
        </div>
      </div> */}
      <motion.div 
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 1 }}
      className="min-h-screen  flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center space-y-8">
            {/* Interactive Avatar Section */}
            <div className="relative mb-12">
              <div
                className="w-32 h-32 mx-auto rounded-full overflow-hidden relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              {/* Floating Icons */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                <Sparkles className={`absolute top-0 left-0 w-6 h-6 text-yellow-400 transition-all duration-500 ${isHovered ? 'animate-bounce' : ''}`} />
                <Brain className={`absolute top-0 right-0 w-6 h-6 text-blue-400 transition-all duration-500 ${isHovered ? 'animate-pulse' : ''}`} />
                <Rocket className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 text-purple-400 transition-all duration-500 ${isHovered ? 'animate-ping' : ''}`} />
              </div>

              {/* Pulsing Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-2 border-purple-500/30 animate-ping" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Achintya Shrivastava
              </span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl">
              <div className="flex items-center gap-2">
                <Database className="w-6 h-6 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text font-semibold">
                  Data Analyst
                </span>
              </div>
              <span className="hidden md:block text-gray-400">&bull;</span>
              <div className="flex items-center gap-2">
                <Code2 className="w-6 h-6 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold">
                  Front End Web Developer
                </span>
              </div>
            </div>

            <div className="mt-8">
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* About  */}
      <div className="border-b border-neutral-900 pb-2">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          <h2 className="my-10 text-center text-5xl">
            About <span className="text-neutral-500">Me</span>
          </h2>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center"
        >
          <span className="border-4 rounded-full border-blue-500 m-2 w-1 "></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-2"></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-4 "></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-8 "></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-8 "></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-4"></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-2"></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-1 "></span>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img
                src={profilePic}
                className="backdrop-saturate-50 rounded-full h-72 w-72 md:h-full md:w-full lg:h-62 lg:w-62 "
                alt="about"
              />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 p-4"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
            <motion.div className="flex items-center justify-start gap-6">
              <a href="https://drive.google.com/file/d/1EtBBdGq6qqJEcAS2_jJPzLHey80YGthZ/view?usp=sharing">
                <button className="rounded-2xl my-2 max-w-xl py-4 px-6 bg-blue-900 hover:bg-slate-700 hover:text-black duration-300 text-white font-semibold ">
                  Download Resume
                </button>
              </a>
              <Link to="/project">
                <button className="rounded-2xl my-2 max-w-xl py-4 px-6 bg-blue-900 hover:bg-slate-700 hover:text-black duration-300 text-white font-semibold ">
                  View Project
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* technologies section */}
      <div className="border-b border-neutral-800 pb-24 ">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-12 text-center text-5xl"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center"
        >
          <span className="border-4 rounded-full border-blue-500 m-2 w-1 "></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-2"></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-4 "></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-8 "></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-8 "></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-4"></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-2"></span>
          <span className="border-4 rounded-full border-blue-500 m-2 w-1 "></span>
        </motion.div>
        <motion.h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-3xl"
        >
          Data Analytics Technologies
        </motion.h3>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4 "
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPython className="text-7xl text-orange-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiNumpy className="text-7xl text-cyan-600 " />
          </motion.div>
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPandas className="text-7xl text-gray-200" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPowerbi className="text-7xl text-yellow-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiFileExcel2Fill className="text-7xl text-green-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMysql className="text-7xl text-green-600" />
          </motion.div>
        </motion.div>
        <div>
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 2 }}
            className="my-20 text-center text-3xl"
          >
            Front-End Technologies
          </motion.h3>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaHtml5 className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <IoLogoCss3 className="text-7xl text-blue-800" />
            </motion.div>
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <IoLogoJavascript className="text-7xl text-red-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <DiNodejs className="text-7xl text-green-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Project */}
      <div className="px-4 sm:px-24 gap-2">
        <div className="border-b border-neutral-900 pb-3 ">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="my-10 text-center text-4xl sm:text-5xl"
          >
            Projects
          </motion.h2>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center items-center"
          >
            <span className="border-4 rounded-full border-blue-500 m-2 w-1 "></span>
            <span className="border-4 rounded-full border-blue-500 m-2 w-2"></span>
            <span className="border-4 rounded-full border-blue-500 m-2 w-4 "></span>
            <span className="border-4 rounded-full border-blue-500 m-2 w-8 "></span>
            <span className="border-4 rounded-full border-blue-500 m-2 w-8 "></span>
            <span className="border-4 rounded-full border-blue-500 m-2 w-4"></span>
            <span className="border-4 rounded-full border-blue-500 m-2 w-2"></span>
            <span className="border-4 rounded-full border-blue-500 m-2 w-1 "></span>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 sm:grid-cols-3 items-center justify-around gap-6 sm:gap-12"
          >
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://lnpuk.com/wp-content/uploads/2020/10/LNP-Banner-images-1800-x-1125-6-3-1024x640.jpg"
                  alt="Parkison-Disease-Detection"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-lg sm:text-xl font-semibold">
                  Parkison-Disease-Detection
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  The Parkinson's Disease Detection model uses machine learning
                  algorithms to analyze data from various sources like speech,
                  handwriting, and movement patterns. The model helps in early
                  diagnosis, monitoring progression, and improving personalized
                  treatment plans for Parkinson’s disease.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Python
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Machine Learning
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Streamlit
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://github.com/ESHUshri202/Parkison-Disease-Detection">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://s3-alpha.figma.com/hub/file/6090747941/acb2e473-5d7c-434d-9782-9a2110830fc5-cover.png"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Feast of Flavours
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Feast of Flavour is a vibrant recipe showcase website that
                  celebrates culinary creativity. It features a wide variety of
                  delicious recipes, from quick meals to gourmet dishes,
                  offering step-by-step instructions to inspire both beginner
                  and experienced cooks to explore diverse flavors.{" "}
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  HTML
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Tailwind CSS
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  ReactJs
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="#">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://s3-alpha.figma.com/hub/file/5401068013/ac9e79a5-535e-431a-8c2f-3924780c3761-cover.png"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Medical Recommendation System
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Medical Recommendation System is an online platform which can
                  detect the disease using given symptoms. A fully functional
                  machine learning based project with features like disease
                  detection, providing prescription, diet analysis, medicine
                  recommending and workout details.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Python
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Machine Learning
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Flask
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="#">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
          {/* Repositories */}
          <div className="px-4 sm:px-24 gap-2">
            <div className="border-b border-neutral-900 pb-3 ">
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-4xl sm:text-5xl"
              >
                Github Insights
              </motion.h2>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 lg:p-12">
                  <div className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-0">
                    Repositories: {data.public_repos}
                  </div>
                  <Link href="https://git.io/streak-stats">
                    <img
                      src="https://github-readme-streak-stats.herokuapp.com?user=ESHUshri202&theme=dark"
                      alt="GitHub Streak"
                      className="w-46 md:w-72 lg:w-full"
                    />
                  </Link>
                  <div className="text-xl md:text-2xl lg:text-3xl">
                    Followers: {data.followers}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
