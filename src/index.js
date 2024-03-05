import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

document.title = "Canárias";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <html lang="pt">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Canárias</title>
    </head>
    <App />
  </html>
);
