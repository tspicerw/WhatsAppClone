import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@material-ui/icons";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <AttachFile></AttachFile>
          </IconButton>
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
          <IconButton>
            <SearchOutlined></SearchOutlined>
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Steffie</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
            {/* {new Date(message.timestamp?.toDate()).toUTCString()} */}
          </span>
        </p>
        <p className="chat__reciever chat__message">
          <span className="chat__name">Terrence</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toUTCString()}
            {/* {new Date(message.timestamp?.toDate()).toUTCString()} */}
          </span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            className="chat__footerFormText"
            type="text"
            placeholder="Type a message"
          ></input>
          <button className="chat__footerFormButton" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
