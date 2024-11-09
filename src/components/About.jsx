import aboutImage from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
import profilePic from "../assets/photo.jpg";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-2 ">
        <motion.div
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration: 1}}
        >
            <h2 className="my-10 text-center text-5xl">
            About
            <span className="text-neutral-500 "> Me</span></h2>
        </motion.div>
        <motion.div 
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration: 1}}
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
        <div className="flex flex-wrap justify-center items-center">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0 , x: -100}}
            transition ={{duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={profilePic} className="rounded-full h-62 w-62" alt="about"/>
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1 , w: 0 }}
            initial= {{opacity: 0 , x:100}}
            transition={{duration: 0.5, delay: 0.2}}
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 ">{ABOUT_TEXT}</p>
                    </div>
                    <motion.div>
                        <a href="https://mega.nz/file/jIIxmaIT#QgdG6fPCcZj7IsiqHsjiBIu3MOAWAoJsMxGRYGyqcvg">
                            <button className="border rounded-2xl my-2 max-w-xl py-6 px-6 bg-slate-400 text-black">
                                Download Resume
                            </button>
                        </a>
                    </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default About