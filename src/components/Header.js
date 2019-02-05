import React from "react";
import styled from "styled-components";
import { Menu } from "semantic-ui-react";

const TopBar = styled.div`
  display: flex;
  height: 2.4rem;
  background-color: #db4c3f;
  padding: 0.5rem 3rem 0 3rem;
  border-bottom: solid 1px #ca2100;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  .menu_icon {
    display: none;
  }
  @media ${p => p.theme.mobileS} {
    .light_icon {
      display: block;
    }
    .menu_icon {
      display: none;
    }
  }
  @media ${p => p.theme.laptop} {
    .menu_icon {
      display: block;
    }
    .light_icon {
      display: none;
    }
  }
`;
export function Header({ toggleSideBar }) {
  return (
    <TopBar>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        data-svgs-path="sm1/todoist_logo.svg"
        className="light_icon"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M21 0H3a3 3 0 0 0-3 3v3.7L4 9c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7L5.1 11c-.4.3-.7.3-1.2 0L0 8.8v2l4 2.4c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.1.1.5 0 .6l-9.7 5.6c-.4.2-.7.3-1.2 0A857 857 0 0 1 0 13v2l4 2.3c.4.2.8.2 1.1 0l8-4.6a.8.8 0 0 1 .8 0l1 .5c.2.2.1.6 0 .7l-9.7 5.5c-.4.3-.7.3-1.2 0a857 857 0 0 1-4-2.3v4A3 3 0 0 0 3 24h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3"
        />
      </svg>
      <svg
        onClick={toggleSideBar}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        data-svgs-path="sm1/menu.svg"
        className="menu_icon"
      >
        <path
          fillRule="evenodd"
          fill="#fff"
          d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"
        />
      </svg>
      {/* <div onClick={toggleSideBar}>hamicon</div> */}
    </TopBar>
  );
}
