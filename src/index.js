import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <h1>React Weather App</h1>
    </div>
    <App />
    <footer className="App">
      <p>
        <a
          href="https://github.com/nmariahpaul/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced code
        </a>
        , by Mariah Paul
      </p>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
