import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between mt-4 px-6 py-4 bg-[#ffff]/10 shadow-lg rounded-xl mx-4 sm:mx-8 md:mx-12 lg:mx-24">
      {/* Logo Section */}
      <div className="flex items-center w-full sm:w-auto justify-between">
        <Link to="/">
          <img className="w-12" src={logo} alt="logo" />
        </Link>
        <button
          onClick={toggleMenu}
          className="sm:hidden text-white text-3xl"
        >
          {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        ref={menuRef}
        className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-black sm:bg-transparent shadow-md sm:shadow-none flex flex-col sm:flex-row items-center gap-4 sm:gap-7 text-lg p-4 sm:p-0 transition-all duration-300 ease-in-out ${isMenuOpen ? "flex" : "hidden"} sm:flex`}
      >
        {[{ to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/technologies", label: "Technologies" },
          { to: "/project", label: "Project" },
          { to: "/contact", label: "Contact Us" }].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `block py-2 px-4 text-white rounded-md transition duration-200 ${isActive ? "text-blue-500" : "hover:text-blue-500"}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden sm:flex items-center gap-4 text-xl">
        <a
          href="https://www.linkedin.com/in/achintya-shrivastava-7510a519b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white hover:text-gray-400" />
        </a>
        <a
          href="https://github.com/ESHUshri202"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white hover:text-gray-400" />
        </a>
        <a href="https://www.codechef.com/users/achintyashri22">
          <SiCodechef className="text-white hover:text-gray-400" />
        </a>
        <a href="https://leetcode.com/u/achintyashri2202/">
          <SiLeetcode className="text-white hover:text-gray-400"  />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
