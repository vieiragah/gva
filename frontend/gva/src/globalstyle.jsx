import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
    a:visited {
        color: #fff;
    }
    body, html {
        height: 100%
    }
    button {
        margin: 5px;
        height: 35px;
        width: 90px;
        border: none;
        background-color: #00E304;
        color: #000;
        cursor: pointer;
        border-radius: 15px;
    }

`
export default globalStyle