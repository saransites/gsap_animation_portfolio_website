import React, { useEffect, useRef, createContext, useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import react from "./assets/react.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Mainbackground from "./components/Mainbackground";

const GlobalContext = createContext();

gsap.registerPlugin(ScrollTrigger);

const useGSAPAnimation = (mainRef, reactRef, skillsRef, ContactsRef) => {
  useEffect(() => {
    let mm = gsap.matchMedia(); // Initialize matchMedia

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isMobile: "(min-width: 480px) and (max-width: 767px)",
        isSmallMobile: "(min-width: 391px) and (max-width: 479px)",
        isVerySmallMobile: "(max-width: 390px)",
      },
      (context) => {
        let { isDesktop, isTablet, isMobile, isSmallMobile, isVerySmallMobile } =
          context.conditions;

        let adjustValue;
        let initialScale;
        let toScale;

        // Determine adjustValue, initialScale, and toScale based on screen size
        if (isDesktop) {
          adjustValue = 285;
          initialScale = 0.635;
          toScale = 0.25;
        } else if (isTablet) {
          adjustValue = -275;
          initialScale = 0.635;
          toScale = 0.25;
        } else if (isMobile) {
          adjustValue = 198;
          initialScale = 0.415;
          toScale = 0.2;
        } else if (isSmallMobile) {
          adjustValue = 165;
          initialScale = 0.415;
          toScale = 0.215;
        } else if (isVerySmallMobile) {
          adjustValue = 165;
          initialScale = 0.415;
          toScale = 0.215;
        }

        const skillsPosition =
          ContactsRef.current.getBoundingClientRect().top +
          window.scrollY -
          adjustValue;

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainRef.current,
            start: "50% 50%",
            end: `${skillsPosition}px`,
            scrub: 1,
            markers: false,
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

        return () => {
          tl.kill();
        };
      }
    );

    const debounceUpdate = () => {
      clearTimeout(window.updateTimeout);
      window.updateTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    window.addEventListener("resize", debounceUpdate);

    return () => {
      window.removeEventListener("resize", debounceUpdate);
      mm.revert(); // Revert matchMedia settings on cleanup
    };
  }, [mainRef, reactRef, skillsRef, ContactsRef]);
}
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
      ContactsRef.current
    ]);
    sections.forEach((section, i) => {
      const animate = gsap.fromTo(
        section,
        {
          autoAlpha: 0.7,
          y: 90,
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
        scrub: 3,
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
            zIndex:2
          }}
          ref={reactRef}
          src={react}
          alt="react.png"
          className={`absolute left-[6rem] sm:left-[6.6rem] md:left-[20rem] lg:left-[27.7%] top-[1rem] md:top-0`}
        />
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
