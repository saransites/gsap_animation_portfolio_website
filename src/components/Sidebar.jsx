import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {

  return (
    <div style={{zIndex:145}} className="round follow shadow-[0_0_0_0.5rem_var(--shapebg)] absolute text-white backdrop-blur w-28 p-4 rounded-[1.5rem] flex justify-between items-center">
      <div className="w-full">
        <h1 className="follow tracking-looser mb-2 text-xl font-bold text-center">
          FOLLOW
        </h1>
        <ul className="ul flex flex-col gap-2.5 items-center">
          {[
            {
              href: "https://www.linkedin.com/in/saran-natarajan9584/",
              icon: <FaLinkedin className="text-[2.3rem] group-hover:translate-y-1 transition-all group-hover:bg-[#3a3a3a] duration-300 ease-in-out border border-white rounded-full p-[0.4rem]" />,
            },
            {
              href: "https://www.instagram.com/sansteen7/",
              icon: <FaInstagram className="text-[2.3rem] group-hover:scale-105 transition-all group-hover:bg-[#3a3a3a] duration-300 ease-in-out border border-white rounded-full p-[0.4rem]" />,
            },
            {
              href: "https://github.com/saransites",
              icon: <FaGithub className="text-[2.3rem] group-hover:-translate-y-1 transition-all group-hover:bg-[#3a3a3a] duration-300 ease-in-out border border-white rounded-full p-[0.4rem]" />,
            },
          ].map((item, index) => (
            <li
              key={index}
              className="group transition-transform duration-300 ease-in-out transform"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <span className="extra one"></span>
      <span className="extra two"></span>
    </div>
  );
};

export default Sidebar;
