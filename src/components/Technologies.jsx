import { SiPython, SiNumpy, SiPandas, SiMysql, SiPowerbi, SiMongodb, SiJupyter } from "react-icons/si";
import { RiFileExcel2Fill, RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { DiNodejs, DiFirebase } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { motion } from "framer-motion";
import { DiVisualstudio } from "react-icons/di";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
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
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-12 text-center text-5xl">Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap justify-center items-center"
            >
                {/* Decorative dots */}
                {[1, 2, 4, 8, 8, 4, 2, 1].map((size, index) => (
                    <span key={index} className={`border-4 rounded-full border-blue-500 m-2 w-${size}`}></span>
                ))}
            </motion.div>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center p-12"
            >
                {/* Data Analytics Section */}
                <motion.div className="rounded-xl hover:shadow-xl hover:shadow-rose-900 hover:duration-200 bg-[#ffff]/10 p-4">
                    <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="text-5xl my-6 p-2 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Data Analytics</motion.h2>
                    <motion.div className="flex flex-wrap gap-4 justify-center">
                        {[
                            { icon: <SiPython className="text-7xl text-orange-500" />, duration: 2.5 },
                            { icon: <SiNumpy className="text-7xl text-cyan-600" />, duration: 3 },
                            { icon: <SiPandas className="text-7xl text-gray-200" />, duration: 3.5 },
                            { icon: <SiPowerbi className="text-7xl text-yellow-600" />, duration: 4 },
                            { icon: <RiFileExcel2Fill className="text-7xl text-green-600" />, duration: 3.5 },
                            { icon: <SiMysql className="text-7xl text-green-600" />, duration: 3 },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariants(item.duration)}
                                initial="initial"
                                animate="animate"
                                className="rounded-2xl border-4 border-neutral-500 p-4">
                                {item.icon}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Front-End Technologies Section */}
                <motion.div className="rounded-xl hover:shadow-xl hover:shadow-cyan-900 hover:duration-200 bg-[#ffff]/10 p-4">
                    <motion.h3
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 2 }}
                        className="text-5xl my-6 p-2 font-bold bg-gradient-to-r from-red-600 to-indigo-400 inline-block text-transparent bg-clip-text">Front-End Technologies</motion.h3>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-wrap items-center justify-center gap-4">
                        {[
                            { icon: <FaHtml5 className="text-7xl text-cyan-400" />, duration: 2.5 },
                            { icon: <IoLogoCss3 className="text-7xl text-blue-800" />, duration: 3 },
                            { icon: <IoLogoJavascript className="text-7xl text-red-600" />, duration: 4 },
                            { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 3 },
                            { icon: <DiNodejs className="text-7xl text-green-500" />, duration: 2.5 },
                            { icon: <SiMongodb className="text-7xl text-green-500" />, duration: 2.5 },
                            { icon: <DiFirebase className="text-7xl text-orange-500" />, duration: 2.5 },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariants(item.duration)}
                                initial="initial"
                                animate="animate"
                                className="rounded-2xl border-4 border-neutral-500 p-4">
                                {item.icon}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* IDE Section */}
                <motion.div className="rounded-xl hover:shadow-xl hover:shadow-blue-900 hover:duration-200 bg-[#ffff]/10 p-4">
                    <motion.h3
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 2 }}
                        className="text-5xl my-6 p-2 font-bold bg-gradient-to-r from-blue-600 to-indigo-900 inline-block text-transparent bg-clip-text">IDE</motion.h3>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-wrap items-center justify-center gap-4">
                        {[
                            { icon: <BiLogoVisualStudio className="text-7xl text-cyan-400" />, duration: 2.5 },
                            { icon: <SiJupyter className="text-7xl text-orange-400" />, duration: 2.5 },
                            { icon: <DiVisualstudio className="text-7xl text-fuchsia-500" />, duration: 2.5 },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={iconVariants(item.duration)}
                                initial="initial"
                                animate="animate"
                                className="rounded-2xl border-4 border-neutral-500 p-4">
                                {item.icon}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* System Specification Section */}
                <motion.div className="rounded-xl hover:shadow-xl hover:shadow-emerald-900 hover:duration-200 bg-[#ffff]/10 p-4">
                    <motion.h3
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 2 }}
                        className="text-5xl my-6 p-2 font-bold bg-gradient-to-r from-blue-600 to-indigo-900 inline-block text-transparent bg-clip-text">System Specification</motion.h3>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="gap-4">
                        <ol className="text-center text-2xl">
                            <li>System: Lenovo Ideapad S145/ Victus 15</li>
                            <li>CPU: Ryzen 3200U/ Ryzen 5500</li>
                            <li>RAM: 12GB/16GB</li>
                            <li>Graphic: Ryzen Mobile Graphic/ Nvidia RTX 3050</li>
                        </ol>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies;