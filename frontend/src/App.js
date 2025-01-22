import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import ChatContainer from "./Components/ChatContainer";
import "./App.css";

const App = () => {
  const [navWidth, setNavWidth] = useState(200); // Initial navbar width

  return (
    <div className="app">
      <NavBar width={navWidth} setWidth={setNavWidth} />
      <ChatContainer />
    </div>
  );
};

export default App;