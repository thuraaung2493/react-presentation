import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import TodoApp from "./components/TodoApp";
// import Clock from "./components/Clock";
// import LoginControl from "./components/LoginControl";
// import Page from "./components/Page";
import Reservation from "./components/Reservation";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Reservation />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
