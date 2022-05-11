import React from "react";
import ReactDOM from "react-dom";
import { EthyleneProvider } from "./utils/EthyleneProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <EthyleneProvider>
      <App />
    </EthyleneProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
