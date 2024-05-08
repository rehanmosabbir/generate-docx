import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import InvoiceExportButtons from "./InvoiceExportButtons.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <Demo /> */}
    <InvoiceExportButtons />
    {/* <MyDocument /> */}
    {/* <ExportComponent /> */}
  </React.StrictMode>
);
