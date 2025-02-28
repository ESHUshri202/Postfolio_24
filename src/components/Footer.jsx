import React from "react";
import { Link } from "react-router-dom";
import { ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 bg-gradient-to-b from-slate-900 via-zinc-900 to-purple-900 rounded-t-2xl">
      <nav className="flex flex-col sm:flex-row items-center justify-center gap-7 text-lg">
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/about" className="link link-hover">About</Link>
        <Link to="/technologies" className="link link-hover">Technology</Link>
        <Link to="/project" className="link link-hover">Project</Link>
        <Link to="/contact" className="link link-hover">Contact Us</Link>
      </nav>
      <nav>
        <div className="flex items-center justify-center gap-10 p-10">
          <Link to='https://github.com/ESHUshri202'>
            <ImGithub className="text-2xl text-gray-400" />
          </Link>
          <Link to='https://www.linkedin.com/in/achintya-shrivastava-7510a519b/'>
            <ImLinkedin className="text-2xl text-blue-600" />
          </Link>
          <Link to='https://www.instagram.com/reddevil_achintya/?utm_source=ig_web_button_share_sheet'>
            <ImInstagram className="text-2xl text-pink-700 " />
          </Link>
        </div>
      </nav>
      <aside className="flex items-bottom justify-center mt-9 mb-none text-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by achintya_shrivastava
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
