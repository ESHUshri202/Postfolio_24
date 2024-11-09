import { PiPhoneCallFill } from "react-icons/pi"
import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { ImLocation2 } from "react-icons/im"
import { MdEmail } from "react-icons/md"
const Contact = () => {
  return (
    <div  className="grid grid-cols-2 place-items-center p-16 gap-6">
        <div className="mx-auto max-w-xl bg-transparent font-[sans-serif]">
          <h1 className="text-3xl text-white font-extrabold text-center">Contact Us</h1>
          <form className="mt-8 space-y-4">
            <input type="text"  placeholder="Name"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            />
            <input type="email"  placeholder="Email"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            />
            <input type="text"  placeholder="Subject"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            />
            <textarea placeholder="Message" rows="6" className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
            <button type="button" className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Submit</button>
          </form>
        </div>
        <div className="grid grid-cols-1  tracking-tighter p-16 gap-2">
            <motion.p 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0 , x:-100}}
            transition={{duration: 0.5}}
            className="flex gap-4 items-center my-4 text-3xl"><ImLocation2 className="text-red-600"/>{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0 , x:-100}}
            transition={{duration: 0.5}}
            className="flex gap-4 items-center my-4 text-3xl"><PiPhoneCallFill className="text-blue-500"/>{CONTACT.phoneNo}</motion.p>
            <motion.a             
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0 , x:100}}
            transition={{duration: 0.5}}
            href="achintyashri2202@gmail.com" className="flex gap-4 justify-center items-center text-3xl italic"><MdEmail className="text-pink-400"/>{CONTACT.email}</motion.a>
        </div>
    </div>
  )
}

export default Contact