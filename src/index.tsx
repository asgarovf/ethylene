import React from "react";
import ReactDOM from "react-dom";
import { EthyleneProvider } from "./utils/EthyleneProvider";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <React.StrictMode>
    <EthyleneProvider>
      <App />
    </EthyleneProvider>
  </React.StrictMode>
);
