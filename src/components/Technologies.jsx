import { SiPython } from "react-icons/si";
import { SiNumpy } from "react-icons/si"
import { SiPandas } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiFileExcel2Fill, RiReactjsLine } from "react-icons/ri";
import { SiPowerbi } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import {  DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";


const iconVariants = (duration) =>(
    {
        initial: {y:-10},
        animate:{
            y:[10,-10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
        <motion.h2 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.h3 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-3xl">Data Analytics Technologies</motion.h3>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4 ">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNumpy className="text-7xl text-cyan-600 "/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPandas className="text-7xl text-gray-200"/>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPowerbi className="text-7xl text-yellow-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiFileExcel2Fill className="text-7xl text-green-600"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-green-600"/>
            </motion.div>
        </motion.div>
        <div>
            <motion.h3 
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration: 2}}
            className="my-20 text-center text-3xl">Front-End Technologies</motion.h3>
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x:100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoCss3  className="text-7xl text-blue-800"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-red-600"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiNodejs className="text-7xl text-green-500"/>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies