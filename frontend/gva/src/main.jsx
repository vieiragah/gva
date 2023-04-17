import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalstyle";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={routes} />
  </React.StrictMode>
);
