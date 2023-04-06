import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

console.log(process.env.REACT_APP_ENVIRONMENT)

if (process.env.REACT_APP_ENVIRONMENT === "local") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
