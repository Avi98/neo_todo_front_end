import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 90%;
  .tRow .checkbox {
    width: 2rem;
  }
`;
export function TodoContent() {
  return (
    <Table>
      <tbody className="tBody">
        <tr className="tRow">
          <td className="checkbox" style={{ color: "yellow" }}>
            <input type="checkbox" />
          </td>
          <td className="todoclass">
            <div>sample</div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
