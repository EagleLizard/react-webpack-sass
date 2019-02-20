
import React from "react";
import ReactDOM from "react-dom";

import './main.scss';

const Index = () => {
  return (
    <div className="react-app">
      Hello World!
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("app-root"));
