import React, { forwardRef,useRef,useEffect } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import mongodb from "../assets/mongo-db.png";
import mysql from "../assets/pngwing.com.png";
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    icon: html,
    level:"Advanced",
    alt: "Html",
  },
  {
    icon: css,
    level:"Advanced",
    alt: "Css",
  },
  {
    icon: javascript,
    level:"Advanced",
    alt: "Javascript",
  },
  {
    icon: react,
    level:"Advanced",
    alt: "react",
  },
  {
    icon: node,
    level:"Intermediate",
    alt: "Nodejs",
  },
  {
    icon: mongodb,
    level:"Intermediate",
    alt: "Mongodb",
  },
  {
    icon: mysql,
    level:"Intermediate",
    alt: "MySQL",
  },
];

const Skills=forwardRef((props, ref) => {
  return (
    <section ref={ref} className="rounded-lg py-12 bg-[#131636f7]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-4 flex flex-col items-center justify-center bg-gray-700 border-gray-700 hover:border-primary transition-colors duration-300"
            >
              <img src={skill.icon} className="w-20 mb-2"/>
              {/* <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3> */}
              <Badge variant="outline" className="bg-primary text-primary-foreground">
                {skill.level}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Skills