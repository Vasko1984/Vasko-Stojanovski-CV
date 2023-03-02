import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
function Navbar() {
  const [bars, setBars] = useState(false);
  const Click = () => setBars(!bars);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white">
      <div>VS</div>

      <ul className="hidden md:flex">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <li className="px-4">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="px-4">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="px-4">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="px4">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
      </ul>

      <div onClick={Click} className="md:hidden z-10">
        {!bars ? <FaBars /> : <FaTimes />}
      </div>
      <div className="">
        <ul
          className={
            !bars
              ? "hidden"
              : "absolute top-o left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={Click} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={Click} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={Click} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={Click} to="skills" smooth={true} duration={500}>
              experience
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={Click} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
        </ul>
      </div>
      <div className=" flex fixed flex-col top-[35%] left-5">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-400">
            <a
              className="flex justify-between items-center w-full text-yellow-100"
              href="https://www.linkedin.com/in/vasko-stojanovski-8776a8223/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-black-400">
            <a
              className="flex justify-between items-center w-full text-yellow-100"
              href="https://github.com/vasko1984"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
