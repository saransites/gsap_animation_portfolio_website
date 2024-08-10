import React ,{forwardRef}from "react";
import ecommerce from "../assets/Ecommerce page.jpeg";
import portfolio from "../assets/Screenshot 2024-07-31 193602.png";
import chat from '../assets/Screenshot 2024-08-10 150557.png'

const projects = [
  {
    image: ecommerce,
    link: "https://mern-ecommerce-web-theta.vercel.app/",
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

const Projects = forwardRef((props,ref) => {
  return (
      <div ref={ref} className="projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 my-4">
        {projects.map((item, i) => (
          <div
            key={i}
            className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className="p-8 rounded-[40px] w-full h-60 object-cover"
                src={item.image}
                alt={item.title}
              />
            </a>
            <div className="px-5 pb-5">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
              <div className="flex items-center justify-end mt-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
});

export default Projects;
