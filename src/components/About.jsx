import React, { forwardRef } from "react";
import hero from "../assets/portrait-boy-with-brown-hair-brown-eyes.png";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="animate text-gray-600 body-font mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 py-2 place-items-center">
        <div>
          <img
            className="max-w-[15rem] object-cover object-center"
            alt="hero"
            src={hero}
          ></img>
        </div>
        <div className="flex flex-col md:text-left items-center">
          <h1 className="font-semibold tracking-wider sm:text-3xl text-3xl mb-4 text-[var(--heading)]">
            I'm a MERN Stack Developer
          </h1>
          <p className="text-sm text-justify text-[var(--content)] leading-2 md:leading-6">
            Hello! I am a passionate MERN stack developer with a strong
            background in creating dynamic and responsive web applications. My
            expertise lies in developing full-stack applications using MongoDB,
            Express.js, React,MySQL and Node.js. I thrive in collaborative
            environments and enjoy working closely with teams to achieve project
            goals. I am constantly learning and staying updated with the latest
            technologies to ensure that my work remains cutting-edge and
            effective. When I'm not coding, I enjoy exploring new technologies,
            participating in coding challenges, and contributing to open-source
            projects. I am excited about the opportunities to apply my skills
            and contribute to impactful projects in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
