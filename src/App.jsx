import React, { useEffect, useRef, createContext, useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Mainbackground from "./components/Mainbackground";

const GlobalContext = createContext();
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const mainRef = useRef(null);
  const skillsRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ScrollAbout = () => {
    AboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollContacts = () => {
    ContactsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollProjects = () => {
    ProjectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const sections = gsap.utils.toArray([
      AboutRef.current,
      ProjectsRef.current,
      skillsRef.current,
      ContactsRef.current
    ]);
    sections.forEach((section, i) => {
      const animate = gsap.fromTo(
        section,
        {
          y: 160,
        },
        {
          duration: 1.5,
          autoAlpha: 1,
          y: 0,
        }
      );
      ScrollTrigger.create({
        trigger: section,
        animation: animate,
        scrub: 5,
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{ ScrollAbout, ScrollContacts, ScrollProjects, ScrollSkills }}
    >
      <div className="h-screen p-4 rounded" ref={mainRef}>
        <Mainbackground />
        <About ref={AboutRef} />
        <Projects ref={ProjectsRef} />
        <Skills ref={skillsRef} />
        <Contacts ref={ContactsRef} />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
export { GlobalContext };
