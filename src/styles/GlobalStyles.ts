import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;
        overflow: hidden;
        height: 100%;
        width: 100%;
        @media (max-width: 650px) {
    overflow-y: auto
  }
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui , sans-serif;
    }
    html {
        background-color: white;
    }
    :root {
        --cian: #5CC4BD;
        --blue500: #013459;
        --blue700: #002846;
        --blue900: #07273f

    }
`;
