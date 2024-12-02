import React from "react";
import ReactDM from "react-dom/client";
import App from "./app";

const root = ReactDM.createRoot(document.getElementById("root")); 
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);