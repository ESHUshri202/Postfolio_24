import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const Project = () => {
  const [selected, setSelected] = useState("All");
  function handleSelect(e) {
    console.log(e.target.value);
    setSelected(e.target.value);
  }
  return (
    <>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-5xl"
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
        className="grid grid-cols-1 place-items-center gap-2"
      >
        <select
          name=""
          id=""
          value={selected}
          onChange={(e) => handleSelect(e)}
          className="p-3 bg-blue-900 rounded-full m-16"
        >
          <option >All</option>
          <option>Front-End Development</option>
          <option>Machine Learning</option>
          <option>Data Analysis</option>
        </select>
        {selected == "All" ? (
          <div className="grid grid-cols-3 place-items-center gap-10">
            {/* Medical Recommendation System */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
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
            {/* Feast of Flavours */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
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
                  and experienced cooks to explore diverse flavors.
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
                  React Js
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
            {/* Parkison Disease Detection */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://lnpuk.com/wp-content/uploads/2020/10/LNP-Banner-images-1800-x-1125-6-3-1024x640.jpg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Parkison Disease Detection
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
                  Streamlit
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://eshushri202-parkison-disease-detection-main-0jxv8j.streamlit.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* Company X Template */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://as2.ftcdn.net/v2/jpg/05/44/23/79/1000_F_544237902_yi7ivAoP3PuyCj2LD5Mb4ZrKXvUuHsiT.jpg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Company X Template
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Company X’s template website, built with React.js and Tailwind
                  CSS, features a modern, responsive design. React enables
                  dynamic content management, while Tailwind CSS ensures a
                  customizable, efficient, and visually appealing user
                  interface, optimized for performance.
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
                  React Js
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://company-x-demo.vercel.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* Stock Price Prediction Model */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVRMXfIOBXt8z5GGv10QPw6r6vzyhCTyjXA&s"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Stock Price Prediction Model
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  A stock price prediction model leverages historical stock
                  data, technical indicators, and sometimes market sentiment to
                  estimate future price movements. It often employs machine
                  learning techniques, including LSTM, ARIMA, and regression,
                  for time-series analysis and forecasting.
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
                <Link to="https://eshushri202-stock-price-prediction-model-app-4emffq.streamlit.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* News App */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://colorlib.com/wp/wp-content/uploads/sites/2/9_best_news_website_design.jpg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  News App
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Built with JavaScript, this news app delivers timely updates
                  and personalized content to users across web and mobile. It
                  uses JavaScript for dynamic data rendering, seamless
                  navigation, and real-time notifications, creating an engaging
                  and responsive news-reading experience.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  HTML
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  CSS
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  React Js
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://news-app-rho-jet.vercel.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* Mamba AI website */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://i.ytimg.com/vi/iV0ZIczwX3I/maxresdefault.jpg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Mamba AI
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Mamba AI, a React.js-based clone of Gemini, replicates
                  Gemini’s conversational AI features. Utilizing React’s
                  component-driven architecture, it delivers real-time
                  interactions, smooth UI updates, and AI responses, offering
                  users a seamless, dynamic chat experience similar to Gemini.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  HTML
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  CSS
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  React Js
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://mamba-ai.netlify.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* Smart Attendence System */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://www.lystloc.com/blog/wp-content/uploads/2022/11/ezgif.com-gif-maker-6.webp"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Smart Attendence System
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  A smart attendance system using facial recognition automates
                  attendance tracking by identifying individuals through their
                  facial features. It enhances accuracy, reduces fraud, and
                  streamlines processes by recording attendance in real time,
                  offering a seamless and secure alternative to traditional
                  methods.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Python
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  OpenCV
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
            {/* Netflix Clone */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://cdn3.f-cdn.com//files/download/128385152/netflix1.jpg?width=780&height=401&fit=crop"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Netflix Clone
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  This Netflix clone, created with React.js, provides a
                  responsive, interactive streaming experience. Using React
                  components, it supports features like movie browsing, user
                  authentication, and video playback. The app dynamically
                  fetches data, offering a user-friendly interface similar to
                  Netflix.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  HTML
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  CSS
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  React Js
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://netflix-clone-beta-rust.vercel.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* Corona Survival Dashboard */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://aaqr.org/images/article_images/2020/10/0314_fig1.png"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Corona Survival Dashboard
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  The Corona Survival Dashboard, created using Power BI,
                  visualizes key COVID-19 data like cases, recoveries, and
                  vaccination rates. It provides real-time insights through
                  interactive charts, helping users track trends and make
                  informed decisions based on up-to-date information.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Power BI
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
            {/* Dog and Cat Classification */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/06/how-to-do-Cat-and-Dog-Classification-using-CNN_-How-to-do-Cat-and-Dog-Classification-using-CNN_-01-scaled.jpg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Dog & Cat Classification
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Dog & Cat Classification using TensorFlow leverages deep
                  learning models, typically Convolutional Neural Networks
                  (CNNs), to accurately classify images as either dogs or cats.
                  The model is trained on labeled image datasets to recognize
                  distinctive features of each animal.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Python
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  TensorFlow
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
          </div>
        ) : (
          ""
        )}
        {selected == "Front-End Development" ? (
          <div className="grid grid-cols-3 place-items-center gap-10 ">
            {/* Feast of Flavours */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
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
                  and experienced cooks to explore diverse flavors.
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
                  React Js
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
            {/* Netflix Clone */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://cdn3.f-cdn.com//files/download/128385152/netflix1.jpg?width=780&height=401&fit=crop"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Netflix Clone
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  This Netflix clone, created with React.js, provides a
                  responsive, interactive streaming experience. Using React
                  components, it supports features like movie browsing, user
                  authentication, and video playback. The app dynamically
                  fetches data, offering a user-friendly interface similar to
                  Netflix.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  HTML
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  CSS
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  React Js
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://netflix-clone-beta-rust.vercel.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* News App */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://colorlib.com/wp/wp-content/uploads/sites/2/9_best_news_website_design.jpg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  News App
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Built with JavaScript, this news app delivers timely updates
                  and personalized content to users across web and mobile. It
                  uses JavaScript for dynamic data rendering, seamless
                  navigation, and real-time notifications, creating an engaging
                  and responsive news-reading experience.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  HTML
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  CSS
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  React Js
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://news-app-rho-jet.vercel.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* Mamba AI website */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://i.ytimg.com/vi/iV0ZIczwX3I/maxresdefault.jpg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Mamba AI
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Mamba AI, a React.js-based clone of Gemini, replicates
                  Gemini’s conversational AI features. Utilizing React’s
                  component-driven architecture, it delivers real-time
                  interactions, smooth UI updates, and AI responses, offering
                  users a seamless, dynamic chat experience similar to Gemini.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  HTML
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  CSS
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  React Js
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://mamba-ai.netlify.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* Company X Template */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://as2.ftcdn.net/v2/jpg/05/44/23/79/1000_F_544237902_yi7ivAoP3PuyCj2LD5Mb4ZrKXvUuHsiT.jpg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Company X Template
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Company X’s template website, built with React.js and Tailwind
                  CSS, features a modern, responsive design. React enables
                  dynamic content management, while Tailwind CSS ensures a
                  customizable, efficient, and visually appealing user
                  interface, optimized for performance.
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
                  React Js
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://company-x-demo.vercel.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {selected == "Machine Learning" ? (
          <div className="grid grid-cols-3 place-items-center gap-10">
            {/* Dog and Cat Classification */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/06/how-to-do-Cat-and-Dog-Classification-using-CNN_-How-to-do-Cat-and-Dog-Classification-using-CNN_-01-scaled.jpg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Dog & Cat Classification
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  Dog & Cat Classification using TensorFlow leverages deep
                  learning models, typically Convolutional Neural Networks
                  (CNNs), to accurately classify images as either dogs or cats.
                  The model is trained on labeled image datasets to recognize
                  distinctive features of each animal.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Python
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  TensorFlow
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
            {/* Smart Attendence System */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://www.lystloc.com/blog/wp-content/uploads/2022/11/ezgif.com-gif-maker-6.webp"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Smart Attendence System
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  A smart attendance system using facial recognition automates
                  attendance tracking by identifying individuals through their
                  facial features. It enhances accuracy, reduces fraud, and
                  streamlines processes by recording attendance in real time,
                  offering a seamless and secure alternative to traditional
                  methods.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Python
                </span>
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  OpenCV
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
            {/* Stock Price Prediction Model */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVRMXfIOBXt8z5GGv10QPw6r6vzyhCTyjXA&s"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Stock Price Prediction Model
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  A stock price prediction model leverages historical stock
                  data, technical indicators, and sometimes market sentiment to
                  estimate future price movements. It often employs machine
                  learning techniques, including LSTM, ARIMA, and regression,
                  for time-series analysis and forecasting.
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
                <Link to="https://eshushri202-stock-price-prediction-model-app-4emffq.streamlit.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* Parkison Disease Detection */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://lnpuk.com/wp-content/uploads/2020/10/LNP-Banner-images-1800-x-1125-6-3-1024x640.jpg"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Parkison Disease Detection
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
                  Streamlit
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <Link to="https://eshushri202-parkison-disease-detection-main-0jxv8j.streamlit.app/">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Project Link
                  </button>
                </Link>
              </div>
            </div>
            {/* Medical Recommendation System */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
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
          </div>
        ) : (
          ""
        )}
        {selected == "Data Analysis" ? (
          <div className="grid grid-cols-3 place-items-center gap-10 ">
            {/* Corona Survival Dashboard */}
            <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src="https://aaqr.org/images/article_images/2020/10/0314_fig1.png"
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  Corona Survival Dashboard
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                  The Corona Survival Dashboard, created using Power BI,
                  visualizes key COVID-19 data like cases, recoveries, and
                  vaccination rates. It provides real-time insights through
                  interactive charts, helping users track trends and make
                  informed decisions based on up-to-date information.
                </p>
              </div>
              <div className="flex px-4 pt-0">
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                  Power BI
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
          </div>
        ) : (
          ""
        )}
      </motion.div>
    </>
  );
};

export default Project;
