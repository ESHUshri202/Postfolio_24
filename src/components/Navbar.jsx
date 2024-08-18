import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10 " src={logo} alt="logo"></img>
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