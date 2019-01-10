import React from "react";
import styled from "styled-components";
import { Sidebar, Menu } from "semantic-ui-react";

const SideMenu = styled.div`
  .ui.inverted.menu {
    z-index: -1;
    background-color: #ffff;
  }
  @media ${p => p.theme.latptop} {
    visibility: visible;
  }
`;
function SideBar({ showSideBar, toggleSideBar, fixSide }) {
  console.log("fixSide", fixSide);
  return (
    <SideMenu>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        width="very wide"
        visible={fixSide || showSideBar}
        onHide={toggleSideBar}
      >
        hi
      </Sidebar>
    </SideMenu>
  );
}
export { SideBar };
