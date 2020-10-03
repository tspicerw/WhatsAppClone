import React, { useEffect } from "react";
import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import Pusher from "pusher-js";

function App() {
  useEffect(() => {
    const pusher = new Pusher("23ad225c6d7b60a8e210", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      alert(JSON.stringify(data));
    });
    // return () => {};
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        <SideBar></SideBar>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default App;
