import React, { useState } from "react";
import { Header, SideBar } from "./components";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const [showSideBar, setShowSide] = useState(false);
  function toggleSideBar() {
    setShowSide(prev => !prev);
  }
  return (
    <>
      <Header toggleSideBar={toggleSideBar} />
      <SideBar showSideBar={showSideBar} />
    </>
  );
}

export default App;
