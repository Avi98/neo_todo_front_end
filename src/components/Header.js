import React from "react";
import styled from "styled-components";
import { Menu } from "semantic-ui-react";

const TopBar = styled(Menu)`
  display: flex;
  height: 2.4rem;
  background-color: #db4c3f;
  padding: 0.5rem 3rem 0 3rem;
  border-bottom: solid 1px #ca2100;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
`;
export function Header() {
  return <TopBar>hamicon</TopBar>;
}
