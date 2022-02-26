import { createGlobalStyle } from "styled-components";
import { CustomTheme } from "../types/theme-types";

export const lightTheme = {
  theme: "light",
  body: "#E5E5E5",
  text: "black",
  background: "#363537",
  hovered: "lightgray"
};

export const darkTheme = {
  theme: "dark",
  body: "#242424",
  text: "gold",
  background: "#999",
  hovered: "dimgray"
};

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  font-family: Montserrat, Tahoma, Helvetica, Arial, Roboto, sans-serif;
  
  color: ${({ theme }: CustomTheme) => theme.text};
  
  --default-radius: 15px;
}  

html {
  height: 100%;
  width: 100%;
}

body {
  background: ${({ theme }: CustomTheme) => theme.body};
  min-width: 270px;
  transition: all 0.50s linear;
  height: 100%;
  width: 100%;
}

#__next{
  height: 100%;
  width: 100%;
}

svg{
  height: 100%;
  fill: ${({ theme }: CustomTheme) => theme.text};
}

input:focus {
  border: 1px solid red;
}

a{
  text-decoration: none;
}
::-webkit-scrollbar {
  width: 5px;
  cursor: pointer;
}

::-webkit-scrollbar-track {
  background: inherit;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::-webkit-scrollbar-thumb {
  background: darkgray;
  border-radius: 15px;
}
`;
