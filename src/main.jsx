import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EccContextProvider } from "./context/EccomerceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EccContextProvider>
      <App />
    </EccContextProvider>
  </React.StrictMode>
);
