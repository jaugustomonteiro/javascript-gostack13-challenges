import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #2B2C2C;
        color: #FFFFFF;
        -webkit-font-smoothing: antialiased;
    }

    body, button, input {
        font-family: 'Poppins', sans-serif;
        font-size: 16;
        border: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
    }

    button: {
        cursor: pointer;
    }


`;
