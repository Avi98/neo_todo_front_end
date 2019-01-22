import React from "react";
import moment from "moment";
import styled from "styled-components";
import { Input, Radio } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

import { TodoContent } from "./";

const Container = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  .ui.input {
    width: 100%;
    padding-top: 1rem;
  }
`;

const ContainerRow = styled(Container)`
  flex-direction: row;
  justify-content: end;
`;
const TextHeader = styled(ContainerRow)`
  margin: 0 0 0 0;
  padding: 30px 30px 6px 30px;
  .sectionHeader {
    font-size: 20px;
    font-weight: normal;
  }
  .subHeader {
    color: #808080;
    margin-left: 6px;
    font-size: 11px;

    font-weight: normal;
  }
`;
function BodyComp() {
  return (
    <Container>
      <TextHeader>
        <h2 className="sectionHeader">Today</h2>
        <span className="subHeader"> {moment().format("MMM Do YY")}</span>
      </TextHeader>
      <TodoContent />
      <Input placeholder="e.g. Design meeting at 11am p1 #Meeting" />
      <ContainerRow>
        <Button>Add task</Button>
        <Button basic>Cancle</Button>
      </ContainerRow>
    </Container>
  );
}

export const Body = connect(
  mapState,
  { getAllTodo }
);
