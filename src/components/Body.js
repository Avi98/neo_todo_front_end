import React, { useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import { Input, Radio } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

import { TodoContent } from "./";
import { getTodos, updateTodoAction } from "../api/todos";
import { todoSelector } from "../reducer/selector";

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
function BodyComp({ todoReducedr, getTodos, updateTodoAction }) {
  console.log("todoReducedr ", todoReducedr);
  useEffect(() => {
    getTodos();
  }, []);
  function updateTodo(id, todo_id, payload) {
    updateTodoAction(id, todo_id, payload);
  }
  return (
    <Container>
      <TextHeader>
        <h2 className="sectionHeader">Today</h2>
        <span className="subHeader"> {moment().format("MMM Do YY")}</span>
      </TextHeader>
      {todoReducedr.map(obj => (
        <TodoContent
          list={obj.list}
          completed={obj.completed}
          todoId={obj.id}
          todo_id={obj._id}
          updateTodo={updateTodo}
        />
      ))}
      <Input placeholder="e.g. Design meeting at 11am p1 #Meeting" />
      <ContainerRow>
        <Button>Add task</Button>
        <Button basic>Cancle</Button>
      </ContainerRow>
    </Container>
  );
}
const mapState = state => ({
  todoReducedr: todoSelector(state)
});
export const Body = connect(
  mapState,
  { getTodos, updateTodoAction }
)(BodyComp);
