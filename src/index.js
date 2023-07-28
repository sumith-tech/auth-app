import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./index.css";
import App from "./App";
import AuthToken from "./Store/AuthToken";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthToken>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthToken>
);
