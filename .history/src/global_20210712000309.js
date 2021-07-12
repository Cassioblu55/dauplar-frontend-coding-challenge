import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    width: 100%;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  `;
