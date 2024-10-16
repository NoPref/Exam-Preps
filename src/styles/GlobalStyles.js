import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --main-bg-color: #000100;
    --main-text-color: #dcd1c0;
    --accent1-color: #877dc4;
    --accent2-color: #ef2020;
    --nav-bg-color: #0c0b0c;
    --hover-bg-color: #333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
