import { PiPhoneCallFill } from "react-icons/pi";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contacts"), formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setSuccess("Failed to send message. Try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center p-6 md:p-12 lg:p-16 gap-6">
      <div className="w-full max-w-xl bg-transparent font-[sans-serif]">
        <h1 className="text-4xl text-orange-400 font-extrabold font-thin text-center">Contact Us</h1>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {success && <p className="text-center text-white mt-2">{success}</p>}
        </form>
      </div>
      <div className="grid grid-cols-1 gap-4 w-full max-w-xl text-center md:text-left">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 items-center my-4 text-xl md:text-2xl lg:text-3xl"
        >
          <ImLocation2 className="text-red-600" />
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 items-center my-4 text-xl md:text-2xl lg:text-3xl"
        >
          <PiPhoneCallFill className="text-blue-500" />
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          href={`mailto:${CONTACT.email}`}
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center text-xl md:text-2xl lg:text-3xl italic"
        >
          <MdEmail className="text-pink-400" />
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;