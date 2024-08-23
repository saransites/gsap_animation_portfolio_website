import { useContext, useEffect, useRef } from "react";
import { FaArrowDown, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { GlobalContext } from "../App";
import MobSidebar from "./MobSidebar";
import { FaArrowRight } from "react-icons/fa6";
import Sidebar from "./Sidebar";

const Mainbackground = () => {
  const { ScrollAbout, ScrollContacts, ScrollProjects } =
    useContext(GlobalContext);
  return (
    <div>
      <header
        style={{ zIndex: 786 }}
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
      <Sidebar />
      {/* contact us */}
      <div
        style={{ zIndex: 786 }}
        className="group absolute right-0 rounded-bl-[35px] top-0 bg-[var(--shapebg)] pl-2 pb-2 min-w-[11%]"
      >
        <button
          onClick={ScrollContacts}
          className="hidden round contact text-black border-2 md:flex justify-between items-center gap-1 hover:bg-[#0c0160] transition-all p-1.5 rounded-full px-4"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-500">
            Contact Us
          </span>
          <FaArrowRight className="arrow group-hover:bg-[#8500d3] group-hover:text-white transition-ml duration-500 text-4xl bg-[#fff] text-black rounded-full p-2.5" />
        </button>
        <div className="md:hidden round menu">
          <MobSidebar />
        </div>
      </div>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {/* below curve button */}
      <div
        style={{ zIndex: 1 }}
        className="absolute -left-6 rounded-tr-[35px] -bottom-2 bg-[var(--shapebg)] py-[0.55rem] mx-6 pr-2 w-3/2 md:w-[35rem]"
      >
        <a
          href="../../saran_full-stack_resume.pdf"
          download="saraResume.pdf"
          className="group round resume text-black hover:bg-slate-200 transition w-full p-2 rounded-full px-6 flex justify-center items-center gap-2"
        >
          <span>Get My Resume</span>
          <FaArrowDown className="arrow group-hover:bg-[#2a2a2a] bg-[#fff] text-black group-hover:text-white group-hover:ml-2 transition-all duration-500 text-4xl rounded-full p-2.5" />
        </a>
      </div>
    </div>
  );
};

export default Mainbackground;
