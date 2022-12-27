import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import CreateProvider from "./component/context/ContextProvider"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CreateProvider>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  </CreateProvider>
);

// base url: https://mernonline2.herokuapp.com/
