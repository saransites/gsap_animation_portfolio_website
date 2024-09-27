import { useContext, useEffect, useRef } from "react";
import { FaArrowDown, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { GlobalContext } from "../App";
import MobSidebar from "./MobSidebar";
import { FaArrowRight } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import Header from "./Header";
import video from "../assets/Abstract dark blue background.mp4";

const Mainbackground = () => {
  const { ScrollContacts } = useContext(GlobalContext);
  return (
    <main className="w-full h-[100vh] text-white relative overflow-hidden rounded-[1.7rem_0_1.7rem_0]">
        <video
          loop
          autoPlay
          muted
          className="absolute right-0 w-full h-full object-cover rotate-0"
        >
          <source src={video} type="video/mp4" />
        </video>
      <Header />
      <Sidebar />
      {/* contact us */}
      <div
        style={{ zIndex: 786 }}
        className="group absolute right-0 rounded-bl-[35px] top-0 bg-[var(--shapebg)] pl-2 pb-2 min-w-[11%]"
      >
        <button
          onClick={ScrollContacts}
          className="hidden round contact text-black md:flex justify-between items-center gap-1 transition-all p-1.5 rounded-full px-4"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-500">
            Contact Us
          </span>
          <FaArrowRight className="arrow group-hover:bg-[#831e61] group-hover:text-white transition-ml duration-500 text-4xl bg-[#fff] text-black rounded-full p-2.5" />
        </button>
        <div style={{ zIndex: 789 }} className="md:hidden round menu">
          <MobSidebar />
        </div>
      </div>
      {/* below curve button */}
      <div
        style={{ zIndex: 1 }}
        className="absolute -left-6 rounded-tr-[35px] -bottom-2 bg-[var(--shapebg)] py-[0.55rem] mx-6 pr-2 w-3/2 md:w-[35rem]"
      >
        <a
          href="../../saran_full-stack_resume.pdf"
          download="saraResume.pdf"
          className="group round resume text-black hover:bg-slate-200 transition w-full p-2 rounded-full px-6 flex justify-center items-center gap-2"
        >
          <span>Get My Resume</span>
          <FaArrowDown className="arrow group-hover:bg-[#2a2a2a] bg-[#fff] text-black group-hover:text-white group-hover:ml-2 transition-all duration-500 text-4xl rounded-full p-2.5" />
        </a>
      </div>
    </main>
  );
};

export default Mainbackground;
