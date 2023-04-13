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


    table {
        border-collapse: collapse;
        width: 100%;
      }
      td, th {
        border: 1px solid black;
        text-align: left;
        padding: 8px;
      }
      th {
        font-weight: bold;
        background-color: lightgray;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

`
export default globalStyle