import React, { useState, useEffect } from "react";
import { Header, SideBar, Body } from "./components";
import styled, { withTheme } from "styled-components";
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
      {/* TODO style layout in responsive manner
      
      <SideBar
        showSideBar={showSideBar}
        toggleSideBar={!fixSide ? toggleSideBar : null}
        fixSide={fixSide}
      /> */}
      <Body />
    </>
  );
}

export default withTheme(App);
