import { createGlobalStyle } from "styled-components";
import { CustomTheme } from "../types/theme-types";

export const lightTheme = {
  body: "#FFF",
  text: "black",
  background: "#363537",
};

export const darkTheme = {
  body: "#363537",
  text: "gold",
  background: "#999",
};

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  fill: ${({ theme }: CustomTheme) => theme.text};
  height: 100%;

  --default-radius: 15px;
}  

body {
    background: ${({ theme }: CustomTheme) => theme.body};
    color: ${({ theme }: CustomTheme) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    min-width: 350px;
  }

svg{
  height: 100%;
  width: 100%;
}
`;
