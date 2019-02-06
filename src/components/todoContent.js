import React, { useState } from "react";
import { TodoContentEdit } from "./";
import { TodoDisplayContent } from "./";
export function TodoContent(props) {
  const [check, setCheck] = useState(props.completed);
  const { list, completed, updateTodo, todoId, todo_id } = props;
  function onChangeCheck() {
    setCheck(check => {
      updateTodo(todoId, todo_id, { completed: !check });
      return !check;
    });
    console.log("old check", check);
  }
  return (
    <>
      <TodoDisplayContent
        onChangeCheck={onChangeCheck}
        check={check}
        completed={completed}
        list={list}
      />
      <TodoContentEdit />
    </>
  );
}
