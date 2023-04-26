import styled from "styled-components";

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    td, th {
  border: 1px solid black;
  text-align: left;
  padding: 8px;
}

th {
  font-weight: bold;
  background-color: lightgray;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

`;
export const DivTable = styled.div`
  max-height: 400px;

  overflow: auto;
`;