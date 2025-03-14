import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const helmetConfig = {};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <HelmetProvider context={helmetConfig}>
        <App />
      </HelmetProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
