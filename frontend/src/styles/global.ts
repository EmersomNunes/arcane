import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: black;
  }

  body, input, textarea, button {
    font: 1.6rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
  }

  button:hover {
    filter: opacity(80%);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  h1, h2 {
    font-family: "Montserrat", sans-serif;
  }
`;