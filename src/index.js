import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import Feed from "./feed";
import Header from "./header";

ReactDOM.render(<Header />, document.querySelector("#header"));
ReactDOM.render(<Feed />, document.querySelector("#feed"));
ReactDOM.render(<Demo />, document.querySelector("#root"));
