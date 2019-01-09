import React from "react";
import styled from "styled-components";
import { Sidebar, Menu } from "semantic-ui-react";

const SideMenu = styled.div`
  .ui.inverted.menu {
    background-color: #ffff;
  }
`;
function SideBar({ showSideBar }) {
  return (
    <SideMenu>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        //   onHide={this.handleSidebarHide}
        vertical
        visible={showSideBar}
        width="thin"
      >
        hi
      </Sidebar>
    </SideMenu>
  );
}
export { SideBar };
