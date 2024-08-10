import React, { useState, useContext } from "react";
import { FaHamburger, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { GlobalContext } from "../App";

const MobSidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const { ScrollAbout, ScrollContacts, ScrollProjects, ScrollSkills } =
    useContext(GlobalContext);
  return (
    <>
      <div className="text-center">
        <button
          onClick={() => setIsActive(!isActive)}
          className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5"
          type="button"
        >
          <FaHamburger className="text-black text-2xl" />
        </button>
      </div>

      <div
        className={`fixed top-0 ${
          isActive ? "left-0" : "-left-full"
        } z-40 h-screen p-4 overflow-y-auto transition-all duration-500 w-[60%] bg-gray-800`}
      >
        <div className="flex justify-between mt-6">
            <h5
              id="drawer-navigation-label"
              className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
              Menu
            </h5>
            <button onClick={()=>setIsActive(false)}>
            <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
        </div>
        <div className="py-4 overflow-y-auto">
          <ul className="flex flex-wrap items-center gap-4 backdrop-blur-md p-3 rounded-full bg-opacity-50">
            <li className="group flex items-center gap-2 border-2 border-transparent rounded-full p-3 transition duration-300 ease-in-out cursor-pointer">
              <FaHome className="text-2xl group-hover:text-teal-400 transition duration-300 ease-in-out" />
              <span className="text-base group-hover:text-teal-400 transition-all duration-300 ease-in-out">
                Home
              </span>
              <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </li>
            <li
              onClick={ScrollProjects}
              className="group flex items-center gap-2 border-2 border-transparent rounded-full p-3 hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer relative"
            >
              <FaProjectDiagram className="text-2xl group-hover:text-teal-400 transition duration-300 ease-in-out" />
              <span className="text-base group-hover:text-teal-400 transition-all duration-300 ease-in-out">
                Projects
              </span>
              <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </li>
            <li
              onClick={ScrollAbout}
              className="group flex items-center gap-2 border-2 border-transparent rounded-full p-3 hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer relative"
            >
              <FaUser className="text-2xl group-hover:text-teal-400 transition duration-300 ease-in-out" />
              <span className="text-base group-hover:text-teal-400 transition-all duration-300 ease-in-out">
                About
              </span>
              <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobSidebar;
