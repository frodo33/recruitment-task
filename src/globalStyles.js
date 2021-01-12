import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components/macro';

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
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        background: #2E343A;
    } 
`;

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 10px;
`;