import { createContext, useState } from "react";
import styled from "styled-components";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

  const toggoleTheme = () => {
    setTheme(theme == "light" && <ThemeDark/>);
  };
  return (
    <ThemeContext.Provider value={{theme, toggoleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ThemeDark = styled.button`
  background-color: ${(props) => props.theme == 'light' ? '#fff' : '#333'};
  color: #fff;
`;





// import React, { useContext } from "react";
// import styled, { ThemeProvider } from "styled-components";
// import { ThemeContext } from "../store/useDarkTheme";

// export const ButtonToggle = styled.div`
//   background-color: ${(props) =>
//     props.theme.mode === "light" ? "white" : "black"};
//   color: ${(props) => (props.theme.mode === "light" ? "black" : "white")};
//   border: 2px solid
//     ${(props) => (props.theme.mode === "light" ? "black" : "white")};
//   border-radius: 4px;
//   padding: 8px;
//   font-size: 16px;
//   cursor: pointer;
// `;

// export const Button = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   return (
//     <ThemeProvider theme={{mode: theme}}>
//         <div>
//             <ButtonToggle onClick={toggleTheme}>Trocar de Tema</ButtonToggle>
//         </div>
//     </ThemeProvider>
//   )
// };
