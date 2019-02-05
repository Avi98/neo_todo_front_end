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
export function TodoContent(props) {
  const [check, setCheck] = useState(props.completed);
  const { list, completed, updateTodo, todoId, todo_id } = props;
  function onChangeCheck() {
    setCheck(check => !check);
    updateTodo(todoId, todo_id, { completed: check });
  }
  return (
    <Table>
      <tbody className="tBody">
        <tr className="tRow">
          <td className="checkbox" style={{ color: "yellow" }}>
            <input type="checkbox" checked={check} onChange={onChangeCheck} />
          </td>
          <td className="todoclass">
            <div>{list}</div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
