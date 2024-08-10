import React, { useEffect, useRef, createContext, useState } from "react";
import MainContent from "./components/MainContent";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import react from "./assets/react.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const GlobalContext = createContext();

gsap.registerPlugin(ScrollTrigger);

const useGSAPAnimation = (mainRef, reactRef, skillsRef, ContactsRef) => {
  useEffect(() => {
    let tl;

    const updateAnimation = () => {
      const adjustValue =
        window.innerWidth >= 1024
          ? 355
          : window.innerWidth >= 768
          ? -275
          : window.innerWidth >= 480
          ? -35
          : window.innerWidth >= 391
          ? 185
          : -245;

      const skillsPosition =
        ContactsRef.current.getBoundingClientRect().top +
        window.scrollY -
        adjustValue;

      const initialScale = window.innerWidth >= 768 ? 0.635 : 0.415;
      const toScale = window.innerWidth >= 768 ? 0.25 : 0.215;

      // Kill any existing timelines to avoid conflicts
      if (tl) {
        tl.kill();
      }

      // First timeline
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "50% 90%",
          end: `${skillsPosition}px`,
          scrub: 1,
          markers: false, // Set to true if you need debugging
          invalidateOnRefresh: true,
        },
      });

      tl.from(reactRef.current, {
        scale: initialScale,
      }).to(reactRef.current, {
        top: `${skillsPosition}px`,
        scale: toScale,
        ease: "power2.inOut",
        duration: 3,
      });
    };

    const debounceUpdate = () => {
      clearTimeout(window.updateTimeout);
      window.updateTimeout = setTimeout(updateAnimation, 200);
    };

    updateAnimation();
    window.addEventListener("resize", debounceUpdate);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", debounceUpdate);
      ScrollTrigger.killAll();
    };
  }, [mainRef, reactRef, skillsRef, ContactsRef]);
};

const App = () => {
  const mainRef = useRef(null);
  const reactRef = useRef(null);
  const skillsRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactsRef = useRef(null);
  const ProjectsRef = useRef(null);

  useGSAPAnimation(mainRef, reactRef, skillsRef,ContactsRef);

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
    ]);
    sections.forEach((section, i) => {
      const animate = gsap.fromTo(
        section,
        {
          autoAlpha: 0.5,
          y: 100,
          x: -100,
          rotate: 5,
        },
        {
          duration: 1.5,
          autoAlpha: 1,
          x: 0,
          y: 0,
          rotate: 0,
        }
      );
      ScrollTrigger.create({
        trigger: section,
        animation: animate,
        scrub: true,
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
        <img
          style={{
            zIndex: 6,
            // transition:"cub"
          }}
          ref={reactRef}
          src={react}
          alt="react.png"
          className={`absolute left-[6rem] md:left-[20rem] lg:left-[27.7%] top-[1rem] md:top-0`}
        />
        <MainContent />
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
