import React, { useContext } from "react";
import { GlobalContext } from "../App";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

const Header = () => {
    const { ScrollAbout, ScrollProjects } =
    useContext(GlobalContext);
  return (
    <header
      style={{ zIndex: 78 }}
      className="absolute w-full hidden p-2 md:block"
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 md:w-1/2 lg:max-w-full lg:grid-cols-3 ml-32 backdrop-blur-md p-3 rounded-full bg-opacity-50 shadow-[0_0_5rem_rgba(0,0,0,0.3)]">
        <li className="group flex justify-center items-center gap-2 border-2 border-transparent rounded-full p-3 hover:bg-[#0000002b] transition duration-300 ease-in-out cursor-pointer">
          <FaHome className="text-md lg:text-2xl group-hover:text-white transition duration-300 ease-in-out" />
          <span className="text-base group-hover:text-white transition-all duration-300 ease-in-out">
            Home
          </span>
        </li>
        <li
          onClick={ScrollProjects}
          className="group flex justify-center items-center gap-2 border-2 border-transparent rounded-full p-3 hover:bg-[#0000002b] transition duration-300 ease-in-out cursor-pointer relative"
        >
          <FaProjectDiagram className="text-md lg:text-2xl group-hover:text-white transition duration-300 ease-in-out" />
          <span className="text-base group-hover:text-white transition-all duration-300 ease-in-out">
            Projects
          </span>
        </li>
        <li
          onClick={ScrollAbout}
          className="group flex justify-center items-center gap-2 border-2 border-transparent rounded-full p-3 px-6 hover:bg-[#0000002b] transition duration-300 ease-in-out cursor-pointer relative"
        >
          <FaUser className="text-md lg:text-2xl group-hover:text-white transition duration-300 ease-in-out" />
          <span className="text-base group-hover:text-white transition-all duration-300 ease-in-out">
            About
          </span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
