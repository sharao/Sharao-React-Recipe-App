import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Foods from "./Recipe/Foods";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<Foods />, rootElement);
