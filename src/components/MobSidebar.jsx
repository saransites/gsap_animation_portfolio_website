import React, { useState, useContext } from "react";
import { FaHamburger, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { GlobalContext } from "../App";
import { MdClose } from "react-icons/md";

const MobSidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const { ScrollAbout, ScrollContacts, ScrollProjects, ScrollSkills } =
    useContext(GlobalContext);
  return (
    <>
      <div className="text-center">
        <button
          onClick={() => setIsActive(!isActive)}
          className="text-white active:scale-90 font-medium rounded-lg text-sm px-5 py-2.5"
          type="button"
        >
          <FaHamburger className="text--[#fff] text-2xl" />
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
          <button onClick={() => setIsActive(false)}>
            <MdClose className="text-xl" />
          </button>
        </div>
        <ul className="py-4 overflow-y-auto">
          {[
            {
              icon: <FaHome />,
              text: "Home",
              navigate: "",
            },
            {
              icon: <FaUser />,
              text: "About",
              navigate: ScrollAbout,
            },
            {
              icon: <FaProjectDiagram />,
              text: "Projects",
              navigate: ScrollProjects,
            },
            {
              icon: <FaProjectDiagram />,
              text: "Skills",
              navigate: ScrollSkills,
            },
            {
              icon: <FaHome />,
              text: "Contacts",
              navigate: ScrollContacts,
            },
          ].map(({ icon, text,navigate }, i) => (
            <li key={i} onClick={navigate} className="flex items-center mb-4 bg-[#252534] hover:bg-[#474746] rounded-t-xl gap-4 py-3 transition duration-200 cursor-pointer border-b border-[#959595] px-2">
              <p>{icon}</p>
              <h1>{text}</h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobSidebar;
