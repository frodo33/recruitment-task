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

export const Border = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    pointer-events: none;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 2%;
        height: 100%;
        background: #8276f6;
    }
`;