import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './assets/main.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "font-awesome/css/font-awesome.css";
import logger from "./services/logService";

logger.init();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
