import React from "react";
import Sidebar from "./Sidebar";
import Mainbackground from "./Mainbackground";

const MainContent = () => {
  return (
    <main className="h-full grid grid-cols-1 sm:grid-cols-[110px_2fr]">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="gradient-bg">
        <Mainbackground />
      </div>
    </main>
  );
};

export default MainContent;
