import { createGlobalStyle } from "styled-components";
import { CustomTheme } from "../types/theme-types";

export const lightTheme = {
  theme: "light",
  body: "#E5E5E5",
  text: "black",
  background: "#363537",
};

export const darkTheme = {
  theme: "dark",
  body: "#242424",
  text: "gold",
  background: "#999",
};

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  font-family: Montserrat, Tahoma, Helvetica, Arial, Roboto, sans-serif;
  
  color: ${({ theme }: CustomTheme) => theme.text};
  fill: ${({ theme }: CustomTheme) => theme.text};
  
  
  --default-radius: 15px;
}  

html {
  height: 100%;
}

body {
  background: ${({ theme }: CustomTheme) => theme.body};
  min-width: 270px;
  transition: all 0.50s linear;
  height: 100%;
}

#__next{
  height: 100%;
}

svg{
  height: 100%;
}

input:focus {
  border: 1px solid red;
}
`;
