import React from "react";
import styled from "styled-components";
const Table = styled.table`
  padding: 0.5rem;
  border-bottom: 1px solid #e1d7d7;
  width: 100%;
  cursor: pointer;
  .tRow .checkbox {
    width: 2rem;
  }
`;
const Text = styled.div`
  text-decoration: ${p => (p.completed ? "line-through" : "solid")};
`;
export function TodoDisplayContent(props) {
  const { onChangeCheck, check, completed, list } = props;
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
