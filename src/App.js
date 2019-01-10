import React, { useState, useEffect } from "react";
import { Header, SideBar } from "./components";
import { withTheme } from "styled-components";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const [showSideBar, setShowSide] = useState(false);
  const [fixSide, setfixSide] = useState(false);
  const handleResize = () => {
    if (window.innerWidth > 700) {
      setfixSide(true);
    } else {
      setfixSide(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth > 700) {
      setfixSide(true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function toggleSideBar() {
    setShowSide(prev => !prev);
  }
  return (
    <>
      <Header toggleSideBar={toggleSideBar} />
      <SideBar
        showSideBar={showSideBar}
        toggleSideBar={!fixSide ? toggleSideBar : null}
        fixSide={fixSide}
      />
    </>
  );
}

export default withTheme(App);
