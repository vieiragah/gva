import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: #0f0d0d;
  color: white;
  font-weight: 600;
  width: 70px;
  height: 35px;
  margin: 5px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  ${(props) =>
    props.$redButton &&
    css`
      background-color: red;
    `}
  
  ${props => props.$greenButton && css`
    background-color: #4681f4;
    
  `}

  ${(props) =>
    props.$dinamicButton &&
    css`
      background-color: ${(props) => (props.disabled ? "red" : "#4681f4")};
      cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

      &:hover {
        background-color: ${(props) => (props.disabled ? "red" : "#2967e3")};
      }
    `}
`;

