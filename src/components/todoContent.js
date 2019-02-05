import React, { useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  padding: 0.5rem;
  border-bottom: 1px solid grey;
  width: 100%;
  .tRow .checkbox {
    width: 2rem;
  }
`;
const Text = styled.div`
  text-decoration: ${p => (p.completed ? "line-through" : "solid")};
`;
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
    <Table>
      <tbody className="tBody">
        <tr className="tRow">
          <td className="checkbox" style={{ color: "yellow" }}>
            <input type="checkbox" checked={check} onChange={onChangeCheck} />
          </td>
          <td className="todoclass">
            <Text completed={completed}>{list}</Text>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
