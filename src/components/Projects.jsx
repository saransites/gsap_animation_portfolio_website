import React, { forwardRef } from "react";
import ecommerce from "../assets/Ecommerce page.png";
import portfolio from "../assets/Screenshot 2024-07-31 193602.png";
import chat from "../assets/chat_app.png";
import "./Projects.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const projects = [
  {
    image: ecommerce,
    link: "https://mern-ecommerce-website-nu.vercel.app/",
    title: "MERN E-Commerce Website",
    description: "This is my ecommerce app",
  },
  {
    image: chat,
    link: "https://mern-chat-application-seven.vercel.app/",
    title: "Chat_Application",
    description: "This is a mern stack chat application using websocket",
  },
  {
    image: portfolio,
    link: "https://react-portfolio-website-woad-omega.vercel.app/",
    title: "React Portfolio",
    description: "This is my portfolio",
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 my-4"
    >
      {projects.map((item, i) => (
        <div className="card p-1 group">
          <div className="card-inner">
            <div className="box">
              <div className="imgBox">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="icon bg-[var(--shape-bg)]">
                <a href={item.link} className="iconBox">
                  {" "}
                  <span className="font-bold">
                    <MdOutlineArrowOutward className="text-lg sm:text-xl md:text-2xl group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-150 transition-transform duration-500"/>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="content text-white">
            <h3 className="font-semibold tracking-wide">{item.title}</h3>
            <p className="text-[#e9e8e8]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Projects;
