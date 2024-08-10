import React, { forwardRef } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import mongodb from "../assets/mongo-db.png";
import mysql from "../assets/pngwing.com.png";

const icons = [
  {
    icon: html,
    alt: "Html",
  },
  {
    icon: css,
    alt: "Css",
  },
  {
    icon: javascript,
    alt: "Javascript",
  },
  {
    icon: "",
    alt: "",
  },
  {
    icon: node,
    alt: "Nodejs",
  },
  {
    icon: mongodb,
    alt: "Mongodb",
  },
  {
    icon: mysql,
    alt: "MySQL",
  },
];

const Skills = forwardRef((props,ref) => {
  return (
    <div className="skills mb-12 relative" ref={ref}>
      <ul className="max-w-full grid grid-cols-2 lg:grid-cols-7 place-items-center gap-4">
        {icons.map((icon, i) => (
          <li
            key={i}
            style={{
              backgroundImage: `url(${icon.icon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-24 h-24 md:w-32 md:h-32"
          ></li>
        ))}
      </ul>
    </div>
  );
});

export default Skills;
