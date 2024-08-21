import React from "react";
import Sidebar from "./Sidebar";
import Mainbackground from "./Mainbackground";

const MainContent = () => {
  return (
    <main className="h-full">
      <div className="gradient-bg">
        <Mainbackground />
      </div>
    </main>
  );
};

export default MainContent;
