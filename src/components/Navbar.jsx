import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-14 flex items-center justify-evenly gap-44 py-4 bg-gradient-to-b from-slate-900 via-zinc-900 to-purple-900 rounded-b-2xl">
        <div className="flex flex-shrink-0 items-center">
            <Link href="#"><img className="mx-2 w-16" src={logo} alt="logo"></img></Link>
        </div>
        <div className="">
          <ul className="flex justify-center gap-7 text-xl">
          <li>
                <NavLink
                  to="/"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-700": "text-white"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({isActive}) =>
                    ` text-white block 
                    ${isActive ? "text-orange-700": "text-white"}
                    py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/technologies"
                  className={(isActive) =>
                    `text-white block 
                    ${isActive ? "text-orange-700": "text-white"}
                    py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Technologies
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/project"
                  className={({isActive}) =>
                    `text-white block 
                    ${isActive ? "text-orange-700": "text-white"}
                    py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/contact"
                  className={({isActive}) =>
                    `text-white block py-2 pr-4 
                    pl-3 duration-200 
                    ${isActive ? "text-orange-700": "text-white"}
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
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/achintya-shrivastava-7510a519b/"><FaLinkedin/></a>
            <a href="https://github.com/ESHUshri202"><FaGit/></a>
            <a href="#"><FaSquareXTwitter/></a>
            <a href="#"><FaInstagram/></a>
        </div>
    </nav>
  )
};

export default Navbar