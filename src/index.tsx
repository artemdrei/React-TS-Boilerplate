import React from "react";
import { render } from "react-dom";
import styles from "./css/typo.scss";

const App = () => (
  <div>
    <h1>Webpack 2020</h1>
    <div className="logo"></div>
  </div>
);

render(<App />, document.getElementById("app"));
