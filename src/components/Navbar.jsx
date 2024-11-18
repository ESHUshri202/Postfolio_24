import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGit, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="mb-14 flex flex-col sm:flex-row items-center justify-between py-4 bg-gradient-to-b from-slate-900 via-zinc-900 to-purple-900 rounded-b-2xl">
      <div className="flex flex-shrink-0 items-center">
        <Link to="#">
          <img className="mx-2 w-16" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="relative w-full sm:w-auto">
        <button
          onClick={toggleMenu}
          className="sm:hidden flex items-center justify-center text-white text-2xl mx-auto"
        >
          {isMenuOpen ? <IoIosClose className="text-center"/> : <IoIosMenu  className="text-center"/>}
        </button>
        <ul
          ref={menuRef}
          className={`grid grid-col-4 sm:flex justify-center gap-4 sm:gap-7 text-xl ${isMenuOpen ? "block" : "hidden"} sm:block`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                ${isActive ? "text-orange-700" : "text-white"}
                border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white block 
                ${isActive ? "text-orange-700" : "text-white"}
                py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technologies"
              className={({ isActive }) =>
                `text-white block 
                ${isActive ? "text-orange-700" : "text-white"}
                py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Technologies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `text-white block 
                ${isActive ? "text-orange-700" : "text-white"}
                py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white block py-2 pr-4 
                pl-3 duration-200 
                ${isActive ? "text-orange-700" : "text-white"}
                border-b border-gray-100
                hover:bg-gray-50 
                lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="m-4 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/achintya-shrivastava-7510a519b/"><FaLinkedin /></a>
        <a href="https://github.com/ESHUshri202"><FaGit /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;