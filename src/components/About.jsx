import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/photo.jpg";

const About = () => {
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
            <img src={profilePic} className="rounded-full h-full w-full sm:h-full sm:w-full" alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, w: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-sm sm:text-base">{ABOUT_TEXT}</p>
          </div>
          <motion.div>
            <a href="https://drive.google.com/file/d/15712rrybcFkCTqWfjkEzAaHiHQGDH4Jm/view?usp=sharing">
              <button className="border rounded-2xl my-2 max-w-xl py-4 px-6 bg-slate-400 text-black text-sm sm:text-base">
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

        <motion.table
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full mt-8 p-4 lg:p-12 border-collapse"
        >
          <thead>
            <tr>
              <th className="text-left text-2xl sm:text-3xl p-2">Degree</th>
              <th className="text-right text-2xl sm:text-3xl p-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-left text-2xl sm:text-xl p-2">BTech in Computer Science - <span className="italic">ITM, Gida Gorakhpur</span></td>
              <td className="text-right text-2xl sm:text-xl p-2">(2020-2024)</td>
            </tr>
            <tr className="">
              <td className="text-left text-2xl sm:text-xl p-2">Intermediate in PCMC - <span className="italic">Central Academy, Gorakhpur</span></td>
              <td className="text-right text-2xl sm:text-xl p-2">(2019-2020)</td>
            </tr>
            <tr className="">
              <td className="text-left text-2xl sm:text-xl p-2">High School - <span className="italic text-gray-300">Central Academy, Gorakhpur</span></td>
              <td className="text-right text-2xl sm:text-xl p-2">(2017-2018)</td>
            </tr>
          </tbody>
        </motion.table>
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
        
        <motion.table
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full mt-8 p-4 lg:p-12 border-collapse"
        >
          <thead>
            <tr>
              <th className="text-left text-2xl sm:text-3xl p-2">Internship/Training</th>
              <th className="text-right text-2xl sm:text-3xl p-2">Duration</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="m-4">
              <td className="text-left text-2xl sm:text-xl p-2">Machine Learning Using Python, CodeSquadz</td>
              <td className="text-right text-2xl sm:text-xl p-2">09/2024 - Present</td>
            </tr>
            <tr className="m-4">
              <td className="text-left text-2xl sm:text-xl p-2">Web Development, Internshala Training</td>
              <td className="text-right text-2xl sm:text-xl p-2">05/2023 - 06/2023</td>
            </tr>
            <tr className="m-4">
              <td className="text-left text-2xl sm:text-xl p-2">Data Science, YBI Foundation</td>
              <td className="text-right text-2xl sm:text-xl p-2">06/2023 - 08/2023</td>
            </tr>
            <tr className="m-4">
              <td className="text-left text-2xl sm:text-xl p-2">Data Analytics and Visualization, Forage</td>
              <td className="text-right text-2xl sm:text-xl p-2">08/2023 - 08/2023</td>
            </tr>
          </tbody>
        </motion.table>
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
        <motion.ul
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="w-full mt-18 p-4 lg:p-12 gap-32 block"
        >
          <div className="flex justify-between items-center mb-4">
            <p className="flex-grow text-left text-2xl sm:text-3xl">Event Tracking System Using Web APIs and Expert System</p>
          </div>
        </motion.ul>
      </section>
    </div>
  );
};

export default About;