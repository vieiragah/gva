import styled, { css } from "styled-components";

export const colors = {
  primary: "#816c6c",
  secondary: "#5b5697",
  transparent: "transparent",
  empty: ""
}

export const Ul = styled.ul`
  max-width: 500px;
  display: flex;
  flex-direction: ${(props) => (props.direction ? "column" : "row")};
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
`;

export const Li = styled.li`
  list-style-type: none;
  padding: 10px;
  border-radius: 10px;
  ${props => props.primary && css`
    background-color: #fff;
    color: blue;
  `}
  background-color: ${(props)=> (props.secundary ? colors.secondary : colors.empty)};
`;
