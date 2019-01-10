import React from "react";
import styled from "styled-components";
import { Sidebar, Menu } from "semantic-ui-react";

const SideMenu = styled.div`
  .ui.inverted.menu {
    z-index: -1;
    background-color: #ffff;
  }
`;
function SideBar({ showSideBar, toggleSideBar }) {
  return (
    <SideMenu>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        width="very wide"
        visible={showSideBar}
        onHide={toggleSideBar}
      >
        hi
      </Sidebar>
    </SideMenu>
  );
}
export { SideBar };
