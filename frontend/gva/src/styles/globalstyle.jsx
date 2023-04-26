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
    body {
        height: 100vh;

    }

    table {
        border-collapse: collapse;
        max-height: 500px;
        overflow: auto;

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