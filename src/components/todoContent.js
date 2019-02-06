import React, { useState } from "react";
import { TodoContentEdit } from "./";
import { TodoDisplayContent } from "./";
export function TodoContent(props) {
  const [check, setCheck] = useState(props.completed);
  const [editMode, editModeSet] = useState(false);

  const { list, completed, updateTodo, todoId, todo_id } = props;
  function onChangeCheck() {
    setCheck(check => {
      updateTodo(todoId, todo_id, { completed: !check });
      return !check;
    });
  }
  function setEditMode() {
    editModeSet(editMode => !editMode);
  }
  return (
    <>
      {!editMode ? (
        <TodoDisplayContent
          onChangeCheck={onChangeCheck}
          check={check}
          completed={completed}
          list={list}
          setEditMode={setEditMode}
        />
      ) : (
        <TodoContentEdit setEditMode={setEditMode} list={list} />
      )}
    </>
  );
}
