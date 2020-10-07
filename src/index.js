import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

const errorAmount = 5;

ReactDom.render(<App errorAmount={errorAmount}/>, document.querySelector(`#root`));
