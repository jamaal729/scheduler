import React from "react";
import ReactDOM from "react-dom";

import "index.scss";

import Application from "components/Application";


import consolePrint from './util';
let printItem = "hello";
consolePrint({ printItem });

ReactDOM.render(<Application />, document.getElementById("root"));
