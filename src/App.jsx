import React, { useEffect, useRef, createContext, useState } from "react";
import MainContent from "./components/MainContent";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import react from "./assets/react.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

const GlobalContext = createContext();

gsap.registerPlugin(ScrollTrigger);

const useGSAPAnimation = (mainRef, reactRef, skillsRef) => {
  useEffect(() => {
    let locoScroll = null;

    const initializeScroll = () => {
      locoScroll = new LocomotiveScroll({
        el: mainRef.current,
        smooth: false,
        smartphone: {
          smooth: false,
        },
        tablet: {
          smooth: true,
        },
      });

      locoScroll.on('scroll', () => {
        ScrollTrigger.update(); // Ensure ScrollTrigger updates on scroll
      });

      ScrollTrigger.scrollerProxy(mainRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: mainRef.current.style.transform ? 'transform' : 'fixed',
      });

      ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
      ScrollTrigger.refresh();
    };

    const updateAnimation = () => {
      const adjustValue =
        window.innerWidth >= 1024
          ? 285
          : window.innerWidth >= 768
          ? -275
          : -245;

      const skillsPosition =
        skillsRef.current.getBoundingClientRect().top +
        window.scrollY -
        adjustValue;

      const initialScale = window.innerWidth >= 768 ? 0.6 : 0.5;

      gsap.fromTo(
        reactRef.current,
        { scale: initialScale, x: -50 },
        {
          x: 0,
          rotate: 360,
          scale: window.innerWidth >= 768 ? 0.235 : 0.3,
          scrollTrigger: {
            trigger: reactRef.current,
            scroller: mainRef.current,
            start: 'top 0',
            end: `${skillsPosition}px`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        }
      );
    };

    initializeScroll();
    updateAnimation();

    window.addEventListener('resize', () => {
      updateAnimation();
      locoScroll.update();
    });

    return () => {
      if (locoScroll) locoScroll.destroy();
      ScrollTrigger.killAll();
      window.removeEventListener('resize', updateAnimation);
    };
  }, [mainRef, reactRef, skillsRef]);
};


const App = () => {
  const mainRef = useRef(null);
  const reactRef = useRef(null);
  const skillsRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactsRef = useRef(null);
  const ProjectsRef = useRef(null);

  useGSAPAnimation(mainRef, reactRef, skillsRef);

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
          }}
          ref={reactRef}
          src={react}
          alt="react.png"
          className={`reactImg mix-blend-difference absolute left-[6rem] md:left-[20rem] lg:left-[27.7%] top-[1rem] md:top-0`}
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
