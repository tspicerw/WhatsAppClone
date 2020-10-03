import React from "react";
import "./SideBar.css";
import SideBarHeader from "./SideBarHeader";
import SideBarChat from "./SideBarChat";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarHeader />
      <div className="sidebar__chats">
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
};

export default SideBar;
