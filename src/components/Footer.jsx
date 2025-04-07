import React from "react";
import { Link } from "react-router-dom";
import { ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="footer footer-center text-base-content rounded p-10 bg-slate-900 rounded-t-2xl">
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
            <ImGithub className="text-2xl text-white hover:text-gray-400" />
          </Link>
          <Link to='https://www.linkedin.com/in/achintya-shrivastava-7510a519b/'>
            <ImLinkedin className="text-2xl text-white hover:text-gray-400 " />
          </Link>
          <Link href="https://www.codechef.com/users/achintyashri22">
            <SiCodechef className=" text-2xl text-white hover:text-gray-400" />
          </Link>
          <Link href="https://leetcode.com/u/achintyashri2202/">
            <SiLeetcode className="text-2xl text-white hover:text-gray-400" />
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
