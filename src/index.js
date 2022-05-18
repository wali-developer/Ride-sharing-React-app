import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes/Routes";
import "./style/index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
