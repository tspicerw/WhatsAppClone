import React from "react";
import "./SideBarChat.css";
import { Avatar } from "@material-ui/core";

const Chats = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>last message</p>
      </div>
    </div>
  );
};

export default Chats;
