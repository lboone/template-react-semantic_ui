import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layouts/App";
import * as serviceWorker from "./serviceWorker";

/*
 * This will allow for Hot Module Reload
 * If errors don't go away, always refresh the page first to ensure you clear the bug.
 * 
 */

const rootEl = document.getElementById("root");
let render = () => {
  ReactDOM.render(<App />, rootEl);
};

if (module.hot) {
  module.hot.accept("./app/layouts/App", () => {
    setTimeout(render);
  });
}

render();

serviceWorker.unregister();
