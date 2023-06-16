import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Chartsdata from "./Chartsdata.jsx";
import Thirdchart from "./Thirdchart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <h1 className="head1"> Student Data according to Name, Gender, Age</h1>
    </div>
    <div className="div1">
      <App />
      <Chartsdata />
      <Thirdchart />
    </div>
  </React.StrictMode>
);
