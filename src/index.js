import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

function MyInfo() {
  return (
    <div>
      <h1 id="header1">Joseph Schlitz</h1>
      <p>
        I am a software engineer at a small telecommunications company. Soon I
        will be a software engineer 2 at the Space Telescope Science Institute.
      </p>
      <ul>
        <li>Japan</li>
        <li>Germany</li>
        <li>Spain</li>
      </ul>
    </div>
  );
}
ReactDom.render(<MyInfo />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
